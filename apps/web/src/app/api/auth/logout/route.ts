import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_V1, COOKIE } from '@/lib/config';

export async function POST() {
  const jar = await cookies();
  const rt = jar.get(COOKIE.refresh)?.value;
  if (rt) {
    await fetch(`${API_V1}/auth/logout`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ refreshToken: rt }),
      cache: 'no-store',
    }).catch(() => undefined);
  }
  const out = NextResponse.json({ ok: true });
  out.cookies.delete(COOKIE.access);
  out.cookies.delete(COOKIE.refresh);
  out.cookies.delete(COOKIE.user);
  return out;
}
