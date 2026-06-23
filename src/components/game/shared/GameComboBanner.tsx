"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

interface GameComboBannerProps {
  show: boolean;
  streak: number;
}

export function GameComboBanner({ show, streak }: GameComboBannerProps) {
  return (
    <AnimatePresence>
      {show && streak >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85 }}
          className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2"
        >
          <span className="feedback-banner feedback-banner--combo">
            <Flame className="h-4 w-4" aria-hidden />
            Combo ×{streak} !
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
