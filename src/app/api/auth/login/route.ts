import { NextRequest } from "next/server";
import { loginSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { buyerRepository, userRepository } from "@/lib/repositories";

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

  let email = identifier;
  if (!identifier.includes("@")) {
    const appUser = await userRepository.findByUsername(identifier);
    if (appUser?.email) {
      email = appUser.email;
    }
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return apiError(error?.message ?? "Invalid email or password", 401);
  }

  const profile = await buyerRepository.findById(data.user.id, supabase);
  const role = (profile?.role ?? "buyer") as "admin" | "buyer";
  const user = {
    id: data.user.id,
    email: data.user.email ?? email,
    username: profile?.username ?? undefined,
    role,
    name: profile?.name ?? data.user.user_metadata?.full_name ?? undefined,
  };

  return apiSuccess({ user });
}
