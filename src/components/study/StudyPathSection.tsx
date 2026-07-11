"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { getStudyPathWeeks, getNextPathStep } from "@/lib/study-paths";
import { isArticleRead, type StudyProgress } from "@/lib/study-progress";
import type { UserPreferences } from "@/types/user";

interface StudyPathSectionProps {
  preferences?: UserPreferences | null;
  studyProgress: StudyProgress;
  onAdvanceWeek?: () => void;
  onSelectWeek?: (week: number) => void;
}

export function StudyPathSection({
  preferences,
  studyProgress,
  onAdvanceWeek,
  onSelectWeek,
}: StudyPathSectionProps) {
  const weeks = getStudyPathWeeks(preferences);
  const activeWeek = studyProgress.currentPathWeek;
  const current = weeks.find((w) => w.week === activeWeek) ?? weeks[0];
  if (!current) return null;

  const nextStep = getNextPathStep(
    preferences,
    activeWeek,
    studyProgress.readArticleIds
  );

  const doneCount = current.steps.filter((s) =>
    isArticleRead(studyProgress, s.articleId)
  ).length;
  const allDone = doneCount === current.steps.length;
  const totalRead = weeks
    .flatMap((w) => w.steps)
    .filter((s) => isArticleRead(studyProgress, s.articleId)).length;
  const totalSteps = weeks.flatMap((w) => w.steps).length;

  return (
    <section className="page-section card stack">
      <div className="section-header">
        <div>
          <p>Votre parcours d&apos;étude · 4 semaines</p>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
        </div>
        <div className="stack">
          <p>
            {doneCount}/{current.steps.length} cette semaine
          </p>
          <p>
            {totalRead}/{totalSteps} au total
          </p>
        </div>
      </div>

      <SegmentTabs
        items={weeks.map((w) => ({
          id: String(w.week),
          label: `S${w.week}${w.steps.every((s) => isArticleRead(studyProgress, s.articleId)) ? " ✓" : ""}`,
        }))}
        value={String(activeWeek)}
        onChange={(id) => onSelectWeek?.(Number(id))}
        scrollable
        size="sm"
        ariaLabel="Semaines du parcours"
      />

      <ol className="path-steps">
        {current.steps.map((step, i) => {
          const done = isArticleRead(studyProgress, step.articleId);
          const isNext = !done && nextStep?.articleId === step.articleId;
          return (
            <li key={step.articleId}>
              <Link
                href={step.href ?? `/etude/article/${step.articleId}`}
              >
                <span>
                  {i + 1}
                </span>
                {done ? (
                  <CheckCircle2 aria-hidden />
                ) : (
                  <Circle aria-hidden />
                )}
                <span>{step.label}</span>
                {isNext && (
                  <span>
                    À lire
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ol>

      {allDone && activeWeek < 4 && onAdvanceWeek && (
        <div>
          <Button size="sm" onClick={onAdvanceWeek}>
            Passer à la semaine {activeWeek + 1}
          </Button>
        </div>
      )}
    </section>
  );
}
