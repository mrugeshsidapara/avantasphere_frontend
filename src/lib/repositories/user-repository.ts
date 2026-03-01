import type { AppUser } from "@/lib/types";

export interface IUserRepository {
  findById(id: string): Promise<AppUser | null>;
  findByEmail(email: string): Promise<AppUser | null>;
  findByUsername(username: string): Promise<AppUser | null>;
}

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<AppUser | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
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

  async findByEmail(email: string): Promise<AppUser | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
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

  async findByUsername(username: string): Promise<AppUser | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
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
}

export const userRepository = new UserRepository();
