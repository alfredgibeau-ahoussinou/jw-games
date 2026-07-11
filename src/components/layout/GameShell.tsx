"use client";

import Link from "next/link";
import { RotateCcw, Gamepad2, Trophy, Star, Zap, Flame } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { Button } from "@/components/ui/Button";
import { shouldShowSessionGamification } from "@/lib/study-focus";
import { useUserStore } from "@/stores/user-store";

interface GameShellProps {
  title: string;
  description?: string;
  emoji?: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function GameShell({
  title,
  description,
  emoji,
  backHref = "/jeux",
  backLabel = "Retour aux jeux",
  children,
  className,
  narrow = true,
}: GameShellProps) {
  return (
    <PageWrapper>
      <Container narrow={narrow}>
        <PageHeader
          title={title}
          description={description}
          emoji={emoji}
          backHref={backHref}
          backLabel={backLabel}
        />
        {children}
      </Container>
    </PageWrapper>
  );
}

interface GameResultsProps {
  score: number;
  total: number;
  xpEarned?: number;
  label?: string;
  sublabel?: string;
  accuracyLabel?: string;
  bestStreak?: number;
  newBadges?: import("@/types/user").Badge[];
  onReplay?: () => void;
  onExit?: () => void;
  exitLabel?: string;
  exitHref?: string;
}

export function GameResults({
  score,
  total,
  xpEarned,
  label = "bonnes réponses",
  sublabel,
  accuracyLabel,
  bestStreak,
  newBadges = [],
  onReplay,
  onExit,
  exitLabel = "Retour aux jeux",
  exitHref = "/jeux",
}: GameResultsProps) {
  const preferences = useUserStore((s) => s.profile?.preferences);
  const showGamification = shouldShowSessionGamification(preferences);
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const stars = percent >= 90 ? 3 : percent >= 60 ? 2 : percent >= 30 ? 1 : 0;

  return (
    <div >
      <div>
        <div>
          <Trophy aria-hidden />
        </div>

        <h2>Partie terminée</h2>
        {accuracyLabel && (
          <p>{accuracyLabel}</p>
        )}

        <p>
          {score}
          <span>/{total}</span>
        </p>
        <p>
          {label} · {percent}%
          {sublabel && <span>{sublabel}</span>}
        </p>

        {showGamification && bestStreak !== undefined && bestStreak >= 2 && (
          <p>
            <Flame aria-hidden />
            Meilleure série : ×{bestStreak}
          </p>
        )}

        {showGamification && (
          <div aria-label={`${stars} étoiles sur 3`}>
            {[1, 2, 3].map((i) => (
              <Star key={i} aria-hidden />
            ))}
          </div>
        )}

        {showGamification && xpEarned !== undefined && xpEarned > 0 && (
          <p>
            <Zap aria-hidden />
            +{xpEarned} XP
          </p>
        )}

        {newBadges.length > 0 && (
          <div>
            <p>Nouveau badge</p>
            {newBadges.map((badge) => (
              <div
                key={badge.id} >
                <span aria-hidden>{badge.icon}</span>
                <div>
                  <p>{badge.name}</p>
                  <p>{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div>
          {onReplay && (
            <Button variant="outline" onClick={onReplay}>
              <RotateCcw aria-hidden />
              Rejouer
            </Button>
          )}
          {onExit ? (
            <Button onClick={onExit}>{exitLabel}</Button>
          ) : (
            <Link href={exitHref}>
              <Button>
                <Gamepad2 aria-hidden />
                {exitLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
