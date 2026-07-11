-- Retrait de l'index de classement (déploiements Supabase existants uniquement)
-- L'application n'utilise plus Supabase ; exécuter seulement si l'ancien schéma était déployé.

DROP INDEX IF EXISTS idx_profiles_xp;
