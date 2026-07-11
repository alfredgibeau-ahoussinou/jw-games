"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle, CheckCircle2, TextQuote } from "lucide-react";
import type { StudyMiniGame } from "@/types/study";
import { isStudyGameDone } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { InteractiveCard } from "@/components/motion/InteractiveCard";

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
    >
      <InteractiveCard>
        <article
        >
          <div
          >
            <Icon strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <div>
              <span>
                {meta.label}
              </span>
              {done && (
                <span>
                  <CheckCircle2 aria-hidden />
                  Terminé
                </span>
              )}
              <span>
                ~{game.estimatedMinutes} min · {count} questions
              </span>
            </div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
          <ArrowUpRight
            aria-hidden
          />
        </article>
      </InteractiveCard>
    </Link>
  );
}
