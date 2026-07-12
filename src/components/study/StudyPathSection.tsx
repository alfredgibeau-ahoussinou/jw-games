"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { cn } from "@/lib/cn";
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
    <section className="space-y-5 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-caption">Votre parcours d&apos;étude · 4 semaines</p>
          <h2 className="text-heading mt-1">{current.title}</h2>
          <p className="text-body mt-1 text-sm">{current.description}</p>
        </div>
        <div className="space-y-1 text-right text-sm">
          <p className="font-medium tabular-nums text-[var(--accent)]">
            {doneCount}/{current.steps.length} cette semaine
          </p>
          <p className="text-caption tabular-nums">
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

      <ol className="space-y-2">
        {current.steps.map((step, i) => {
          const done = isArticleRead(studyProgress, step.articleId);
          const isNext = !done && nextStep?.articleId === step.articleId;
          return (
            <li key={step.articleId}>
              <Link
                href={step.href ?? `/etude/article/${step.articleId}`}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                  done
                    ? "border-[var(--success-border)] bg-[var(--success-bg)]"
                    : isNext
                      ? "border-[var(--accent)]/40 bg-[var(--accent-light)] hover:border-[var(--accent)]"
                      : "border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent-light)]/50"
                )}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xs font-bold tabular-nums">
                  {i + 1}
                </span>
                {done ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-[var(--text-dim)]" aria-hidden />
                )}
                <span className={cn("min-w-0 flex-1 font-medium", done && "text-[var(--text-muted)]")}>
                  {step.label}
                </span>
                {isNext && (
                  <span className="shrink-0 rounded-full bg-[var(--accent)] px-2 py-0.5 text-[0.6875rem] font-semibold text-black">
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
