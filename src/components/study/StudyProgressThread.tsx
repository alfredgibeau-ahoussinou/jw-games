"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getPathProgressInfo } from "@/lib/study-path-progress";
import type { StudyProgress } from "@/lib/study-progress";
import type { UserPreferences } from "@/types/user";
import { cn } from "@/lib/cn";

interface StudyProgressThreadProps {
  preferences?: UserPreferences | null;
  studyProgress: StudyProgress;
}

export function StudyProgressThread({
  preferences,
  studyProgress,
}: StudyProgressThreadProps) {
  const info = getPathProgressInfo(preferences, studyProgress);
  const overallPct = Math.round(
    ((info.completedWeeks * info.totalSteps + info.stepsDone) /
      (info.totalWeeks * info.totalSteps)) *
      100
  );

  return (
    <section
      className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-4 sm:p-5"
      aria-label="Où en suis-je ?"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
          <Compass className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Où en suis-je ?
          </p>
          <p className="mt-1 text-sm font-semibold">
            {info.stepsDone}/{info.totalSteps} étapes · {info.weekTitle}
          </p>
          <p className="text-caption mt-0.5">
            Semaine {info.week}/{info.totalWeeks} · {overallPct}% du parcours
          </p>
          <ProgressBar value={overallPct} max={100} className="mt-3" />
          <div className="mt-3 flex gap-1.5" role="list" aria-label="Étapes de la semaine">
            {Array.from({ length: info.totalSteps }, (_, i) => (
              <span
                key={i}
                role="listitem"
                className={cn(
                  "h-2 flex-1 rounded-full transition-colors",
                  i < info.stepsDone ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                )}
              />
            ))}
          </div>
          <Link href="/etude" className="link-primary mt-3 inline-block text-sm">
            Voir mon parcours →
          </Link>
        </div>
      </div>
    </section>
  );
}
