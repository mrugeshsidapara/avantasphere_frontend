import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BUYER_PATHS = ['/buyer'];
const ADMIN_PATHS = ['/admin'];

function isBuyerPath(pathname: string) {
  return BUYER_PATHS.some((p) => pathname.startsWith(p));
}

function isAdminPath(pathname: string) {
  return ADMIN_PATHS.some((p) => pathname.startsWith(p));
}

function isAdminLogin(pathname: string) {
  return pathname === '/admin/login';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API, static, and auth routes
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.startsWith('/uploads')) {
    return NextResponse.next();
  }

  // Admin login page - allow
  if (isAdminLogin(pathname)) {
    return NextResponse.next();
  }

  // Admin routes - check cookie/header for admin session
  // In production: validate JWT/session from cookie
  if (isAdminPath(pathname)) {
    const role = request.cookies.get('user-role')?.value ?? request.headers.get('x-user-role');
    if (role !== 'admin') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Buyer routes - require auth
  if (isBuyerPath(pathname)) {
    const role = request.cookies.get('user-role')?.value ?? request.headers.get('x-user-role');
    if (role !== 'buyer') {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/buyer/:path*', '/admin/:path*'],
};
