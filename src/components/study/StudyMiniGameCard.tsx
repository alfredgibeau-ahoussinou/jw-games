import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle, TextQuote } from "lucide-react";
import type { StudyMiniGame } from "@/types/study";
import { cn } from "@/lib/cn";

const TYPE_META: Record<
  StudyMiniGame["type"],
  { label: string; icon: typeof BookOpen; accent: string }
> = {
  quiz: { label: "Quiz", icon: BookOpen, accent: "from-teal-500/80 to-cyan-600/80" },
  vraifaux: { label: "Vrai / Faux", icon: CheckCircle, accent: "from-emerald-500/80 to-green-600/80" },
  verset: { label: "Versets", icon: TextQuote, accent: "from-blue-500/80 to-indigo-600/80" },
};

interface StudyMiniGameCardProps {
  themeId: string;
  game: StudyMiniGame;
}

export function StudyMiniGameCard({ themeId, game }: StudyMiniGameCardProps) {
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
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <article className="relative flex h-[132px] items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-4 transition-all hover:border-white/12 hover:shadow-md sm:p-5">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
            meta.accent
          )}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--accent)]">
              {meta.label}
            </span>
            <span className="text-caption">~{game.estimatedMinutes} min · {count} questions</span>
          </div>
          <h3 className="truncate font-semibold tracking-tight">{game.title}</h3>
          <p className="text-caption mt-0.5 line-clamp-1">{game.description}</p>
        </div>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-[var(--text-dim)] transition-all group-hover:text-[var(--accent)]"
          aria-hidden
        />
      </article>
    </Link>
  );
}
