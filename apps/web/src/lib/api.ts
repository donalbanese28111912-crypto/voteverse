import 'server-only';
import { cookies } from 'next/headers';
import { API_V1, COOKIE } from './config';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public body?: unknown,
  ) {
    super(message);
  }
}

interface FetchOpts {
  method?: string;
  body?: unknown;
  /** attach the viewer's access token */
  auth?: boolean;
  /** Next cache revalidation seconds; 0 = no-store */
  revalidate?: number;
  tags?: string[];
}

/**
 * Server-side fetch to the Voteverse API. When `auth` is set, it attaches the
 * httpOnly access-token cookie and transparently refreshes once on 401.
 */
export async function api<T>(path: string, opts: FetchOpts = {}): Promise<T> {
  const jar = await cookies();
  const doFetch = async (token?: string): Promise<Response> =>
    fetch(`${API_V1}${path}`, {
      method: opts.method ?? 'GET',
      headers: {
        'content-type': 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
      cache: opts.revalidate === 0 ? 'no-store' : undefined,
      next:
        opts.revalidate === 0
          ? undefined
          : { revalidate: opts.revalidate ?? 30, tags: opts.tags },
    });

  let token = opts.auth ? jar.get(COOKIE.access)?.value : undefined;
  let res = await doFetch(token);

  if (res.status === 401 && opts.auth) {
    const refreshed = await tryRefresh();
    if (refreshed) {
      res = await doFetch(refreshed);
    }
  }

  const text = await res.text();
  const json = text ? safeJson(text) : null;
  if (!res.ok) {
    throw new ApiError(
      res.status,
      (json as { message?: string })?.message ?? res.statusText,
      json,
    );
  }
  return json as T;
}

/** Public GET that never needs auth and can be cached. */
export function publicApi<T>(path: string, revalidate = 30): Promise<T> {
  return api<T>(path, { revalidate });
}

async function tryRefresh(): Promise<string | null> {
  const jar = await cookies();
  const rt = jar.get(COOKIE.refresh)?.value;
  if (!rt) return null;
  const res = await fetch(`${API_V1}/auth/refresh`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ refreshToken: rt }),
    cache: 'no-store',
  });
  if (!res.ok) return null;
  const tokens = (await res.json()) as {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
  // NB: route handlers / server actions can persist these; RSC cannot set
  // cookies, so a refreshed token here lives only for this request.
  try {
    jar.set(COOKIE.access, tokens.accessToken, cookieOpts(tokens.expiresIn));
    jar.set(COOKIE.refresh, tokens.refreshToken, cookieOpts(60 * 60 * 24 * 30));
  } catch {
    /* RSC render context — ignore */
  }
  return tokens.accessToken;
}

export function cookieOpts(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge,
  };
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
