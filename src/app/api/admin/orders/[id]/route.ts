import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { orderUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  const { id } = await params;
  const order = await orderRepository.findById(id, auth.supabase);
  if (!order) return apiError('Order not found', 404);
  return apiSuccess(order);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  const { id } = await params;
  const body = await request.json();
  const parsed = orderUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const order = await orderRepository.update(id, parsed.data, auth.supabase);
  if (!order) return apiNotFound('Order not found');
  return apiSuccess(order);
}
