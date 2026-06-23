"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RotateCcw, Gamepad2, Trophy, Star, Zap, Flame } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

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
      <Container className={cn("pb-6 sm:pb-10", className)} narrow={narrow}>
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
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const stars = percent >= 90 ? 3 : percent >= 60 ? 2 : percent >= 30 ? 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-md"
    >
      <div className="surface-card border border-[var(--border)] p-5 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-light)]">
          <Trophy className="h-7 w-7 text-[var(--accent)]" aria-hidden />
        </div>

        <h2 className="text-heading">Partie terminée</h2>
        {accuracyLabel && (
          <p className="mt-1 text-sm font-medium text-[var(--accent)]">{accuracyLabel}</p>
        )}

        <p className="mt-4 text-4xl font-bold tabular-nums">
          {score}
          <span className="text-xl font-normal text-[var(--text-muted)]">/{total}</span>
        </p>
        <p className="text-caption mt-1">
          {label} · {percent}%
          {sublabel && <span className="mt-1 block">{sublabel}</span>}
        </p>

        {bestStreak !== undefined && bestStreak >= 2 && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--warning)]/10 px-3 py-1 text-sm font-semibold text-[var(--warning)]">
            <Flame className="h-4 w-4" aria-hidden />
            Meilleur combo : ×{bestStreak}
          </p>
        )}

        <div className="my-5 flex justify-center gap-1" aria-label={`${stars} étoiles sur 3`}>
          {[1, 2, 3].map((i) => (
            <Star
              key={i}
              className={cn(
                "h-6 w-6",
                i <= stars ? "fill-[var(--warning)] text-warning" : "text-[var(--border-strong)]"
              )}
              aria-hidden
            />
          ))}
        </div>

        {xpEarned !== undefined && xpEarned > 0 && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
            <Zap className="h-4 w-4" aria-hidden />
            +{xpEarned} XP
          </p>
        )}

        {newBadges.length > 0 && (
          <div className="mb-6 space-y-2 text-left">
            <p className="text-caption font-semibold uppercase tracking-wide">Nouveau badge</p>
            {newBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3"
              >
                <span className="text-2xl" aria-hidden>{badge.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{badge.name}</p>
                  <p className="text-caption">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {onReplay && (
            <Button variant="outline" onClick={onReplay} className="min-h-11 w-full sm:w-auto">
              <RotateCcw className="h-4 w-4" aria-hidden />
              Rejouer
            </Button>
          )}
          {onExit ? (
            <Button onClick={onExit} className="min-h-11">{exitLabel}</Button>
          ) : (
            <Link href={exitHref}>
              <Button className="min-h-11 w-full sm:w-auto">
                <Gamepad2 className="h-4 w-4" aria-hidden />
                {exitLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
