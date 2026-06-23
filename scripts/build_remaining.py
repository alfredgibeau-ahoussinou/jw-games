#!/usr/bin/env python3
"""Build remaining daily text entries (25-366) and merge into daily-texts.ts"""
import importlib.util, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

def e(scripture, reference, thought, q1, q2, q3, q4):
    return {"scripture": scripture, "reference": reference, "thought": thought, "questions": [q1, q2, q3, q4]}

# Load batch1
spec = importlib.util.spec_from_file_location("batch1", os.path.join(ROOT, "scripts/daily_batches/batch1.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
ALL = list(mod.ENTRIES)

# Import remaining from remaining_data module
from remaining_data import REMAINING  # noqa: E402
ALL.extend(REMAINING)

if len(ALL) != 366:
    sys.exit(f"Expected 366, got {len(ALL)}")

def esc(s):
    return json.dumps(s, ensure_ascii=False)

out = os.path.join(ROOT, "src/data/daily-texts.ts")
lines = [
    "/** Textes du jour — 366 entrées (maintenu manuellement) */",
    'import type { DailyTextEntry } from "@/types/daily-text";',
    "",
    "export const DAILY_TEXT_ENTRIES: DailyTextEntry[] = [",
]
for i, entry in enumerate(ALL, 1):
    qs = []
    for qi, qd in enumerate(entry["questions"], 1):
        opts = ", ".join(esc(o) for o in qd["options"])
        qs.append(f"""      {{
        id: "dt-{i}-q{qi}",
        question: {esc(qd["question"])},
        options: [{opts}],
        correctIndex: {qd["correctIndex"]},
        explanation: {esc(qd["explanation"])},
      }}""")
    lines.append(f"""  {{
    dayOfYear: {i},
    scripture: {esc(entry["scripture"])},
    reference: {esc(entry["reference"])},
    thought: {esc(entry["thought"])},
    questions: [
{",".join(chr(10)+x for x in qs)[1:]}
    ],
  }},""")
lines[-1] = lines[-1].rstrip(",")
lines.append("];")
lines.append("")
with open(out, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

# Also save JSON for validation
with open(os.path.join(ROOT, "scripts/daily-texts-data.json"), "w", encoding="utf-8") as f:
    json.dump(ALL, f, ensure_ascii=False, indent=2)

print(f"Wrote {len(ALL)} entries")
