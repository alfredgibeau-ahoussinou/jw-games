"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StudyTheme } from "@/types/study";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { getThemeArticles } from "@/data/study-themes";
import { getThemeStudyStats, isArticleRead, isStudyGameDone } from "@/lib/study-progress";
import { jwImageForStudyTheme } from "@/lib/jw-images";
import { useUserStore } from "@/stores/user-store";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/cn";

interface StudyThemeCardProps {
  theme: StudyTheme;
  compact?: boolean;
  showProgress?: boolean;
}

function ThemeImageBg({ themeId }: { themeId: string }) {
  const img = jwImageForStudyTheme(themeId);
  return (
    <>
      <SafeImage
        src={img.url}
        alt=""
        fill
        sizes="(max-width: 640px) 80vw, 360px"
        frameClassName="media-frame--fill"
      />
      <div className="netflix-poster__shade" />
    </>
  );
}

export function StudyThemeCard({ theme, compact, showProgress }: StudyThemeCardProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;

  const articles = getThemeArticles(theme.id);
  const articlesRead = articles.filter((a) => isArticleRead(studyProgress, a.id)).length;
  const gamesDone = theme.miniGames.filter((g) =>
    isStudyGameDone(studyProgress, theme.id, g.id)
  ).length;
  const progress = getThemeStudyStats(
    studyProgress,
    articles.length,
    articlesRead,
    theme.miniGames.length,
    gamesDone
  );

  const meta = (
    <>
      {theme.miniGames.length} mini-jeux
      {showProgress && progress.hasStarted && <span> · {progress.percent} %</span>}
    </>
  );

  if (compact) {
    return (
      <Link href={`/etude/${theme.id}`} className="netflix-poster-link">
        <article className={cn("netflix-poster", "netflix-poster--compact")}>
          <div className="netflix-poster__media">
            <ThemeImageBg themeId={theme.id} />
            <div className="netflix-poster__body">
              {Icon && visual && (
                <span className="badge badge--info" style={{ marginBottom: "0.35rem" }}>
                  <Icon strokeWidth={2} width={12} height={12} aria-hidden />
                </span>
              )}
              <h3>{theme.title}</h3>
              <p>{meta}</p>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/etude/${theme.id}`} className="netflix-poster-link">
      <article className="netflix-poster netflix-poster--card card" style={{ padding: 0 }}>
        <div className="netflix-poster__media">
          <ThemeImageBg themeId={theme.id} />
        </div>
        <div className="stack" style={{ padding: "1rem" }}>
          <span className="netflix-tile__meta">
            {theme.miniGames.length} jeux
            {(theme.articleIds?.length ?? 0) > 0 && ` · ${theme.articleIds!.length} articles`}
          </span>
          <h3>{theme.title}</h3>
          <p className="netflix-tile__meta">{theme.subtitle}</p>
          <p className="netflix-tile__meta">{theme.description}</p>
          <div className="cluster">
            <p className="netflix-tile__meta">{theme.scriptureRef}</p>
            <ArrowUpRight aria-hidden />
          </div>
          {showProgress && progress.hasStarted && (
            <div className="stack">
              <div className="cluster" style={{ justifyContent: "space-between" }}>
                <span className="netflix-tile__meta">
                  {progress.articlesRead}/{progress.articlesTotal} articles · {progress.gamesDone}/
                  {progress.gamesTotal} jeux
                </span>
                <span className="netflix-tile__meta">{progress.percent} %</span>
              </div>
              <ProgressBar
                value={progress.articlesRead + progress.gamesDone}
                max={progress.articlesTotal + progress.gamesTotal || 1}
              />
            </div>
          )}
          {showProgress && progress.isComplete && (
            <span className="badge badge--success">Terminé ✓</span>
          )}
        </div>
      </article>
    </Link>
  );
}
