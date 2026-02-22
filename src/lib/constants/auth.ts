/**
 * Static login credentials for development/demo.
 * Replace with real auth (NextAuth, JWT, DB) in production.
 */

export const STATIC_CREDENTIALS = {
  admin: {
    email: 'admin@avantasphere.com',
    password: 'admin123',
    id: 'admin-1',
    role: 'admin' as const,
  },
  buyer: {
    email: 'buyer@example.com',
    password: 'buyer123',
    id: 'buyer-1',
    role: 'buyer' as const,
  },
} as const;
