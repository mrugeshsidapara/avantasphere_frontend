import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { apiSuccess, apiError } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(_request: NextRequest) {
  const auth = await requireRole('buyer');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  if (!auth.user) return apiError('Unauthorized', 401);
  const orders = await orderRepository.findByBuyerId(auth.user.id, auth.supabase);
  return apiSuccess(orders);
}
