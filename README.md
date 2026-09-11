# Voteverse

**Discover. Vote. Rank.** — the world's opinion layer.

Voteverse is a platform where people vote **UP** (🟢) or **DOWN** (🔴) on
practically anything — cities, AI tools, phones, movies, opinion topics — and a
statistical ranking model turns those votes into trustworthy rankings.

This repo is **Milestone 1: the core voting MVP**.

---

## What's in Milestone 1

| Area | Status |
|---|---|
| Monorepo (npm workspaces + Turborepo) | ✅ |
| PostgreSQL schema + migrations (Prisma) | ✅ |
| Rich seed data — 1,400 users, 12 rankings, ~37k votes | ✅ |
| Auth: register / login / refresh (rotating JWT) / logout — **account required to vote** | ✅ |
| Ranking engine: Wilson lower bound + Bayesian average + per-vote trust weighting | ✅ (19 unit tests) |
| Voting: UP/DOWN, click-again-to-retract, change vote, **no double counting** | ✅ |
| Anti-fraud: rate limits, daily free-vote quota, velocity suspicion dampening, append-only `VoteEvent` log | ✅ |
| Time windows: all-time / year / month / week / today / live | ✅ |
| Transparent Community Score vs paid "Voteverse Support" — built, currently **disabled for launch** (`FEATURE_BOOST_ENABLED=false`) | ✅ |
| Trending score (velocity + acceleration + breadth + recency decay) | ✅ |
| Homepage feed: hero vote, Trending, For You, Popular, per-category rows | ✅ |
| Pages: ranking detail, category, entity, profile, search, trending, create | ✅ |
| "One More Vote" loop + Surprise-me | ✅ |
| SEO: dynamic metadata, JSON-LD `ItemList`, sitemap, robots, OG/Twitter | ✅ |
| Analytics event pipeline | ✅ |
| Mobile-first, theme-aware (light/dark), accessible vote controls | ✅ |

**Deferred to later milestones:** real Stripe billing (Points/Boost is built and tested but switched off for the initial public launch — see `FEATURE_BOOST_ENABLED`), News ingestion, AI
topic generation, Battles / This-or-That, gamification, admin dashboard, i18n,
full moderation queue, native apps.

---

## Architecture

```
voteverse/
  apps/
    api/    NestJS + Prisma + PostgreSQL   — REST, versioned at /api/v1
    web/    Next.js 15 (App Router) + Tailwind v4   — SSR/ISR for SEO
  packages/
    shared/ TS types, Zod schemas, and the pure ranking-algorithm library
```

- The web app never touches the database. Browser mutations (voting, auth) go
  through Next.js **BFF route handlers** (`apps/web/src/app/api/*`) that hold the
  JWT in `httpOnly` cookies and forward to the API.
- The ranking model is a **pure, fully-tested library** (`@voteverse/shared`) so it
  can be swapped or A/B tested. `StatsService` recomputes cached
  `RankingItemStat` rows (one per item per window) after every vote.

### Why these choices
- **NestJS** — module/DI structure scales to a team; guards for authz; the same
  API serves future iOS/Android apps.
- **Wilson + Bayesian** — an item with 100↑/10↓ must **not** outrank one with
  100k↑/15k↓. The Wilson lower bound + a distinct-voter confidence factor
  handle that; Bayesian smoothing stops brand-new items spiking on one vote.
- **Per-vote trust weight** — fresh throwaway accounts and vote-spammers count
  for less, applied at write time so aggregates stay cheap.

---

## Local development

### Prerequisites
- Node.js 20+ and npm 11+
- PostgreSQL 17 running locally

The database role/DBs this repo expects (create once):

```sql
CREATE ROLE voteverse LOGIN PASSWORD 'voteverse_dev';
CREATE DATABASE voteverse_dev   OWNER voteverse;
CREATE DATABASE voteverse_test  OWNER voteverse;
CREATE DATABASE voteverse_shadow OWNER voteverse;
```

### Setup

```bash
cp .env.example .env          # already filled with local defaults
npm install
npm run db:migrate            # apply Prisma migrations
npm run db:seed               # 1,400 users + rankings + ~37k votes
```

### Run everything

```bash
npm run dev
```

- API → http://localhost:4000/api/v1
- Web → http://localhost:3000

### Demo accounts (from the seed)
| Email | Password | Role |
|---|---|---|
| `demo@seed.voteverse.dev` | `password123` | user |
| `admin@seed.voteverse.dev` | `password123` | admin |

### Useful scripts

```bash
npm test                 # all workspaces (ranking-engine + api unit tests)
npm run typecheck        # all workspaces
npm run db:reset         # drop, re-migrate, re-seed
npm run db:studio -w @voteverse/api   # Prisma Studio
```

---

## API surface (v1)

| Method | Path | Auth | Notes |
|---|---|---|---|
| `POST` | `/auth/register` `/auth/login` `/auth/refresh` `/auth/logout` | – | rotating refresh tokens |
| `GET` | `/auth/me` | ✅ | |
| `GET` | `/feed/home` | optional | hero + all feed sections |
| `GET` | `/feed/next-vote` | ✅ | the "one more vote" pick |
| `GET` | `/rankings` `/rankings/:slug` `/rankings/:slug/related` | optional | `?window=` , `?sort=trending\|new\|popular` |
| `POST` | `/rankings` | ✅ | create a ranking |
| `POST` | `/votes` | ✅ | `{ rankingItemId, value }` , `?window=` |
| `GET` | `/categories` `/categories/tree` `/categories/:slug` | – | hierarchical |
| `GET` | `/entities/:slug` | – | cross-ranking view of one thing |
| `GET` | `/trending` | – | |
| `POST` | `/trending/recompute` | admin | |
| `GET` | `/search?q=` | – | rankings + entities + categories |
| `GET` | `/users/:username` | – | public profile |
| `PATCH` | `/users/me/profile` · `GET /users/me/activity` | ✅ | |
| `POST` | `/analytics/events` | optional | allow-listed event names |
| `GET` | `/health` | – | |

---

## Tests that matter

`packages/shared/src/ranking/ranking.test.ts` asserts the properties the product
depends on:
- large consistent samples outrank small lucky ones (the 100k/15k vs 100/10 case)
- paid support never moves the community score, and is hard-capped
- suspicious vote weight is discounted
- a fresh throwaway account's vote is worth &lt; 0.35

`apps/api` covers time-window boundaries. The vote path (retract / change / no
double-count) is verified end-to-end against a running stack.
