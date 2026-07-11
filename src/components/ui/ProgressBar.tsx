"use client";

import { cn } from "@/lib/cn";

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
  variant,
}: ProgressBarProps) {
  return (
    <div className={cn("progress-bar", variant === "gold" && "progress-bar--gold", className)}>
      {showLabel && (
        <div>
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
      <progress value={value} max={max} />
    </div>
  );
}
