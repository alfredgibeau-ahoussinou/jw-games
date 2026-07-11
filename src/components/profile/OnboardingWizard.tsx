"use client";

import { useState } from "react";

import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
    >
      {icon && (
        <span aria-hidden>
          {icon}
        </span>
      )}
      <span>
        <span>{label}</span>
        {description && (
          <span>{description}</span>
        )}
      </span>
      <span
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
    <div>
      <div>
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            aria-hidden
          />
        ))}
      </div>

      <div>
        <p>
          Étape {step + 1} sur {STEPS.length}
        </p>
        <h2>{STEPS[step].title}</h2>
      </div>

      <Card>
        <>
          <div
            key={step}
          >
            {step === 0 && (
              <div>
                <p>
                  Choisissez un pseudo pour personnaliser votre profil et vos badges. Aucun compte
                  en ligne ni adresse e-mail — tout reste sur votre appareil.
                </p>
                <div>
                  <label htmlFor="onboard-pseudo">
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
                    onKeyDown={(e) => e.key === "Enter" && canNext() && handleNext()}
                  />
                  <p>3 caractères minimum · pas besoin de votre vrai nom</p>
                </div>
                <div>
                  <p>Votre situation au ministère</p>
                  <div>
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
              <div>
                <p>
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
              <div>
                <div>
                  <p>
                    Comment utilisez-vous JW Games ?
                  </p>
                  <div>
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
                  <p>À quelle fréquence comptez-vous jouer ?</p>
                  <div>
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
              <div>
                <div>
                  <p>
                    Qu&apos;est-ce qui vous amène sur JW Games ?
                  </p>
                  <div>
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
                  <p>Niveau de connaissance biblique</p>
                  <div>
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
              <div>
                <div>
                  <p>Couleur de votre avatar</p>
                  <div>
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
                      >
                        {pseudo.trim().charAt(0).toUpperCase() || "?"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p>Récapitulatif</p>
                  <dl>
                    <div>
                      <dt>Pseudo</dt>
                      <dd>{pseudo.trim()}</dd>
                    </div>
                    <div>
                      <dt>Ministère</dt>
                      <dd>
                        {getMinistryRoleLabel(preferences.ministryRole)}
                      </dd>
                    </div>
                    <div>
                      <dt>Âge</dt>
                      <dd>{getAgeRangeLabel(preferences.ageRange)}</dd>
                    </div>
                    <div>
                      <dt>Usage</dt>
                      <dd>
                        {getUsageModeLabel(preferences.usageMode)}
                      </dd>
                    </div>
                    <div>
                      <dt>Fréquence</dt>
                      <dd>
                        {getPlayFrequencyLabel(preferences.playFrequency)}
                      </dd>
                    </div>
                    <div>
                      <dt>Objectif</dt>
                      <dd>{getGoalLabel(preferences.goal)}</dd>
                    </div>
                    <div>
                      <dt>Niveau Bible</dt>
                      <dd>{getBibleLevelLabel(preferences.bibleLevel)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}
          </div>
        </>
      </Card>

      <div>
        <Shield aria-hidden />
        <p>
          Aucune donnée personnelle sensible : pas de nom réel, d&apos;adresse, de congrégation
          ni de compte en ligne. Tout reste sur votre appareil.
        </p>
      </div>

      <div>
        {step > 0 && (
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft />
            Retour
          </Button>
        )}
        <Button
          size="lg"
          disabled={!canNext()}
          onClick={handleNext}
        >
          {step === STEPS.length - 1 ? "Créer mon profil" : "Continuer"}
          {step < STEPS.length - 1 && <ArrowRight />}
        </Button>
      </div>
    </div>
  );
}
