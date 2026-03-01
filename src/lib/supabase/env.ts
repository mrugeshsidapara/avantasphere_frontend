function stripQuotes(val: string) {
  // remove surrounding quotes if present
  return val.replace(/^\s*"(.*)"\s*$/, "$1");
}

export function getSupabaseEnv() {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url) {
    throw new Error("Missing env: NEXT_PUBLIC_SUPABASE_URL");
  }
  if (!anonKey) {
    throw new Error("Missing env: NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  url = stripQuotes(url);
  anonKey = stripQuotes(anonKey);

  return { url, anonKey };
}
