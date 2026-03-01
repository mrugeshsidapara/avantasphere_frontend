import { NextRequest } from "next/server";
import { loginSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Unified login for both admin and buyer.
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(", "));
  }

  let { identifier, password } = parsed.data;

  const supabase = await createSupabaseServerClient();
  // if identifier doesn't look like an email, treat as username and look up email
  let email = identifier;
  if (!identifier.includes("@")) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("id, email, username")
      .eq("username", identifier)
      .maybeSingle();
    if (profile && profile.email) {
      email = profile.email;
    }
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return apiError(error?.message ?? "Invalid email or password", 401);
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, full_name, username")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profileError) {
    return apiError("Failed to load user profile", 500);
  }

  const role = (profile?.role ?? "buyer") as "admin" | "buyer";
  const user = {
    id: data.user.id,
    email: data.user.email ?? email,
    username: profile?.username ?? undefined,
    role,
    name: profile?.full_name ?? data.user.user_metadata?.full_name ?? undefined,
  };

  return apiSuccess({ user });
}
