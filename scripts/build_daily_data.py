#!/usr/bin/env python3
"""Build scripts/daily-texts-data.json — 366 unique daily text entries."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scripts", "daily-texts-data.json")

def e(scripture, reference, thought, q1, q2, q3, q4):
    return {
        "scripture": scripture,
        "reference": reference,
        "thought": thought,
        "questions": [q1, q2, q3, q4],
    }

def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

ENTRIES = []

# Batch will be appended below via file writes
ENTRIES.extend([])

if __name__ == "__main__":
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(ENTRIES, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(ENTRIES)} entries")
