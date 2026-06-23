"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface GameStartMenuProps {
  emoji?: string;
  title: string;
  description: string;
  stats?: { label: string; value: string | number }[];
  tips?: string[];
  onStart: () => void;
  startLabel?: string;
  showStartButton?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function GameStartMenu({
  emoji,
  title,
  description,
  stats = [],
  tips = [],
  onStart,
  startLabel = "Commencer",
  showStartButton = true,
  className,
  children,
}: GameStartMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("mx-auto max-w-lg space-y-6", className)}
    >
      <Card glow className="text-center">
        {emoji && <p className="mb-3 text-5xl" aria-hidden>{emoji}</p>}
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        <p className="text-body mt-2 text-[0.9375rem] leading-relaxed">{description}</p>

        {stats.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] px-3 py-3"
              >
                <p className="text-2xl font-bold text-[var(--accent)]">{s.value}</p>
                <p className="text-caption mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {tips.length > 0 && (
        <Card className="border-[var(--accent)]/15 bg-[var(--accent-light)]/30">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <Sparkles className="h-4 w-4" aria-hidden />
            Conseils
          </p>
          <ul className="space-y-1.5 text-left text-sm text-[var(--text-muted)]">
            {tips.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </Card>
      )}

      {children}

      {showStartButton && (
        <Button size="lg" className="w-full" onClick={onStart}>
          <Play className="h-5 w-5" aria-hidden />
          {startLabel}
        </Button>
      )}
    </motion.div>
  );
}
