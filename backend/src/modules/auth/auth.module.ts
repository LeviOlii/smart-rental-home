import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

/**
 * AuthModule — responsável pela autenticação JWT.
 * Futuramente: integrar @nestjs/jwt e @nestjs/passport para guards.
 */
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
