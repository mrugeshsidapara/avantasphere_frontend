import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BUYER_PATHS = ["/buyer"];
const ADMIN_PATHS = ["/admin"];

function isBuyerPath(pathname: string) {
  return BUYER_PATHS.some((p) => pathname.startsWith(p));
}

function isAdminPath(pathname: string) {
  return ADMIN_PATHS.some((p) => pathname.startsWith(p));
}

function isAdminLogin(pathname: string) {
  return pathname === "/admin/login";
}

function isBuyerLogin(pathname: string) {
  return pathname === "/buyer/login";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API & static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/uploads")
  ) {
    return NextResponse.next();
  }

  // Allow login pages
  if (isAdminLogin(pathname) || isBuyerLogin(pathname)) {
    return NextResponse.next();
  }

  // Admin routes
  if (isAdminPath(pathname)) {
    const role =
      request.cookies.get("user-role")?.value ??
      request.headers.get("x-user-role");

    if (role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Buyer routes
  if (isBuyerPath(pathname)) {
    const role =
      request.cookies.get("user-role")?.value ??
      request.headers.get("x-user-role");

    if (role !== "buyer") {
      return NextResponse.redirect(new URL("/buyer/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/buyer/:path*", "/admin/:path*"],
};
