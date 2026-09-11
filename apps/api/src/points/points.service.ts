import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { PointsTransactionType } from '@prisma/client';
import {
  POINTS_PACKAGES,
  type BoostInput,
  type BoostResult,
  type PurchaseInput,
  type WalletView,
} from '@voteverse/shared';
import { PrismaService } from '../prisma/prisma.service';
import { StatsService } from '../stats/stats.service';

@Injectable()
export class PointsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly stats: StatsService,
  ) {}

  packages() {
    return POINTS_PACKAGES;
  }

  /** Free starter balance for a brand-new account, so Boost is demoable at once. */
  async grantSignupBonus(userId: string): Promise<void> {
    await this.credit(userId, 50, 'SIGNUP_BONUS');
  }

  async wallet(userId: string): Promise<WalletView> {
    const wallet = await this.getOrCreateWallet(userId);
    const recent = await this.prisma.pointsTransaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 30,
    });
    return {
      balance: wallet.balance,
      recent: recent.map((t) => ({
        id: t.id,
        type: t.type,
        amount: t.amount,
        balanceAfter: t.balanceAfter,
        createdAt: t.createdAt.toISOString(),
        packageId: t.packageId,
      })),
    };
  }

  /**
   * Dev/test-mode wallet top-up. No real payment processor is wired up yet —
   * this credits points directly so the boost economy can be built and
   * demoed end-to-end. Swap for a real Stripe charge without changing the
   * ledger shape when that's ready.
   */
  async purchase(userId: string, input: PurchaseInput): Promise<WalletView> {
    const pkg = POINTS_PACKAGES.find((p) => p.id === input.packageId);
    if (!pkg) throw new NotFoundException('Unknown package');

    await this.credit(userId, pkg.points, 'PURCHASE', {
      packageId: pkg.id,
      priceCents: pkg.priceCents,
      currency: pkg.currency,
    });
    return this.wallet(userId);
  }

  /**
   * Spend points to boost a ranking item. Always transparent: the resulting
   * `support` is surfaced on the item separately from communityScore, capped,
   * and labeled "Sponsored" in the UI — never hidden vote manipulation.
   */
  async boost(userId: string, input: BoostInput): Promise<BoostResult> {
    const item = await this.prisma.rankingItem.findUnique({
      where: { id: input.rankingItemId },
      select: { id: true, rankingId: true, ranking: { select: { status: true } } },
    });
    if (!item) throw new NotFoundException('Ranking item not found');
    if (item.ranking.status !== 'PUBLISHED') {
      throw new BadRequestException('This ranking is not open for boosting');
    }

    const wallet = await this.getOrCreateWallet(userId);
    if (wallet.balance < input.points) {
      throw new BadRequestException('Not enough Voteverse Points');
    }

    const boost = await this.prisma.$transaction(async (tx) => {
      const updated = await tx.pointsWallet.update({
        where: { userId },
        data: { balance: { decrement: input.points } },
      });
      const b = await tx.boost.create({
        data: {
          boosterId: userId,
          rankingItemId: item.id,
          rankingId: item.rankingId,
          points: input.points,
        },
      });
      await tx.pointsTransaction.create({
        data: {
          userId,
          type: 'BOOST_SPEND',
          amount: -input.points,
          balanceAfter: updated.balance,
          boostId: b.id,
          metadata: { rankingItemId: item.id, rankingId: item.rankingId },
        },
      });
      return { boostRow: b, balance: updated.balance };
    });

    await this.stats.recomputeItem(item.id);
    const fresh = await this.prisma.rankingItemStat.findUnique({
      where: { rankingItemId_window: { rankingItemId: item.id, window: 'ALL_TIME' } },
    });

    return {
      rankingItemId: item.id,
      spent: input.points,
      newBalance: boost.balance,
      support: fresh?.support ?? 0,
    };
  }

  private async getOrCreateWallet(userId: string) {
    const existing = await this.prisma.pointsWallet.findUnique({ where: { userId } });
    if (existing) return existing;
    return this.prisma.pointsWallet.create({ data: { userId, balance: 0 } });
  }

  /** Server-authoritative credit. The ONLY way a balance may increase. */
  private async credit(
    userId: string,
    amount: number,
    type: PointsTransactionType,
    metadata: { packageId?: string; priceCents?: number; currency?: string } = {},
  ): Promise<void> {
    await this.getOrCreateWallet(userId);
    await this.prisma.$transaction(async (tx) => {
      const updated = await tx.pointsWallet.update({
        where: { userId },
        data: { balance: { increment: amount } },
      });
      await tx.pointsTransaction.create({
        data: {
          userId,
          type,
          amount,
          balanceAfter: updated.balance,
          packageId: metadata.packageId,
          priceCents: metadata.priceCents,
          currency: metadata.currency,
        },
      });
    });
  }
}
