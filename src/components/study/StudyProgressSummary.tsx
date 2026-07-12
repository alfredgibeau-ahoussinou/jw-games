"use client";

import Link from "next/link";
import { BookMarked } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
import { Card } from "@/components/ui/Card";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_THEMES } from "@/data/study-themes";
import { getStudyPathWeek } from "@/lib/study-paths";
import { jwImageForSlot } from "@/lib/jw-images";
import { useUserStore } from "@/stores/user-store";

export function StudyProgressSummary() {
  const profile = useUserStore((s) => s.profile);
  const studyProgress = useUserStore((s) => s.studyProgress);

  const readCount = studyProgress.readArticleIds.length;
  const gameCount = studyProgress.completedStudyGames.length;
  const totalGames = STUDY_THEMES.reduce((n, t) => n + t.miniGames.length, 0);
  const pathWeek = getStudyPathWeek(profile?.preferences, studyProgress.currentPathWeek);

  return (
    <Card className="overflow-hidden p-0">
      <div className="relative min-h-[120px]">
        <SafeImage
          src={jwImageForSlot("study.progress").url}
          alt=""
          fill
          sizes="640px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
              <BookMarked className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-heading text-white">Étude personnelle</h2>
          </div>
          <Link
            href="/etude"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Continuer
          </Link>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <div className="mb-2 flex items-baseline justify-between gap-2 text-sm">
            <span className="text-[var(--text-muted)]">Articles lus</span>
            <span className="font-semibold tabular-nums text-[var(--accent)]">
              {readCount} / {STUDY_ARTICLES.length}
            </span>
          </div>
          <ProgressBar value={readCount} max={STUDY_ARTICLES.length} />
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between gap-2 text-sm">
            <span className="text-[var(--text-muted)]">Mini-jeux terminés</span>
            <span className="font-semibold tabular-nums text-[var(--accent)]">
              {gameCount} / {totalGames}
            </span>
          </div>
          <ProgressBar value={gameCount} max={totalGames} />
        </div>

        {pathWeek && (
          <p className="text-sm text-[var(--text-muted)]">
            Parcours : <strong className="text-[var(--text)]">{pathWeek.title}</strong>
          </p>
        )}
      </div>
    </Card>
  );
}
