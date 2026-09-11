import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Throttle } from '@nestjs/throttler';
import { boostSchema, purchaseSchema, type BoostInput, type PurchaseInput } from '@voteverse/shared';
import type { AppConfig } from '../config/configuration';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { PointsService } from './points.service';

/**
 * Monetization is switched off for the initial public launch (product
 * decision 2026-09-11). The ledger/Boost implementation stays intact and
 * fully tested underneath — every mutating route here just refuses until
 * FEATURE_BOOST_ENABLED=true.
 */
@Controller({ path: 'points', version: '1' })
export class PointsController {
  constructor(
    private readonly points: PointsService,
    private readonly config: ConfigService<{ app: AppConfig }, true>,
  ) {}

  private assertEnabled(): void {
    if (!this.config.get('app', { infer: true }).features.boostEnabled) {
      throw new ForbiddenException('Voteverse Points is not available yet');
    }
  }

  @Public()
  @Get('packages')
  packages() {
    this.assertEnabled();
    return this.points.packages();
  }

  @UseGuards(JwtAuthGuard)
  @Get('wallet')
  wallet(@CurrentUser('id') userId: string) {
    this.assertEnabled();
    return this.points.wallet(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 20, ttl: 60_000 } })
  @Post('purchase')
  purchase(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(purchaseSchema)) dto: PurchaseInput,
  ) {
    this.assertEnabled();
    return this.points.purchase(userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  @Post('boost')
  boost(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(boostSchema)) dto: BoostInput,
  ) {
    this.assertEnabled();
    return this.points.boost(userId, dto);
  }
}
