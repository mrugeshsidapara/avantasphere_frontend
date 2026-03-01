import { NextRequest } from "next/server";
import crypto from "crypto";
import { buyerCreateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  let body: Record<string, string>;
  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(
      [...formData.entries()].map(([k, v]) => [k, String(v)]),
    ) as Record<string, string>;
  }
  const parsed = buyerCreateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(", "));
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        full_name: parsed.data.name,
        company_name: parsed.data.company ?? null,
        country: parsed.data.country ?? null,
        username: parsed.data.username,
      },
    },
  });

  if (error) {
    return apiError(error.message);
  }

  // If email confirmations are disabled, a session may exist already.
  // Ensure we have a profile row with buyer details.
  if (data.user) {
    // persist profile details
    await supabase.from("profiles").upsert(
      {
        id: data.user.id,
        username: parsed.data.username,
        full_name: parsed.data.name,
        company_name: parsed.data.company ?? null,
        country: parsed.data.country ?? null,
        role: "buyer",
      },
      { onConflict: "id" },
    );
    // also store credentials in our app_users table (hashed with salt)
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .createHash("sha256")
      .update(salt + parsed.data.password)
      .digest("hex");
    const pwHash = `${salt}:${hash}`;
    await supabase.from("app_users").upsert(
      {
        id: data.user.id,
        username: parsed.data.username,
        email: parsed.data.email,
        password_hash: pwHash,
        role: "buyer",
      },
      { onConflict: "id" },
    );
  }

  return apiSuccess({ registered: true }, 201);
}
