
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now(),
  constraint contact_messages_name_length
    check (char_length(name) between 2 and 80),
  constraint contact_messages_email_length
    check (char_length(email) between 5 and 120),
  constraint contact_messages_subject_length
    check (char_length(subject) between 2 and 120),
  constraint contact_messages_message_length
    check (char_length(message) between 10 and 2000)
);

alter table public.contact_messages enable row level security;

drop policy if exists
"Anyone can submit a contact message"
on public.contact_messages;

create policy "Anyone can submit a contact message"
on public.contact_messages
for insert
to anon, authenticated
with check (
  char_length(name) between 2 and 80
  and char_length(email) between 5 and 120
  and char_length(subject) between 2 and 120
  and char_length(message) between 10 and 2000
);

grant usage on schema public to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
