import type { SupabaseClient } from "@supabase/supabase-js";
import type { AppUser } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface AppUserUpsertPayload {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  role: string;
}

export interface IUserRepository {
  findById(id: string, client?: SupabaseClient): Promise<AppUser | null>;
  findByEmail(email: string, client?: SupabaseClient): Promise<AppUser | null>;
  findByUsername(username: string, client?: SupabaseClient): Promise<AppUser | null>;
  upsert(data: AppUserUpsertPayload, client?: SupabaseClient): Promise<void>;
}

export class UserRepository implements IUserRepository {
  async findById(id: string, client?: SupabaseClient): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id,username,email,role,created_at")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      role: data.role,
      createdAt: data.created_at,
    };
  }

  async findByEmail(email: string, client?: SupabaseClient): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id,username,email,role,created_at")
      .eq("email", email)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      role: data.role,
      createdAt: data.created_at,
    };
  }

  async findByUsername(username: string, client?: SupabaseClient): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id,username,email,role,created_at")
      .eq("username", username)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      role: data.role,
      createdAt: data.created_at,
    };
  }

  async upsert(data: AppUserUpsertPayload, client?: SupabaseClient): Promise<void> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("app_users").upsert(
      {
        id: data.id,
        username: data.username,
        email: data.email,
        password_hash: data.password_hash,
        role: data.role,
      },
      { onConflict: "id" },
    );
    if (error) throw error;
  }
}

export const userRepository = new UserRepository();
