import { NextRequest } from 'next/server';
import { productRepository } from '@/lib/repositories';
import { productUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = await productRepository.findById(id);
  if (!product) return apiNotFound('Product not found');
  return apiSuccess(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const parsed = productUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const product = await productRepository.update(id, parsed.data);
  if (!product) return apiNotFound('Product not found');
  return apiSuccess(product);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = await productRepository.delete(id);
  if (!deleted) return apiNotFound('Product not found');
  return apiSuccess({ deleted: true });
}
