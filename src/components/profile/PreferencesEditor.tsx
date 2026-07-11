"use client";

import { useState } from "react";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
        <div>
          <h2>Mon profil personnel</h2>
          <Button variant="ghost" size="sm" onClick={startEdit}>
            <Settings2 />
            Modifier
          </Button>
        </div>
        <dl>
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
            <dd>{getUsageModeLabel(preferences.usageMode)}</dd>
          </div>
          <div>
            <dt>Fréquence</dt>
            <dd>{getPlayFrequencyLabel(preferences.playFrequency)}</dd>
          </div>
          <div>
            <dt>Style d&apos;étude</dt>
            <dd>
              {STUDY_FOCUS_OPTIONS.find((o) => o.id === preferences.studyFocus)?.label ??
                "Progression habituelle"}
            </dd>
          </div>
          <div>
            <dt>Objectif</dt>
            <dd>{getGoalLabel(preferences.goal)}</dd>
          </div>
          <div>
            <dt>Niveau biblique</dt>
            <dd>{getBibleLevelLabel(preferences.bibleLevel)}</dd>
          </div>
          {(preferences.ministryRole === "publieur" ||
            preferences.ministryRole === "pionnier-auxiliaire" ||
            preferences.ministryRole === "pionnier-permanent") && (
            <div>
              <dt>Langue de prédication</dt>
              <dd>{getPreferredLanguageLabel(preferences.preferredLanguageId)}</dd>
            </div>
          )}
        </dl>
      </Card>
    );
  }

  return (
    <Card>
      <h2>Modifier mes préférences</h2>

      <div>
        <p>Situation au ministère</p>
        <div>
          {MINISTRY_ROLE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, ministryRole: opt.id }))}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Tranche d&apos;âge</p>
        <div>
          {AGE_RANGE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, ageRange: opt.id }))}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Mode d&apos;utilisation</p>
        <div>
          {USAGE_MODE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, usageMode: opt.id }))}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Fréquence de jeu</p>
        <div>
          {PLAY_FREQUENCY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, playFrequency: opt.id }))}
            >
              {opt.label} — {opt.description}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Style d&apos;étude</p>
        <div>
          {STUDY_FOCUS_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, studyFocus: opt.id }))}
            >
              {opt.label} — {opt.description}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Objectif</p>
        <div>
          {GOAL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, goal: opt.id }))}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Niveau biblique</p>
        <div>
          {BIBLE_LEVEL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDraft((d) => ({ ...d, bibleLevel: opt.id }))}
            >
              {opt.label} — {opt.description}
            </button>
          ))}
        </div>
      </div>

      {(draft.ministryRole === "publieur" ||
        draft.ministryRole === "pionnier-auxiliaire" ||
        draft.ministryRole === "pionnier-permanent") && (
        <div>
          <p>Langue de prédication préférée</p>
          <div>
            {PREACH_LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                type="button"
                onClick={() =>
                  setDraft((d) => ({ ...d, preferredLanguageId: lang.id }))
                }
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p>Couleur d&apos;avatar</p>
        <div>
          {AVATAR_COLORS.map((color) => (
            <button
              key={color.id}
              type="button"
              title={color.label}
              onClick={() => setDraft((d) => ({ ...d, avatarColor: color.value }))}
            >
              {displayName.charAt(0).toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Button variant="outline" onClick={() => setEditing(false)}>
          Annuler
        </Button>
        <Button onClick={save}>
          Enregistrer
        </Button>
      </div>
    </Card>
  );
}
