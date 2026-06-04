import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Infraestrutura
import { PrismaModule } from './modules/prisma/prisma.module';

// Módulos de domínio
import { AuthModule } from './modules/auth/auth.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { DevicesModule } from './modules/devices/devices.module';
import { RentalPackagesModule } from './modules/rental-packages/rental-packages.module';
import { StaySessionsModule } from './modules/stay-sessions/stay-sessions.module';
import { DeviceReadingsModule } from './modules/device-readings/device-readings.module';

// Integrações (IoT / Tempo Real)
import { MqttModule } from './modules/mqtt/mqtt.module';
import { RealtimeModule } from './modules/realtime/realtime.module';

@Module({
  imports: [
    // PrismaModule deve ser o primeiro — é global e base de tudo
    PrismaModule,

    // Domínio
    AuthModule,
    PropertiesModule,
    DevicesModule,
    RentalPackagesModule,
    StaySessionsModule,
    DeviceReadingsModule,

    // IoT
    MqttModule,
    RealtimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
