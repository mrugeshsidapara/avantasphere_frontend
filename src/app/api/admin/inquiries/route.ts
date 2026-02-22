import { NextRequest } from 'next/server';
import { inquiryRepository } from '@/lib/repositories';
import { inquiryUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const inquiries = await inquiryRepository.findAll();
  return apiSuccess(inquiries);
}
