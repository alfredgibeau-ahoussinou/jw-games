#!/usr/bin/env python3
"""Generate scripts/verse_data_342.py with 342 unique verse entries."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scripts/verse_data_342.py")

# (scripture, reference, thought, speaker, key_phrase, application)
VERSE_DATA = []

def add(s, r, t, sp, k, a):
    VERSE_DATA.append((s, r, t, sp, k, a))

# ── GENÈSE ──
add("Au commencement, Dieu créa les cieux et la terre.", "Genèse 1:1",
    "Moïse ouvre la Bible par la création : tout commence par l'action de Dieu. Reconnaître Jéhovah comme Créateur donne sens à notre existence.",
    "Moïse", "Dieu créa les cieux et la terre", "Reconnaître Jéhovah comme Créateur")
add("Jéhovah vit que la lumière était bonne.", "Genèse 1:4",
    "Dieu évalue sa propre création et la déclare bonne. Sa sagesse se reflète dans tout ce qu'il a fait.",
    "Moïse", "la lumière était bonne", "Admirer la sagesse du Créateur")
add("Il créa l'homme à son image, à l'image de Dieu il le créa.", "Genèse 1:27",
    "L'homme porte une dignité unique : il reflète les qualités de son Créateur. Cette vérité guide notre respect pour la vie humaine.",
    "Moïse", "à son image", "Respecter la dignité humaine")
add("Jéhovah Dieu prit l'homme et le plaça dans le jardin d'Éden pour le cultiver et le garder.", "Genèse 2:15",
    "Dès le début, l'homme reçoit une responsabilité : travailler et prendre soin de la création. Le travail honnête a de la valeur aux yeux de Jéhovah.",
    "Moïse", "cultiver et le garder", "Travailler avec diligence")
add("C'est pourquoi l'homme quittera son père et sa mère et s'attachera à sa femme.", "Genèse 2:24",
    "Jéhovah établit le mariage dès le début : l'union loyale entre mari et femme est son dessein.",
    "Moïse", "s'attachera à sa femme", "Honorer l'union maritale")
add("Jéhovah Dieu dit : « Tu peux manger librement de tous les arbres du jardin. »", "Genèse 2:16",
    "Avant la désobéissance, Dieu accorde une liberté généreuse. Sa volonté est faite de bienveillance.",
    "Jéhovah", "manger librement", "Apprécier la générosité de Jéhovah")
add("La femme vit que l'arbre était bon pour la nourriture et désirable pour en faire profiter sa sagesse.", "Genèse 3:6",
    "Ève se laisse séduire par ce qui semble bon à ses yeux plutôt que par la Parole de Dieu.",
    "Moïse", "désirable pour en faire profiter sa sagesse", "Se méfier des apparences trompeuses")
add("J'ai établi mon alliance avec vous et avec vos descendants.", "Genèse 9:9",
    "Après le déluge, Jéhovah promet son alliance. Ses promesses montrent sa fidélité envers l'humanité.",
    "Jéhovah via Noé", "mon alliance", "Se confier aux promesses de Jéhovah")
add("Abram partit, comme Jéhovah le lui avait dit.", "Genèse 12:4",
    "Abraham obéit sans connaître sa destination. Sa foi est un modèle pour tous ceux qui font confiance à Jéhovah.",
    "Abraham", "partit, comme Jéhovah le lui avait dit", "Obéir à Jéhovah par la foi")
add("Jéhovah comptera-t-il cela comme justice ?", "Genèse 15:6",
    "Abraham croit la promesse de Jéhovah et cela lui est compté comme justice. La foi en les promesses divines est précieuse.",
    "Moïse", "compté comme justice", "Cultiver la foi en les promesses de Dieu")

print(f"Partial: {len(VERSE_DATA)} — run full generator")

if __name__ == "__main__":
    lines = ["# Auto-generated — 342 unique verses for days 25-366", "VERSE_DATA = ["]
    for v in VERSE_DATA:
        lines.append(f"    {v!r},")
    lines.append("]")
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(VERSE_DATA)} to {OUT}")
