import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { MqttService } from '../mqtt/mqtt.service';
import { CreateStaySessionDto } from './dto/create-stay-session.dto';

/**
 * StaySessionsService — lógica de negócio central das estadias.
 *
 * Fluxo principal:
 *   create()  → cria sessão com status SCHEDULED
 *   start()   → SCHEDULED → ACTIVE, marca startedAt, muda property status → OCCUPIED
 *   end()     → ACTIVE → FINISHED, calcula consumo e custo extra, muda property → AVAILABLE
 */
@Injectable()
export class StaySessionsService {
  private readonly logger = new Logger(StaySessionsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mqtt: MqttService,
  ) {}

  /**
   * Cron job rodando a cada minuto.
   * Procura sessões ativas cujo checkoutAt já passou.
   * Encerra passando o checkoutAt como forcedEndedAt.
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async handleAutoCheckout() {
    const expiredSessions = await this.prisma.staySession.findMany({
      where: {
        status: 'ACTIVE',
        checkoutAt: { lte: new Date() },
      },
    });

    if (expiredSessions.length > 0) {
      this.logger.log(`Encontradas ${expiredSessions.length} sessões expiradas. Iniciando auto-checkout...`);
      for (const session of expiredSessions) {
        try {
          await this.end(session.id, session.checkoutAt);
          this.logger.log(`Auto-checkout concluído para a sessão ${session.id} (Retroativo para: ${session.checkoutAt.toISOString()})`);
        } catch (error) {
          this.logger.error(`Erro no auto-checkout da sessão ${session.id}`, error);
        }
      }
    }
  }

  findAllByProperty(propertyId: number) {
    return this.prisma.staySession.findMany({
      where: { propertyId },
      include: {
        package: true,
        property: true,
        devices: { include: { device: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findAllByUser(userId: number) {
    return this.prisma.staySession.findMany({
      where: { property: { userId } },
      include: {
        package: true,
        property: { select: { id: true, name: true, address: true } },
        devices: { include: { device: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const session = await this.prisma.staySession.findUnique({
      where: { id },
      include: {
        package: true,
        property: true,
        devices: { include: { device: true } },
      },
    });
    if (!session) throw new NotFoundException(`Sessão ${id} não encontrada.`);
    return session;
  }

  create(dto: CreateStaySessionDto) {
    return this.prisma.staySession.create({
      data: {
        clientName: dto.clientName,
        propertyId: dto.propertyId,
        checkinAt: new Date(dto.checkinAt),
        checkoutAt: new Date(dto.checkoutAt),
        packageId: dto.packageId ?? null,
        customEnergyLimitKwh: dto.customEnergyLimitKwh ?? null,
        customPricePerExtraKwh: dto.customPricePerExtraKwh ?? null,
      },
      include: { package: true },
    });
  }

  /**
   * Inicia uma sessão: SCHEDULED → ACTIVE.
   * Muda o status da propriedade para OCCUPIED.
   * Se houver pacote associado, cria StaySessionDevice para cada dispositivo da propriedade,
   * marcando isAllowed conforme o limite maxDevicesActive do pacote.
   */
  async start(id: number) {
    const session = await this.findOne(id);

    if (session.status !== 'SCHEDULED') {
      throw new BadRequestException(
        `Sessão ${id} não pode ser iniciada — status atual: ${session.status}`,
      );
    }

    // Busca dispositivos da propriedade para criar os vínculos da sessão
    const devices = await this.prisma.device.findMany({
      where: { propertyId: session.propertyId },
      orderBy: { id: 'asc' },
    });

    // Determina quantos dispositivos são liberados pelo pacote
    const maxAllowed = session.package?.maxDevicesActive ?? devices.length;

    await this.prisma.$transaction([
      // Atualiza sessão para ACTIVE
      this.prisma.staySession.update({
        where: { id },
        data: { status: 'ACTIVE', startedAt: new Date() },
      }),
      // Muda propriedade para OCCUPIED
      this.prisma.property.update({
        where: { id: session.propertyId },
        data: { status: 'OCCUPIED' },
      }),
      // Cria vínculos sessão <-> dispositivos (respeitando limite do pacote)
      ...devices.map((device, index) =>
        this.prisma.staySessionDevice.upsert({
          where: { sessionId_deviceId: { sessionId: id, deviceId: device.id } },
          create: {
            sessionId: id,
            deviceId: device.id,
            isAllowed: index < maxAllowed,
          },
          update: { isAllowed: index < maxAllowed },
        }),
      ),
    ]);

    return this.findOne(id);
  }

