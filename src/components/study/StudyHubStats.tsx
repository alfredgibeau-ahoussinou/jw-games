"use client";

import { BookOpen, Gamepad2, Route } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { StudyOverviewStats } from "@/lib/study-progress";

interface StudyHubStatsProps {
  stats: StudyOverviewStats;
}

export function StudyHubStats({ stats }: StudyHubStatsProps) {
  const pathPct =
    stats.pathTotal > 0 ? Math.round((stats.pathRead / stats.pathTotal) * 100) : 0;

  const items = [
    {
      icon: BookOpen,
      label: "Articles lus",
      value: stats.readArticles,
      max: stats.totalArticles,
      pct: stats.totalArticles
        ? Math.round((stats.readArticles / stats.totalArticles) * 100)
        : 0,
    },
    {
      icon: Gamepad2,
      label: "Mini-jeux",
      value: stats.completedGames,
      max: stats.totalGames,
      pct: stats.totalGames
        ? Math.round((stats.completedGames / stats.totalGames) * 100)
        : 0,
    },
    {
      icon: Route,
      label: "Parcours 4 sem.",
      value: stats.pathRead,
      max: stats.pathTotal,
      pct: pathPct,
    },
  ] as const;

  return (
    <section className="grid gap-4 sm:grid-cols-3" aria-label="Progression d'étude">
      {items.map(({ icon: Icon, label, value, max, pct }) => (
        <div
          key={label}
          className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5"
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-light)] text-[var(--accent)]">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-sm text-[var(--text-muted)]">{label}</p>
            </div>
            <p className="text-lg font-bold tabular-nums text-[var(--accent)]">
              {value}
              <span className="text-sm font-normal text-[var(--text-muted)]"> / {max}</span>
            </p>
          </div>
          <ProgressBar value={value} max={max || 1} />
          <p className="mt-2 text-right text-xs tabular-nums text-[var(--text-dim)]">{pct} %</p>
        </div>
      ))}
    </section>
  );
}
