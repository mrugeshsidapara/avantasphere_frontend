import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@/lib/supabase/middleware";
import { buyerRepository } from "@/lib/repositories";

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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/uploads")
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const supabase = createSupabaseMiddlewareClient(request, response);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isAdminLogin(pathname) || isBuyerLogin(pathname)) {
    return response;
  }

  if (isAdminPath(pathname)) {
    if (!user) return NextResponse.redirect(new URL("/admin/login", request.url));
    const profile = await buyerRepository.findById(user.id, supabase);
    if (profile?.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (isBuyerPath(pathname)) {
    if (!user) return NextResponse.redirect(new URL("/buyer/login", request.url));
    const profile = await buyerRepository.findById(user.id, supabase);
    if (profile?.role !== "buyer") {
      return NextResponse.redirect(new URL("/buyer/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/buyer/:path*", "/admin/:path*"],
};
