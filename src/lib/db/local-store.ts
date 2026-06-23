import { promises as fs } from "fs";
import path from "path";
import type {
  DbProfile,
  ProfileUpsertInput,
  GameSessionInput,
  DbGameSession,
} from "./types";
import {
  emptyDailyProgress as createEmptyDaily,
  resetDailyIfNeeded as resetDaily,
  todayDateString as today,
} from "./types";
import { XP_PER_LEVEL } from "@/lib/constants";

const DB_DIR = path.join(process.cwd(), "data", "db");
const PROFILES_FILE = path.join(DB_DIR, "profiles.json");
const SESSIONS_FILE = path.join(DB_DIR, "sessions.json");

interface LocalDb {
  profiles: DbProfile[];
  sessions: DbGameSession[];
}

async function ensureDb(): Promise<LocalDb> {
  await fs.mkdir(DB_DIR, { recursive: true });

  try {
    const [profilesRaw, sessionsRaw] = await Promise.all([
      fs.readFile(PROFILES_FILE, "utf-8").catch(() => "[]"),
      fs.readFile(SESSIONS_FILE, "utf-8").catch(() => "[]"),
    ]);
    return {
      profiles: JSON.parse(profilesRaw) as DbProfile[],
      sessions: JSON.parse(sessionsRaw) as DbGameSession[],
    };
  } catch {
    return { profiles: [], sessions: [] };
  }
}

async function saveDb(db: LocalDb) {
  await fs.mkdir(DB_DIR, { recursive: true });
  await Promise.all([
    fs.writeFile(PROFILES_FILE, JSON.stringify(db.profiles, null, 2)),
    fs.writeFile(SESSIONS_FILE, JSON.stringify(db.sessions, null, 2)),
  ]);
}

function levelFromXp(xp: number) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export async function localUpsertProfile(
  input: ProfileUpsertInput
): Promise<DbProfile> {
  const db = await ensureDb();
  const now = new Date().toISOString();
  const existing = db.profiles.find((p) => p.device_id === input.deviceId);

  const profile: DbProfile = {
    id: existing?.id ?? crypto.randomUUID(),
    device_id: input.deviceId,
    display_name: input.displayName,
    xp: input.xp,
    level: input.level,
    streak: input.streak,
    total_games_played: input.totalGamesPlayed,
    stats: input.stats,
    badges: input.badges,
    daily_progress: resetDaily(input.dailyProgress),
    created_at: existing?.created_at ?? now,
    updated_at: now,
  };

  if (existing) {
    db.profiles = db.profiles.map((p) =>
      p.device_id === input.deviceId ? profile : p
    );
  } else {
    db.profiles.push(profile);
  }

  await saveDb(db);
  return profile;
}

export async function localGetProfile(
  deviceId: string
): Promise<DbProfile | null> {
  const db = await ensureDb();
  return db.profiles.find((p) => p.device_id === deviceId) ?? null;
}

export async function localRecordSession(
  input: GameSessionInput
): Promise<DbGameSession | null> {
  const db = await ensureDb();
  const profile = db.profiles.find((p) => p.device_id === input.deviceId);
  if (!profile) return null;

  const session: DbGameSession = {
    id: crypto.randomUUID(),
    profile_id: profile.id,
    mode: input.mode,
    score: input.score,
    total: input.total,
    xp_earned: input.xpEarned,
    created_at: new Date().toISOString(),
  };

  db.sessions.push(session);
  await saveDb(db);
  return session;
}

export { createEmptyDaily, resetDaily, today };
