import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  ParseIntPipe,
  ParseFloatPipe,
} from '@nestjs/common';
import { DeviceReadingsService } from './device-readings.service';

/**
 * DeviceReadingsController — rotas REST para leituras de consumo.
 *
 * Rotas:
 *   GET  /device-readings?deviceId=X&from=ISO&to=ISO  → histórico com filtro
 *   GET  /device-readings/latest?deviceId=X           → última leitura
 *   GET  /device-readings/aggregate?deviceId=X&bucket=5 minutes&hours=1
 *   POST /device-readings                             → inserção manual (simulação)
 */
@Controller('device-readings')
export class DeviceReadingsController {
  constructor(private readonly deviceReadingsService: DeviceReadingsService) {}

  @Get()
  findHistory(
    @Query('deviceId', ParseIntPipe) deviceId: number,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.deviceReadingsService.findHistory(deviceId, from, to);
  }

  @Get('latest')
  findLatest(@Query('deviceId', ParseIntPipe) deviceId: number) {
    return this.deviceReadingsService.findLatest(deviceId);
  }

  @Get('aggregate')
  getAggregated(
    @Query('deviceId', ParseIntPipe) deviceId: number,
    @Query('bucketMinutes') bucketMinutes?: string,
    @Query('hours') hours?: string,
  ) {
    return this.deviceReadingsService.getAggregated(
      deviceId,
      bucketMinutes ? parseInt(bucketMinutes) : 5,
      hours ? parseInt(hours) : 1,
    );
  }

  @Post()
  create(
    @Body('deviceId', ParseIntPipe) deviceId: number,
    @Body('value', ParseFloatPipe) value: number,
  ) {
    return this.deviceReadingsService.create(deviceId, value);
  }
}
