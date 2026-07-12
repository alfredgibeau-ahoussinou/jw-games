export interface StudyThemeScriptureVerse {
  text: string;
  ref: string;
}

export interface StudyThemeGuide {
  /** 2 à 3 paragraphes d'introduction */
  introParagraphs: string[];
  /** Pourquoi étudier ce thème */
  whyTheme: string;
  /** Objectifs d'apprentissage */
  learningGoals: string[];
  /** 4 à 8 versets clés (texte + référence) */
  keyVerses: StudyThemeScriptureVerse[];
  /** Conseils pratiques pour méditer */
  meditationTips: string[];
  /** Étapes concrètes pour avancer */
  howToAdvance: { title: string; detail: string }[];
  /** IDs de pôles connexes */
  relatedThemes?: string[];
}
