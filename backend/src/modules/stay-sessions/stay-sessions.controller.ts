import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { StaySessionsService } from './stay-sessions.service';
import { CreateStaySessionDto } from './dto/create-stay-session.dto';

/**
 * StaySessionsController — rotas REST para gerenciamento de sessões de estadia.
 *
 * Rotas:
 *   GET    /stay-sessions?propertyId=X   → lista sessões de uma propriedade
 *   GET    /stay-sessions/:id            → detalhe de uma sessão
 *   POST   /stay-sessions                → cria sessão (status: SCHEDULED)
 *   POST   /stay-sessions/:id/start      → inicia sessão (SCHEDULED → ACTIVE)
 *   POST   /stay-sessions/:id/end        → finaliza sessão (ACTIVE → FINISHED)
 *   POST   /stay-sessions/:id/cancel     → cancela sessão
 *   DELETE /stay-sessions/:id            → remove sessão
 */
@Controller('stay-sessions')
export class StaySessionsController {
  constructor(private readonly staySessionsService: StaySessionsService) {}

  @Get()
  findAll(@Query('propertyId', ParseIntPipe) propertyId: number) {
    return this.staySessionsService.findAllByProperty(propertyId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.staySessionsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateStaySessionDto) {
    return this.staySessionsService.create(dto);
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
