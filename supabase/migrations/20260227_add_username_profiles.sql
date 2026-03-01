-- add username column to profiles for login convenience
alter table public.profiles
  add column if not exists username text unique;

-- extend user_role enum with a "public" value (used for policies only)
do $$ begin
  alter type public.user_role add value if not exists 'public';
exception when duplicate_object then null; end $$;

-- policy allowing users to select their own profile by username or id
-- (existing policies already cover this but include username as searchable)

-- keep a separate table for application users including hashed password
-- this is maintained in parallel with auth.users so that the frontend or
-- other services can query credentials/roles without using Supabase auth API.
create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  email text unique not null,
  password_hash text not null,
  role user_role not null default 'buyer',
  created_at timestamptz not null default now()
);

-- simple RLS: users can only read their own record, admins can read all
alter table public.app_users enable row level security;
drop policy if exists "AppUsers: select own" on public.app_users;
create policy "AppUsers: select own"
  on public.app_users
  for select
  to authenticated
  using (auth.uid() = id or public.is_admin());

drop policy if exists "AppUsers: insert" on public.app_users;
create policy "AppUsers: insert"
  on public.app_users
  for insert
  to authenticated
  with check (auth.uid() = id or public.is_admin());

-- optionally create a helper view for convenience
create or replace view public.app_users_view as
select
  u.id,
  p.username,
  u.email,
  p.role,
  p.full_name as name,
  p.company_name as company,
  p.country,
  u.created_at
from auth.users u
join public.profiles p on p.id = u.id;
