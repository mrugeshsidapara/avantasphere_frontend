import { NextRequest } from 'next/server';
import { buyerRepository } from '@/lib/repositories';
import { buyerCreateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  let body: Record<string, string>;
  if (contentType.includes('application/json')) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(
      [...formData.entries()].map(([k, v]) => [k, String(v)])
    ) as Record<string, string>;
  }
  const parsed = buyerCreateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const existing = await buyerRepository.findByEmail(parsed.data.email);
  if (existing) return apiError('Email already registered');
  const { password: _p, ...rest } = parsed.data;
  const buyer = await buyerRepository.create({
    ...rest,
    company: rest.company ?? '',
    country: rest.country ?? '',
  });
  return apiSuccess(buyer, 201);
}
