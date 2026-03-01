import { cookies } from 'next/headers';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { getSupabaseEnv } from './env';

let backendClient: SupabaseClient | null = null;

/**
 * Single reusable server-side client for API routes and Server Components.
 * Uses request cookies when available so auth works for write operations.
 */
export async function createSupabaseServerClient(): Promise<SupabaseClient> {
  const { url, anonKey } = getSupabaseEnv();
  try {
    const cookieStore = await cookies();
    return createServerClient(url, anonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    });
  } catch {
    // Fallback when cookies() is not available (e.g. static context): use anon client for read-only
    return getSupabaseBackendClient();
  }
}

/**
 * Backend-only client (no cookies). Use for repository reads when no auth is needed,
 * or when request context is not available. All DB access still goes through repositories.
 */
export function getSupabaseBackendClient(): SupabaseClient {
  if (backendClient) return backendClient;
  const { url, anonKey } = getSupabaseEnv();
  backendClient = createClient(url, anonKey);
  return backendClient;
}

