/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `phone` (text, nullable) — optional phone number
  - `subject` (text, not null) — message subject / category
  - `message` (text, not null) — the full message body
  - `status` (text, not null, default 'new') — tracking status: new | read | responded
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_messages`.
- This is a public contact form on a no-auth marketing site. Visitors submit
  messages anonymously, so INSERT is allowed for `anon, authenticated` with a
  lightweight CHECK that required fields are non-empty.
- No public SELECT/UPDATE/DELETE: only service-role (admin) access reads and
  manages submissions. This keeps submitted contact details private.

3. Important Notes
- The frontend uses the anon-key Supabase client, so every insert runs as the
  `anon` role. The INSERT policy MUST list `anon` or submissions silently fail.
- There is intentionally no SELECT policy for anon — visitors must not be able
  to read other people's messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Idempotent: drop then recreate
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL AND length(btrim(name)) > 0
  AND email IS NOT NULL AND length(btrim(email)) > 0
  AND subject IS NOT NULL AND length(btrim(subject)) > 0
  AND message IS NOT NULL AND length(btrim(message)) > 0
);

-- Index for admin sorting by newest first
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
ON contact_messages (created_at DESC);
