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

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Mon profil"
          title={profile.displayName}
          description={`Niveau ${profile.level} · ${profile.xp} XP · série ${profile.streak} jours`}
          imageSrc={jwImageForSlot("hero.profil").url}
        />

        <StudioPageBody narrow>

        {profile.preferences && (
          <ScrollReveal>
            <PreferencesEditor
              preferences={profile.preferences}
              displayName={profile.displayName}
              onSave={updatePreferences}
            />
          </ScrollReveal>
        )}

        <StudyProgressSummary />

        <Card>
          <div>
            <span>Prochain niveau</span>
            <span>
              {xpInLevel} / {XP_PER_LEVEL} XP
            </span>
          </div>
          <ProgressBar value={xpInLevel} max={XP_PER_LEVEL} showLabel />
        </Card>

        <div>
          {[
            { icon: Star, label: "Parties", value: profile.totalGamesPlayed },
            { icon: Flame, label: "Série", value: `${profile.streak}j` },
            { icon: Target, label: "Précision", value: `${profile.stats.accuracy}%` },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon aria-hidden />
              <p>{value}</p>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <Card>
          <h2>Activité par jeu</h2>
          <ul>
            {GAME_MODES.filter((g) => g.available).map((mode) => {
              const stats = profile.stats.modeStats[mode.id] ?? { played: 0, wins: 0, bestScore: 0 };
              return (
                <li
                  key={mode.id}
                >
                  <span>
                    <GameModeIcon mode={mode.id} size="sm" />
                    <span>{mode.title}</span>
                  </span>
                  <span>
                    {stats.played}
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card>
          <div>
            <Award aria-hidden />
            <h2>
              Badges ({profile.badges.length}/{BADGE_DEFINITIONS.length})
            </h2>
          </div>
          <div>
            {BADGE_DEFINITIONS.map((def) => {
              const earned = earnedIds.has(def.id);
              return (
                <div
                  key={def.id}
                >
                  <span>
                    {earned ? def.icon : <Lock />}
                  </span>
                  <div>
                    <p>{def.name}</p>
                    <p>{def.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <ProfilePrivacy />
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
