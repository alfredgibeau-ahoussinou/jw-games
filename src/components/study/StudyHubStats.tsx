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
    <section className="stats-grid" aria-label="Progression d'étude">
      {items.map(({ icon: Icon, label, value, max, pct }) => (
        <div key={label} className="stats-grid__item card">
          <div className="stats-grid__head">
            <div className="stats-grid__label">
              <span className="stats-grid__icon">
                <Icon aria-hidden />
              </span>
              <p>{label}</p>
            </div>
            <p className="stats-grid__value">
              {value}
              <span> / {max}</span>
            </p>
          </div>
          <ProgressBar value={value} max={max || 1} />
          <p className="stats-grid__pct">{pct} %</p>
        </div>
      ))}
    </section>
  );
}
