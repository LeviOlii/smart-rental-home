import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { DevicesService } from '../devices/devices.service';

/**
 * MqttService — ponte event-driven entre o broker MQTT e o resto do sistema.
 *
 * Fluxo de telemetria (⇨):
 *   ESP32 publica em {propertyId}/{deviceId}/telemetria
 *   → MqttService recebe, faz parse do payload JSON
 *   → Chama DevicesService.saveTelemetryReading()
 *   → Emite evento interno para RealtimeGateway atualizar o frontend via WebSocket
 *
 * Fluxo de comando (⇦):
 *   RealtimeGateway recebe comando do frontend (device:control)
 *   → Chama MqttService.publishCommand()
 *   → Publica em {propertyId}/{deviceId}/comando
 *   → ESP32 executa a ação física
 *
 * TODO: instalar mqtt.js ou @nestjs/microservices e conectar ao broker real.
 */
@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(MqttService.name);

  constructor(private readonly devicesService: DevicesService) {}

  onModuleInit() {
    this.logger.log('MqttService inicializado. TODO: conectar ao broker MQTT.');
    // TODO: const client = mqtt.connect(process.env.MQTT_BROKER_URL);
    // TODO: client.subscribe('+/+/telemetria');
    // TODO: client.on('message', this.handleMessage.bind(this));
  }

  onModuleDestroy() {
    // TODO: client.end();
    this.logger.log('MqttService: conexão com broker encerrada.');
  }

  /**
   * Processa mensagem de telemetria recebida do broker.
   * Formato esperado do topic: {propertyId}/{deviceId}/telemetria
   * Formato esperado do payload JSON: { v: 1, deviceId: number, value: number, ts: string }
   */
  async handleTelemetryMessage(topic: string, payload: Buffer) {
    try {
      const data = JSON.parse(payload.toString());
      const [, deviceIdStr] = topic.split('/');
      const deviceId = parseInt(deviceIdStr, 10);

      this.logger.debug(`Telemetria recebida — topic: ${topic}, value: ${data.value}`);
      await this.devicesService.saveTelemetryReading(deviceId, data.value);
    } catch (error) {
      this.logger.error(`Erro ao processar mensagem MQTT do tópico ${topic}`, error);
    }
  }

  /**
   * Publica um comando para um dispositivo via MQTT.
   * Chamado pelo RealtimeGateway quando o frontend envia device:control.
   */
  async publishCommand(propertyId: number, deviceId: number, action: string) {
    const topic = `${propertyId}/${deviceId}/comando`;
    const payload = JSON.stringify({ action, ts: new Date().toISOString() });

    this.logger.log(`Publicando comando — topic: ${topic}, payload: ${payload}`);
    // TODO: client.publish(topic, payload, { qos: 1 });
  }
}
