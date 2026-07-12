import type { StudyTheme } from "@/types/study";

export interface StudyThemeGuide {
  /** Paragraphe d'introduction développé */
  intro: string;
  /** Pourquoi étudier ce thème */
  whyTheme: string;
  /** Objectifs d'apprentissage */
  learningGoals: string[];
  /** Étapes concrètes pour avancer */
  howToAdvance: { title: string; detail: string }[];
}

const GUIDE_OVERRIDES: Partial<Record<string, StudyThemeGuide>> = {
  priere: {
    intro:
      "La prière est le fil invisible qui relie chaque serviteur à son Créateur. Ce pôle vous invite à ralentir, à réfléchir sur ce que la Bible enseigne sur la communication avec Jéhovah, puis à ancrer ces vérités par la méditation et le jeu.",
    whyTheme:
      "Sans prière régulière, notre relation avec Jéhovah s'affaiblit. Jésus, les prophètes et les disciples fidèles ont tous montré que parler à Dieu n'est pas optionnel — c'est vital pour tenir bon dans l'épreuve et garder la joie.",
    learningGoals: [
      "Comprendre ce qu'est une prière sincère selon la Bible",
      "Découvrir le modèle que Jésus nous a laissé",
      "Apprendre à prier avec persévérance et confiance",
      "Ancrer des versets clés sur la prière",
    ],
    howToAdvance: [
      { title: "Méditez sur le verset clé", detail: "Lisez Colossiens 4:2 et demandez-vous : comment puis-je « veiller » dans ma prière ?" },
      { title: "Parcourez les lectures", detail: "Deux méditations courtes pour approfondir le sujet avant les articles." },
      { title: "Lisez les articles", detail: "Études structurées des Tours de garde et de Réveillez-vous ! avec questions." },
      { title: "Jouez aux mini-jeux", detail: "Quiz, vrai/faux et versets à compléter pour fixer ce que vous avez appris (+15 XP par bonne réponse)." },
    ],
  },
  confiance: {
    intro:
      "Faire confiance à Jéhovah quand tout semble incertain est l'un des plus grands défis de la foi. Ce pôle explore les exemples bibliques de serviteurs qui ont compté sur Dieu — et ce que nous pouvons en tirer aujourd'hui.",
    whyTheme:
      "Proverbes 3:5 nous rappelle de ne pas nous appuyer sur notre propre intelligence. Dans un monde instable, cette confiance n'est pas naïveté : c'est obéissance éclairée par la Parole.",
    learningGoals: [
      "Identifier des exemples bibliques de confiance en action",
      "Distinguer confiance et passivité",
      "Méditer sur des promesses qui rassurent",
      "Renforcer votre foi par la révision active",
    ],
    howToAdvance: [
      { title: "Méditez sur le verset clé", detail: "Psaume 32:10 — qui est « entouré de bonté aimante » selon ce verset ?" },
      { title: "Lisez la méditation", detail: "« Faire confiance quand on ne voit pas la solution » pose les bases." },
      { title: "Étudiez les articles", detail: "Des lectures approfondies sur comment renforcer sa confiance." },
      { title: "Testez-vous avec les jeux", detail: "Exemples de foi, vrai/faux et versets à compléter." },
    ],
  },
  jesus: {
    intro:
      "Jésus Christ n'est pas une figure lointaine : il est le Fils de Dieu dont la vie, sa mort et sa résurrection changent notre présent et notre avenir. Ce pôle vous aide à mieux connaître sa personne, sa mission et son exemple.",
    whyTheme:
      "Jean 14:6 résume son rôle unique. Comprendre qui est Jésus — et pourquoi il est venu — clarifie toute notre foi et nous pousse à l'imiter dans notre quotidien.",
    learningGoals: [
      "Sa mission principale sur terre",
      "Son exemple d'humilité et d'obéissance",
      "Ses enseignements clés (Sermon sur le montagne, prière…)",
      "Mémoriser des paroles de Jésus",
    ],
    howToAdvance: [
      { title: "Méditez sur Jean 14:6", detail: "Que signifie pour vous « le chemin, la vérité et la vie » ?" },
      { title: "Deux lectures à méditer", detail: "Pourquoi Jésus est venu, et comment l'imiter." },
      { title: "Articles d'étude", detail: "Publications structurées sur sa personne et son rôle." },
      { title: "Mini-jeux thématiques", detail: "Quiz, vrai/faux et versets sur sa vie et ses paroles." },
    ],
  },
  royaume: {
    intro:
      "Le Royaume de Dieu n'est pas une métaphore vague : c'est le gouvernement céleste que Jéhovah a établi par son Fils. Ce pôle clarifie ce qu'il est, pourquoi Jésus l'a prêché partout, et comment il transforme nos priorités.",
    whyTheme:
      "Matthieu 6:10 montre que prier pour le Royaume est central. Sans comprendre cette bonne nouvelle, on risque de chercher des solutions là où Dieu ne les a pas promises.",
    learningGoals: [
      "Définir le Royaume selon la Bible",
      "Comprendre qui en est le Roi",
      "Relier le Royaume à notre espérance future",
      "Ancrer les versets clés sur le Royaume",
    ],
    howToAdvance: [
      { title: "Verset clé — Matthieu 6:10", detail: "Que demandons-nous quand nous prions « Que ton royaume vienne » ?" },
      { title: "Lectures « Qu'est-ce que le Royaume ? »", detail: "Deux méditations pour poser les fondations." },
      { title: "Articles et livre", detail: "Études WT, Awake ! et extrait de livre sur le sujet." },
      { title: "Consolider par le jeu", detail: "6 questions de quiz, vrai/faux et versets." },
    ],
  },
};

