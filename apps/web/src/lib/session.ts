import 'server-only';
import { cookies } from 'next/headers';
import { API_V1, COOKIE } from './config';
import type { PublicUser } from '@voteverse/shared';

export interface Viewer {
  id: string;
  username: string;
}

/** Lightweight viewer from the readable cookie (no network). */
export async function getViewer(): Promise<Viewer | null> {
  const jar = await cookies();
  const raw = jar.get(COOKIE.user)?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Viewer;
    if (parsed?.id && parsed?.username) return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

/** Authoritative check against the API (used on account pages). */
export async function fetchMe(): Promise<PublicUser | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE.access)?.value;
  if (!token) return null;
  const res = await fetch(`${API_V1}/auth/me`, {
    headers: { authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return (await res.json()) as PublicUser;
}
