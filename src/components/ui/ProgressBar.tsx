"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  variant?: "cyan" | "gold";
}

export function ProgressBar({
  value,
  max,
  className,
  showLabel = false,
  variant = "cyan",
}: ProgressBarProps) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-1.5 flex justify-between text-xs text-[var(--text-muted)]">
          <span>{value} XP</span>
          <span>{max} XP</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-subtle)]">
        <motion.div
          className={cn(
            "h-full rounded-full",
            variant === "gold"
              ? "bg-[var(--warning)]"
              : "bg-[var(--accent)]"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>
    </div>
  );
}
