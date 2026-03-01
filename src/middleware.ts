import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@/lib/supabase/middleware";

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

  // Skip API & static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/uploads")
  ) {
    return NextResponse.next();
  }

  let response = NextResponse.next();
  const supabase = createSupabaseMiddlewareClient(request, response);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow login pages
  if (isAdminLogin(pathname) || isBuyerLogin(pathname)) {
    return response;
  }

  // Admin routes
  if (isAdminPath(pathname)) {
    if (!user) return NextResponse.redirect(new URL("/admin/login", request.url));
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    if (profile?.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Buyer routes
  if (isBuyerPath(pathname)) {
    if (!user) return NextResponse.redirect(new URL("/buyer/login", request.url));
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    if (profile?.role !== "buyer") {
      return NextResponse.redirect(new URL("/buyer/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/buyer/:path*", "/admin/:path*"],
};
