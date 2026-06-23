"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface GameOptionGridProps {
  options: string[];
  selectedIndex: number | null;
  correctIndex: number;
  onSelect: (index: number) => void;
  disabled?: boolean;
  letters?: boolean;
}

export function GameOptionGrid({
  options,
  selectedIndex,
  correctIndex,
  onSelect,
  disabled,
  letters = true,
}: GameOptionGridProps) {
  const showResult = selectedIndex !== null;

  return (
    <ul className="game-option-list">
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCorrect = index === correctIndex;

        return (
          <li key={`${index}-${option.slice(0, 12)}`}>
            <motion.button
              type="button"
              onClick={() => onSelect(index)}
              disabled={disabled || showResult}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, type: "spring", stiffness: 380, damping: 28 }}
              whileTap={!showResult ? { scale: 0.99 } : undefined}
              className={cn(
                "game-option group w-full",
                !showResult && "game-option--idle",
                showResult && isCorrect && "game-option--correct",
                showResult && isSelected && !isCorrect && "game-option--wrong",
                showResult && !isSelected && !isCorrect && "opacity-45"
              )}
            >
              {letters && (
                <span
                  className={cn(
                    "option-letter transition-all",
                    showResult && isCorrect && "option-letter--correct",
                    showResult && isSelected && !isCorrect && "option-letter--wrong"
                  )}
                >
                  {String.fromCharCode(65 + index)}
                </span>
              )}
              <span className="min-w-0 flex-1 break-words font-medium leading-relaxed text-[var(--text)]">
                {option}
              </span>
              {showResult && isCorrect && (
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--danger)]" aria-hidden />
              )}
            </motion.button>
          </li>
        );
      })}
    </ul>
  );
}
