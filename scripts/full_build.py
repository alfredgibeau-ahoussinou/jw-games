#!/usr/bin/env python3
"""Build src/data/daily-texts.ts — 366 unique daily text entries."""
import importlib.util, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

def e(scripture, reference, thought, qs):
    return {"scripture": scripture, "reference": reference, "thought": thought, "questions": qs}

def make_qs(s, r, t, speaker, key, app):
    book = r.split()[0]
    return [
        q(f"Quel livre biblique contient {r} ?", [book, "Psaumes", "Apocalypse", "Actes"], 0, f"{r} se trouve dans {book}."),
        q(f"Quelle idée centrale ressort de {r} ?", [key, "L'indifférence envers Dieu", "La haine du prochain", "Le mensonge"], 0, f"{r} met en avant : {key}."),
        q(f"Dans le contexte de {r}, qui est principalement concerné ?", [speaker, "Personne en particulier", "Un roi païen", "Un animal"], 0, f"{speaker} est lié au contexte de ce verset."),
        q(f"Quel enseignement pratique {r} suggère-t-il ?", [app, "Ignorer Jéhovah", "Haïr le prochain", "Abandonner la prière"], 0, t.split(".")[0] + "."),
    ]

# Load batch1 (days 1-24)
spec = importlib.util.spec_from_file_location("batch1", os.path.join(ROOT, "scripts/daily_batches/batch1.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
ALL = list(mod.ENTRIES)

# Load verse data for days 25-366
sys.path.insert(0, os.path.join(ROOT, "scripts"))
from verse_data_342 import VERSE_DATA  # noqa: E402

for v in VERSE_DATA:
    ALL.append(e(v[0], v[1], v[2], make_qs(*v)))

if len(ALL) != 366:
    sys.exit(f"Expected 366 entries, got {len(ALL)}")

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
print(f"Wrote {len(ALL)} entries to {out}")
