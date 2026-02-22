import { NextRequest } from 'next/server';
import { loginSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';

// Placeholder: replace with real auth (NextAuth, JWT, etc.)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@avantasphere.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'admin123';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  if (parsed.data.email !== ADMIN_EMAIL || parsed.data.password !== ADMIN_PASSWORD) {
    return apiError('Invalid credentials', 401);
  }
  // In production: issue JWT/session
  return apiSuccess({
    user: { id: 'admin-1', email: parsed.data.email, role: 'admin' },
    token: 'placeholder-token',
  });
}
