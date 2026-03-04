-- =========================================================
-- EXTENSIONS
-- =========================================================
create extension if not exists "pgcrypto";

-- =========================================================
-- TABLE
-- =========================================================
drop table if exists public.app_users cascade;

create table public.app_users (
  id uuid primary key,
  username text not null unique,
  email text not null unique,
  password_hash text not null,
  role text not null default 'buyer',
  created_at timestamptz not null default now()
);

-- =========================================================
-- CONSTRAINTS
-- =========================================================
alter table public.app_users
add constraint app_users_role_check
check (role in ('admin', 'buyer', 'public'));

-- =========================================================
-- INDEXES
-- =========================================================
create index idx_app_users_email on public.app_users(email);
create index idx_app_users_username on public.app_users(username);
create index idx_app_users_role on public.app_users(role);

-- =========================================================
-- ROW LEVEL SECURITY
-- =========================================================
alter table public.app_users enable row level security;

-- =========================================================
-- POLICIES
-- =========================================================

-- User can read own profile
create policy "Users can read own profile"
on public.app_users
for select
to authenticated
using (auth.uid() = id);

-- Admin can read all users
create policy "Admin can read all users"
on public.app_users
for select
to authenticated
using (
  exists (
    select 1
    from public.app_users u
    where u.id = auth.uid()
      and u.role = 'admin'
  )
);

-- Admin full access
create policy "Admin full access"
on public.app_users
for all
to authenticated
using (
  exists (
    select 1
    from public.app_users u
    where u.id = auth.uid()
      and u.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.app_users u
    where u.id = auth.uid()
      and u.role = 'admin'
  )
);

-- =========================================================
-- SEED USERS (ADMIN + BUYER)
-- =========================================================

-- NOTE:
-- These UUIDs are static for development
-- If using Supabase Auth, IDs must match auth.users.id

insert into public.app_users (
  id,
  username,
  email,
  password_hash,
  role
)
values
(
  '11111111-1111-1111-1111-111111111111',
  'admin',
  'admin@example.com',
  '$2b$10$ADMIN_HASH_REPLACE_ME',
  'admin'
),
(
  '22222222-2222-2222-2222-222222222222',
  'buyer',
  'buyer@example.com',
  '$2b$10$BUYER_HASH_REPLACE_ME',
  'buyer'
)
on conflict (id) do nothing;