-- Bunny Care – Supabase Schema
-- Run this in your Supabase SQL Editor

-- Photos table
CREATE TABLE photos (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  url TEXT NOT NULL,
  caption TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Journals / Mood entries
CREATE TABLE journals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mood TEXT NOT NULL,
  note TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Love messages (optional, for adding custom messages)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional, for public access disable RLS or add policies)
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Public read/write policies (simple setup, tighten for production)
CREATE POLICY "Public access photos" ON photos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access journals" ON journals FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access messages" ON messages FOR ALL USING (true) WITH CHECK (true);

-- Storage bucket for photos
-- Go to Supabase Dashboard > Storage > Create bucket named "photos" (public)
