import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  createRankingSchema,
  paginationQuerySchema,
  type CreateRankingInput,
} from '@rankly/shared';
import type { Request } from 'express';
import type { TimeWindow } from '@prisma/client';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard, OptionalJwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { isValidWindow } from '../stats/time-window';
import { RankingsService } from './rankings.service';

@Controller({ path: 'rankings', version: '1' })
export class RankingsController {
  constructor(private readonly rankings: RankingsService) {}

  @Public()
  @Get()
  list(
    @Query() query: Record<string, string>,
  ) {
    const { page, pageSize } = paginationQuerySchema.parse(query);
    const sort = (['trending', 'new', 'popular'] as const).includes(
      query.sort as never,
    )
      ? (query.sort as 'trending' | 'new' | 'popular')
      : 'trending';
    return this.rankings.list({
      page,
      pageSize,
      sort,
      categorySlug: query.category || undefined,
      type: query.type || undefined,
    });
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
    return this.rankings.detail(slug, window, userId ?? null);
  }

  @Public()
  @Get(':slug/related')
  related(@Param('slug') slug: string) {
    return this.rankings.related(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(createRankingSchema)) dto: CreateRankingInput,
    @Req() _req: Request,
  ) {
    return this.rankings.create(userId, dto);
  }
}
