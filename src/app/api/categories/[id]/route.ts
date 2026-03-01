import { NextRequest } from 'next/server';
import { categoryRepository } from '@/lib/repositories';
import { categoryUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const category = await categoryRepository.findById(id);
  if (!category) return apiNotFound('Category not found');
  return apiSuccess(category);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);

  const { id } = await params;
  const body = await request.json();
  const parsed = categoryUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const category = await categoryRepository.update(id, parsed.data);
  if (!category) return apiNotFound('Category not found');
  return apiSuccess(category);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);

  const { id } = await params;
  const deleted = await categoryRepository.delete(id);
  if (!deleted) return apiNotFound('Category not found');
  return apiSuccess({ deleted: true });
}
