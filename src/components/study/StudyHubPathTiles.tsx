"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BookMarked, Compass, Library } from "lucide-react";
import { cn } from "@/lib/cn";

export type StudyHubPath = "parcours" | "thematiques" | "articles";

interface PathTile {
  id: StudyHubPath;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

const PATHS: PathTile[] = [
  {
    id: "parcours",
    title: "Mon parcours",
    subtitle: "4 semaines guidées",
    description: "Un fil d'étude étape par étape, adapté à votre profil.",
    icon: Compass,
    accent: "from-teal-500/20 to-cyan-600/10",
  },
  {
    id: "thematiques",
    title: "Les pôles",
    subtitle: "23 thématiques",
    description: "Choisissez un sujet, découvrez-le en profondeur, puis jouez.",
    icon: BookMarked,
    accent: "from-violet-500/20 to-indigo-600/10",
  },
  {
    id: "articles",
    title: "Bibliothèque",
    subtitle: "Tours de garde & Awake !",
    description: "Toutes les études à lire directement sur le site.",
    icon: Library,
    accent: "from-amber-500/20 to-orange-600/10",
  },
];

interface StudyHubPathTilesProps {
  activePath: StudyHubPath | null;
  onSelect: (path: StudyHubPath) => void;
  themeCount?: number;
}

export function StudyHubPathTiles({
  activePath,
  onSelect,
  themeCount = 23,
}: StudyHubPathTilesProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {PATHS.map((path) => {
        const Icon = path.icon;
        const isActive = activePath === path.id;
        const subtitle =
          path.id === "thematiques" ? `${themeCount} thématiques` : path.subtitle;

        return (
          <button
            key={path.id}
            type="button"
            onClick={() => onSelect(path.id)}
            aria-pressed={isActive}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-2xl border p-5 text-left transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              isActive
                ? "border-[var(--accent)]/50 bg-[var(--accent-light)] shadow-lg shadow-[var(--accent)]/5"
                : "border-white/[0.06] bg-[var(--bg-card)] hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl"
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-60 blur-2xl",
                path.accent
              )}
            />
            <div className="relative flex flex-1 flex-col">
              <span
                className={cn(
                  "mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-white/10",
                  isActive
                    ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                    : "bg-white/[0.06] text-[var(--text-muted)] group-hover:text-[var(--accent)]"
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-caption text-[0.6875rem] uppercase tracking-wider">{subtitle}</p>
              <h3 className="mt-1 text-base font-semibold tracking-tight">{path.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
                {path.description}
              </p>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                Explorer
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
