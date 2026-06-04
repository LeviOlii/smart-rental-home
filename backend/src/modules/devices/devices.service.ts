import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

/**
 * DevicesService — CRUD de dispositivos IoT e armazenamento de telemetria.
 *
 * O método saveTelemetryReading() é o ponto de entrada dos dados vindos do MQTT:
 * salva a leitura no banco e atualiza isActive + lastSeen no dispositivo.
 */
@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lista todos os dispositivos de uma propriedade, com a última leitura de cada um.
   */
  findAllByProperty(propertyId: number) {
    return this.prisma.device.findMany({
      where: { propertyId },
      include: {
        readings: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Retorna um dispositivo específico com suas últimas 50 leituras.
   */
  async findOne(id: number) {
    const device = await this.prisma.device.findUnique({
      where: { id },
      include: {
        readings: {
          take: 50,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!device)
      throw new NotFoundException(`Dispositivo ${id} não encontrado.`);
    return device;
  }

  /**
   * Cria um novo dispositivo vinculado a uma propriedade.
   */
  create(dto: CreateDeviceDto) {
    return this.prisma.device.create({ data: dto });
  }

  /**
   * Atualiza dados do dispositivo (nome, tipo, tópico, potência, status).
   */
  async update(id: number, dto: UpdateDeviceDto) {
    await this.findOne(id);
    return this.prisma.device.update({
      where: { id },
      data: dto,
    });
  }

  /**
   * Remove um dispositivo e suas leituras associadas.
   */
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.device.delete({ where: { id } });
  }

  /**
   * Salva uma leitura de telemetria recebida via MQTT.
   * Atualiza isActive = true e lastSeen no dispositivo.
   * Chamado pelo MqttService ao receber mensagem de um tópico de telemetria.
   */
  async saveTelemetryReading(deviceId: number, value: number) {
    const [reading] = await this.prisma.$transaction([
      this.prisma.deviceReading.create({
        data: { deviceId, value },
      }),
      this.prisma.device.update({
        where: { id: deviceId },
        data: { isActive: true, lastSeen: new Date(), powerWatts: value },
      }),
    ]);

    return reading;
  }

  /**
   * Busca todos os dispositivos que possuem um tópico de medição configurado.
   */
  findAllWithMeasurementTopic() {
    return this.prisma.device.findMany({
      where: { measurementMqttTopic: { not: null } }
    });
  }

  /**
   * Encontra o dispositivo associado a um tópico específico.
   */
  findByMeasurementTopic(topic: string) {
    return this.prisma.device.findFirst({
      where: { measurementMqttTopic: topic }
    });
  }
}
