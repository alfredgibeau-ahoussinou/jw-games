"use client";

import Link from "next/link";
import { BookMarked } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
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
    <div>
      <div>
        <SafeImage
          src={jwImageForSlot("study.progress").url}
          alt="" fill sizes="640px" />
        <div />
        <div>
          <div>
            <BookMarked aria-hidden />
            <h2>Étude personnelle</h2>
          </div>
          <Link href="/etude">
            Continuer
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div>
            <span>Articles lus</span>
            <span>
              {readCount} / {STUDY_ARTICLES.length}
            </span>
          </div>
          <ProgressBar value={readCount} max={STUDY_ARTICLES.length} />
        </div>

        <div>
          <div>
            <span>Mini-jeux terminés</span>
            <span>
              {gameCount} / {totalGames}
            </span>
          </div>
          <ProgressBar value={gameCount} max={totalGames} />
        </div>

        {pathWeek && (
          <p>
            Parcours : <strong>{pathWeek.title}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
