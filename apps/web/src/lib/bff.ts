import 'server-only';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { API_V1, COOKIE } from './config';
import { cookieOpts } from './api';

/**
 * Forward a request to the Rankly API as the current viewer, refreshing the
 * access token once on 401. Keeps JWTs in httpOnly cookies — the browser never
 * sees them.
 */
export async function forward(
  path: string,
  init: { method: string; body?: unknown },
): Promise<NextResponse> {
  const jar = await cookies();
  let access = jar.get(COOKIE.access)?.value;

  const call = (token?: string) =>
    fetch(`${API_V1}${path}`, {
      method: init.method,
      headers: {
        'content-type': 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
      cache: 'no-store',
    });

  let res = await call(access);
  let setCookies: { name: string; value: string; maxAge: number }[] = [];

  if (res.status === 401) {
    const rt = jar.get(COOKIE.refresh)?.value;
    if (rt) {
      const r = await fetch(`${API_V1}/auth/refresh`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ refreshToken: rt }),
        cache: 'no-store',
      });
      if (r.ok) {
        const t = (await r.json()) as {
          accessToken: string;
          refreshToken: string;
          expiresIn: number;
        };
        access = t.accessToken;
        setCookies = [
          { name: COOKIE.access, value: t.accessToken, maxAge: t.expiresIn },
          { name: COOKIE.refresh, value: t.refreshToken, maxAge: 60 * 60 * 24 * 30 },
        ];
        res = await call(access);
      }
    }
  }

  const text = await res.text();
  const out = NextResponse.json(text ? JSON.parse(text) : null, {
    status: res.status,
  });
  for (const c of setCookies) {
    out.cookies.set(c.name, c.value, cookieOpts(c.maxAge));
  }
  if (res.status === 401) {
    out.cookies.delete(COOKIE.access);
    out.cookies.delete(COOKIE.refresh);
    out.cookies.delete(COOKIE.user);
  }
  return out;
}
