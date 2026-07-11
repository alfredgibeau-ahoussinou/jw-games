"use client";

import { useMemo, useRef, useState } from "react";

import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { shuffleQuiz, SAMPLE_QUIZ } from "@/data/sample-quiz";
import { calcXp } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";
import { Users } from "lucide-react";

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
  const usedQuestionIds = useRef<Set<string>>(new Set());

  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const roundQuestions = useMemo(() => {
    const fresh = SAMPLE_QUIZ.filter((q) => !usedQuestionIds.current.has(q.id));
    const pool = fresh.length >= QUESTIONS_PER_ROUND ? fresh : SAMPLE_QUIZ;
    const picked = shuffleQuiz(pool, QUESTIONS_PER_ROUND);
    picked.forEach((q) => usedQuestionIds.current.add(q.id));
    return picked;
  }, [round, gameKey]);

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
    usedQuestionIds.current.clear();
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
      title="Quiz en équipe"
      description="Deux équipes jouent à tour de rôle sur des questions bibliques — idéal en famille ou après une réunion."
      emoji="👥"
    >
      {phase === "setup" && (
        <div>
          <Card glow>
            <div>
              <Users />
              <span>Mode coopératif par équipes</span>
            </div>
            <p>
              {TOTAL_ROUNDS} manches · {QUESTIONS_PER_ROUND} questions par manche
            </p>
          </Card>

          <div>
            <div>
              <label>
                <Users /> Équipe A
              </label>
              <input
                value={teamA}
                onChange={(e) => setTeamA(e.target.value)}
              />
            </div>
            <div>
              <label>
                <Users /> Équipe B
              </label>
              <input
                value={teamB}
                onChange={(e) => setTeamB(e.target.value)}
              />
            </div>
          </div>

          <Button size="lg" onClick={() => setPhase("playing")}>
            Commencer le quiz
          </Button>
        </div>
      )}

      {phase === "playing" && (
        <div>
          <div>
            <div>
              <p>{teamA}</p>
              <p>{scores.A}</p>
            </div>
            <Badge variant="neon">
              Manche {round}/{TOTAL_ROUNDS}
            </Badge>
            <div>
              <p>{teamB}</p>
              <p>{scores.B}</p>
            </div>
          </div>
          <div
            key={`${round}-${activeTeam}-${gameKey}`}
          >
            <p>
              C&apos;est au tour de{" "}
              <span>
                {activeTeam === "A" ? teamA : teamB}
              </span>
            </p>
            <QuizGame
              questions={roundQuestions}
              onComplete={(score) => handleRoundComplete(score)}
            />
          </div>
        </div>
      )}

      {phase === "results" && (
        <div>
          <Card glow>
            <div
            >
              <p>🏆</p>
              <p>
                {winner
                  ? `Bravo à ${winner} — merci aux deux équipes !`
                  : "Égalité — merci aux deux équipes !"}
              </p>
            </div>
            <div>
              <div>
                <p>{teamA}</p>
                <p>{scores.A}</p>
              </div>
              <div>vs</div>
              <div>
                <p>{teamB}</p>
                <p>{scores.B}</p>
              </div>
            </div>
          </Card>
          <GameResults
            score={maxScore}
            total={totalQuestions}
            xpEarned={calcXp("equipe", maxScore, totalQuestions)}
            label="bonnes réponses (meilleure équipe)"
            newBadges={lastEarnedBadges}
            onReplay={resetGame}
          />
        </div>
      )}
    </GameShell>
  );
}
