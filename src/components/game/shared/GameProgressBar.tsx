"use client";



interface GameProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function GameProgressBar({ value, max = 100, className }: GameProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
      />
      <div />
    </div>
  );
}
