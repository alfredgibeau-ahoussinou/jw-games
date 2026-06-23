#!/usr/bin/env python3
"""Generate scripts/remaining_data.py with 342 entries (days 25-366)."""
import os, textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scripts/remaining_data.py")

def q(question, options, correctIndex, explanation):
    return (question, options, correctIndex, explanation)

# Format: (scripture, reference, thought, [4 question tuples])
DATA = []

def add(s, r, t, qs):
    DATA.append((s, r, t, qs))

# ── Days 25-366 ── unique scriptures, specific questions
add("Recherchez Jéhovah et sa force. Recherchez constamment sa face.",
    "1 Chroniques 16:11",
    "Le psalmiste invite à chercher activement Jéhovah et sa force. Cette recherche constante fortifie notre relation avec lui.",
    [q("Que doit-on rechercher selon 1 Chroniques 16:11 ?", ["Jéhovah et sa force", "La richesse", "La gloire humaine", "Les idoles"], 0, "Jéhovah et sa force sont au centre de cette exhortation."),
     q("Comment rechercher « constamment sa face » ?", ["Par la prière et l'étude régulières", "Une seule fois dans l'année", "Sans jamais lire la Bible", "En évitant l'assemblée"], 0, "Rechercher sa face implique une démarche continue."),
     q("1 Chroniques 16:11 fait partie d'un psaume de…", ["Action de grâces après le retour de l'arche", "Deuil pour Saül", "Guerre contre Moab", "Construction du temple"], 0, "David remercie Jéhovah lors du retour de l'arche."),
     q("Rechercher la « force » de Jéhovah aide à…", ["Surmonter nos faiblesses avec son appui", "Devenir autosuffisants", "Ignorer les épreuves", "Compter sur nous seuls"], 0, "Sa force compense notre faiblesse.")])

add("Car je suis convaincu que ni la mort ni la vie ne pourront nous séparer de l'amour de Dieu.",
    "Romains 8:38",
    "Paul exprime une confiance inébranlable : aucune circonstance ne peut nous arracher à l'amour de Jéhovah manifesté par Christ.",
    [q("Que Paul est-il « convaincu » en Romains 8:38 ?", ["Rien ne peut nous séparer de l'amour de Dieu", "La mort nous sépare de Dieu", "Dieu ne nous aime pas", "Seuls les anges sont aimés"], 0, "Paul affirme l'amour inébranlable de Dieu."),
     q("Romains 8:38 énumère des forces comme la mort et la vie pour…", ["Montrer qu'aucune ne peut nous séparer de l'amour de Dieu", "Nous effrayer", "Nier l'amour de Dieu", "Glorifier le mal"], 0, "Paul liste les puissances pour affirmer la victoire de l'amour."),
     q("L'amour dont parle Romains 8:38 est manifesté par…", ["Dieu en Christ", "Les hommes seuls", "Les anges", "Les prophètes uniquement"], 0, "Romains 8:39 précise : par Christ Jésus."),
     q("Romains 8:38-39 apportent aux chrétiens…", ["Assurance et consolation", "Condamnation", "Confusion", "Peur constante"], 0, "Ces versets rassurent les serviteurs fidèles.")])

add("Car la parole de Dieu est vivante et exerce un pouvoir.", "Hébreux 4:12",
    "La Parole de Jéhovah n'est pas morte ou inactive : elle agit profondément dans le cœur et la conscience. L'étudier avec sérieux transforme notre vie.",
    [q("Comment Hébreux 4:12 décrit-il la parole de Dieu ?", ["Vivante et puissante", "Mortelle et faible", "Obsolète", "Sans effet"], 0, "La Parole de Dieu est vivante et agissante."),
     q("Hébreux 4:12 compare la parole de Dieu à…", ["Une épée à deux tranchants", "Une plume", "Un miroir décoratif", "Un jouet"], 0, "Elle pénètre jusqu'à diviser l'âme et l'esprit."),
     q("La Parole de Dieu juge…", ["Les pensées et intentions du cœur", "Seulement les actes visibles", "Rien du tout", "Uniquement les autres"], 0, "Elle discerne les motivations profondes."),
     q("Comment tirer profit de Hébreux 4:12 ?", ["Étudier la Bible avec sérieux et humilité", "Ne jamais la lire", "La lire sans réfléchir", "La rejeter"], 0, "La Parole transforme ceux qui l'appliquent.")])

# Continue building DATA list - we'll append more via file writes
print(f"Partial DATA: {len(DATA)} entries - need 342 total")
