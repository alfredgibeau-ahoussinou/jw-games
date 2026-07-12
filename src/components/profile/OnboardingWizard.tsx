"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import {
  AGE_RANGE_OPTIONS,
  AVATAR_COLORS,
  BIBLE_LEVEL_OPTIONS,
  DEFAULT_PREFERENCES,
  GOAL_OPTIONS,
  MINISTRY_ROLE_OPTIONS,
  PLAY_FREQUENCY_OPTIONS,
  USAGE_MODE_OPTIONS,
  getAgeRangeLabel,
  getBibleLevelLabel,
  getGoalLabel,
  getMinistryRoleLabel,
  getPlayFrequencyLabel,
  getUsageModeLabel,
} from "@/lib/user-preferences";
import type { UserPreferences } from "@/types/user";

interface OnboardingWizardProps {
  onComplete: (displayName: string, preferences: UserPreferences) => void;
}

const STEPS = [
  { id: "identity", title: "Votre identité sur l'app" },
  { id: "age", title: "Votre tranche d'âge" },
  { id: "habits", title: "Vos habitudes" },
  { id: "goals", title: "Vos objectifs" },
  { id: "finish", title: "Finaliser le profil" },
] as const;

interface OptionCardProps {
  selected: boolean;
  onSelect: () => void;
  icon?: string;
  label: string;
  description?: string;
}

function OptionCard({ selected, onSelect, icon, label, description }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
        selected
          ? "border-[var(--accent)] bg-[var(--accent-light)] ring-1 ring-[var(--accent)]/30"
          : "border-[var(--border)] bg-[var(--surface-subtle)] hover:border-[var(--border-strong)]"
      )}
    >
      {icon && (
        <span className="text-xl" aria-hidden>
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{label}</span>
        {description && (
          <span className="mt-0.5 block text-xs leading-relaxed text-[var(--text-muted)]">
            {description}
          </span>
        )}
      </span>
      <span
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 rounded-full border-2",
          selected ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--text-dim)]"
        )}
        aria-hidden
      />
    </button>
  );
}

