"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { StudyMiniGameCard } from "@/components/study/StudyMiniGameCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyReadingBlock } from "@/components/study/StudyReadingBlock";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getThemeArticles } from "@/data/study-themes";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { isArticleRead, isStudyGameDone } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { Button } from "@/components/ui/Button";
import type { StudyTheme } from "@/types/study";

interface StudyThemeContentProps {
  theme: StudyTheme;
}

export function StudyThemeContent({ theme }: StudyThemeContentProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;
  const readings = theme.readings ?? [];
  const articles = getThemeArticles(theme.id);

  const articlesRead = articles.filter((a) => isArticleRead(studyProgress, a.id)).length;
  const gamesDone = theme.miniGames.filter((g) =>
    isStudyGameDone(studyProgress, theme.id, g.id)
  ).length;

  const nextUnreadArticle = articles.find((a) => !isArticleRead(studyProgress, a.id));
  const nextUndoneGame = theme.miniGames.find(
    (g) => !isStudyGameDone(studyProgress, theme.id, g.id)
  );

  return (
    <PageWrapper>
      <StudioPageShell>
        <div>
          <PageHeader
            title={theme.title}
            description={theme.subtitle}
            backHref="/etude"
            backLabel="Étude personnelle"
            icon={Icon}
          />
        </div>

        <StudioPageBody>

        {(articles.length > 0 || theme.miniGames.length > 0) && (
          <section>
            {articles.length > 0 && (
              <div>
                <p>Articles lus</p>
                <p>
                  {articlesRead} <span>/ {articles.length}</span>
                </p>
                <ProgressBar value={articlesRead} max={articles.length} />
              </div>
            )}
            {theme.miniGames.length > 0 && (
              <div>
                <p>Mini-jeux terminés</p>
                <p>
                  {gamesDone} <span>/ {theme.miniGames.length}</span>
                </p>
                <ProgressBar value={gamesDone} max={theme.miniGames.length} />
              </div>
            )}
          </section>
        )}

        {(nextUnreadArticle || nextUndoneGame) && (
          <div>
            {nextUnreadArticle && (
              <Link
                href={`/etude/article/${nextUnreadArticle.id}`}
              >
                <BookOpen aria-hidden />
                <span>
                  <span>Prochain article</span>
                  <span>
                    {nextUnreadArticle.title}
                  </span>
                </span>
                <ChevronRight />
              </Link>
            )}
            {nextUndoneGame && !nextUnreadArticle && (
              <Link
                href={`/etude/${theme.id}/${nextUndoneGame.id}`}
              >
                <span>
                  <span>Prochain mini-jeu</span>
                  <span>{nextUndoneGame.title}</span>
                </span>
                <Button size="sm" variant="outline">
                  Jouer
                </Button>
              </Link>
            )}
          </div>
        )}

        <section>
          {visual && <div />}
          <div>
            <p>{theme.description}</p>
            <blockquote>
              {theme.scriptureHighlight}
              <footer>{theme.scriptureRef}</footer>
            </blockquote>
          </div>
        </section>

        {readings.length > 0 && (
          <section aria-label="Lectures">
            <h2>À méditer</h2>
            <div>
              {readings.map((reading) => (
                <StudyReadingBlock key={reading.id} reading={reading} />
              ))}
            </div>
          </section>
        )}

        {articles.length > 0 && (
          <section aria-label="Articles">
            <h2>Tours de garde & Réveillez-vous !</h2>
            <p>
              Études structurées — sections, Écritures citées et questions de méditation.
            </p>
            <div>
              {articles.map((article) => (
                <StudyArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        <section aria-label="Mini-jeux">
          <h2>Mini-jeux de cette thématique</h2>
          <div>
            {theme.miniGames.map((game) => (
              <StudyMiniGameCard key={game.id} themeId={theme.id} game={game} />
            ))}
          </div>
        </section>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
