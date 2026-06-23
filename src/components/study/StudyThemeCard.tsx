import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StudyTheme } from "@/types/study";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { cn } from "@/lib/cn";

interface StudyThemeCardProps {
  theme: StudyTheme;
  compact?: boolean;
}

export function StudyThemeCard({ theme, compact }: StudyThemeCardProps) {
  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;

  if (compact) {
    return (
      <Link
        href={`/etude/${theme.id}`}
        className="poster-card poster-card--study group block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <article className="study-card-compact relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-3.5 transition-all hover:border-white/12 hover:shadow-lg sm:p-4">
          {Icon && visual && (
            <div
              className={cn(
                "mb-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10 sm:mb-3 sm:h-10 sm:w-10",
                visual.gradient
              )}
            >
              <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
            </div>
          )}
          <h3 className="line-clamp-2 min-h-0 flex-1 text-[0.8125rem] font-semibold leading-snug tracking-tight sm:text-sm">
            {theme.title}
          </h3>
          <p className="text-caption mt-2 shrink-0 pt-0.5 text-[0.6875rem] sm:text-xs">
            {theme.miniGames.length} mini-jeux
          </p>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/etude/${theme.id}`}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <article className="relative flex h-[240px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl">
        {visual && (
          <div
            className={cn(
              "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity group-hover:opacity-40",
              visual.gradient
            )}
          />
        )}
        <div className="relative mb-4 flex items-start justify-between gap-3">
          {Icon && visual && (
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                visual.gradient
              )}
            >
              <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden />
            </div>
          )}
          <span className="text-caption rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5">
            {theme.miniGames.length} jeux
            {(theme.articleIds?.length ?? 0) > 0 && ` · ${theme.articleIds!.length} articles`}
          </span>
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col">
          <h3 className="text-base font-semibold tracking-tight">{theme.title}</h3>
          <p className="text-caption mt-1 line-clamp-1">{theme.subtitle}</p>
          <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
            {theme.description}
          </p>
        </div>
        <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3">
          <p className="line-clamp-1 text-[0.6875rem] font-medium italic text-[var(--text-dim)]">
            {theme.scriptureRef}
          </p>
          <ArrowUpRight className="h-4 w-4 text-[var(--text-dim)] transition-all group-hover:text-[var(--accent)]" aria-hidden />
        </div>
      </article>
    </Link>
  );
}
