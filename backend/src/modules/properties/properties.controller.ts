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
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

/**
 * PropertiesController — rotas REST para gerenciamento de propriedades.
 *
 * Por enquanto sem JwtAuthGuard (auth será implementado em sprint posterior).
 * O userId é passado como query param ou no body temporariamente.
 *
 * Rotas:
 *   GET    /properties?userId=X       → lista propriedades do usuário
 *   GET    /properties/:id?userId=X   → detalhe de uma propriedade
 *   POST   /properties                → cria propriedade
 *   PATCH  /properties/:id            → atualiza propriedade
 *   DELETE /properties/:id?userId=X   → remove propriedade
 */
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  findAll(@Query('userId', ParseIntPipe) userId: number) {
    return this.propertiesService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.propertiesService.findOne(id, userId);
  }

  @Post()
  create(@Body() body: CreatePropertyDto & { userId: number }) {
    const { userId, ...dto } = body;
    return this.propertiesService.create(userId, dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePropertyDto & { userId: number },
  ) {
    const { userId, ...dto } = body;
    return this.propertiesService.update(id, userId, dto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.propertiesService.remove(id, userId);
  }
}
