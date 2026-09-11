import { NextResponse, type NextRequest } from 'next/server';
import { createRankingSchema } from '@voteverse/shared';
import { forward } from '@/lib/bff';

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = createRankingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? 'Invalid ranking' },
      { status: 400 },
    );
  }
  return forward('/rankings', { method: 'POST', body: parsed.data });
}
