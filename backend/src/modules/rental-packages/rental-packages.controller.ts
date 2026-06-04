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
import { RentalPackagesService } from './rental-packages.service';
import { CreateRentalPackageDto } from './dto/create-rental-package.dto';
import { UpdateRentalPackageDto } from './dto/update-rental-package.dto';

/**
 * RentalPackagesController — rotas REST para pacotes de aluguel.
 *
 * Rotas:
 *   GET    /rental-packages?propertyId=X  → lista pacotes de uma propriedade
 *   GET    /rental-packages/:id           → detalhe de um pacote
 *   POST   /rental-packages               → cria pacote
 *   PATCH  /rental-packages/:id           → atualiza pacote
 *   DELETE /rental-packages/:id           → remove pacote
 */
@Controller('rental-packages')
export class RentalPackagesController {
  constructor(private readonly rentalPackagesService: RentalPackagesService) {}

  @Get()
  findAll(@Query('propertyId', ParseIntPipe) propertyId: number) {
    return this.rentalPackagesService.findAllByProperty(propertyId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rentalPackagesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateRentalPackageDto) {
    return this.rentalPackagesService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRentalPackageDto,
  ) {
    return this.rentalPackagesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rentalPackagesService.remove(id);
  }
}
