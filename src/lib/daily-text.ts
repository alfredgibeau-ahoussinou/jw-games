export function formatDailyTextDate(date: Date = new Date()): string {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  });
}

export function formatDailyTextIso(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return formatDailyTextDate(date);
}

export const DAILY_TEXT_QUIZ_XP = 10;
