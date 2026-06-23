"use client";

import { useState } from "react";
import { Star, Flame, Target, Award, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { GameModeIcon } from "@/components/game/GameModeIcon";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { BADGE_DEFINITIONS } from "@/lib/badges";
import { GAME_MODES, XP_PER_LEVEL } from "@/lib/constants";
import { useUserStore } from "@/stores/user-store";

export default function ProfilPage() {
  const { profile, isOnboarded, initProfile } = useUserStore();
  const [name, setName] = useState("");

  if (!isOnboarded || !profile) {
    return (
      <PageWrapper>
        <Container narrow>
          <PageHeader
            title="Votre profil"
            description="Un prénom suffit pour sauvegarder votre XP, vos badges et votre série quotidienne."
          />
          <Card>
            <label htmlFor="profile-name" className="mb-2 block text-sm font-medium">
              Prénom ou pseudo
            </label>
            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex. Marie"
              maxLength={20}
              autoComplete="nickname"
              className="input-field mb-4"
            />
            <Button
              className="w-full"
              size="lg"
              disabled={name.trim().length < 2}
              onClick={() => initProfile(name.trim())}
            >
              Commencer
            </Button>
          </Card>
        </Container>
      </PageWrapper>
    );
  }

  const xpInLevel = profile.xp % XP_PER_LEVEL;
  const earnedIds = new Set(profile.badges.map((b) => b.id));

  return (
    <PageWrapper>
      <Container narrow>
        <header className="mb-8 flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left">
          <div
            className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-2xl font-bold text-white sm:mb-0"
            aria-hidden
          >
            {profile.displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-display">{profile.displayName}</h1>
            <p className="text-caption mt-1">Niveau {profile.level} · {profile.xp} XP total</p>
          </div>
        </header>

        <Card className="mb-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-[var(--text-muted)]">Prochain niveau</span>
            <span className="font-semibold text-[var(--accent)]">
              {xpInLevel} / {XP_PER_LEVEL} XP
            </span>
          </div>
          <ProgressBar value={xpInLevel} max={XP_PER_LEVEL} showLabel />
        </Card>

        <div className="mb-6 grid grid-cols-3 gap-3">
          {[
            { icon: Star, label: "Parties", value: profile.totalGamesPlayed },
            { icon: Flame, label: "Série", value: `${profile.streak}j` },
            { icon: Target, label: "Précision", value: `${profile.stats.accuracy}%` },
          ].map(({ icon: Icon, label, value }) => (
            <Card key={label} className="p-4 text-center">
              <Icon className="mx-auto mb-1 h-5 w-5 text-[var(--accent)]" aria-hidden />
              <p className="text-xl font-bold tabular-nums">{value}</p>
              <p className="text-caption">{label}</p>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <h2 className="text-heading mb-4">Activité par jeu</h2>
          <ul className="space-y-2">
            {GAME_MODES.filter((g) => g.available).map((mode) => {
              const stats = profile.stats.modeStats[mode.id] ?? { played: 0, wins: 0, bestScore: 0 };
              return (
                <li
                  key={mode.id}
                  className="flex items-center justify-between gap-3 rounded-lg bg-[var(--surface-subtle)] px-4 py-2.5 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <GameModeIcon mode={mode.id} size="sm" />
                    <span className="truncate">{mode.title}</span>
                  </span>
                  <span className="font-medium text-[var(--accent)] tabular-nums">
                    {stats.played}
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card>
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-warning" aria-hidden />
            <h2 className="text-heading">
              Badges ({profile.badges.length}/{BADGE_DEFINITIONS.length})
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BADGE_DEFINITIONS.map((def) => {
              const earned = earnedIds.has(def.id);
              return (
                <div
                  key={def.id}
                  className={`flex items-center gap-3 rounded-lg border p-3 ${
                    earned
                      ? "border-[var(--warning-border)] bg-[var(--warning-bg)]"
                      : "border-[var(--border)] bg-[var(--surface-subtle)] opacity-70"
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center text-2xl">
                    {earned ? def.icon : <Lock className="h-5 w-5 text-[var(--text-dim)]" />}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{def.name}</p>
                    <p className="text-caption">{def.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </PageWrapper>
  );
}
