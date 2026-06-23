#!/usr/bin/env python3
"""Create scripts/verse_data_342.py with exactly 342 unique verse entries."""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scripts/verse_data_342.py")

DATA = []

def add(s, r, t, sp, k, a):
    DATA.append((s, r, t, sp, k, a))

# Include hand-crafted entries (Genèse + Exode start)
exec(open(os.path.join(ROOT, "scripts/verse_seed_part1.py"), encoding="utf-8").read())
exec(open(os.path.join(ROOT, "scripts/verse_seed_part2.py"), encoding="utf-8").read())
exec(open(os.path.join(ROOT, "scripts/verse_seed_part3.py"), encoding="utf-8").read())

# Remove duplicate EXTRA/POOL — all data in seed parts

print(f"Total: {len(DATA)} (need 342)")

if __name__ == "__main__":
    if len(DATA) != 342:
        raise SystemExit(f"Expected 342, got {len(DATA)}")
    lines = ["# 342 unique verses for days 25-366", "VERSE_DATA = ["]
    for v in DATA:
        lines.append(f"    {v!r},")
    lines.append("]")
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {OUT}")
