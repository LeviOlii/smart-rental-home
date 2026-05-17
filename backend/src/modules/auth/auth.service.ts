import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

/**
 * AuthService — registro e login de usuários (locadores).
 * Por ora retorna o usuário sem JWT (auth completa fica para sprint futura).
 */
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Cria um novo usuário com senha hasheada.
   * Retorna os dados do usuário (sem a senha).
   */
  async register(name: string, email: string, password: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    //eslint-disable-next-line
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Valida credenciais e retorna o usuário.
   * TODO (sprint futura): retornar JWT em vez do objeto do usuário.
   */
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    //eslint-disable-next-line
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
