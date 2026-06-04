import { Injectable, Logger } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DevicesService } from '../devices/devices.service';

@WebSocketGateway({ cors: { origin: '*' } })
@Injectable()
export class RealtimeGateway {
  private readonly logger = new Logger(RealtimeGateway.name);

  @WebSocketServer()
  server: Server;

  constructor(
    private readonly mqttService: MqttService,
    private readonly devicesService: DevicesService
  ) {
    this.logger.log('RealtimeGateway inicializado via Socket.IO.');
    
    // Assina o evento de telemetria do MqttService e repassa via WebSocket
    this.mqttService.onTelemetry((data) => {
      this.server.emit('telemetry_update', data);
    });
  }

  @SubscribeMessage('device:control')
  async handleDeviceControl(@MessageBody() payload: { deviceId: number; action: string }) {
    this.logger.log(`Comando WS recebido para device ${payload.deviceId}: ${payload.action}`);
    
    const device = await this.devicesService.findOne(payload.deviceId);
    if (device && device.commandMqttTopic) {
      await this.mqttService.publishCommand(device.commandMqttTopic, payload.action);
    } else {
      this.logger.warn(`Device ${payload.deviceId} não possui commandMqttTopic configurado no banco.`);
    }

    return { status: 'ok' };
  }
}
