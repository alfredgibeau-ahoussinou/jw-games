"use client";


import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

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
    <div
    >
      <Card glow>
        {emoji && <p aria-hidden>{emoji}</p>}
        <h2>{title}</h2>
        <p>{description}</p>

        {stats.length > 0 && (
          <div>
            {stats.map((s) => (
              <div
                key={s.label}
              >
                <p>{s.value}</p>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {tips.length > 0 && (
        <Card>
          <p>
            <Sparkles aria-hidden />
            Conseils
          </p>
          <ul>
            {tips.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </Card>
      )}

      {children}

      {showStartButton && (
        <Button size="lg" onClick={onStart}>
          <Play aria-hidden />
          {startLabel}
        </Button>
      )}
    </div>
  );
}
