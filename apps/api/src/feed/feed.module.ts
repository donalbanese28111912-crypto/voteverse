import { Module } from '@nestjs/common';
import { TrendingModule } from '../trending/trending.module';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [TrendingModule],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
