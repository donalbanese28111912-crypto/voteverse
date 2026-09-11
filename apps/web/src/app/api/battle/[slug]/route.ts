import type { NextRequest } from 'next/server';
import { forward } from '@/lib/bff';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const window = new URL(req.url).searchParams.get('window') ?? 'ALL_TIME';
  return forward(
    `/battles/${encodeURIComponent(slug)}?window=${encodeURIComponent(window)}`,
    { method: 'GET' },
  );
}