export function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState(0);
  const [pseudo, setPseudo] = useState("");
  const [preferences, setPreferences] = useState<UserPreferences>({ ...DEFAULT_PREFERENCES });

  const canNext = () => {
    if (step === 0) return pseudo.trim().length >= 3;
    return true;
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    onComplete(pseudo.trim(), preferences);
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i <= step ? "bg-[var(--accent)]" : "bg-[var(--border)]"
            )}
            aria-hidden
          />
        ))}
      </div>

      <div>
        <p className="text-caption">
          Étape {step + 1} sur {STEPS.length}
        </p>
        <h2 className="text-heading mt-1">{STEPS[step].title}</h2>
      </div>

      <Card>
        <div key={step} className="space-y-5">
          {step === 0 && (
            <div className="space-y-5">
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Choisissez un pseudo pour personnaliser votre profil et vos badges. Aucun compte
                en ligne ni adresse e-mail — tout reste sur votre appareil.
              </p>
              <div>
                <label htmlFor="onboard-pseudo" className="mb-2 block text-sm font-medium">
                  Pseudo ou nom d&apos;affichage
                </label>
                <input
                  id="onboard-pseudo"
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  placeholder="Ex. Élie_29, BibleFan…"
                  maxLength={20}
                  autoComplete="nickname"
                  autoFocus
                  className="input-field w-full"
                  onKeyDown={(e) => e.key === "Enter" && canNext() && handleNext()}
                />
                <p className="text-caption mt-1.5">3 caractères minimum · pas besoin de votre vrai nom</p>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">Votre situation au ministère</p>
                <div className="space-y-2">
                  {MINISTRY_ROLE_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={preferences.ministryRole === opt.id}
                      onSelect={() =>
                        setPreferences((p) => ({ ...p, ministryRole: opt.id }))
                      }
                      icon={opt.icon}
                      label={opt.label}
                      description={opt.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Nous adaptons les jeux et vidéos suggérés selon votre tranche d&apos;âge.
              </p>
              {AGE_RANGE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  selected={preferences.ageRange === opt.id}
                  onSelect={() => setPreferences((p) => ({ ...p, ageRange: opt.id }))}
                  icon={opt.icon}
                  label={opt.label}
                  description={opt.description}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium">Comment utilisez-vous JW Games ?</p>
                <div className="space-y-2">
                  {USAGE_MODE_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={preferences.usageMode === opt.id}
                      onSelect={() =>
                        setPreferences((p) => ({ ...p, usageMode: opt.id }))
                      }
                      icon={opt.icon}
                      label={opt.label}
                      description={opt.description}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">À quelle fréquence comptez-vous jouer ?</p>
                <div className="space-y-2">
                  {PLAY_FREQUENCY_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={preferences.playFrequency === opt.id}
                      onSelect={() =>
                        setPreferences((p) => ({ ...p, playFrequency: opt.id }))
                      }
                      label={opt.label}
                      description={opt.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium">Qu&apos;est-ce qui vous amène sur JW Games ?</p>
                <div className="space-y-2">
                  {GOAL_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={preferences.goal === opt.id}
                      onSelect={() => setPreferences((p) => ({ ...p, goal: opt.id }))}
                      icon={opt.icon}
                      label={opt.label}
                      description={opt.description}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">Niveau de connaissance biblique</p>
                <div className="space-y-2">
                  {BIBLE_LEVEL_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={preferences.bibleLevel === opt.id}
                      onSelect={() =>
                        setPreferences((p) => ({ ...p, bibleLevel: opt.id }))
                      }
                      label={opt.label}
                      description={opt.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium">Couleur de votre avatar</p>
                <div className="flex flex-wrap gap-3">
                  {AVATAR_COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      title={color.label}
                      onClick={() =>
                        setPreferences((p) => ({ ...p, avatarColor: color.value }))
                      }
                      aria-label={color.label}
                      aria-pressed={preferences.avatarColor === color.value}
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ring-2 ring-offset-2 ring-offset-[var(--bg-card)] transition-transform hover:scale-105",
                        preferences.avatarColor === color.value
                          ? "ring-[var(--accent)]"
                          : "ring-transparent"
                      )}
                      style={{ backgroundColor: color.value }}
                    >
                      {pseudo.trim().charAt(0).toUpperCase() || "?"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[var(--surface-subtle)] p-4">
                <p className="mb-3 text-sm font-medium">Récapitulatif</p>
                <dl className="grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[var(--text-muted)]">Pseudo</dt>
                    <dd className="font-medium">{pseudo.trim()}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Ministère</dt>
                    <dd className="font-medium">{getMinistryRoleLabel(preferences.ministryRole)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Âge</dt>
                    <dd className="font-medium">{getAgeRangeLabel(preferences.ageRange)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Usage</dt>
                    <dd className="font-medium">{getUsageModeLabel(preferences.usageMode)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Fréquence</dt>
                    <dd className="font-medium">{getPlayFrequencyLabel(preferences.playFrequency)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Objectif</dt>
                    <dd className="font-medium">{getGoalLabel(preferences.goal)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)]">Niveau Bible</dt>
                    <dd className="font-medium">{getBibleLevelLabel(preferences.bibleLevel)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-4 text-sm text-[var(--text-muted)]">
        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
        <p>
          Aucune donnée personnelle sensible : pas de nom réel, d&apos;adresse, de congrégation
          ni de compte en ligne. Tout reste sur votre appareil.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {step > 0 && (
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        )}
        <Button size="lg" className="ml-auto" disabled={!canNext()} onClick={handleNext}>
          {step === STEPS.length - 1 ? "Créer mon profil" : "Continuer"}
          {step < STEPS.length - 1 && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
