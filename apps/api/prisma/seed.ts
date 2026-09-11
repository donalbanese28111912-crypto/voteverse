import { randomUUID } from 'node:crypto';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as argon2 from 'argon2';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { StatsService } from '../src/stats/stats.service';
import { TrendingService } from '../src/trending/trending.service';
import { CATEGORIES, ENTITIES, RANKINGS, type CategorySeed } from './seed-data';

const USER_COUNT = 1400;
const log = new Logger('seed');

function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

async function main(): Promise<void> {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error', 'warn'],
  });
  const prisma = app.get(PrismaService);
  const stats = app.get(StatsService);
  const trending = app.get(TrendingService);

  log.log('Wiping existing data…');
  await prisma.$transaction([
    prisma.voteEvent.deleteMany(),
    prisma.vote.deleteMany(),
    prisma.rankingItemStat.deleteMany(),
    prisma.rankingItem.deleteMany(),
    prisma.ranking.deleteMany(),
    prisma.analyticsEvent.deleteMany(),
    prisma.auditLog.deleteMany(),
    prisma.report.deleteMany(),
    prisma.refreshToken.deleteMany(),
    prisma.entity.deleteMany(),
    prisma.category.deleteMany(),
  ]);
  await prisma.user.deleteMany({ where: { email: { contains: '@seed.rankly' } } });

  // ── categories ──────────────────────────────────────────────
  log.log('Categories…');
  async function insertCategory(c: CategorySeed, parentId: string | null, pos: number) {
    const created = await prisma.category.create({
      data: {
        slug: c.slug,
        name: c.name,
        icon: c.icon,
        parentId,
        position: pos,
        paidSupportEnabled: c.paidSupportEnabled ?? true,
        moderationLevel: c.moderationLevel ?? 'STANDARD',
      },
    });
    let childPos = 0;
    for (const child of c.children ?? []) {
      await insertCategory(child, created.id, childPos++);
    }
    return created;
  }
  let p = 0;
  for (const c of CATEGORIES) await insertCategory(c, null, p++);
  const categoryBySlug = new Map(
    (await prisma.category.findMany({ select: { id: true, slug: true } })).map((c) => [
      c.slug,
      c.id,
    ]),
  );

  // ── entities ────────────────────────────────────────────────
  log.log('Entities…');
  await prisma.entity.createMany({
    data: ENTITIES.map((e) => ({
      slug: e.slug,
      name: e.name,
      type: e.type,
      description: e.description,
    })),
  });
  const entityBySlug = new Map(
    (await prisma.entity.findMany({ select: { id: true, slug: true } })).map((e) => [
      e.slug,
      e.id,
    ]),
  );

  // ── users ───────────────────────────────────────────────────
  log.log(`Users (${USER_COUNT})…`);
  const sharedHash = await argon2.hash('password123');
  const userRows = Array.from({ length: USER_COUNT }, (_, i) => {
    const ageDays = rand(1, 600);
    return {
      id: randomUUID(),
      email: `voter${i}@seed.rankly.dev`,
      username: `voter_${i}`,
      displayName: `Voter ${i}`,
      passwordHash: sharedHash,
      emailVerified: Math.random() > 0.2,
      reputation: Math.min(1, Math.max(0.2, rand(0.35, 0.98))),
      deviceTrust: Math.min(1, Math.max(0.2, rand(0.4, 0.98))),
      lifetimeVotes: Math.floor(rand(0, 400)),
      createdAt: new Date(Date.now() - ageDays * 86_400_000),
    };
  });
  for (let i = 0; i < userRows.length; i += 500) {
    await prisma.user.createMany({ data: userRows.slice(i, i + 500) });
  }
  // a demo account you can log in with
  await prisma.user.create({
    data: {
      email: 'demo@seed.rankly.dev',
      username: 'demo',
      displayName: 'Demo User',
      passwordHash: sharedHash,
      emailVerified: true,
      reputation: 0.9,
      deviceTrust: 0.9,
    },
  });
  await prisma.user.create({
    data: {
      email: 'admin@seed.rankly.dev',
      username: 'admin',
      displayName: 'Rankly Admin',
      passwordHash: sharedHash,
      emailVerified: true,
      role: 'ADMIN',
      reputation: 1,
      deviceTrust: 1,
    },
  });
  const userIds = userRows.map((u) => u.id);

  // ── rankings + simulated votes ──────────────────────────────
  log.log('Rankings + votes…');
  const now = Date.now();
  for (const rk of RANKINGS) {
    const categoryId = categoryBySlug.get(rk.categorySlug);
    if (!categoryId) {
      log.warn(`skipping ${rk.slug}: category ${rk.categorySlug} missing`);
      continue;
    }

    const ranking = await prisma.ranking.create({
      data: {
        slug: rk.slug,
        title: rk.title,
        description: rk.description,
        type: rk.type,
        categoryId,
        seoTitle: rk.title,
        seoDescription: rk.description.slice(0, 300),
        items: {
          create: rk.items.map((it, idx) => ({
            label:
              it.label ??
              ENTITIES.find((e) => e.slug === it.entitySlug)?.name ??
              it.entitySlug ??
              `Item ${idx + 1}`,
            position: idx + 1,
            entityId: it.entitySlug ? entityBySlug.get(it.entitySlug) : undefined,
          })),
        },
      },
      include: { items: { orderBy: { position: 'asc' } } },
    });

    for (let i = 0; i < rk.items.length; i++) {
      const spec = rk.items[i]!;
      const item = ranking.items[i]!;
      // real vote rows: cap the distinct voters, keep it realistic
      const voters = Math.min(userIds.length, Math.max(80, Math.round(spec.volume / 8)));
      const chosen = shuffle(userIds).slice(0, voters);

      const votes = chosen.map((userId) => {
        const isUp = Math.random() < spec.upRate + rand(-0.04, 0.04);
        const castAt = new Date(now - rand(0, 120) * 86_400_000);
        return {
          id: randomUUID(),
          userId,
          rankingItemId: item.id,
          rankingId: ranking.id,
          value: (isUp ? 'UP' : 'DOWN') as 'UP' | 'DOWN',
          weight: Math.min(1, Math.max(0.2, rand(0.55, 1))),
          suspicion: Math.random() < 0.02 ? rand(0.4, 0.9) : rand(0, 0.05),
          createdAt: castAt,
          updatedAt: castAt,
        };
      });

      for (let j = 0; j < votes.length; j += 1000) {
        await prisma.vote.createMany({ data: votes.slice(j, j + 1000) });
      }
      // vote events (recent slice powers trending)
      const events = votes.map((v) => {
        const recent = Math.random() < 0.06;
        return {
          userId: v.userId,
          rankingItemId: v.rankingItemId,
          rankingId: v.rankingId,
          action: 'cast',
          value: v.value,
          weight: v.weight,
          createdAt: recent
            ? new Date(now - rand(0, 110) * 60_000)
            : v.createdAt,
        };
      });
      for (let j = 0; j < events.length; j += 1000) {
        await prisma.voteEvent.createMany({ data: events.slice(j, j + 1000) });
      }
    }

    await stats.recomputeRanking(ranking.id);
    log.log(`  ✔ ${rk.slug}`);
  }

  // ── demo boosts (Rankly Support) ───────────────────────────────
  // A handful of entries get paid Boost so the transparent "⚡ Sponsored"
  // treatment is visible out of the box. This never touches communityScore —
  // see StatsService.aggregate + @rankly/shared scoreItem().
  log.log('Demo boosts…');
  const demoBoosts: { rankingSlug: string; entitySlug: string; points: number; supporters: number }[] = [
    { rankingSlug: 'best-ai-assistants-2026', entitySlug: 'grok', points: 1800, supporters: 6 },
    { rankingSlug: 'best-instagram-stars-2026', entitySlug: 'kylie-jenner', points: 4200, supporters: 9 },
    { rankingSlug: 'best-tiktokers-2026', entitySlug: 'addison-rae', points: 2600, supporters: 7 },
    { rankingSlug: 'best-tech-companies-2026', entitySlug: 'tesla-inc', points: 3100, supporters: 8 },
    { rankingSlug: 'best-cars-2026', entitySlug: 'ford-f150', points: 1400, supporters: 4 },
  ];
  const boostedRankingIds = new Set<string>();
  for (const b of demoBoosts) {
    const item = await prisma.rankingItem.findFirst({
      where: { ranking: { slug: b.rankingSlug }, entity: { slug: b.entitySlug } },
      select: { id: true, rankingId: true },
    });
    if (!item) {
      log.warn(`  skip boost: ${b.rankingSlug}/${b.entitySlug} not found`);
      continue;
    }
    const boosters = shuffle(userIds).slice(0, b.supporters);
    const per = Math.floor(b.points / boosters.length);
    await prisma.boost.createMany({
      data: boosters.map((boosterId) => ({
        boosterId,
        rankingItemId: item.id,
        rankingId: item.rankingId,
        points: per,
        createdAt: new Date(now - rand(0, 48) * 3_600_000),
      })),
    });
    boostedRankingIds.add(item.rankingId);
  }
  for (const rankingId of boostedRankingIds) {
    await stats.recomputeRanking(rankingId);
  }
  log.log(`  ✔ ${demoBoosts.length} demo boosts applied`);

  // ── trending ────────────────────────────────────────────────
  log.log('Trending scores…');
  await trending.recomputeAll();

  const counts = await prisma.$transaction([
    prisma.user.count(),
    prisma.ranking.count(),
    prisma.rankingItem.count(),
    prisma.vote.count(),
  ]);
  log.log(
    `Done. users=${counts[0]} rankings=${counts[1]} items=${counts[2]} votes=${counts[3]}`,
  );
  log.log('Login: demo@seed.rankly.dev / password123  (admin@seed.rankly.dev for admin)');

  await app.close();
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
