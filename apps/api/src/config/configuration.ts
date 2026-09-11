import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  API_PORT: z.coerce.number().int().default(4000),
  CORS_ORIGINS: z.string().default('http://localhost:3000'),

  JWT_ACCESS_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),
  JWT_ACCESS_TTL: z.coerce.number().int().default(900),
  JWT_REFRESH_TTL: z.coerce.number().int().default(2_592_000),

  FREE_VOTES_PER_DAY: z.coerce.number().int().default(200),
  VOTE_RATE_LIMIT_PER_MIN: z.coerce.number().int().default(40),

  // Monetization is switched off for the initial public launch (product
  // decision 2026-09-11) — the ledger/Boost code stays intact so it can be
  // re-enabled later without rebuilding it.
  FEATURE_BOOST_ENABLED: z
    .string()
    .default('false')
    .transform((v) => v === 'true'),
});

export type AppConfig = ReturnType<typeof loadConfig>;

export function loadConfig() {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    // eslint-disable-next-line no-console
    console.error('❌ Invalid environment:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment configuration');
  }
  const env = parsed.data;
  return {
    nodeEnv: env.NODE_ENV,
    isProd: env.NODE_ENV === 'production',
    port: env.API_PORT,
    corsOrigins: env.CORS_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean),
    jwt: {
      accessSecret: env.JWT_ACCESS_SECRET,
      refreshSecret: env.JWT_REFRESH_SECRET,
      accessTtl: env.JWT_ACCESS_TTL,
      refreshTtl: env.JWT_REFRESH_TTL,
    },
    voting: {
      freeVotesPerDay: env.FREE_VOTES_PER_DAY,
      rateLimitPerMin: env.VOTE_RATE_LIMIT_PER_MIN,
    },
    features: {
      boostEnabled: env.FEATURE_BOOST_ENABLED,
    },
  };
}
