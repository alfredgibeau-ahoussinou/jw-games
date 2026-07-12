import type { StudyTheme } from "@/types/study";
import type { StudyThemeGuide, StudyThemeScriptureVerse } from "./types";

export function v(text: string, ref: string): StudyThemeScriptureVerse {
  return { text, ref };
}

export function defaultGuide(theme: StudyTheme): StudyThemeGuide {
  const readingTitles = theme.readings?.map((r) => r.title) ?? [];
  const articleCount = theme.articleIds?.length ?? 0;
  const gameCount = theme.miniGames.length;

  const extraRefs =
    theme.readings?.flatMap((r) => r.scriptureRefs ?? []).slice(0, 3) ?? [];

  const keyVerses: StudyThemeScriptureVerse[] = [
    { text: theme.scriptureHighlight, ref: theme.scriptureRef },
    ...extraRefs.map((ref) => ({ text: `Voir ${ref} dans votre Bible.`, ref })),
  ].slice(0, 6);

  return {
    introParagraphs: [
      theme.description,
      `Ce pôle regroupe ${articleCount > 0 ? `${articleCount} article${articleCount > 1 ? "s" : ""} d'étude` : "des lectures"} et ${gameCount} mini-jeu${gameCount > 1 ? "x" : ""} pour méditer et ancrer « ${theme.title} » à votre rythme.`,
    ],
    whyTheme: `Étudier « ${theme.subtitle.toLowerCase()} » renforce notre relation avec Jéhovah et nous équipe pour appliquer la Bible au quotidien. ${theme.scriptureHighlight} — ${theme.scriptureRef}.`,
    learningGoals: [
      `Comprendre les principes bibliques liés à ${theme.title.toLowerCase()}`,
      ...(readingTitles.length > 0
        ? [`Méditer sur : ${readingTitles.slice(0, 2).join(", ")}`]
        : ["Méditer sur le verset clé de ce pôle"]),
      ...(articleCount > 0 ? ["Lire et répondre aux questions des articles"] : []),
      "Consolider par les mini-jeux interactifs",
    ],
    keyVerses,
    meditationTips: [
      `Lisez lentement ${theme.scriptureRef} et notez une idée qui vous touche.`,
      "Posez-vous : comment puis-je appliquer ce principe aujourd'hui ?",
      "Priez brièvement pour demander la sagesse de Jéhovah avant de continuer.",
    ],
    howToAdvance: [
      {
        title: "Commencez par le verset clé",
        detail: `${theme.scriptureRef} — lisez-le lentement et notez une idée qui vous touche.`,
      },
      ...(theme.readings && theme.readings.length > 0
        ? [
            {
              title: "Lisez les méditations",
              detail: `${theme.readings.length} lecture${theme.readings.length > 1 ? "s" : ""} courtes pour approfondir le sujet.`,
            },
          ]
        : []),
      ...(articleCount > 0
        ? [
            {
              title: "Parcourez les articles",
              detail: `${articleCount} étude${articleCount > 1 ? "s" : ""} structurée${articleCount > 1 ? "s" : ""} avec questions de méditation.`,
            },
          ]
        : []),
      {
        title: "Jouez aux mini-jeux",
        detail: `${gameCount} activité${gameCount > 1 ? "s" : ""} pour tester et mémoriser (+15 XP par bonne réponse).`,
      },
    ],
  };
}