  /**
   * Finaliza uma sessão: ACTIVE → FINISHED.
   * Calcula totalConsumptionKwh somando DeviceReadings do período da sessão.
   * Calcula extraConsumptionKwh e extraCost se houver franquia de energia.
   * Muda o status da propriedade de volta para AVAILABLE.
   */
  async end(id: number, forcedEndedAt?: Date) {
    const session = await this.findOne(id);

    if (session.status !== 'ACTIVE') {
      throw new BadRequestException(
        `Sessão ${id} não pode ser finalizada — status atual: ${session.status}`,
      );
    }

    const endedAt = forcedEndedAt ?? new Date();
    const startedAt = session.startedAt ?? session.checkinAt;

    // Soma todas as leituras dos dispositivos da sessão no período ativo
    const readingsAgg = await this.prisma.deviceReading.aggregate({
      where: {
        device: { propertyId: session.propertyId },
        createdAt: { gte: startedAt, lte: endedAt },
      },
      _sum: { value: true },
    });

    // Converte de Wh para kWh (leituras em Watts × intervalo → simplificado aqui como soma direta)
    const totalKwh = (readingsAgg._sum.value ?? 0) / 1000;

    // Determina o limite de energia do pacote
    const energyLimit =
      session.package?.energyLimitKwh ?? session.customEnergyLimitKwh ?? null;
    const pricePerExtra =
      session.package?.pricePerExtraKwh ?? session.customPricePerExtraKwh ?? 0;

    const extraKwh =
      energyLimit != null ? Math.max(0, totalKwh - energyLimit) : 0;
    const extraCost = extraKwh * pricePerExtra;

    await this.prisma.$transaction([
      this.prisma.staySession.update({
        where: { id },
        data: {
          status: 'FINISHED',
          endedAt,
          totalConsumptionKwh: totalKwh,
          extraConsumptionKwh: extraKwh,
          extraCost,
        },
      }),
      this.prisma.property.update({
        where: { id: session.propertyId },
        data: { status: 'AVAILABLE' },
      }),
    ]);

    // Corta a energia publicando comando OFF nos tópicos vinculados
    const activeDevices = session.devices.filter(sd => sd.isAllowed).map(sd => sd.device);
    for (const device of activeDevices) {
      if (device.commandMqttTopic) {
        await this.mqtt.publishCommand(device.commandMqttTopic, 'OFF');
      }
    }

    return this.findOne(id);
  }

  async cancel(id: number) {
    const session = await this.findOne(id);
    if (session.status === 'FINISHED') {
      throw new BadRequestException(
        'Não é possível cancelar uma sessão já finalizada.',
      );
    }
    return this.prisma.staySession.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.staySession.delete({ where: { id } });
  }

  /**
   * Inicia uma sessão de estadia diretamente a partir de um pacote (via QR Code).
   *
   * Fluxo:
   *   1. Busca o pacote e sua propriedade
   *   2. Verifica se a propriedade está AVAILABLE
   *   3. Cria StaySession com status ACTIVE imediatamente
   *   4. Vincula dispositivos da propriedade filtrados pelas allowedDeviceCategories do pacote
   *   5. Muda Property.status → OCCUPIED
   *   6. Publica comandos MQTT para ligar os dispositivos permitidos
   */
  async startFromPackage(packageId: number) {
    // 1. Busca pacote com propriedade e dispositivos
    const pkg = await this.prisma.rentalPackage.findUnique({
      where: { id: packageId },
      include: {
        property: {
          include: { devices: true },
        },
      },
    });

    if (!pkg) throw new NotFoundException(`Pacote ${packageId} não encontrado.`);

    const property = pkg.property;

    // 2. Verifica disponibilidade
    if (property.status !== 'AVAILABLE') {
      throw new ConflictException(
        `Propriedade "${property.name}" não está disponível (status: ${property.status}).`,
      );
    }

    // 3. Filtra dispositivos pelas categorias permitidas pelo pacote
    const allowedCategories = pkg.allowedDeviceCategories;
    const allDevices = property.devices;

    const allowedDevices =
      allowedCategories.length > 0
        ? allDevices.filter((d) => allowedCategories.includes(d.type))
        : allDevices; // se vazio, libera tudo

    const now = new Date();

    // 4. Cria sessão + vínculos em transação
    const session = await this.prisma.$transaction(async (tx) => {
      const created = await tx.staySession.create({
        data: {
          clientName: 'Cliente Teste',
          propertyId: property.id,
          packageId: pkg.id,
          checkinAt: now,
          checkoutAt: new Date(now.getTime() + (pkg.durationHours ?? 24) * 3600 * 1000),
          startedAt: now,
          status: 'ACTIVE',
        },
      });

      // Cria vínculos: todos os dispositivos da propriedade, isAllowed conforme o pacote
      await tx.staySessionDevice.createMany({
        data: allDevices.map((device) => ({
          sessionId: created.id,
          deviceId: device.id,
          isAllowed: allowedDevices.some((d) => d.id === device.id),
        })),
      });

      await tx.property.update({
        where: { id: property.id },
        data: { status: 'OCCUPIED' },
      });

      return created;
    });

    // 5. Publica comandos MQTT para ligar dispositivos permitidos
    for (const device of allowedDevices) {
      if (device.commandMqttTopic) {
        await this.mqtt.publishCommand(device.commandMqttTopic, 'ON');
      }
    }

    return this.findOne(session.id);
  }
}
