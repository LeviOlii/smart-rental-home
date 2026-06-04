import { Module } from '@nestjs/common';
import { RealtimeGateway } from './realtime.gateway';
import { MqttModule } from '../mqtt/mqtt.module';
import { DevicesModule } from '../devices/devices.module';

@Module({
  imports: [MqttModule, DevicesModule],
  providers: [RealtimeGateway],
})
export class RealtimeModule {}
