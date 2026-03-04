import { NextRequest } from "next/server";
import { loginSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { userRepository } from "@/lib/repositories";

/**
 * Unified login for admin and buyer
 */
export async function POST(request: NextRequest) {
  // 1️⃣ Validate body
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(", "), 400);
  }

  let { identifier, password } = parsed.data;

  // 2️⃣ Resolve identifier → email
  let email = identifier.trim();

  if (!email.includes("@")) {
    const appUser = await userRepository.findByUsername(email);
    if (!appUser?.email) {
      return apiError("Invalid username or password", 401);
    }
    email = appUser.email;
  }

  // 3️⃣ Authenticate with Supabase Auth
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: password.trim(),
  });

  if (error || !data.user) {
    return apiError("Invalid email or password", 401);
  }

  // 4️⃣ Load profile from app_users (MANDATORY)
  const profile = await userRepository.findById(data.user.id, supabase);

  if (!profile) {
    return apiError("User profile not found", 403);
  }

  if (!["admin", "buyer"].includes(profile.role)) {
    return apiError("Unauthorized account type", 403);
  }

  // 5️⃣ Build response user
  const user = {
    id: data.user.id,
    email: data.user.email!,
    username: profile.username,
    role: profile.role as "admin" | "buyer",
  };
  console.log("Login successful for user:", user);
  return apiSuccess({ user });
}
