"use client";

import Link from "next/link";
import { Flame, Gamepad2, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getFeaturedDailyChallenge } from "@/lib/daily-challenges";
import { toParisIso } from "@/lib/jw-daily-text";
import { cn } from "@/lib/cn";

interface DailyChallengeWidgetProps {
  className?: string;
  compact?: boolean;
}

export function DailyChallengeWidget({ className, compact }: DailyChallengeWidgetProps) {
  const challenge = getFeaturedDailyChallenge(toParisIso());

  if (compact) {
    return (
      <section
        className={cn(
          "rounded-xl border border-[var(--accent)]/25 bg-gradient-to-r from-[var(--accent-light)]/50 to-[var(--bg-card)] p-4",
          className
        )}
        aria-label="Défi du jour"
      >
        <div className="flex items-center gap-3">
          <Flame className="h-5 w-5 shrink-0 text-warning" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-[var(--text-muted)]">Défi du jour</p>
            <p className="truncate text-sm font-semibold">{challenge.gameLabel}</p>
            <p className="text-caption truncate">Thème : {challenge.themeLabel}</p>
          </div>
          <Link href={challenge.gameHref} className="shrink-0">
            <Button size="sm">Jouer</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent-light)]/40 via-[var(--bg-card)] to-[var(--bg-card)] p-5 sm:p-6",
        className
      )}
      aria-label="Défi du jour"
    >
      <div className="flex items-center gap-2 text-warning">
        <Flame className="h-5 w-5" aria-hidden />
        <h2 className="text-heading">Défi du jour</h2>
      </div>
      <p className="text-body mt-2 text-sm">
        Un mode de jeu et un thème d&apos;étude mis en avant pour aujourd&apos;hui.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Link
          href={challenge.gameHref}
          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--accent)]/40"
        >
          <Gamepad2 className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
          <div>
            <p className="text-xs text-[var(--text-muted)]">Jeu du jour</p>
            <p className="font-semibold">{challenge.gameLabel}</p>
          </div>
        </Link>
        <Link
          href={challenge.themeHref}
          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--accent)]/40"
        >
          <BookMarked className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
          <div>
            <p className="text-xs text-[var(--text-muted)]">Thème du jour</p>
            <p className="font-semibold">{challenge.themeLabel}</p>
          </div>
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href={challenge.gameHref}>
          <Button size="sm">Lancer le défi</Button>
        </Link>
        <Link href="/quotidien">
          <Button variant="outline" size="sm">
            Toutes les missions
          </Button>
        </Link>
      </div>
    </section>
  );
}
