import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { orderUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const orders = await orderRepository.findAll();
  return apiSuccess(orders);
}
