export function formatDailyTextDate(date: Date = new Date()): string {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export const DAILY_TEXT_QUIZ_XP = 10;
