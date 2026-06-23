#!/usr/bin/env python3
"""Generate src/data/daily-texts.ts from scripts/daily-texts-data.json"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "scripts", "daily-texts-data.json")
OUT = os.path.join(ROOT, "src", "data", "daily-texts.ts")

def esc(s):
    return json.dumps(s, ensure_ascii=False)

with open(DATA, encoding="utf-8") as f:
    entries = json.load(f)

if len(entries) != 366:
    raise SystemExit(f"Expected 366 entries, got {len(entries)}")

lines = [
    "/** Textes du jour — 366 entrées (maintenu manuellement) */",
    'import type { DailyTextEntry } from "@/types/daily-text";',
    "",
    "export const DAILY_TEXT_ENTRIES: DailyTextEntry[] = [",
]

for i, e in enumerate(entries, 1):
    qs = []
    for qi, q in enumerate(e["questions"], 1):
        opts = ", ".join(esc(o) for o in q["options"])
        qs.append(f"""      {{
        id: "dt-{i}-q{qi}",
        question: {esc(q["question"])},
        options: [{opts}],
        correctIndex: {q["correctIndex"]},
        explanation: {esc(q["explanation"])},
      }}""")
    lines.append(f"""  {{
    dayOfYear: {i},
    scripture: {esc(e["scripture"])},
    reference: {esc(e["reference"])},
    thought: {esc(e["thought"])},
    questions: [
{",".join(chr(10)+x for x in qs)[1:]}
    ],
  }},""")

lines[-1] = lines[-1].rstrip(",")
lines.append("];")
lines.append("")

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote {len(entries)} entries to {OUT}")
