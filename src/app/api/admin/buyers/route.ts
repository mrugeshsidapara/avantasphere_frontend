import { NextRequest } from 'next/server';
import { buyerRepository } from '@/lib/repositories';
import { apiSuccess, apiError } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const buyers = await buyerRepository.findAll();
  return apiSuccess(buyers);
}
