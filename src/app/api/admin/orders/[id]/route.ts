import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { orderUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const { id } = await params;
  const order = await orderRepository.findById(id);
  if (!order) return apiError('Order not found', 404);
  return apiSuccess(order);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const { id } = await params;
  const body = await request.json();
  const parsed = orderUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const order = await orderRepository.update(id, parsed.data);
  if (!order) return apiNotFound('Order not found');
  return apiSuccess(order);
}
