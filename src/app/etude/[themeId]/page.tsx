"use client";

import { notFound, useParams } from "next/navigation";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudyMiniGameCard } from "@/components/study/StudyMiniGameCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyReadingBlock } from "@/components/study/StudyReadingBlock";
import { getStudyTheme, getThemeArticles } from "@/data/study-themes";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { cn } from "@/lib/cn";

export default function StudyThemePage() {
  const params = useParams<{ themeId: string }>();
  const theme = getStudyTheme(params.themeId);
  if (!theme) notFound();

  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;
  const readings = theme.readings ?? [];
  const articles = getThemeArticles(theme.id);

  return (
    <PageWrapper>
      <div className="container-app pb-12">
        <PageHeader
          title={theme.title}
          description={theme.subtitle}
          backHref="/etude"
          backLabel="Étude personnelle"
          icon={Icon}
        />

        <section className="mb-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)]">
          {visual && <div className={cn("h-1 bg-gradient-to-r", visual.gradient)} />}
          <div className="p-6 sm:p-8">
            <p className="text-body max-w-2xl">{theme.description}</p>
            <blockquote className="scripture-block mt-6 max-w-2xl">
              {theme.scriptureHighlight}
              <footer className="scripture-ref mt-2 not-italic">{theme.scriptureRef}</footer>
            </blockquote>
          </div>
        </section>

        {readings.length > 0 && (
          <section className="mb-10" aria-label="Lectures">
            <h2 className="text-heading mb-4 text-lg">À méditer</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {readings.map((reading) => (
                <StudyReadingBlock key={reading.id} reading={reading} />
              ))}
            </div>
          </section>
        )}

        {articles.length > 0 && (
          <section className="mb-10" aria-label="Articles">
            <h2 className="text-heading mb-4 text-lg">Tours de garde & Réveillez-vous !</h2>
            <p className="text-caption mb-5 max-w-2xl">
              Articles complets à lire sur le site — style des publications officielles.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {articles.map((article) => (
                <StudyArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        <section aria-label="Mini-jeux">
          <h2 className="text-heading mb-4 text-lg">Mini-jeux de cette thématique</h2>
          <div className="grid gap-3">
            {theme.miniGames.map((game) => (
              <StudyMiniGameCard key={game.id} themeId={theme.id} game={game} />
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
