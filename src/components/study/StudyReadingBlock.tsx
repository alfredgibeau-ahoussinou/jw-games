"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { StudyReading } from "@/types/study";
import { cn } from "@/lib/cn";

interface StudyReadingBlockProps {
  reading: StudyReading;
  defaultOpen?: boolean;
  index?: number;
}

export function StudyReadingBlock({
  reading,
  defaultOpen = false,
  index,
}: StudyReadingBlockProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="overflow-hidden rounded-xl border border-white/[0.06] bg-[var(--bg-card)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`reading-${reading.id}`}
        className={cn(
          "flex w-full min-h-[2.75rem] items-start gap-3 p-4 text-left transition-colors",
          "hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]",
          "sm:p-5"
        )}
      >
        {index != null && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-xs font-bold tabular-nums text-[var(--accent)]">
            {index}
          </span>
        )}
        <span className="min-w-0 flex-1">
          <h3 className="font-semibold tracking-tight">{reading.title}</h3>
          {!open && reading.paragraphs[0] && (
            <p className="text-caption mt-1 line-clamp-1">{reading.paragraphs[0]}</p>
          )}
        </span>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-[var(--text-dim)] transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`reading-${reading.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-3 border-t border-white/[0.05] px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
              {reading.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[0.9375rem] leading-relaxed text-[var(--text-muted)]"
                >
                  {p}
                </p>
              ))}
              {reading.scriptureRefs && reading.scriptureRefs.length > 0 && (
                <footer className="flex flex-wrap gap-2 pt-1">
                  {reading.scriptureRefs.map((ref) => (
                    <span
                      key={ref}
                      className="font-serif rounded-full border border-[var(--accent)]/20 bg-[var(--accent-light)] px-2.5 py-0.5 text-[0.6875rem] font-medium text-[var(--accent)]"
                    >
                      {ref}
                    </span>
                  ))}
                </footer>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
