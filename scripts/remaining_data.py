def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

def e(scripture, reference, thought, q1, q2, q3, q4):
    return {"scripture": scripture, "reference": reference, "thought": thought, "questions": [q1, q2, q3, q4]}

from remaining_data_p2 import REMAINING as R2
from remaining_data_p3 import REMAINING as R3
from remaining_data_p4 import REMAINING as R4
from remaining_data_p5 import REMAINING as R5
from remaining_data_p6 import REMAINING as R6

REMAINING = [
e("Recherchez Jéhovah et sa force. Recherchez constamment sa face.", "1 Chroniques 16:11",
  "Le psalmiste invite à chercher activement Jéhovah et sa force. Cette recherche constante fortifie notre relation avec lui.",
  q("Que doit-on rechercher en 1 Chroniques 16:11 ?", ["Jéhovah et sa force", "La richesse", "La gloire humaine", "Les idoles"], 0, "Jéhovah et sa force sont au centre de cette exhortation."),
  q("1 Chroniques 16:11 fait partie d'un psaume de…", ["Action de grâces après le retour de l'arche", "Deuil pour Saül", "Guerre contre Moab", "Exil à Babylone"], 0, "David remercie Jéhovah lors du retour de l'arche."),
  q("Rechercher « constamment sa face » implique…", ["Une démarche spirituelle régulière", "Une visite unique au temple", "Ignorer la prière", "Éviter l'assemblée"], 0, "Rechercher sa face demande constance."),
  q("Rechercher la force de Jéhovah nous aide à…", ["Surmonter nos faiblesses", "Devenir autosuffisants", "Ignorer les épreuves", "Compter sur nous seuls"], 0, "Sa force compense notre faiblesse.")),

e("Car je suis convaincu que ni la mort ni la vie ne pourront nous séparer de l'amour de Dieu.", "Romains 8:38",
  "Paul exprime une confiance inébranlable : aucune circonstance ne peut nous arracher à l'amour de Jéhovah manifesté par Christ.",
  q("De quoi Paul est-il convaincu en Romains 8:38 ?", ["Que rien ne nous sépare de l'amour de Dieu", "Que la mort nous sépare de Dieu", "Que Dieu ne nous aime pas", "Que seuls les anges sont aimés"], 0, "Paul affirme l'amour inébranlable de Dieu."),
  q("Romains 8:38 cite « la mort » et « la vie » pour montrer…", ["Qu'aucune condition ne peut briser l'amour de Dieu", "Que tout est perdu", "Que Dieu change d'avis", "Que l'amour est faible"], 0, "Ni la mort ni la vie ne peuvent nous séparer de son amour."),
  q("Romains 8:39 précise que cet amour est manifesté par…", ["Christ Jésus notre Seigneur", "Moïse", "César", "Les prophètes seuls"], 0, "Jésus révèle l'amour de Dieu."),
  q("Ces versets apportent aux chrétiens…", ["Assurance et consolation", "Condamnation", "Confusion", "Peur constante"], 0, "Paul rassure les serviteurs fidèles.")),

e("Car la parole de Dieu est vivante et exerce un pouvoir.", "Hébreux 4:12",
  "La Parole de Jéhovah n'est pas inactive : elle agit profondément dans le cœur et la conscience. L'étudier avec sérieux transforme notre vie.",
  q("Comment Hébreux 4:12 qualifie-t-il la parole de Dieu ?", ["Vivante et puissante", "Mortelle et faible", "Obsolète", "Sans effet"], 0, "La Parole de Dieu est vivante et agissante."),
  q("Hébreux 4:12 la compare à…", ["Une épée à deux tranchants", "Une plume", "Un miroir décoratif", "Un jouet"], 0, "Elle pénètre jusqu'à diviser l'âme et l'esprit."),
  q("La Parole juge selon Hébreux 4:12…", ["Les pensées et intentions du cœur", "Seulement les actes visibles", "Rien du tout", "Uniquement les autres"], 0, "Elle discerne les motivations profondes."),
  q("Comment appliquer Hébreux 4:12 ?", ["Étudier la Bible avec sérieux", "Ne jamais la lire", "La lire sans réfléchir", "La rejeter"], 0, "La Parole transforme ceux qui l'appliquent.")),

] + R2 + R3 + R4 + R5 + R6
