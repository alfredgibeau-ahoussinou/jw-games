"use client";


import { CheckCircle, XCircle } from "lucide-react";

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
    <ul>
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCorrect = index === correctIndex;

        return (
          <li key={`${index}-${option.slice(0, 12)}`}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              disabled={disabled || showResult}
            >
              {letters && (
                <span
                >
                  {String.fromCharCode(65 + index)}
                </span>
              )}
              <span>
                {option}
              </span>
              {showResult && isCorrect && (
                <CheckCircle aria-hidden />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircle aria-hidden />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
