import { NextRequest } from 'next/server';
import { loginSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';
import { STATIC_CREDENTIALS } from '@/lib/constants/auth';

/**
 * Unified login for both admin and buyer.
 * Static credentials from @/lib/constants/auth
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }

  const { email, password } = parsed.data;

  // Check admin
  if (email === STATIC_CREDENTIALS.admin.email && password === STATIC_CREDENTIALS.admin.password) {
    const user = {
      id: STATIC_CREDENTIALS.admin.id,
      email: STATIC_CREDENTIALS.admin.email,
      role: STATIC_CREDENTIALS.admin.role,
      name: 'Admin',
    };
    const response = apiSuccess({ user, token: 'static-admin-token' });
    // Set cookies for middleware
    response.cookies.set('user-id', user.id, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    response.cookies.set('user-role', user.role, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    response.cookies.set('user-email', user.email, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    return response;
  }

  // Check buyer
  if (email === STATIC_CREDENTIALS.buyer.email && password === STATIC_CREDENTIALS.buyer.password) {
    const user = {
      id: STATIC_CREDENTIALS.buyer.id,
      email: STATIC_CREDENTIALS.buyer.email,
      role: STATIC_CREDENTIALS.buyer.role,
      name: 'Sample Buyer',
    };
    const response = apiSuccess({ user, token: 'static-buyer-token' });
    response.cookies.set('user-id', user.id, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    response.cookies.set('user-role', user.role, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    response.cookies.set('user-email', user.email, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });
    return response;
  }

  return apiError('Invalid email or password', 401);
}
