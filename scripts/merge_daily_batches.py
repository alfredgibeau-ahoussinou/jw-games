#!/usr/bin/env python3
"""Merge all batch modules and generate daily-texts.ts"""
import json, os, importlib.util, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BATCH_DIR = os.path.join(ROOT, "scripts", "daily_batches")

def load_batch(name):
    path = os.path.join(BATCH_DIR, f"{name}.py")
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.ENTRIES

entries = []
for i in range(1, 7):
    batch = load_batch(f"batch{i}")
    entries.extend(batch)
    print(f"batch{i}: {len(batch)} entries")

if len(entries) != 366:
    sys.exit(f"Expected 366 entries, got {len(entries)}")

# Write JSON
json_path = os.path.join(ROOT, "scripts", "daily-texts-data.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(entries, f, ensure_ascii=False, indent=2)
print(f"Wrote JSON: {len(entries)} entries")

# Generate TS
def esc(s):
    return json.dumps(s, ensure_ascii=False)

out = os.path.join(ROOT, "src", "data", "daily-texts.ts")
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
with open(out, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print(f"Wrote TS: {out}")
