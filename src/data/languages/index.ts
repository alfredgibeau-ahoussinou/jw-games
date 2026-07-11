import type { PhraseCategory, PreachLanguage, PreachLanguageId } from "@/types/language";
import { EN_PHRASES } from "./en";
import { ES_PHRASES } from "./es";
import { KO_PHRASES } from "./ko";
import { FR_PHRASES } from "./fr";
import { AR_PHRASES } from "./ar";
import { ZH_PHRASES } from "./zh";
import { PT_PHRASES } from "./pt";
import { TR_PHRASES } from "./tr";

export const PREACH_LANGUAGES: PreachLanguage[] = [
  {
    id: "en",
    name: "Anglais",
    nativeName: "English",
    flag: "🇬🇧",
    description: "Phrases et mots pour prêcher en anglais",
    forWhom: "Idéal pour les territoires anglophones ou bilingues",
    phrases: EN_PHRASES,
  },
  {
    id: "es",
    name: "Espagnol",
    nativeName: "Español",
    flag: "🇪🇸",
    description: "Phrases et mots pour prêcher en espagnol",
    forWhom: "Pour l'Espagne, l'Amérique latine et les voisins hispanophones",
    phrases: ES_PHRASES,
  },
  {
    id: "ko",
    name: "Coréen",
    nativeName: "한국어",
    flag: "🇰🇷",
    description: "Phrases et mots pour prêcher en coréen",
    forWhom: "Avec prononciation romanisée pour faciliter l'apprentissage",
    phrases: KO_PHRASES,
  },
  {
    id: "fr",
    name: "Français",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "Phrases pour prêcher en français",
    forWhom: "Pour ceux qui apprennent le français dans un pays francophone",
    phrases: FR_PHRASES,
  },
  {
    id: "ar",
    name: "Arabe",
    nativeName: "العربية",
    flag: "🇸🇦",
    description: "Phrases et mots pour prêcher en arabe",
    forWhom: "Moyen-Orient, Afrique du Nord — avec prononciation romanisée",
    phrases: AR_PHRASES,
  },
  {
    id: "zh",
    name: "Chinois",
    nativeName: "中文",
    flag: "🇨🇳",
    description: "Phrases et mots pour prêcher en chinois",
    forWhom: "Chine et communautés sinophones — avec pinyin",
    phrases: ZH_PHRASES,
  },
  {
    id: "pt",
    name: "Portugais",
    nativeName: "Português",
    flag: "🇧🇷",
    description: "Phrases et mots pour prêcher en portugais",
    forWhom: "Brésil, Portugal et lusophones",
    phrases: PT_PHRASES,
  },
  {
    id: "tr",
    name: "Turc",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    description: "Phrases et mots pour prêcher en turc",
    forWhom: "Turquie et communautés turcophones",
    phrases: TR_PHRASES,
  },
];

export const PHRASE_CATEGORY_LABELS: Record<PhraseCategory, string> = {
  introduction: "Première approche",
  pitch: "Présentation & pitch",
  vocabulary: "Mots utiles",
  polite: "Politesse",
  followup: "Retour visite",
  closing: "Conclusion",
  situations: "Situations courantes",
};

export const PHRASE_CATEGORY_ICONS: Record<PhraseCategory, string> = {
  introduction: "👋",
  pitch: "📖",
  vocabulary: "🔤",
  polite: "🙏",
  followup: "🔄",
  closing: "✨",
  situations: "💬",
};

export function getLanguage(id: string): PreachLanguage | undefined {
  return PREACH_LANGUAGES.find((l) => l.id === id);
}

export function getLanguagePhrases(
  langId: PreachLanguageId,
  category?: PhraseCategory
) {
  const lang = getLanguage(langId);
  if (!lang) return [];
  if (!category) return lang.phrases;
  return lang.phrases.filter((p) => p.category === category);
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
