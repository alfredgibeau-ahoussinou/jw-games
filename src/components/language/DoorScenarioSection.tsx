"use client";

import { useState } from "react";
import { ChevronDown, DoorOpen } from "lucide-react";
import type { DoorScenario } from "@/types/language";
import { cn } from "@/lib/cn";

interface DoorScenarioSectionProps {
  scenarios: DoorScenario[];
}

export function DoorScenarioSection({ scenarios }: DoorScenarioSectionProps) {
  const [openId, setOpenId] = useState<string | null>(scenarios[0]?.id ?? null);

  if (scenarios.length === 0) return null;

  return (
    <section aria-label="Scénarios porte-à-porte" className="space-y-3">
      <div className="flex items-center gap-2">
        <DoorOpen className="h-5 w-5 text-[var(--accent)]" aria-hidden />
        <h2 className="text-heading">Scénarios porte-à-porte</h2>
      </div>
      <p className="text-body text-sm">
        Dialogues courts pour vous entraîner aux situations courantes en prédication.
      </p>
      <div className="space-y-2">
        {scenarios.map((scenario) => {
          const open = openId === scenario.id;
          return (
            <div
              key={scenario.id}
              className="overflow-hidden rounded-xl border border-white/[0.06] bg-[var(--bg-card)]"
            >
              <button
                type="button"
                onClick={() => setOpenId(open ? null : scenario.id)}
                aria-expanded={open}
                className="flex w-full min-h-[3rem] items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div>
                  <p className="font-semibold">{scenario.title}</p>
                  <p className="text-caption">{scenario.setting}</p>
                </div>
                <ChevronDown
                  className={cn("h-5 w-5 shrink-0 transition-transform", open && "rotate-180")}
                  aria-hidden
                />
              </button>
              {open && (
                <div className="space-y-3 border-t border-white/[0.06] px-4 py-4">
                  {scenario.lines.map((line, i) => (
                    <div
                      key={i}
                      className={cn(
                        "rounded-lg px-3 py-2.5",
                        line.speaker === "vous"
                          ? "ml-0 mr-8 bg-[var(--accent-light)]/50"
                          : "ml-8 mr-0 bg-[var(--bg-elevated)]"
                      )}
                    >
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        {line.speaker === "vous" ? "Vous" : "Habitant"}
                      </p>
                      <p className="mt-1 text-sm">{line.french}</p>
                      <p className="mt-1 text-sm font-medium text-[var(--accent)]">{line.target}</p>
                      {line.pronunciation && (
                        <p className="text-caption mt-0.5 italic">{line.pronunciation}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
