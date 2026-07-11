import Link from "next/link";
import { BookOpen, ExternalLink, Newspaper } from "lucide-react";
import type { StudyArticle, StudyArticleBlock } from "@/types/study";
import { STUDY_PUBLICATION_LABELS } from "@/types/study";
import { getStudyTheme } from "@/data/study-themes";
import { estimateReadMinutes } from "@/data/study/article-builder";

const KIND_STYLE: Record<StudyArticle["kind"], { icon: typeof BookOpen; badge: string }> = {
  "tours-de-garde": {
    icon: BookOpen,
    badge: "bg-amber-500/15 text-amber-200 ring-amber-500/25",
  },
  "reveillez-vous": {
    icon: Newspaper,
    badge: "bg-sky-500/15 text-sky-200 ring-sky-500/25",
  },
  livre: {
    icon: BookOpen,
    badge: "bg-violet-500/15 text-violet-200 ring-violet-500/25",
  },
  brochure: {
    icon: BookOpen,
    badge: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/25",
  },
};

const KIND_INTRO: Record<StudyArticle["kind"], string> = {
  "tours-de-garde": "Étude biblique — style Tours de garde",
  "reveillez-vous": "Étude biblique — style Réveillez-vous !",
  livre: "Étude biblique — style publication",
  brochure: "Étude biblique — style brochure",
};

function ArticleBlock({ block }: { block: StudyArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3>
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p>
          {block.text}
        </p>
      );
    case "scripture":
      return (
        <blockquote>
          « {block.text} »
          <footer>{block.ref}</footer>
        </blockquote>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li
              key={item}
            >
              <span aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "question":
      return (
        <div>
          <p>
            Question de méditation
          </p>
          <p>{block.text}</p>
        </div>
      );
    case "note":
      return (
        <div>
          <p>
            {block.title}
          </p>
          <p>
            {block.text}
          </p>
        </div>
      );
    default:
      return null;
  }
}

interface StudyArticleViewProps {
  article: StudyArticle;
}

export function StudyArticleView({ article }: StudyArticleViewProps) {
  const style = KIND_STYLE[article.kind];
  const Icon = style.icon;
  const label = STUDY_PUBLICATION_LABELS[article.kind];
  const theme = article.themeId ? getStudyTheme(article.themeId) : undefined;
  const meta = [article.year, article.issue].filter(Boolean).join(" · ");
  const readMinutes = estimateReadMinutes(article.body);

  return (
    <article>
      <div>
        <p>
          {KIND_INTRO[article.kind]} · lecture ~{readMinutes} min · texte d&apos;étude original pour{" "}
          <strong>JW Games</strong>, fondé sur la
          Bible. Pour les publications officielles, consultez{" "}
          <a
            href="https://www.jw.org/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jw.org
            <ExternalLink aria-hidden />
          </a>
          .
        </p>
      </div>

      <header>
        <div>
          <span
          >
            <Icon aria-hidden />
            {label}
          </span>
          {meta && <span>{meta}</span>}
          {theme && (
            <Link
              href={`/etude/${theme.id}`}
            >
              Thème : {theme.title}
            </Link>
          )}
        </div>
        <h1>
          {article.title}
        </h1>
        {article.subtitle && (
          <p>{article.subtitle}</p>
        )}
        <p>
          {article.excerpt}
        </p>
      </header>

      <div>
        {article.body.map((block, i) => (
          <ArticleBlock key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      {article.studyQuestions && article.studyQuestions.length > 0 && (
        <section>
          <h2>
            Questions pour approfondir votre étude
          </h2>
          <ol>
            {article.studyQuestions.map((question, i) => (
              <li
                key={question}
              >
                <span>
                  {i + 1}
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {article.scriptureRefs && article.scriptureRefs.length > 0 && (
        <footer>
          <h2>
            Références bibliques à lire
          </h2>
          <div>
            {article.scriptureRefs.map((ref) => (
              <span
                key={ref}
              >
                {ref}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
