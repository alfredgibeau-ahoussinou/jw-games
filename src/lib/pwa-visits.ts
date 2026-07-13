const VISIT_KEY = "jw-games-visit-count";
const PROMPT_DISMISSED_KEY = "jw-games-pwa-prompt-dismissed";
const MIN_VISITS_FOR_PROMPT = 2;

export function incrementVisitCount(): number {
  if (typeof window === "undefined") return 0;
  const current = parseInt(localStorage.getItem(VISIT_KEY) ?? "0", 10);
  const next = current + 1;
  localStorage.setItem(VISIT_KEY, String(next));
  return next;
}

export function getVisitCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(VISIT_KEY) ?? "0", 10);
}

export function shouldShowInstallPrompt(): boolean {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(PROMPT_DISMISSED_KEY)) return false;
  return getVisitCount() >= MIN_VISITS_FOR_PROMPT;
}

export function dismissInstallPrompt() {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROMPT_DISMISSED_KEY, "1");
}
