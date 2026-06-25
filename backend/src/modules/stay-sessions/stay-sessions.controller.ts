import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  BadRequestException,
  ParseIntPipe as PIP,
} from '@nestjs/common';
import { StaySessionsService } from './stay-sessions.service';
import { CreateStaySessionDto } from './dto/create-stay-session.dto';

/**
 * StaySessionsController — rotas REST para gerenciamento de sessões de estadia.
 *
 * Rotas:
 *   GET    /stay-sessions?propertyId=X          → lista sessões de uma propriedade
 *   GET    /stay-sessions/:id                   → detalhe de uma sessão
 *   POST   /stay-sessions                       → cria sessão (status: SCHEDULED)
 *   POST   /stay-sessions/start-from-package/:packageId → QR Code check-in (cria + ativa direto)
 *   POST   /stay-sessions/:id/start             → inicia sessão (SCHEDULED → ACTIVE)
 *   POST   /stay-sessions/:id/end               → finaliza sessão (ACTIVE → FINISHED)
 *   POST   /stay-sessions/:id/cancel            → cancela sessão
 *   DELETE /stay-sessions/:id                   → remove sessão
 */
@Controller('stay-sessions')
export class StaySessionsController {
  constructor(private readonly staySessionsService: StaySessionsService) {}

  @Get()
  findAll(
    @Query('propertyId') propertyId?: string,
    @Query('userId') userId?: string,
  ) {
    if (userId) {
      return this.staySessionsService.findAllByUser(parseInt(userId, 10));
    }
    if (propertyId) {
      return this.staySessionsService.findAllByProperty(parseInt(propertyId, 10));
    }
    throw new BadRequestException('Informe propertyId ou userId.');
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateStaySessionDto) {
    return this.staySessionsService.create(dto);
  }

  /**
   * Rota acionada pelo cliente ao escanear o QR Code e confirmar pagamento.
   * Cria a sessão de estadia e a ativa imediatamente, sem precisar de um ID de sessão prévio.
   */
  @Post('start-from-package/:packageId')
  startFromPackage(@Param('packageId', ParseIntPipe) packageId: number) {
    return this.staySessionsService.startFromPackage(packageId);
  }

  @Post(':id/start')
  start(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.start(id);
  }

  @Post(':id/end')
  end(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.end(id);
  }

  @Post(':id/cancel')
  cancel(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.cancel(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.remove(id);
  }
}

