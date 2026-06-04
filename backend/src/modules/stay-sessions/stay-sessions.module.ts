import { Module } from '@nestjs/common';
import { StaySessionsController } from './stay-sessions.controller';
import { StaySessionsService } from './stay-sessions.service';
import { MqttModule } from '../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [StaySessionsController],
  providers: [StaySessionsService],
  exports: [StaySessionsService],
})
export class StaySessionsModule {}

