import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import type {
  DbProfile,
  ProfileUpsertInput,
  GameSessionInput,
  DbGameSession,
} from "./types";
import {
  localUpsertProfile,
  localGetProfile,
  localRecordSession,
} from "./local-store";

export async function upsertProfile(
  input: ProfileUpsertInput
): Promise<DbProfile> {
  if (!isSupabaseConfigured()) {
    return localUpsertProfile(input);
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) return localUpsertProfile(input);

  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        device_id: input.deviceId,
        display_name: input.displayName,
        xp: input.xp,
        level: input.level,
        streak: input.streak,
        total_games_played: input.totalGamesPlayed,
        stats: input.stats,
        badges: input.badges,
        daily_progress: input.dailyProgress,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "device_id" }
    )
    .select()
    .single();

  if (error) {
    console.error("[db] Supabase upsert error:", error.message);
    return localUpsertProfile(input);
  }

  return data as DbProfile;
}

export async function getProfile(deviceId: string): Promise<DbProfile | null> {
  if (!isSupabaseConfigured()) return localGetProfile(deviceId);

  const supabase = await createServerSupabaseClient();
  if (!supabase) return localGetProfile(deviceId);

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("device_id", deviceId)
    .single();

  if (error || !data) return localGetProfile(deviceId);
  return data as DbProfile;
}

export async function recordGameSession(
  input: GameSessionInput
): Promise<DbGameSession | null> {
  if (!isSupabaseConfigured()) return localRecordSession(input);

  const supabase = await createServerSupabaseClient();
  if (!supabase) return localRecordSession(input);

  const profile = await getProfile(input.deviceId);
  if (!profile) return localRecordSession(input);

  const { data, error } = await supabase
    .from("game_sessions")
    .insert({
      profile_id: profile.id,
      mode: input.mode,
      score: input.score,
      total: input.total,
      xp_earned: input.xpEarned,
    })
    .select()
    .single();

  if (error) {
    console.error("[db] Supabase session error:", error.message);
    return localRecordSession(input);
  }

  return data as DbGameSession;
}
