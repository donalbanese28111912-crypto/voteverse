import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { boostSchema, purchaseSchema, type BoostInput, type PurchaseInput } from '@rankly/shared';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { PointsService } from './points.service';

@Controller({ path: 'points', version: '1' })
export class PointsController {
  constructor(private readonly points: PointsService) {}

  @Public()
  @Get('packages')
  packages() {
    return this.points.packages();
  }

  @UseGuards(JwtAuthGuard)
  @Get('wallet')
  wallet(@CurrentUser('id') userId: string) {
    return this.points.wallet(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 20, ttl: 60_000 } })
  @Post('purchase')
  purchase(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(purchaseSchema)) dto: PurchaseInput,
  ) {
    return this.points.purchase(userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  @Post('boost')
  boost(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(boostSchema)) dto: BoostInput,
  ) {
    return this.points.boost(userId, dto);
  }
}
