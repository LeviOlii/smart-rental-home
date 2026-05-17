import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';

/**
 * DevicesModule — gerencia os dispositivos IoT (ESP32) de cada propriedade.
 * Expõe DevicesService para uso no MqttModule e StaySessionsModule.
 */
@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  exports: [DevicesService],
})
export class DevicesModule {}
