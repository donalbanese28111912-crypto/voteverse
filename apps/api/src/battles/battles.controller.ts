import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { paginationQuerySchema } from '@voteverse/shared';
import type { TimeWindow } from '@prisma/client';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard, OptionalJwtAuthGuard } from '../common/guards';
import { isValidWindow } from '../stats/time-window';
import { BattlesService } from './battles.service';

@Controller({ path: 'battles', version: '1' })
export class BattlesController {
  constructor(private readonly battles: BattlesService) {}

  @Public()
  @Get()
  list(@Query() query: Record<string, string>) {
    const { page, pageSize } = paginationQuerySchema.parse(query);
    return this.battles.list(page, pageSize);
  }

  @UseGuards(JwtAuthGuard)
  @Get('next')
  next(@CurrentUser('id') userId: string) {
    return this.battles.next(userId);
  }

  @Public()
  @UseGuards(OptionalJwtAuthGuard)
  @Get(':slug')
  detail(
    @Param('slug') slug: string,
    @Query('window') windowRaw: string | undefined,
    @CurrentUser('id') userId: string | undefined,
  ) {
    const window: TimeWindow =
      windowRaw && isValidWindow(windowRaw) ? windowRaw : 'ALL_TIME';
    return this.battles.detail(slug, window, userId ?? null);
  }
}
