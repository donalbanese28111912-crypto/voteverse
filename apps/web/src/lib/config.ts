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
  access: 'rankly_at',
  refresh: 'rankly_rt',
  user: 'rankly_user',
} as const;
