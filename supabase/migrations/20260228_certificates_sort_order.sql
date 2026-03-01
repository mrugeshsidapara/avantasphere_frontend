-- Add sort_order to certificates for consistent ordering
alter table public.certificates
  add column if not exists sort_order integer not null default 999;
