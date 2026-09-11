export const API_BASE =
  process.env.API_INTERNAL_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  'http://localhost:4000';

export const API_V1 = `${API_BASE}/api/v1`;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const PUBLIC_API_V1 = `${
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'
}/api/v1`;

export const COOKIE = {
  access: 'voteverse_at',
  refresh: 'voteverse_rt',
  user: 'voteverse_user',
} as const;

/**
 * Monetization is switched off for the initial public launch (product
 * decision 2026-09-11). The Points/Boost UI and API routes stay in the
 * codebase — set NEXT_PUBLIC_FEATURE_BOOST=true (and the API's
 * FEATURE_BOOST_ENABLED=true) to bring them back.
 */
export const FEATURE_BOOST = process.env.NEXT_PUBLIC_FEATURE_BOOST === 'true';
