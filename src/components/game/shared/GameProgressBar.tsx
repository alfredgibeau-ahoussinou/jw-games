"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface GameProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function GameProgressBar({ value, max = 100, className }: GameProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      className={cn("relative h-2 overflow-hidden rounded-full bg-[var(--surface-subtle)]", className)}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full bg-[var(--accent)]"
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      />
      <div className="pointer-events-none absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
