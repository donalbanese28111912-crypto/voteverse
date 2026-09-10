import { NextResponse, type NextRequest } from 'next/server';
import { castVoteSchema } from '@rankly/shared';
import { forward } from '@/lib/bff';

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = castVoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid vote' }, { status: 400 });
  }
  const url = new URL(req.url);
  const window = url.searchParams.get('window');
  const qs = window ? `?window=${encodeURIComponent(window)}` : '';
  return forward(`/votes${qs}`, { method: 'POST', body: parsed.data });
}
