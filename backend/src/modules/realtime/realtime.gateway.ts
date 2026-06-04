import { Injectable, Logger } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';

/**
 * RealtimeGateway — WebSocket Gateway (Socket.IO) para comunicação em tempo real.
 *
 * Quando @nestjs/websockets e socket.io estiverem instalados, descomentar os decorators.
 * Exemplo de uso futuro:
 *
 * @WebSocketGateway({ cors: { origin: process.env.FRONTEND_URL } })
 * export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
 *   @WebSocketServer() server: Server;
 *
 *   @SubscribeMessage('device:control')
 *   async handleDeviceControl(@MessageBody() payload: DeviceControlDto) {
 *     await this.mqttService.publishCommand(payload.propertyId, payload.deviceId, payload.action);
 *     return { status: 'ok' };
 *   }
 *
 *   // Chamado pelo MqttService para empurrar dados ao frontend
 *   broadcastDeviceUpdate(data: DeviceUpdateDto) {
 *     this.server.emit('device:update', data);
 *   }
 * }
 *
 * TODO: instalar @nestjs/websockets @nestjs/platform-socket.io socket.io
 */
@Injectable()
export class RealtimeGateway {
  private readonly logger = new Logger(RealtimeGateway.name);

  constructor(private readonly mqttService: MqttService) {
    this.logger.log('RealtimeGateway inicializado. TODO: habilitar @WebSocketGateway.');
  }
}
