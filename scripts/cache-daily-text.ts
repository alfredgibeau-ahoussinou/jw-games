import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fetchJwDailyText, getParisDate } from "../src/lib/jw-daily-text";

const CACHE_DIR = path.join(process.cwd(), "public", "cache", "daily-text");

async function cacheDailyText(date: Date) {
  const entry = await fetchJwDailyText(date);
  await writeFile(
    path.join(CACHE_DIR, `${entry.date}.json`),
    JSON.stringify(entry, null, 0),
    "utf8"
  );
  console.log(`✓ Cache texte du jour — ${entry.date} (${entry.scriptureReference})`);
  return entry.date;
}

async function main() {
  await mkdir(CACHE_DIR, { recursive: true });
  const cached = new Set<string>();

  for (const offset of [-2, -1, 0, 1, 2]) {
    try {
      const iso = await cacheDailyText(getParisDate(offset));
      cached.add(iso);
    } catch (err) {
      console.warn(
        `⚠ Impossible de mettre en cache (offset ${offset}):`,
        err instanceof Error ? err.message : err
      );
    }
  }

  if (cached.size === 0) {
    console.warn("⚠ Aucun texte du jour mis en cache — le build continue (fallback runtime).");
    return;
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
