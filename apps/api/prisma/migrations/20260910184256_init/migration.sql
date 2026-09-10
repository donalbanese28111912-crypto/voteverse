-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "VoteValue" AS ENUM ('UP', 'DOWN');

-- CreateEnum
CREATE TYPE "RankingType" AS ENUM ('LEADERBOARD', 'BINARY', 'BATTLE');

-- CreateEnum
CREATE TYPE "RankingStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED', 'HIDDEN');

-- CreateEnum
CREATE TYPE "ModerationLevel" AS ENUM ('STANDARD', 'ELEVATED', 'STRICT');

-- CreateEnum
CREATE TYPE "TimeWindow" AS ENUM ('ALL_TIME', 'YEAR', 'MONTH', 'WEEK', 'DAY', 'LIVE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT,
    "passwordHash" TEXT NOT NULL,
    "bio" VARCHAR(500),
    "avatarUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "reputation" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "deviceTrust" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "lifetimeVotes" INTEGER NOT NULL DEFAULT 0,
    "bannedAt" TIMESTAMP(3),
    "lastActiveAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "familyId" UUID NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "replacedById" UUID,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "parentId" UUID,
    "position" INTEGER NOT NULL DEFAULT 0,
    "paidSupportEnabled" BOOLEAN NOT NULL DEFAULT true,
    "moderationLevel" "ModerationLevel" NOT NULL DEFAULT 'STANDARD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entities" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "description" VARCHAR(1000),
    "imageUrl" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rankings" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" VARCHAR(2000),
    "type" "RankingType" NOT NULL DEFAULT 'LEADERBOARD',
    "status" "RankingStatus" NOT NULL DEFAULT 'PUBLISHED',
    "categoryId" UUID NOT NULL,
    "creatorId" UUID,
    "paidSupportEnabledOverride" BOOLEAN,
    "totalVotes" INTEGER NOT NULL DEFAULT 0,
    "distinctVoters" INTEGER NOT NULL DEFAULT 0,
    "trendingScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "trendingComputedAt" TIMESTAMP(3),
    "lastVoteAt" TIMESTAMP(3),
    "seoTitle" TEXT,
    "seoDescription" VARCHAR(320),
    "ogImageUrl" TEXT,
    "aiGenerated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rankings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ranking_items" (
    "id" UUID NOT NULL,
    "rankingId" UUID NOT NULL,
    "entityId" UUID,
    "label" TEXT NOT NULL,
    "description" VARCHAR(500),
    "imageUrl" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ranking_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votes" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "rankingItemId" UUID NOT NULL,
    "rankingId" UUID NOT NULL,
    "value" "VoteValue" NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "ip" TEXT,
    "userAgent" TEXT,
    "suspicion" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vote_events" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "rankingItemId" UUID NOT NULL,
    "rankingId" UUID NOT NULL,
    "action" TEXT NOT NULL,
    "value" "VoteValue",
    "weight" DOUBLE PRECISION NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vote_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ranking_item_stats" (
    "id" UUID NOT NULL,
    "rankingItemId" UUID NOT NULL,
    "window" "TimeWindow" NOT NULL,
    "up" INTEGER NOT NULL DEFAULT 0,
    "down" INTEGER NOT NULL DEFAULT 0,
    "weightedUp" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "weightedDown" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "distinctVoters" INTEGER NOT NULL DEFAULT 0,
    "suspicionRatio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paidSupportUnits" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "distinctSupporters" INTEGER NOT NULL DEFAULT 0,
    "communityScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "support" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rankScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "certainty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lastVoteAt" TIMESTAMP(3),
    "computedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ranking_item_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" UUID NOT NULL,
    "reporterId" UUID,
    "subjectType" TEXT NOT NULL,
    "subjectId" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "details" VARCHAR(1000),
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "actorId" UUID,
    "action" TEXT NOT NULL,
    "targetType" TEXT,
    "targetId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_events" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "userId" UUID,
    "sessionId" TEXT,
    "path" TEXT,
    "props" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analytics_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_reputation_idx" ON "users"("reputation");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_tokenHash_key" ON "refresh_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");

-- CreateIndex
CREATE INDEX "refresh_tokens_familyId_idx" ON "refresh_tokens"("familyId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE INDEX "categories_parentId_idx" ON "categories"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "entities_slug_key" ON "entities"("slug");

-- CreateIndex
CREATE INDEX "entities_type_idx" ON "entities"("type");

-- CreateIndex
CREATE UNIQUE INDEX "rankings_slug_key" ON "rankings"("slug");

-- CreateIndex
CREATE INDEX "rankings_categoryId_idx" ON "rankings"("categoryId");

-- CreateIndex
CREATE INDEX "rankings_status_trendingScore_idx" ON "rankings"("status", "trendingScore" DESC);

-- CreateIndex
CREATE INDEX "rankings_status_createdAt_idx" ON "rankings"("status", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "ranking_items_rankingId_idx" ON "ranking_items"("rankingId");

-- CreateIndex
CREATE UNIQUE INDEX "ranking_items_rankingId_entityId_key" ON "ranking_items"("rankingId", "entityId");

-- CreateIndex
CREATE INDEX "votes_rankingItemId_updatedAt_idx" ON "votes"("rankingItemId", "updatedAt");

-- CreateIndex
CREATE INDEX "votes_rankingId_updatedAt_idx" ON "votes"("rankingId", "updatedAt");

-- CreateIndex
CREATE INDEX "votes_userId_createdAt_idx" ON "votes"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "votes_userId_rankingItemId_key" ON "votes"("userId", "rankingItemId");

-- CreateIndex
CREATE INDEX "vote_events_userId_createdAt_idx" ON "vote_events"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "vote_events_rankingId_createdAt_idx" ON "vote_events"("rankingId", "createdAt");

-- CreateIndex
CREATE INDEX "ranking_item_stats_window_rankScore_idx" ON "ranking_item_stats"("window", "rankScore" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "ranking_item_stats_rankingItemId_window_key" ON "ranking_item_stats"("rankingItemId", "window");

-- CreateIndex
CREATE INDEX "reports_status_idx" ON "reports"("status");

-- CreateIndex
CREATE INDEX "reports_subjectType_subjectId_idx" ON "reports"("subjectType", "subjectId");

-- CreateIndex
CREATE INDEX "audit_logs_action_createdAt_idx" ON "audit_logs"("action", "createdAt");

-- CreateIndex
CREATE INDEX "analytics_events_name_createdAt_idx" ON "analytics_events"("name", "createdAt");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rankings" ADD CONSTRAINT "rankings_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rankings" ADD CONSTRAINT "rankings_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ranking_items" ADD CONSTRAINT "ranking_items_rankingId_fkey" FOREIGN KEY ("rankingId") REFERENCES "rankings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ranking_items" ADD CONSTRAINT "ranking_items_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "entities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_rankingItemId_fkey" FOREIGN KEY ("rankingItemId") REFERENCES "ranking_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_rankingId_fkey" FOREIGN KEY ("rankingId") REFERENCES "rankings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote_events" ADD CONSTRAINT "vote_events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ranking_item_stats" ADD CONSTRAINT "ranking_item_stats_rankingItemId_fkey" FOREIGN KEY ("rankingItemId") REFERENCES "ranking_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
