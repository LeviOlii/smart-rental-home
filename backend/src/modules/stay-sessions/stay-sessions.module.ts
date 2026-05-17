import { Module } from '@nestjs/common';
import { StaySessionsController } from './stay-sessions.controller';
import { StaySessionsService } from './stay-sessions.service';

@Module({
  controllers: [StaySessionsController],
  providers: [StaySessionsService],
  exports: [StaySessionsService],
})
export class StaySessionsModule {}
