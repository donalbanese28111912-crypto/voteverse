import { Module } from '@nestjs/common';
import { StatsModule } from '../stats/stats.module';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';

@Module({
  imports: [StatsModule],
  controllers: [PointsController],
  providers: [PointsService],
  exports: [PointsService],
})
export class PointsModule {}
