"use client";

import { Star, Flame, Target, Award, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { GameModeIcon } from "@/components/game/GameModeIcon";
import { OnboardingWizard } from "@/components/profile/OnboardingWizard";
import { PreferencesEditor } from "@/components/profile/PreferencesEditor";
import { ProfilePrivacy } from "@/components/profile/ProfilePrivacy";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageHero } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { BADGE_DEFINITIONS } from "@/lib/badges";
import { GAME_MODES, XP_PER_LEVEL } from "@/lib/constants";
import { StudyProgressSummary } from "@/components/study/StudyProgressSummary";
import { useUserStore } from "@/stores/user-store";
import { jwImageForSlot } from "@/lib/jw-images";

export default function ProfilPage() {
  const { profile, isOnboarded, initProfile, updatePreferences } = useUserStore();

  if (!isOnboarded || !profile) {
    return (
      <PageWrapper>
        <StudioPageShell>
          <StudioPageHero
            eyebrow="Bienvenue"
            title="Créez votre"
            titleAccent="profil"
            description="Quelques questions pour personnaliser JW Games — rien de confidentiel."
            imageSrc={jwImageForSlot("hero.profil").url}
          />
          <StudioPageBody narrow>
            <ScrollReveal>
              <OnboardingWizard
                onComplete={(displayName, preferences) => initProfile(displayName, preferences)}
              />
            </ScrollReveal>
          </StudioPageBody>
        </StudioPageShell>
      </PageWrapper>
    );
  }

  const xpInLevel = profile.xp % XP_PER_LEVEL;
  const earnedIds = new Set(profile.badges.map((b) => b.id));
  const avatarColor = profile.preferences?.avatarColor ?? "var(--accent)";

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Mon profil"
          title={profile.displayName}
          description={`Niveau ${profile.level} · ${profile.xp} XP · série ${profile.streak} jours`}
          imageSrc={jwImageForSlot("hero.profil").url}
        />

        <StudioPageBody narrow className="space-y-6">
          {profile.preferences && (
            <ScrollReveal>
              <PreferencesEditor
                preferences={profile.preferences}
                displayName={profile.displayName}
                onSave={updatePreferences}
              />
            </ScrollReveal>
          )}

          <ScrollReveal>
            <StudyProgressSummary />
          </ScrollReveal>

          <ScrollReveal>
            <Card className="mb-0">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Prochain niveau</span>
                <span className="font-semibold text-[var(--accent)]">
                  {xpInLevel} / {XP_PER_LEVEL} XP
                </span>
              </div>
              <ProgressBar value={xpInLevel} max={XP_PER_LEVEL} showLabel />
            </Card>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-3 gap-3">
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
          </ScrollReveal>

          <ScrollReveal>
            <Card>
              <h2 className="text-heading mb-4">Activité par jeu</h2>
              <ul className="space-y-2">
                {GAME_MODES.filter((g) => g.available).map((mode) => {
                  const stats = profile.stats.modeStats[mode.id] ?? {
                    played: 0,
                    wins: 0,
                    bestScore: 0,
                  };
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
          </ScrollReveal>

          <ScrollReveal>
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
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: earned ? avatarColor : undefined }}
                      >
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
          </ScrollReveal>

          <ScrollReveal>
            <ProfilePrivacy />
          </ScrollReveal>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
