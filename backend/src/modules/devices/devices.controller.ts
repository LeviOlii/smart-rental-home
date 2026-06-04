import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

/**
 * DevicesController — rotas REST para gerenciamento de dispositivos IoT.
 *
 * Rotas:
 *   GET    /devices?propertyId=X   → lista dispositivos de uma propriedade
 *   GET    /devices/:id            → detalhe de um dispositivo com leituras
 *   POST   /devices                → cria dispositivo
 *   PATCH  /devices/:id            → atualiza dispositivo
 *   DELETE /devices/:id            → remove dispositivo
 */
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  findAll(@Query('propertyId', ParseIntPipe) propertyId: number) {
    return this.devicesService.findAllByProperty(propertyId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.devicesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateDeviceDto) {
    return this.devicesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDeviceDto) {
    return this.devicesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.devicesService.remove(id);
  }
}
