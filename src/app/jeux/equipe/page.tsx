"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { shuffleQuiz, SAMPLE_QUIZ } from "@/data/sample-quiz";
import { calcXp } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";
import { Users, Swords } from "lucide-react";

type Phase = "setup" | "playing" | "results";

const TOTAL_ROUNDS = 2;
const QUESTIONS_PER_ROUND = 5;

export default function EquipePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [teamA, setTeamA] = useState("Équipe A");
  const [teamB, setTeamB] = useState("Équipe B");
  const [activeTeam, setActiveTeam] = useState<"A" | "B">("A");
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [round, setRound] = useState(1);
  const [gameKey, setGameKey] = useState(0);

  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const roundQuestions = useMemo(
    () => shuffleQuiz(SAMPLE_QUIZ, QUESTIONS_PER_ROUND),
    [round, gameKey]
  );

  const totalQuestions = QUESTIONS_PER_ROUND * TOTAL_ROUNDS;

  function handleRoundComplete(score: number) {
    const newScores = {
      ...scores,
      [activeTeam]: scores[activeTeam] + score,
    };
    setScores(newScores);

    if (round >= TOTAL_ROUNDS) {
      setPhase("results");
      const maxScore = Math.max(newScores.A, newScores.B);
      recordGame("equipe", maxScore, totalQuestions, calcXp("equipe", maxScore, totalQuestions));
      return;
    }

    setRound((r) => r + 1);
    setActiveTeam(activeTeam === "A" ? "B" : "A");
    setGameKey((k) => k + 1);
  }

  function resetGame() {
    clearLastBadges();
    setPhase("setup");
    setScores({ A: 0, B: 0 });
    setRound(1);
    setActiveTeam("A");
    setGameKey((k) => k + 1);
  }

  const winner =
    scores.A > scores.B ? teamA : scores.B > scores.A ? teamB : null;
  const maxScore = Math.max(scores.A, scores.B);

  return (
    <GameShell
      title="Défis en équipe"
      description="Deux équipes s'affrontent sur des questions bibliques. Chaque équipe joue à tour de rôle."
      emoji="👥"
    >
      {phase === "setup" && (
        <div className="mx-auto max-w-md space-y-6">
          <Card glow>
            <div className="mb-4 flex items-center gap-2 text-[var(--accent)]">
              <Swords className="h-5 w-5" />
              <span className="font-semibold">Mode versus</span>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              {TOTAL_ROUNDS} manches · {QUESTIONS_PER_ROUND} questions par manche
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Users className="h-4 w-4" /> Équipe A
              </label>
              <input
                value={teamA}
                onChange={(e) => setTeamA(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)]/30 bg-[var(--surface-subtle)] px-4 py-3 text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Users className="h-4 w-4" /> Équipe B
              </label>
              <input
                value={teamB}
                onChange={(e) => setTeamB(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)]/30 bg-[var(--surface-subtle)] px-4 py-3 text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none"
              />
            </div>
          </div>

          <Button size="lg" className="w-full" onClick={() => setPhase("playing")}>
            Lancer le défi
          </Button>
        </div>
      )}

      {phase === "playing" && (
        <div>
          <div className="mb-6 flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3">
            <div className="text-center flex-1">
              <p className="text-xs text-[var(--text-muted)]">{teamA}</p>
              <p className="text-2xl font-bold text-[var(--accent)]">{scores.A}</p>
            </div>
            <Badge variant="neon">
              Manche {round}/{TOTAL_ROUNDS}
            </Badge>
            <div className="text-center flex-1">
              <p className="text-xs text-[var(--text-muted)]">{teamB}</p>
              <p className="text-2xl font-bold text-warning">{scores.B}</p>
            </div>
          </div>
          <motion.div
            key={`${round}-${activeTeam}-${gameKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="mb-4 text-center text-sm text-[var(--text-muted)]">
              C&apos;est au tour de{" "}
              <span className="text-[var(--text)] font-semibold">
                {activeTeam === "A" ? teamA : teamB}
              </span>
            </p>
            <QuizGame
              questions={roundQuestions}
              onComplete={(score) => handleRoundComplete(score)}
            />
          </motion.div>
        </div>
      )}

      {phase === "results" && (
        <div className="mx-auto max-w-md">
          <Card glow className="mb-6 py-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <p className="text-5xl mb-4">🏆</p>
              <p className="text-3xl font-bold gradient-text-gold">
                {winner ? `${winner} gagne !` : "Égalité !"}
              </p>
            </motion.div>
            <div className="mt-6 flex justify-center gap-8">
              <div>
                <p className="text-sm text-[var(--text-muted)]">{teamA}</p>
                <p className="text-3xl font-bold text-[var(--accent)]">{scores.A}</p>
              </div>
              <div className="text-[var(--text-dim)] self-center">vs</div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">{teamB}</p>
                <p className="text-3xl font-bold text-warning">{scores.B}</p>
              </div>
            </div>
          </Card>
          <GameResults
            score={maxScore}
            total={totalQuestions}
            xpEarned={calcXp("equipe", maxScore, totalQuestions)}
            label="points équipe gagnante"
            newBadges={lastEarnedBadges}
            onReplay={resetGame}
          />
        </div>
      )}
    </GameShell>
  );
}
