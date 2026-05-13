import { Controller, Get, Param } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  /**
   * GET /properties
   * Retorna todas as propriedades do usuário autenticado.
   * TODO: aplicar JwtAuthGuard para proteger a rota.
   */
  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  /**
   * GET /properties/:id
   * Retorna uma propriedade específica com seus dispositivos.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
  }
}
