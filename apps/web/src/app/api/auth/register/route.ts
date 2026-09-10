import { NextResponse, type NextRequest } from 'next/server';
import { registerSchema } from '@rankly/shared';
import { API_V1, COOKIE } from '@/lib/config';
import { cookieOpts } from '@/lib/api';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    );
  }

  const res = await fetch(`${API_V1}/auth/register`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(parsed.data),
    cache: 'no-store',
  });
  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  const { user, tokens } = data as {
    user: { id: string; username: string };
    tokens: { accessToken: string; refreshToken: string; expiresIn: number };
  };
  const out = NextResponse.json({ user });
  out.cookies.set(COOKIE.access, tokens.accessToken, cookieOpts(tokens.expiresIn));
  out.cookies.set(COOKIE.refresh, tokens.refreshToken, cookieOpts(60 * 60 * 24 * 30));
  out.cookies.set(
    COOKIE.user,
    JSON.stringify({ id: user.id, username: user.username }),
    { ...cookieOpts(60 * 60 * 24 * 30), httpOnly: false },
  );
  return out;
}
