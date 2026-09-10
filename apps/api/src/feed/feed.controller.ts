import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard, OptionalJwtAuthGuard } from '../common/guards';
import { FeedService } from './feed.service';

@Controller({ path: 'feed', version: '1' })
export class FeedController {
  constructor(private readonly feed: FeedService) {}

  @Public()
  @UseGuards(OptionalJwtAuthGuard)
  @Get('home')
  home(@CurrentUser('id') userId: string | undefined) {
    return this.feed.home(userId ?? null);
  }

  @UseGuards(JwtAuthGuard)
  @Get('next-vote')
  nextVote(@CurrentUser('id') userId: string) {
    return this.feed.nextVote(userId);
  }
}
