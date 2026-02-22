import { NextRequest } from 'next/server';
import { homepageRepository } from '@/lib/repositories';
import { homepageSectionUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';

export async function GET() {
  const sections = await homepageRepository.getSections();
  return apiSuccess(sections);
}

export async function PATCH(request: NextRequest) {
  const body = (await request.json()) as Record<string, { enabled: boolean; sortOrder?: number }>;
  const key = Object.keys(body)[0];
  if (!key) return apiError('Section key required');
  const value = body[key];
  const parsed = homepageSectionUpdateSchema.safeParse(value);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const sections = await homepageRepository.updateSection(key, parsed.data);
  return apiSuccess(sections);
}
