import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

/**
 * PropertiesModule — CRUD de propriedades do usuário.
 * Futuramente: adicionar guard JWT para proteger as rotas.
 */
@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
