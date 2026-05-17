import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
  constructor(private readonly prisma: PrismaService) {}

  findAllByProperty(propertyId: number) {
    return this.prisma.staySession.findMany({
      where: { propertyId },
      include: {
        package: true,
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
  async end(id: number) {
    const session = await this.findOne(id);

    if (session.status !== 'ACTIVE') {
      throw new BadRequestException(
        `Sessão ${id} não pode ser finalizada — status atual: ${session.status}`,
      );
    }

    const endedAt = new Date();
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
}
