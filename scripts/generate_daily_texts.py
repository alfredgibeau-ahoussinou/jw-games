#!/usr/bin/env python3
"""Generate all 366 daily text entries and write src/data/daily-texts.ts"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

def e(scripture, reference, thought, qs):
    assert len(qs) == 4
    return {"scripture": scripture, "reference": reference, "thought": thought, "questions": qs}

# Load batch1 if exists
ENTRIES = []
batch1_path = os.path.join(ROOT, "scripts/daily_batches/batch1.py")
if os.path.exists(batch1_path):
    spec = __import__("importlib.util", fromlist=["util"]).spec_from_file_location("batch1", batch1_path)
    mod = __import__("importlib.util", fromlist=["util"]).module_from_spec(spec)
    spec.loader.exec_module(mod)
    ENTRIES.extend(mod.ENTRIES)
    print(f"Loaded batch1: {len(mod.ENTRIES)}")

# Remaining entries 26-366 will be loaded from batch_data.json if present
data_path = os.path.join(ROOT, "scripts/daily-texts-remaining.json")
if os.path.exists(data_path):
    with open(data_path, encoding="utf-8") as f:
        rest = json.load(f)
    ENTRIES.extend(rest)
    print(f"Loaded remaining: {len(rest)}")

if len(ENTRIES) != 366:
    print(f"Need 366 entries, have {len(ENTRIES)}. Run scripts/seed_remaining.py first.")
    sys.exit(1)

def esc(s):
    return json.dumps(s, ensure_ascii=False)

out = os.path.join(ROOT, "src/data/daily-texts.ts")
lines = [
    "/** Textes du jour — 366 entrées (maintenu manuellement) */",
    'import type { DailyTextEntry } from "@/types/daily-text";',
    "",
    "export const DAILY_TEXT_ENTRIES: DailyTextEntry[] = [",
]
for i, entry in enumerate(ENTRIES, 1):
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
print(f"Wrote {len(ENTRIES)} entries to {out}")
