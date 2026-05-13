import { Injectable, UnauthorizedException } from '@nestjs/common';

/**
 * AuthService — lógica de autenticação.
 * TODO: integrar @nestjs/jwt para geração de tokens e bcrypt para hash de senha.
 * TODO: buscar usuário do banco via Prisma (src/lib/prisma.ts).
 */
@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    // TODO: validar credenciais contra o banco de dados
    // Por ora, lança erro genérico para forçar implementação real
    throw new UnauthorizedException(
      'Implementação de autenticação pendente. Integre @nestjs/jwt e bcrypt.',
    );
  }
}
