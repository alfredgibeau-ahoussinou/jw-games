import type { ProfileUpsertInput, GameSessionInput } from "@/lib/db/types";
import type { GameMode } from "@/types/game";

export async function syncProfile(input: ProfileUpsertInput) {
  const res = await fetch("/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error("Échec de la synchronisation du profil");
  return res.json();
}

export async function fetchProfile(deviceId: string) {
  const res = await fetch(`/api/profile?deviceId=${encodeURIComponent(deviceId)}`);
  if (!res.ok) return null;
  return res.json();
}

export async function recordSession(input: GameSessionInput) {
  const res = await fetch("/api/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error("Échec de l'enregistrement de la session");
  return res.json();
}

export interface GameResultPayload {
  mode: GameMode;
  score: number;
  total: number;
  xpEarned: number;
}
