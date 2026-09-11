import { Body, Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { castVoteSchema, type CastVoteInput } from '@voteverse/shared';
import type { Request } from 'express';
import { CurrentUser } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { isValidWindow } from '../stats/time-window';
import { VotesService } from './votes.service';
import type { TimeWindow } from '@prisma/client';

@Controller({ path: 'votes', version: '1' })
@UseGuards(JwtAuthGuard)
export class VotesController {
  constructor(private readonly votes: VotesService) {}

  /** The core interaction. Account required (spec decision). */
  @Throttle({ default: { limit: 40, ttl: 60_000 } })
  @Post()
  cast(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(castVoteSchema)) dto: CastVoteInput,
    @Query('window') windowRaw: string | undefined,
    @Req() req: Request,
  ) {
    const window: TimeWindow =
      windowRaw && isValidWindow(windowRaw) ? windowRaw : 'ALL_TIME';
    return this.votes.cast(
      userId,
      dto,
      { ip: req.ip, userAgent: req.get('user-agent') ?? undefined },
      window,
    );
  }
}
