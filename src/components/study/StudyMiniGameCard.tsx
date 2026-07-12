"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle, CheckCircle2, TextQuote } from "lucide-react";
import type { StudyMiniGame } from "@/types/study";
import { isStudyGameDone } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { cn } from "@/lib/cn";

const TYPE_META: Record<
  StudyMiniGame["type"],
  { label: string; icon: typeof BookOpen; accent: string; bg: string }
> = {
  quiz: {
    label: "Quiz",
    icon: BookOpen,
    accent: "from-teal-500/80 to-cyan-600/80",
    bg: "from-teal-950/90 via-teal-900/70 to-cyan-950/80",
  },
  vraifaux: {
    label: "Vrai / Faux",
    icon: CheckCircle,
    accent: "from-emerald-500/80 to-green-600/80",
    bg: "from-emerald-950/90 via-emerald-900/70 to-green-950/80",
  },
  verset: {
    label: "Versets",
    icon: TextQuote,
    accent: "from-blue-500/80 to-indigo-600/80",
    bg: "from-blue-950/90 via-indigo-900/70 to-violet-950/80",
  },
};

interface StudyMiniGameCardProps {
  themeId: string;
  game: StudyMiniGame;
}

export function StudyMiniGameCard({ themeId, game }: StudyMiniGameCardProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const done = isStudyGameDone(studyProgress, themeId, game.id);
  const meta = TYPE_META[game.type];
  const Icon = meta.icon;
  const count =
    game.quizQuestions?.length ??
    game.trueFalseQuestions?.length ??
    game.verseQuestions?.length ??
    0;

  return (
    <Link
      href={`/etude/${themeId}/${game.id}`}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <article
        className={cn(
          "relative flex h-full min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br p-5 transition-all hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl",
          meta.bg
        )}
      >
        <div
          className={cn(
            "mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/15",
            meta.accent
          )}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/90">
              {meta.label}
            </span>
            {done && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--success-bg)] px-2 py-0.5 text-[0.6875rem] font-medium text-[var(--success-text)]">
                <CheckCircle2 className="h-3 w-3" aria-hidden />
                Terminé
              </span>
            )}
            <span className="text-caption ml-auto text-white/60">
              ~{game.estimatedMinutes} min · {count} questions
            </span>
          </div>
          <h3 className="text-base font-semibold tracking-tight text-white">{game.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/70">
            {game.description}
          </p>
        </div>
        <ArrowUpRight
          className="absolute right-4 top-4 h-4 w-4 text-white/40 transition-all group-hover:text-white"
          aria-hidden
        />
      </article>
    </Link>
  );
}
