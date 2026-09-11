import { NextResponse, type NextRequest } from 'next/server';
import { boostSchema } from '@rankly/shared';
import { forward } from '@/lib/bff';

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = boostSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid boost' }, { status: 400 });
  }
  return forward('/points/boost', { method: 'POST', body: parsed.data });
}
