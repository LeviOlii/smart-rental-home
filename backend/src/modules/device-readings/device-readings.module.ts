import { Module } from '@nestjs/common';
import { DeviceReadingsController } from './device-readings.controller';
import { DeviceReadingsService } from './device-readings.service';

@Module({
  controllers: [DeviceReadingsController],
  providers: [DeviceReadingsService],
  exports: [DeviceReadingsService],
})
export class DeviceReadingsModule {}
