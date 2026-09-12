# Voteverse API — built from the monorepo root so the workspace resolves.
# Build context MUST be the repo root (Railway: set "Root Directory" to `.`,
# and "Dockerfile Path" to `apps/api/Dockerfile`).
FROM node:20-bookworm-slim AS build
WORKDIR /repo

# npm needs every workspace's package.json present to resolve the lockfile,
# even ones (apps/web) we won't build here.
COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/package.json
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN npm ci

COPY packages/shared packages/shared
COPY apps/api apps/api
COPY tsconfig.base.json ./

RUN npm run build -w @voteverse/shared
RUN npx prisma generate --schema=apps/api/prisma/schema.prisma
RUN npm run build -w @voteverse/api

# ── runtime ──────────────────────────────────────────────────────
FROM node:20-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /repo

COPY --from=build /repo/node_modules ./node_modules
COPY --from=build /repo/packages/shared ./packages/shared
COPY --from=build /repo/apps/api ./apps/api

WORKDIR /repo/apps/api
EXPOSE 4000
# Apply any pending migrations, then start. `migrate deploy` never needs a
# shadow database, only `migrate dev` does.
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
