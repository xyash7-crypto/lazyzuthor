-- Create scribbles table to store user drawings
create table if not exists public.scribbles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  strokes jsonb not null default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.scribbles enable row level security;

-- Create RLS policies
create policy "Users can view their own scribbles"
  on public.scribbles for select
  using (auth.uid() = user_id);

create policy "Users can insert their own scribbles"
  on public.scribbles for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own scribbles"
  on public.scribbles for update
  using (auth.uid() = user_id);

create policy "Users can delete their own scribbles"
  on public.scribbles for delete
  using (auth.uid() = user_id);

-- Create index for faster queries
create index if not exists scribbles_user_id_idx on public.scribbles(user_id);
create index if not exists scribbles_created_at_idx on public.scribbles(created_at desc);

-- Create function to auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Create trigger to auto-update updated_at
drop trigger if exists set_updated_at on public.scribbles;
create trigger set_updated_at
  before update on public.scribbles
  for each row
  execute function public.handle_updated_at();
