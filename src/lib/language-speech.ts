const LANG_CODES: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  ko: "ko-KR",
  fr: "fr-FR",
  ar: "ar-SA",
  zh: "zh-CN",
  pt: "pt-BR",
  tr: "tr-TR",
};

/** Lit uniquement la langue cible — jamais le français (sauf cours « fr »). */
export function speakPhrase(
  languageId: string,
  text: string,
  options?: { rate?: number }
) {
  if (typeof window === "undefined" || !window.speechSynthesis || !text.trim()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANG_CODES[languageId] ?? "fr-FR";
  u.rate = options?.rate ?? 0.85;
  window.speechSynthesis.speak(u);
}

export function canSpeakPhrase(
  languageId: string,
  options: { flipped: boolean }
): boolean {
  if (languageId === "fr") return true;
  return options.flipped;
}
