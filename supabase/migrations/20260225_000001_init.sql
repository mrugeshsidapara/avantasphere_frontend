-- ============================================================
-- Avantasphere: initial schema (Supabase / Postgres)
-- ============================================================

-- EXTENSIONS
create extension if not exists "pgcrypto";

-- ENUM TYPES
do $$ begin
  create type user_role as enum ('admin', 'buyer');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type order_status as enum (
    'pending',
    'confirmed',
    'processing',
    'shipped',
    'completed',
    'cancelled'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type inquiry_status as enum (
    'new',
    'responded',
    'negotiation',
    'converted',
    'rejected'
  );
exception
  when duplicate_object then null;
end $$;

-- ============================================================
-- PROFILES (Linked to Supabase Auth)
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  company_name text,
  phone text,
  country text,
  role user_role not null default 'buyer',
  created_at timestamptz not null default now()
);

create index if not exists profiles_role_idx on public.profiles(role);

-- Auto-create profile row on sign up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, company_name, phone, country, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', null),
    coalesce(new.raw_user_meta_data ->> 'company_name', null),
    coalesce(new.raw_user_meta_data ->> 'phone', null),
    coalesce(new.raw_user_meta_data ->> 'country', null),
    coalesce((new.raw_app_meta_data ->> 'role')::user_role, 'buyer'::user_role)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- HELPERS
-- (depend on public.profiles)
-- ============================================================
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ============================================================
-- CATEGORIES
-- (Adjusted to match frontend fields)
-- ============================================================
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text not null default '',
  image text,
  product_count integer not null default 0,
  subcategories text[] not null default '{}'::text[],
  sort_order integer not null default 999,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ============================================================
-- PRODUCTS
-- (Adjusted to match frontend fields; specs are also stored in product_specifications)
-- ============================================================
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text unique not null,
  description text not null default '',
  hs_code text,
  moq text,
  packaging text,
  shipping_port text,
  images text[] not null default '{}'::text[],
  applications text[] not null default '{}'::text[],
  certificate_ids uuid[] not null default '{}'::uuid[],
  sort_order integer not null default 999,
  is_certified boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category_id);
create index if not exists products_slug_idx on public.products(slug);

-- PRODUCT SPECIFICATIONS (Dynamic Fields)
create table if not exists public.product_specifications (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  label text not null,
  value text not null
);

create index if not exists product_specs_product_idx on public.product_specifications(product_id);

-- Convenience view for frontend: specs aggregated as jsonb map
create or replace view public.products_with_specs as
select
  p.*,
  coalesce(
    jsonb_object_agg(ps.label, ps.value) filter (where ps.id is not null),
    '{}'::jsonb
  ) as specifications
from public.products p
left join public.product_specifications ps on ps.product_id = p.id
group by p.id;

-- ============================================================
-- CERTIFICATES
-- ============================================================
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  document_url text,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

-- ============================================================
-- INQUIRIES
-- ============================================================
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  message text,
  status inquiry_status not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists inquiries_buyer_idx on public.inquiries(buyer_id);

-- ============================================================
-- ORDERS
-- ============================================================
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  total_amount numeric,
  currency text not null default 'USD',
  status order_status not null default 'pending',
  created_at timestamptz not null default now()
);

create index if not exists orders_buyer_idx on public.orders(buyer_id);

-- ============================================================
-- ORDER ITEMS
-- ============================================================
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  quantity numeric,
  price numeric
);

create index if not exists order_items_order_idx on public.order_items(order_id);

-- ============================================================
-- SHIPMENTS
-- ============================================================
create table if not exists public.shipments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  tracking_number text,
  carrier text,
  estimated_delivery date,
  status text
);

create index if not exists shipments_order_idx on public.shipments(order_id);

-- ============================================================
-- DOCUMENTS (Invoices, BL, Certificates, etc.)
-- ============================================================
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  name text,
  file_url text,
  created_at timestamptz not null default now()
);

create index if not exists documents_order_idx on public.documents(order_id);

-- ============================================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================================
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.inquiries enable row level security;
alter table public.orders enable row level security;
alter table public.documents enable row level security;

-- ============================================================
-- PROFILES POLICIES
-- ============================================================
drop policy if exists "Profiles: select own" on public.profiles;
create policy "Profiles: select own"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Profiles: insert own" on public.profiles;
create policy "Profiles: insert own"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "Profiles: update own" on public.profiles;
create policy "Profiles: update own"
on public.profiles
for update
to authenticated
using (auth.uid() = id);

drop policy if exists "Profiles: admin all" on public.profiles;
create policy "Profiles: admin all"
on public.profiles
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ============================================================
-- CATEGORIES POLICIES
-- ============================================================
drop policy if exists "Categories: public read active" on public.categories;
create policy "Categories: public read active"
on public.categories
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Categories: admin write" on public.categories;
create policy "Categories: admin write"
on public.categories
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ============================================================
-- PRODUCTS POLICIES
-- ============================================================
drop policy if exists "Products: public read active" on public.products;
create policy "Products: public read active"
on public.products
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Products: admin write" on public.products;
create policy "Products: admin write"
on public.products
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ============================================================
-- BUYER POLICIES
-- ============================================================
drop policy if exists "Inquiries: buyer read own" on public.inquiries;
create policy "Inquiries: buyer read own"
on public.inquiries
for select
to authenticated
using (buyer_id = auth.uid());

drop policy if exists "Inquiries: buyer create" on public.inquiries;
create policy "Inquiries: buyer create"
on public.inquiries
for insert
to authenticated
with check (buyer_id = auth.uid());

drop policy if exists "Orders: buyer read own" on public.orders;
create policy "Orders: buyer read own"
on public.orders
for select
to authenticated
using (buyer_id = auth.uid());

drop policy if exists "Documents: buyer read own" on public.documents;
create policy "Documents: buyer read own"
on public.documents
for select
to authenticated
using (
  exists (
    select 1 from public.orders o
    where o.id = documents.order_id
      and o.buyer_id = auth.uid()
  )
);

-- ============================================================
-- ADMIN FULL ACCESS POLICIES (via is_admin())
-- ============================================================
drop policy if exists "Inquiries: admin all" on public.inquiries;
create policy "Inquiries: admin all"
on public.inquiries
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Orders: admin all" on public.orders;
create policy "Orders: admin all"
on public.orders
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Documents: admin all" on public.documents;
create policy "Documents: admin all"
on public.documents
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ============================================================
-- END
-- ============================================================

