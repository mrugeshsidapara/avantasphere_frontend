// Simple session/auth helpers - replace with NextAuth/Redis when scaling

export type SessionUser = {
  id: string;
  email: string;
  role: 'admin' | 'buyer';
  name?: string;
};

// In production, use JWT or server-side sessions
// This is a placeholder for middleware to read role from headers/cookies
export function getSessionFromHeaders(headers: Headers): SessionUser | null {
  const authHeader = headers.get('authorization');
  const role = headers.get('x-user-role') as 'admin' | 'buyer' | null;
  const userId = headers.get('x-user-id');
  const email = headers.get('x-user-email');

  if (!authHeader || !role || !userId || !email) return null;

  // Basic check - in production validate JWT
  if (authHeader.startsWith('Bearer ')) {
    return {
      id: userId,
      email,
      role,
      name: headers.get('x-user-name') ?? undefined,
    };
  }
  return null;
}
