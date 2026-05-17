import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

/**
 * PropertiesService — lógica de negócio e acesso ao banco para propriedades.
 * O status da propriedade (AVAILABLE/OCCUPIED/INACTIVE) é atualizado automaticamente
 * pelo StaySessionsService ao iniciar/finalizar uma sessão de estadia.
 */
@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lista todas as propriedades de um usuário, incluindo dispositivos e sessão ativa.
   */
  findAll(userId: number) {
    return this.prisma.property.findMany({
      where: { userId },
      include: {
        devices: true,
        sessions: {
          where: { status: 'ACTIVE' },
          take: 1,
        },
        _count: { select: { devices: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Retorna uma propriedade específica com dispositivos, pacotes e sessões.
   */
  async findOne(id: number, userId: number) {
    const property = await this.prisma.property.findFirst({
      where: { id, userId },
      include: {
        devices: {
          include: {
            readings: {
              take: 1,
              orderBy: { createdAt: 'desc' },
            },
          },
        },
        packages: true,
        sessions: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!property)
      throw new NotFoundException(`Propriedade ${id} não encontrada.`);
    return property;
  }

  /**
   * Cria uma nova propriedade vinculada ao usuário.
   */
  create(userId: number, dto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: { ...dto, userId },
    });
  }

  /**
   * Atualiza nome, endereço ou status de uma propriedade.
   */
  async update(id: number, userId: number, dto: UpdatePropertyDto) {
    await this.findOne(id, userId); // garante que existe e pertence ao usuário
    return this.prisma.property.update({
      where: { id },
      data: dto,
    });
  }

  /**
   * Remove uma propriedade (e em cascata, seus dispositivos e sessões via FK do banco).
   */
  async remove(id: number, userId: number) {
    await this.findOne(id, userId);
    return this.prisma.property.delete({ where: { id } });
  }
}
