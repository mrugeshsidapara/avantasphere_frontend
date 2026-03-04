import type { SupabaseClient } from "@supabase/supabase-js";
import type { AppUser } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface AppUserUpsertPayload {
  id: string; // auth.users.id
  username: string;
  email: string;
  role: "admin" | "buyer";
}

export interface IUserRepository {
  findById(id: string, client?: SupabaseClient): Promise<AppUser | null>;
  findByEmail(email: string, client?: SupabaseClient): Promise<AppUser | null>;
  findByUsername(
    username: string,
    client?: SupabaseClient,
  ): Promise<AppUser | null>;
  upsert(data: AppUserUpsertPayload, client?: SupabaseClient): Promise<void>;
}

export class UserRepository implements IUserRepository {
  private map(row: any): AppUser {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      role: row.role,
      createdAt: row.created_at,
    };
  }

  async findById(id: string, client?: SupabaseClient): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id, username, email, role, created_at")
      .eq("id", id)
      .single();

    if (error) return null;
    return this.map(data);
  }

  async findByEmail(
    email: string,
    client?: SupabaseClient,
  ): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id, username, email, role, created_at")
      .eq("email", email)
      .single();

    if (error) return null;
    return this.map(data);
  }

  async findByUsername(
    username: string,
    client?: SupabaseClient,
  ): Promise<AppUser | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("app_users")
      .select("id, username, email, role, created_at")
      .eq("username", username)
      .single();

    if (error) return null;
    return this.map(data);
  }

  async upsert(
    data: AppUserUpsertPayload,
    client?: SupabaseClient,
  ): Promise<void> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("app_users").upsert(
      {
        id: data.id,
        username: data.username,
        email: data.email,
        role: data.role,
      },
      { onConflict: "id" },
    );

    if (error) throw error;
  }
}

export const userRepository = new UserRepository();
