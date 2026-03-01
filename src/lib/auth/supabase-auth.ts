import { createSupabaseServerClient } from '@/lib/supabase/server';
import { buyerRepository } from '@/lib/repositories';

export type AppRole = 'admin' | 'buyer';

export async function getSupabaseUserAndRole() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;
  if (!user) return { supabase, user: null, role: null as AppRole | null };

  const profile = await buyerRepository.findById(user.id, supabase);
  const role = (profile?.role ?? 'buyer') as AppRole;

  return { supabase, user, role };
}

export async function requireRole(required: AppRole) {
  const { supabase, user, role } = await getSupabaseUserAndRole();
  if (!user) return { supabase, user: null, role: null as AppRole | null, ok: false, status: 401 as const };
  if (role !== required) return { supabase, user, role, ok: false, status: 403 as const };
  return { supabase, user, role, ok: true, status: 200 as const };
}

