"use client";

import Link from "next/link";
import { useState } from "react";
import { QuizGame } from "@/components/game/QuizGame";
import { TrueFalseGame } from "@/components/game/TrueFalseGame";
import { VerseGapGame } from "@/components/game/VerseGapGame";
import { GameResults } from "@/components/layout/GameShell";
import { Button } from "@/components/ui/Button";
import { getStudyMiniGame, getStudyTheme } from "@/data/study-themes";
import { getAccuracyLabel } from "@/lib/daily-challenges";
import { STUDY_MINI_GAME_XP } from "@/lib/study-visuals";
import { useUserStore } from "@/stores/user-store";

type Phase = "intro" | "playing" | "results";

interface StudyGamePlayerProps {
  themeId: string;
  gameId: string;
}

export function StudyGamePlayer({ themeId, gameId }: StudyGamePlayerProps) {
  const theme = getStudyTheme(themeId);
  const game = getStudyMiniGame(themeId, gameId);
  const [phase, setPhase] = useState<Phase>("intro");
  const [results, setResults] = useState({ score: 0, total: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  if (!theme || !game) {
    return <p className="text-center text-danger">Mini-jeu introuvable.</p>;
  }

  const xpFor = (score: number) => score * STUDY_MINI_GAME_XP;

  function handleComplete(score: number, total: number) {
    setResults({ score, total });
    setPhase("results");
    recordGame("etude", score, total, xpFor(score));
  }

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-lg">
        <div className="mb-6 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
          <p className="text-caption mb-2">{theme.title}</p>
          <h2 className="text-heading text-xl">{game.title}</h2>
          <p className="text-body mt-2">{game.description}</p>
          <blockquote className="scripture-block mt-4 text-sm">
            {theme.scriptureHighlight}
            <footer className="scripture-ref mt-2 not-italic">{theme.scriptureRef}</footer>
          </blockquote>
        </div>
        <Button className="w-full" size="lg" onClick={() => setPhase("playing")}>
          Commencer le mini-jeu
        </Button>
        {theme.articleIds && theme.articleIds.length > 0 && (
          <Link
            href={`/etude/article/${theme.articleIds[0]}`}
            className="link-primary mt-4 flex items-center justify-center gap-1.5 text-sm"
          >
            Lire un article de cette thématique
          </Link>
        )}
      </div>
    );
  }

  if (phase === "results") {
    return (
      <GameResults
        score={results.score}
        total={results.total}
        xpEarned={xpFor(results.score)}
        accuracyLabel={getAccuracyLabel(results.score, results.total)}
        newBadges={lastEarnedBadges}
        onReplay={() => {
          clearLastBadges();
          setPhase("playing");
        }}
        exitHref={`/etude/${themeId}`}
        exitLabel="Retour à la thématique"
      />
    );
  }

  if (game.type === "quiz" && game.quizQuestions?.length) {
    return <QuizGame questions={game.quizQuestions} onComplete={handleComplete} />;
  }
  if (game.type === "vraifaux" && game.trueFalseQuestions?.length) {
    return <TrueFalseGame questions={game.trueFalseQuestions} onComplete={handleComplete} />;
  }
  if (game.type === "verset" && game.verseQuestions?.length) {
    return <VerseGapGame questions={game.verseQuestions} onComplete={handleComplete} />;
  }

  return <p className="text-center text-[var(--text-muted)]">Contenu en préparation.</p>;
}
