/**
 * Valide le texte du jour officiel via l'API WOL.
 *
 * Usage : npx tsx scripts/build-daily-texts.ts
 */
import { fetchJwDailyText } from "../src/lib/jw-daily-text";

async function validate(): Promise<void> {
  const entry = await fetchJwDailyText(new Date());
  if (!entry.scripture || !entry.commentary) {
    throw new Error("Texte ou commentaire manquant");
  }
  if (entry.questions.length !== 4) {
    throw new Error(`Expected 4 questions, got ${entry.questions.length}`);
  }
  console.log(`✓ Texte du jour officiel — ${entry.heading}`);
  console.log(`  Verset : ${entry.scriptureReference} — ${entry.scripture.slice(0, 60)}…`);
  console.log(`  Commentaire : ${entry.commentary.length} caractères`);
  console.log(`  Source : ${entry.commentarySource || "—"}`);
}

validate().catch((err) => {
  console.error("Validation failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
