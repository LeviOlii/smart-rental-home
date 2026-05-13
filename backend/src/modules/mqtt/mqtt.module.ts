import { Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { DevicesModule } from '../devices/devices.module';

/**
 * MqttModule — integração event-driven com broker MQTT.
 * Responsável por assinar tópicos de telemetria do ESP32 e publicar comandos.
 *
 * Padrão de tópicos (recomenado pelo deep-research-report.md):
 *   {propertyId}/{deviceId}/telemetria  → recebe dados do ESP32
 *   {propertyId}/{deviceId}/comando     → publica comandos ao ESP32
 *   {propertyId}/{deviceId}/status      → status de conexão (LWT)
 *
 * TODO: registrar ClientsModule com Transport.MQTT via @nestjs/microservices.
 */
@Module({
  imports: [DevicesModule],
  providers: [MqttService],
  exports: [MqttService],
})
export class MqttModule {}
