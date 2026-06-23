-- JW Games — Schéma initial Supabase
-- Exécuter dans l'éditeur SQL Supabase ou via CLI

-- Profils joueurs
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  streak INTEGER NOT NULL DEFAULT 0,
  total_games_played INTEGER NOT NULL DEFAULT 0,
  stats JSONB NOT NULL DEFAULT '{}',
  badges JSONB NOT NULL DEFAULT '[]',
  daily_progress JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sessions de jeu
CREATE TABLE IF NOT EXISTS game_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  mode TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 0,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index pour le classement
CREATE INDEX IF NOT EXISTS idx_profiles_xp ON profiles(xp DESC);
CREATE INDEX IF NOT EXISTS idx_game_sessions_created ON game_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_game_sessions_profile ON game_sessions(profile_id);

-- Mise à jour automatique de updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS : lecture publique du classement, écriture via API
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture publique des profils"
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Insertion profils"
  ON profiles FOR INSERT WITH CHECK (true);

CREATE POLICY "Mise à jour profils"
  ON profiles FOR UPDATE USING (true);

CREATE POLICY "Lecture sessions"
  ON game_sessions FOR SELECT USING (true);

CREATE POLICY "Insertion sessions"
  ON game_sessions FOR INSERT WITH CHECK (true);
