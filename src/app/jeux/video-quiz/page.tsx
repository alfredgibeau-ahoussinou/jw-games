"use client";

import { useMemo, useState } from "react";
import { fisherYatesShuffle } from "@/lib/quiz-options";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { VideoQuizGame } from "@/components/game/VideoQuizGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { getVideoQuizItems } from "@/data/sample-videoquiz";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "playing" | "results";

const ROUND_OPTIONS = [5, 10, 15] as const;

export default function VideoQuizPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [roundSize, setRoundSize] = useState<number>(10);
  const [gameKey, setGameKey] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const watchVideo = useUserStore((s) => s.watchVideo);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const allItems = getVideoQuizItems();
  const items = useMemo(
    () => fisherYatesShuffle(allItems).slice(0, roundSize),
    [roundSize, gameKey, allItems]
  );

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("videoquiz", score, total, calcXp("videoquiz", score, total));
  }

  function startGame() {
    setGameKey((k) => k + 1);
    setPhase("playing");
  }

  return (
    <GameShell
      title="Vidéo Quiz"
      description="Regardez des vidéos JW.org puis testez ce que vous avez appris."
      emoji="🎬"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="🎬"
          title="Vidéo puis quiz"
          description="Visionnez une vidéo officielle, puis répondez à une question liée au contenu. Chaque vidéo a ses propres questions."
          stats={[
            { label: "Vidéos quiz", value: allItems.length },
            { label: "Par manche", value: roundSize },
          ]}
          tips={[
            "Regardez attentivement — les questions portent sur la vidéo",
            "Phase visionnage puis phase quiz pour chaque vidéo",
            "Les combos augmentent votre score",
          ]}
          onStart={startGame}
        >
          <div>
            <p>Vidéos par manche</p>
            <div>
              {ROUND_OPTIONS.map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={roundSize === n ? "primary" : "outline"}
                  onClick={() => setRoundSize(Math.min(n, allItems.length))}
                >
                  {Math.min(n, allItems.length)}
                </Button>
              ))}
            </div>
          </div>
        </GameStartMenu>
      )}

      {phase === "playing" && (
        <VideoQuizGame
          key={gameKey}
          items={items}
          onComplete={handleComplete}
          onVideoWatched={(id) => watchVideo(id)}
        />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("videoquiz", results.score, results.total)}
          accuracyLabel={getAccuracyLabel(results.score, results.total)}
          bestStreak={results.bestStreak}
          newBadges={lastEarnedBadges}
          onReplay={() => {
            clearLastBadges();
            setPhase("menu");
          }}
        />
      )}
    </GameShell>
  );
}
