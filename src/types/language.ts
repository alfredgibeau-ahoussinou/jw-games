export type PreachLanguageId =
  | "en"
  | "es"
  | "ko"
  | "fr"
  | "ar"
  | "zh"
  | "pt"
  | "tr";

export type PhraseCategory =
  | "introduction"
  | "pitch"
  | "vocabulary"
  | "polite"
  | "followup"
  | "closing"
  | "situations";

export interface PreachPhrase {
  id: string;
  category: PhraseCategory;
  /** Texte de référence (français — langue de l'interface) */
  french: string;
  /** Expression dans la langue cible */
  target: string;
  /** Prononciation (surtout coréen) */
  pronunciation?: string;
  /** Conseil pour la prédication */
  tip?: string;
}

export interface PreachLanguage {
  id: PreachLanguageId;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  forWhom: string;
  phrases: PreachPhrase[];
}
