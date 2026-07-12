"use client";

import { useState, type ReactNode } from "react";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import {
  AGE_RANGE_OPTIONS,
  AVATAR_COLORS,
  BIBLE_LEVEL_OPTIONS,
  GOAL_OPTIONS,
  MINISTRY_ROLE_OPTIONS,
  PLAY_FREQUENCY_OPTIONS,
  STUDY_FOCUS_OPTIONS,
  USAGE_MODE_OPTIONS,
  getAgeRangeLabel,
  getBibleLevelLabel,
  getGoalLabel,
  getMinistryRoleLabel,
  getPlayFrequencyLabel,
  getPreferredLanguageLabel,
  getUsageModeLabel,
} from "@/lib/user-preferences";
import { PREACH_LANGUAGES } from "@/data/languages";
import type { UserPreferences } from "@/types/user";

interface PreferencesEditorProps {
  preferences: UserPreferences;
  displayName: string;
  onSave: (preferences: UserPreferences) => void;
}

function OptionButton({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg border px-3 py-2 text-left text-sm transition-all",
        selected
          ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--text)]"
          : "border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-muted)] hover:border-[var(--border-strong)]",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PreferencesEditor({
  preferences,
  displayName,
  onSave,
}: PreferencesEditorProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<UserPreferences>(preferences);

  const startEdit = () => {
    setDraft(preferences);
    setEditing(true);
  };

  const save = () => {
    onSave(draft);
    setEditing(false);
  };

  if (!editing) {
    return (
      <Card>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-heading">Mon profil personnel</h2>
          <Button variant="ghost" size="sm" onClick={startEdit}>
            <Settings2 className="h-4 w-4" />
            Modifier
          </Button>
        </div>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Ministère", getMinistryRoleLabel(preferences.ministryRole)],
            ["Âge", getAgeRangeLabel(preferences.ageRange)],
            ["Usage", getUsageModeLabel(preferences.usageMode)],
            ["Fréquence", getPlayFrequencyLabel(preferences.playFrequency)],
            [
              "Style d'étude",
              STUDY_FOCUS_OPTIONS.find((o) => o.id === preferences.studyFocus)?.label ??
                "Progression habituelle",
            ],
            ["Objectif", getGoalLabel(preferences.goal)],
            ["Niveau biblique", getBibleLevelLabel(preferences.bibleLevel)],
            ...(preferences.ministryRole === "publieur" ||
            preferences.ministryRole === "pionnier-auxiliaire" ||
            preferences.ministryRole === "pionnier-permanent"
              ? [["Langue de prédication", getPreferredLanguageLabel(preferences.preferredLanguageId)]]
              : []),
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-[var(--surface-subtle)] px-4 py-3">
              <dt className="text-caption">{label}</dt>
              <dd className="mt-0.5 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </Card>
    );
  }

  return (
    <Card className="space-y-6">
      <h2 className="text-heading">Modifier mes préférences</h2>

      {[
        {
          label: "Situation au ministère",
          options: MINISTRY_ROLE_OPTIONS.map((opt) => ({
            id: opt.id,
            label: `${opt.icon} ${opt.label}`,
            field: "ministryRole" as const,
          })),
        },
        {
          label: "Tranche d'âge",
          options: AGE_RANGE_OPTIONS.map((opt) => ({
            id: opt.id,
            label: `${opt.icon} ${opt.label}`,
            field: "ageRange" as const,
          })),
        },
        {
          label: "Mode d'utilisation",
          options: USAGE_MODE_OPTIONS.map((opt) => ({
            id: opt.id,
            label: `${opt.icon} ${opt.label}`,
            field: "usageMode" as const,
          })),
        },
      ].map((section) => (
        <div key={section.label}>
          <p className="mb-2 text-sm font-medium">{section.label}</p>
          <div className="flex flex-wrap gap-2">
            {section.options.map((opt) => (
              <OptionButton
                key={opt.id}
                selected={draft[opt.field] === opt.id}
                onClick={() => setDraft((d) => ({ ...d, [opt.field]: opt.id }))}
              >
                {opt.label}
              </OptionButton>
            ))}
          </div>
        </div>
      ))}

      <div>
        <p className="mb-2 text-sm font-medium">Fréquence de jeu</p>
        <div className="space-y-2">
          {PLAY_FREQUENCY_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.id}
              selected={draft.playFrequency === opt.id}
              onClick={() => setDraft((d) => ({ ...d, playFrequency: opt.id }))}
              className="block w-full"
            >
              {opt.label} — {opt.description}
            </OptionButton>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Style d&apos;étude</p>
        <div className="space-y-2">
          {STUDY_FOCUS_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.id}
              selected={draft.studyFocus === opt.id}
              onClick={() => setDraft((d) => ({ ...d, studyFocus: opt.id }))}
              className="block w-full"
            >
              {opt.label} — {opt.description}
            </OptionButton>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Objectif</p>
        <div className="flex flex-wrap gap-2">
          {GOAL_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.id}
              selected={draft.goal === opt.id}
              onClick={() => setDraft((d) => ({ ...d, goal: opt.id }))}
            >
              {opt.icon} {opt.label}
            </OptionButton>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Niveau biblique</p>
        <div className="space-y-2">
          {BIBLE_LEVEL_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.id}
              selected={draft.bibleLevel === opt.id}
              onClick={() => setDraft((d) => ({ ...d, bibleLevel: opt.id }))}
              className="block w-full"
            >
              {opt.label} — {opt.description}
            </OptionButton>
          ))}
        </div>
      </div>

      {(draft.ministryRole === "publieur" ||
        draft.ministryRole === "pionnier-auxiliaire" ||
        draft.ministryRole === "pionnier-permanent") && (
        <div>
          <p className="mb-2 text-sm font-medium">Langue de prédication préférée</p>
          <div className="flex flex-wrap gap-2">
            {PREACH_LANGUAGES.map((lang) => (
              <OptionButton
                key={lang.id}
                selected={draft.preferredLanguageId === lang.id}
                onClick={() =>
                  setDraft((d) => ({ ...d, preferredLanguageId: lang.id }))
                }
              >
                {lang.flag} {lang.name}
              </OptionButton>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-sm font-medium">Couleur d&apos;avatar</p>
        <div className="flex flex-wrap gap-3">
          {AVATAR_COLORS.map((color) => (
            <button
              key={color.id}
              type="button"
              title={color.label}
              onClick={() => setDraft((d) => ({ ...d, avatarColor: color.value }))}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-offset-2 ring-offset-[var(--bg-card)]",
                draft.avatarColor === color.value ? "ring-[var(--accent)]" : "ring-transparent"
              )}
              style={{ backgroundColor: color.value }}
            >
              {displayName.charAt(0).toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Button variant="outline" onClick={() => setEditing(false)}>
          Annuler
        </Button>
        <Button onClick={save}>Enregistrer</Button>
      </div>
    </Card>
  );
}
