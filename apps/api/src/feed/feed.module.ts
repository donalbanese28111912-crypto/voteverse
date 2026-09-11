import { Module } from '@nestjs/common';
import { BattlesModule } from '../battles/battles.module';
import { TrendingModule } from '../trending/trending.module';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [TrendingModule, BattlesModule],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
