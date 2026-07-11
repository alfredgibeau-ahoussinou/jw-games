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
import { isStudyGameDone } from "@/lib/study-progress";
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
  const [earnedXp, setEarnedXp] = useState(0);
  const recordGame = useUserStore((s) => s.recordGame);
  const studyProgress = useUserStore((s) => s.studyProgress);
  const markStudyGameComplete = useUserStore((s) => s.markStudyGameComplete);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  if (!theme || !game) {
    return <p>Mini-jeu introuvable.</p>;
  }

  const xpFor = (score: number) => score * STUDY_MINI_GAME_XP;

  function handleComplete(score: number, total: number) {
    const wasDone = isStudyGameDone(studyProgress, themeId, gameId);
    const xp = wasDone ? 0 : xpFor(score);
    setResults({ score, total });
    setEarnedXp(xp);
    setPhase("results");
    recordGame("etude", score, total, xp);
    markStudyGameComplete(themeId, gameId);
  }

  if (phase === "intro") {
    return (
      <div>
        <div>
          <p>{theme.title}</p>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <blockquote>
            {theme.scriptureHighlight}
            <footer>{theme.scriptureRef}</footer>
          </blockquote>
        </div>
        <Button size="lg" onClick={() => setPhase("playing")}>
          Commencer le mini-jeu
        </Button>
        {theme.articleIds && theme.articleIds.length > 0 && (
          <Link
            href={`/etude/article/${theme.articleIds[0]}`}
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
        xpEarned={earnedXp}
        accuracyLabel={
          earnedXp === 0
            ? "Déjà complété — rejouez sans XP"
            : getAccuracyLabel(results.score, results.total)
        }
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

  return <p>Contenu en préparation.</p>;
}