function defaultGuide(theme: StudyTheme): StudyThemeGuide {
  const readingTitles = theme.readings?.map((r) => r.title) ?? [];
  const articleCount = theme.articleIds?.length ?? 0;
  const gameCount = theme.miniGames.length;

  return {
    intro: `${theme.description} Ce pôle regroupe ${articleCount > 0 ? `${articleCount} article${articleCount > 1 ? "s" : ""} d'étude` : "des lectures"} et ${gameCount} mini-jeu${gameCount > 1 ? "x" : ""} pour méditer et ancrer « ${theme.title} » à votre rythme.`,
    whyTheme: `Étudier « ${theme.subtitle.toLowerCase()} » renforce notre relation avec Jéhovah et nous équipe pour appliquer la Bible au quotidien. ${theme.scriptureHighlight}`,
    learningGoals: [
      `Comprendre les principes bibliques liés à ${theme.title.toLowerCase()}`,
      ...(readingTitles.length > 0
        ? [`Méditer sur : ${readingTitles.slice(0, 2).join(", ")}`]
        : ["Méditer sur le verset clé de ce pôle"]),
      ...(articleCount > 0 ? ["Lire et répondre aux questions des articles"] : []),
      "Consolider par les mini-jeux interactifs",
    ],
    howToAdvance: [
      { title: "Commencez par le verset clé", detail: `${theme.scriptureRef} — lisez-le lentement et notez une idée qui vous touche.` },
      ...(theme.readings && theme.readings.length > 0
        ? [{ title: "Lisez les méditations", detail: `${theme.readings.length} lecture${theme.readings.length > 1 ? "s" : ""} courtes pour approfondir le sujet.` }]
        : []),
      ...(articleCount > 0
        ? [{ title: "Parcourez les articles", detail: `${articleCount} étude${articleCount > 1 ? "s" : ""} structurée${articleCount > 1 ? "s" : ""} avec questions de méditation.` }]
        : []),
      { title: "Jouez aux mini-jeux", detail: `${gameCount} activité${gameCount > 1 ? "s" : ""} pour tester et mémoriser (+15 XP par bonne réponse).` },
    ],
  };
}

export function getThemeGuide(theme: StudyTheme): StudyThemeGuide {
  return GUIDE_OVERRIDES[theme.id] ?? defaultGuide(theme);
}
