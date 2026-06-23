/**
 * Assemble src/data/daily-texts.ts from chunk modules.
 * One-time / maintenance helper — source of truth is daily-texts.ts after assembly.
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const chunks = [];
for (let i = 1; i <= 6; i++) {
  const mod = await import(`./daily-texts-chunks/chunk-${String(i).padStart(2, "0")}.mjs`);
  chunks.push(...mod.default);
}

if (chunks.length !== 366) {
  console.error(`Expected 366 entries, got ${chunks.length}`);
  process.exit(1);
}

function esc(s) {
  return JSON.stringify(s);
}

const body = chunks
  .map((entry, idx) => {
    const day = idx + 1;
    const qs = entry.qs
      .map(
        (q, qi) => `      {
        id: "dt-${day}-q${qi + 1}",
        question: ${esc(q[0])},
        options: [${q[1].map(esc).join(", ")}],
        correctIndex: ${q[2]},
        explanation: ${esc(q[3])},
      }`,
      )
      .join(",\n");

    return `  {
    dayOfYear: ${day},
    scripture: ${esc(entry.s)},
    reference: ${esc(entry.r)},
    thought: ${esc(entry.t)},
    questions: [
${qs}
    ],
  }`;
  })
  .join(",\n");

const file = `/** Textes du jour — 366 entrées (maintenu manuellement) */
import type { DailyTextEntry } from "@/types/daily-text";

export const DAILY_TEXT_ENTRIES: DailyTextEntry[] = [
${body}
];
`;

writeFileSync(join(__dirname, "../src/data/daily-texts.ts"), file);
console.log(`Wrote ${chunks.length} entries to src/data/daily-texts.ts`);
