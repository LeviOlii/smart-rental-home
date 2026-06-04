import { Module } from '@nestjs/common';
import { RealtimeGateway } from './realtime.gateway';
import { MqttModule } from '../mqtt/mqtt.module';

/**
 * RealtimeModule — WebSocket Gateway para comunicação bidirecional com o frontend.
 *
 * Fluxo de telemetria (⇨): MqttService emite evento → RealtimeGateway → frontend (device:update)
 * Fluxo de comando (⇦): frontend emite device:control → RealtimeGateway → MqttService.publishCommand()
 *
 * TODO: instalar @nestjs/websockets e socket.io para ativar o gateway.
 */
@Module({
  imports: [MqttModule],
  providers: [RealtimeGateway],
})
export class RealtimeModule {}
