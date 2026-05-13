import { Injectable } from '@nestjs/common';

/**
 * PropertiesService — acesso ao banco de dados para propriedades.
 * TODO: injetar prisma (src/lib/prisma.ts) e implementar queries reais.
 */
@Injectable()
export class PropertiesService {
  async findAll() {
    // TODO: return await prisma.property.findMany({ where: { userId } });
    return [];
  }

  async findOne(id: number) {
    // TODO: return await prisma.property.findUnique({ where: { id }, include: { devices: true } });
    return null;
  }
}
