import { mkdir, writeFile } from "fs/promises";
import path from "path";
import {
  dailyTextCacheExists,
  DAILY_TEXT_CACHE_DIR,
  pruneDailyTextCache,
} from "../src/lib/daily-text-cache";
import {
  fetchJwDailyText,
  getParisDate,
  getParisMonthRange,
  listParisIsoRange,
  parseParisIso,
  shiftParisIso,
  toParisIso,
} from "../src/lib/jw-daily-text";

const DEFAULT_FUTURE_DAYS = 7;

async function cacheDailyText(date: Date) {
  const entry = await fetchJwDailyText(date);
  await writeFile(
    path.join(DAILY_TEXT_CACHE_DIR, `${entry.date}.json`),
    JSON.stringify(entry),
    "utf8"
  );
  console.log(`✓ Cache texte du jour — ${entry.date} (${entry.scriptureReference})`);
  return entry.date;
}

function parseArgs(argv: string[]) {
  const opts: {
    from?: string;
    to?: string;
    days?: number;
    past?: number;
    future?: number;
    month?: boolean;
    refresh?: boolean;
  } = { month: true };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--from") {
      opts.month = false;
      opts.from = argv[++i];
    } else if (arg === "--to") {
      opts.month = false;
      opts.to = argv[++i];
    } else if (arg === "--days") {
      opts.month = false;
      opts.days = Number(argv[++i]);
    } else if (arg === "--past") {
      opts.month = false;
      opts.past = Number(argv[++i]);
    } else if (arg === "--future") {
      opts.future = Number(argv[++i]);
    } else if (arg === "--month") {
      opts.month = true;
    } else if (arg === "--refresh") {
      opts.refresh = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: npm run cache:daily-text -- [options]

Par défaut : mois calendaire en cours (Paris) + ${DEFAULT_FUTURE_DAYS} jours futurs.
Les fichiers hors fenêtre sont supprimés à chaque exécution.

Options :
  --month             Fenêtre mois courant (défaut)
  --future N          Jours futurs après la fin du mois (défaut: ${DEFAULT_FUTURE_DAYS})
  --refresh           Re-télécharge même si déjà en cache
  --from YYYY-MM-DD   Plage personnalisée (début)
  --to YYYY-MM-DD     Plage personnalisée (fin)
  --days N            N derniers jours
  --past N / --future N  Fenêtre glissante autour d'aujourd'hui`);
      process.exit(0);
    }
  }

  return opts;
}

function resolveWindow(opts: ReturnType<typeof parseArgs>): {
  dates: string[];
  keepFrom: string;
  keepTo: string;
} {
  const future = opts.future ?? DEFAULT_FUTURE_DAYS;

  if (opts.from && opts.to) {
    const from = opts.from;
    const to = opts.to;
    if (!parseParisIso(from) || !parseParisIso(to)) {
      throw new Error("Dates --from / --to invalides (YYYY-MM-DD)");
    }
    return { dates: listParisIsoRange(from, to), keepFrom: from, keepTo: to };
  }

  if (opts.days && opts.days > 0) {
    const dates: string[] = [];
    for (let i = opts.days - 1; i >= 0; i--) {
      dates.push(toParisIso(getParisDate(-i)));
    }
    const keepFrom = dates[0]!;
    const keepTo = dates[dates.length - 1]!;
    return { dates, keepFrom, keepTo };
  }

  if (!opts.month && (opts.past !== undefined || opts.future !== undefined)) {
    const past = opts.past ?? 14;
    const dates: string[] = [];
    for (let offset = -past; offset <= future; offset++) {
      dates.push(toParisIso(getParisDate(offset)));
    }
    const sorted = [...new Set(dates)].sort();
    return {
      dates: sorted,
      keepFrom: sorted[0]!,
      keepTo: sorted[sorted.length - 1]!,
    };
  }

  const { from, to } = getParisMonthRange();
  const keepTo = shiftParisIso(to, future);
  const dates = listParisIsoRange(from, keepTo);
  return { dates, keepFrom: from, keepTo };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const { dates, keepFrom, keepTo } = resolveWindow(opts);
  const today = toParisIso();

  await mkdir(DAILY_TEXT_CACHE_DIR, { recursive: true });

  const removed = await pruneDailyTextCache(keepFrom, keepTo);
  if (removed.length > 0) {
    console.log(`🗑 Retiré du cache (${removed.length}) : ${removed.join(", ")}`);
  }

  console.log(`Fenêtre ${keepFrom} → ${keepTo} — ${dates.length} jour(s) à traiter…`);

  let cached = 0;
  let skipped = 0;
  let failures = 0;

  for (const iso of dates) {
    const date = parseParisIso(iso);
    if (!date) continue;

    const isRecent = iso >= today;
    const exists = await dailyTextCacheExists(iso);
    if (exists && !opts.refresh && !isRecent) {
      skipped += 1;
      continue;
    }

    try {
      await cacheDailyText(date);
      cached += 1;
    } catch (err) {
      failures += 1;
      console.warn(`⚠ ${iso}:`, err instanceof Error ? err.message : err);
    }
  }

  console.log(`Terminé : ${cached} mis à jour, ${skipped} déjà en cache, ${failures} échec(s).`);

  if (cached === 0 && skipped === 0) {
    console.warn("⚠ Aucun texte du jour en cache — le build continue (fallback runtime).");
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
