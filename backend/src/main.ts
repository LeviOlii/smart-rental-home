// DEVE SER O PRIMEIRO IMPORT — carrega o .env antes de qualquer módulo NestJS
import './config/env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Corrige erro de serialização do Prisma quando tenta enviar BigInt via JSON (ex: DeviceReading.id)
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };

  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o frontend Next.js conseguir chamar o backend localmente
  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(process.env.PORT ?? 3001);
  console.log(
    `Backend rodando em: http://localhost:${process.env.PORT ?? 3001}`,
  );
}
bootstrap();
