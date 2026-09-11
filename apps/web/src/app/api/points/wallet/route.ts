import { forward } from '@/lib/bff';

export async function GET() {
  return forward('/points/wallet', { method: 'GET' });
}
