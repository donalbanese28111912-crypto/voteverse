import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Roles, Public } from '../common/decorators';
import { RolesGuard } from '../common/guards';
import { TrendingService } from './trending.service';

@Controller({ path: 'trending', version: '1' })
export class TrendingController {
  constructor(private readonly trending: TrendingService) {}

  @Public()
  @Get()
  top(@Query('limit') limit?: string) {
    const n = Math.min(50, Math.max(1, Number(limit) || 20));
    return this.trending.top(n);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post('recompute')
  recompute() {
    return this.trending.recomputeAll().then((count) => ({ recomputed: count }));
  }
}
