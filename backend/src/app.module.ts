import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { DevicesModule } from './modules/devices/devices.module';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { RealtimeModule } from './modules/realtime/realtime.module';

@Module({
  imports: [
    AuthModule,
    PropertiesModule,
    DevicesModule,
    MqttModule,
    RealtimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
