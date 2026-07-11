import type { StudyArticleBlock } from "@/types/study";

export const p = (text: string): StudyArticleBlock => ({ type: "p", text });
export const h2 = (text: string): StudyArticleBlock => ({ type: "h2", text });
export const h3 = (text: string): StudyArticleBlock => ({ type: "h3", text });
export const sc = (text: string, ref: string): StudyArticleBlock => ({
  type: "scripture",
  text,
  ref,
});
export const q = (text: string): StudyArticleBlock => ({ type: "question", text });
export const ul = (items: string[]): StudyArticleBlock => ({ type: "ul", items });
export const note = (title: string, text: string): StudyArticleBlock => ({
  type: "note",
  title,
  text,
});

/** Convertit d'anciens paragraphes simples en blocs de base */
export function paragraphsToBlocks(paragraphs: string[]): StudyArticleBlock[] {
  return paragraphs.map((text) => p(text));
}

export function countArticleBlocks(blocks: StudyArticleBlock[]): number {
  let words = 0;
  for (const block of blocks) {
    if (block.type === "p" || block.type === "scripture" || block.type === "note") {
      words += block.text.split(/\s+/).length;
    } else if (block.type === "ul") {
      words += block.items.join(" ").split(/\s+/).length;
    } else if (block.type === "question") {
      words += block.text.split(/\s+/).length;
    }
  }
  return words;
}

export function estimateReadMinutes(blocks: StudyArticleBlock[]): number {
  const words = countArticleBlocks(blocks);
  return Math.max(5, Math.ceil(words / 160));
}

export interface RichSection {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  scriptures?: { text: string; ref: string }[];
  list?: { title?: string; items: string[] };
  question?: string;
}

/** Assemble un article long pour lecture méditative (sections, Écritures, questions) */
export function buildRichArticle(intro: string, sections: RichSection[]): StudyArticleBlock[] {
  const blocks: StudyArticleBlock[] = [note("Dans cet article", intro)];
  for (const sec of sections) {
    blocks.push(h2(sec.title));
    if (sec.subtitle) blocks.push(h3(sec.subtitle));
    for (const para of sec.paragraphs) blocks.push(p(para));
    if (sec.scriptures) {
      for (const s of sec.scriptures) blocks.push(sc(s.text, s.ref));
    }
    if (sec.list) {
      if (sec.list.title) blocks.push(h3(sec.list.title));
      blocks.push(ul(sec.list.items));
    }
    if (sec.question) blocks.push(q(sec.question));
  }
  return blocks;
}

export const DEFAULT_STUDY_QUESTIONS = (topic: string): string[] => [
  `Quel verset de cet article sur « ${topic} » retenez-vous en priorité ?`,
  "Comment ce sujet s'applique-t-il à votre vie en ce moment ?",
  "Qui pourrait bénéficier de ce que vous avez appris ?",
  "Quelle prière pouvez-vous faire à la suite de cette étude ?",
  "Quelle action concrète allez-vous entreprendre cette semaine ?",
];
