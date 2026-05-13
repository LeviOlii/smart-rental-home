import { Injectable } from '@nestjs/common';

/**
 * DevicesService — acesso ao banco para dispositivos e leituras (DeviceReading).
 * TODO: injetar prisma e implementar lógica de salvar telemetria do MQTT.
 */
@Injectable()
export class DevicesService {
  async findOne(id: number) {
    // TODO: return await prisma.device.findUnique({ where: { id }, include: { readings: ... } });
    return null;
  }

  /**
   * Salva uma leitura de telemetria recebida via MQTT.
   * Chamado pelo MqttService ao receber mensagem de um tópico de telemetria.
   */
  async saveTelemetryReading(deviceId: number, value: number) {
    // TODO: await prisma.deviceReading.create({ data: { deviceId, value } });
    console.log(`[DevicesService] Telemetria recebida — device: ${deviceId}, value: ${value}`);
  }
}
