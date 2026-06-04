import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * PrismaModule — módulo global que disponibiliza PrismaService em toda a aplicação.
 * Por ser @Global(), não precisa ser importado individualmente em cada módulo.
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
