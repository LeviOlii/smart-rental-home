import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRentalPackageDto } from './dto/create-rental-package.dto';
import { UpdateRentalPackageDto } from './dto/update-rental-package.dto';

/**
 * RentalPackagesService — CRUD de pacotes de aluguel (ex.: Básico, Plus, Gold).
 * Cada pacote pertence a uma propriedade e define limites de dispositivos e energia.
 */
@Injectable()
export class RentalPackagesService {
  constructor(private readonly prisma: PrismaService) {}

  findAllByProperty(propertyId: number) {
    return this.prisma.rentalPackage.findMany({
      where: { propertyId },
      orderBy: { basePrice: 'asc' },
    });
  }

  async findOne(id: number) {
    const pkg = await this.prisma.rentalPackage.findUnique({ where: { id } });
    if (!pkg) throw new NotFoundException(`Pacote ${id} não encontrado.`);
    return pkg;
  }

  create(dto: CreateRentalPackageDto) {
    return this.prisma.rentalPackage.create({ data: dto });
  }

  async update(id: number, dto: UpdateRentalPackageDto) {
    await this.findOne(id);
    return this.prisma.rentalPackage.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.rentalPackage.delete({ where: { id } });
  }
}
