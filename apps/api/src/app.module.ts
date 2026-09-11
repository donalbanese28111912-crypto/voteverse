import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AnalyticsModule } from './analytics/analytics.module';
import { AuthModule } from './auth/auth.module';
import { BattlesModule } from './battles/battles.module';
import { CategoriesModule } from './categories/categories.module';
import { AllExceptionsFilter } from './common/http-exception.filter';
import { JwtAuthGuard, RolesGuard } from './common/guards';
import { loadConfig } from './config/configuration';
import { EntitiesModule } from './entities/entities.module';
import { FeedModule } from './feed/feed.module';
import { HealthModule } from './health/health.module';
import { PointsModule } from './points/points.module';
import { PrismaModule } from './prisma/prisma.module';
import { RankingsModule } from './rankings/rankings.module';
import { SearchModule } from './search/search.module';
import { StatsModule } from './stats/stats.module';
import { TrendingModule } from './trending/trending.module';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '../../.env'],
      load: [() => ({ app: loadConfig() })],
    }),
    ThrottlerModule.forRoot([{ name: 'default', ttl: 60_000, limit: 120 }]),
    PrismaModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    EntitiesModule,
    RankingsModule,
    BattlesModule,
    VotesModule,
    PointsModule,
    StatsModule,
    TrendingModule,
    SearchModule,
    FeedModule,
    AnalyticsModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
