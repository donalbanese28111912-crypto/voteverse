-- CreateEnum
CREATE TYPE "PointsTransactionType" AS ENUM ('PURCHASE', 'BOOST_SPEND', 'REFUND', 'ADMIN_ADJUST', 'SIGNUP_BONUS');

-- CreateTable
CREATE TABLE "points_wallets" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "points_wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "points_transactions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "PointsTransactionType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "balanceAfter" INTEGER NOT NULL,
    "packageId" TEXT,
    "priceCents" INTEGER,
    "currency" TEXT,
    "boostId" UUID,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "points_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boosts" (
    "id" UUID NOT NULL,
    "boosterId" UUID NOT NULL,
    "rankingItemId" UUID NOT NULL,
    "rankingId" UUID NOT NULL,
    "points" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "boosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "points_wallets_userId_key" ON "points_wallets"("userId");

-- CreateIndex
CREATE INDEX "points_transactions_userId_createdAt_idx" ON "points_transactions"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "boosts_rankingItemId_createdAt_idx" ON "boosts"("rankingItemId", "createdAt");

-- CreateIndex
CREATE INDEX "boosts_boosterId_createdAt_idx" ON "boosts"("boosterId", "createdAt");

-- AddForeignKey
ALTER TABLE "points_wallets" ADD CONSTRAINT "points_wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "points_transactions" ADD CONSTRAINT "points_transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boosts" ADD CONSTRAINT "boosts_boosterId_fkey" FOREIGN KEY ("boosterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boosts" ADD CONSTRAINT "boosts_rankingItemId_fkey" FOREIGN KEY ("rankingItemId") REFERENCES "ranking_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
