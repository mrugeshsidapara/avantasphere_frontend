import { NextRequest } from "next/server";
import crypto from "crypto";
import { buyerCreateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { buyerRepository, userRepository } from "@/lib/repositories";

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

  if (data.user) {
    await buyerRepository.upsertProfile(
      {
        id: data.user.id,
        username: parsed.data.username,
        full_name: parsed.data.name,
        company_name: parsed.data.company ?? null,
        country: parsed.data.country ?? null,
        role: "buyer",
      },
      supabase,
    );
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .createHash("sha256")
      .update(salt + parsed.data.password)
      .digest("hex");
    const pwHash = `${salt}:${hash}`;
    await userRepository.upsert(
      {
        id: data.user.id,
        username: parsed.data.username,
        email: parsed.data.email,
        password_hash: pwHash,
        role: "buyer",
      },
      supabase,
    );
  }

  return apiSuccess({ registered: true }, 201);
}
