import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { z } from 'zod';
import { CurrentUser, Public } from '../common/decorators';
import { OptionalJwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { PrismaService } from '../prisma/prisma.service';

const ALLOWED_EVENTS = [
  'page_view',
  'vote_up',
  'vote_down',
  'vote_retract',
  'ranking_open',
  'search',
  'share',
  'signup',
  'login',
  'ranking_create',
  'next_vote',
  'topic_open',
] as const;

const eventSchema = z.object({
  name: z.enum(ALLOWED_EVENTS),
  path: z.string().max(300).optional(),
  sessionId: z.string().max(100).optional(),
  props: z.record(z.unknown()).optional(),
});

@Public()
@UseGuards(OptionalJwtAuthGuard)
@Controller({ path: 'analytics', version: '1' })
export class AnalyticsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('events')
  @HttpCode(202)
  async track(
    @Body(new ZodValidationPipe(eventSchema))
    dto: z.infer<typeof eventSchema>,
    @CurrentUser('id') userId: string | undefined,
  ): Promise<{ ok: true }> {
    await this.prisma.analyticsEvent.create({
      data: {
        name: dto.name,
        path: dto.path,
        sessionId: dto.sessionId,
        userId: userId ?? null,
        props: (dto.props ?? {}) as object,
      },
    });
    return { ok: true };
  }
}
