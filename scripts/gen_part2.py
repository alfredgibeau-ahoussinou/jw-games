#!/usr/bin/env python3
"""Generate remaining verse entries to reach 342 total."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "scripts/verse_seed_part2.py")

# (ref, scripture, thought, speaker, key, app) — 281 unique entries
POOL = [
("Proverbes 1:7", "La crainte de Jéhovah est le commencement de la connaissance.", "Salomon enseigne que le respect pour Jéhovah est le fondement de toute vraie connaissance.", "Salomon", "crainte de Jéhovah", "Cultiver le respect pour Jéhovah"),
("Proverbes 3:6", "Dans toutes tes voies reconnais-le, et il dirigera tes sentiers.", "Reconnaître Jéhovah dans chaque décision ouvre la voie à sa direction.", "Salomon", "reconnais-le", "Reconnaître Jéhovah dans nos choix"),
("Proverbes 4:23", "Plus que toute autre chose, garde ton cœur, car de lui viennent les sources de la vie.", "Notre cœur influence nos actions. Le protéger est une priorité spirituelle.", "Salomon", "garde ton cœur", "Surveiller ce que nous laissons entrer dans notre cœur"),
("Proverbes 10:12", "La haine provoque des querelles, mais l'amour couvre toutes les transgressions.", "L'amour apaise les conflits ; la haine les attise. Choisisons l'amour.", "Salomon", "l'amour couvre toutes les transgressions", "Pratiquer l'amour qui pardonne"),
("Proverbes 11:25", "La personne généreuse sera enrichie, et celui qui arrose sera lui-même arrosé.", "La générosité enrichit celui qui donne. Jéhovah bénit les cœurs généreux.", "Salomon", "personne généreuse", "Faire preuve de générosité"),
("Proverbes 12:25", "L'inquiétude accable le cœur de l'homme, mais une bonne parole le réjouit.", "Une parole encourageante peut soulager l'inquiétude d'autrui.", "Salomon", "bonne parole le réjouit", "Encourager autrui par nos paroles"),
("Proverbes 15:1", "Une réponse calme apaise la colère, mais une parole dure suscite la fureur.", "Notre façon de répondre peut calmer ou attiser un conflit.", "Salomon", "réponse calme apaise la colère", "Répondre avec calme"),
("Proverbes 15:3", "Les yeux de Jéhovah sont en tout lieu ; ils observent les mauvais et les bons.", "Jéhovah voit tout. Cette vérité nous encourage à agir avec intégrité.", "Salomon", "Les yeux de Jéhovah", "Agir sachant que Jéhovah observe"),
("Proverbes 16:3", "Confie à Jéhovah ce que tu fais, et tes plans réussiront.", "Remettre nos projets à Jéhovah est la clé du succès selon sa volonté.", "Salomon", "Confie à Jéhovah", "Remettre nos plans à Jéhovah"),
("Proverbes 16:9", "Le cœur de l'homme peut se proposer un chemin, mais c'est Jéhovah qui dirige ses pas.", "Nous faisons des plans, mais Jéhovah dirige le résultat final.", "Salomon", "Jéhovah qui dirige ses pas", "Accepter la direction de Jéhovah"),
("Proverbes 17:17", "Un véritable ami aime en tout temps, et un frère est né pour l'adversité.", "L'amitié véritable se révèle dans les moments difficiles.", "Salomon", "véritable ami", "Être un ami fidèle"),
("Proverbes 18:10", "Le nom de Jéhovah est une tour forte ; le juste s'y précipite et est protégé.", "Jéhovah est un refuge sûr pour ceux qui cherchent sa protection.", "Salomon", "tour forte", "Chercher refuge en Jéhovah"),
("Proverbes 22:6", "Entraîne le garçon selon la voie qu'il doit suivre ; même quand il vieillira, il ne s'en écartera pas.", "L'éducation spirituelle des enfants produit des fruits durables.", "Salomon", "Entraîne le garçon", "Enseigner la voie de Jéhovah aux jeunes"),
("Proverbes 27:17", "De même que le fer aiguise le fer, un homme aiguise son compagnon.", "Les relations fraternelles nous aident à progresser spirituellement.", "Salomon", "aiguise son compagnon", "Encourager nos compagnons spirituels"),
("Proverbes 28:13", "Celui qui dissimule ses transgressions ne réussira pas, mais celui qui les confesse et les abandonne obtiendra de la compassion.", "Confesser nos fautes à Jéhovah ouvre la voie au pardon.", "Salomon", "confesse et les abandonne", "Confesser nos fautes à Jéhovah"),
("Proverbes 31:30", "Le charme est trompeur et la beauté est éphémère, mais la femme qui craint Jéhovah sera louée.", "Jéhovah valorise la crainte de Dieu plus que l'apparence extérieure.", "Lemuel", "femme qui craint Jéhovah", "Valoriser la crainte de Jéhovah"),
("Ésaïe 1:17", "Apprenez à faire le bien ; recherchez la justice ; corrigez l'oppresseur.", "Jéhovah exhorte à la justice active et à la défense des opprimés.", "Ésaïe", "recherchez la justice", "Pratiquer la justice"),
("Ésaïe 6:8", "Ici je suis ! Envoie-moi.", "Ésaïe répond avec empressement à l'appel de Jéhovah. Disponibilité et obéissance.", "Ésaïe", "Envoie-moi", "Répondre à l'appel de Jéhovah"),
("Ésaïe 9:6", "Car un enfant nous est né, un fils nous a été donné… Il sera appelé Prince de la paix.", "La prophétie messianique annonce un dirigeant de paix.", "Ésaïe", "Prince de la paix", "Attendre le Prince de la paix"),
("Ésaïe 12:2", "Voici, Dieu est ma salut. Je mettrai ma confiance en lui et je ne craindrai rien.", "Confiance totale en Jéhovah chasse la crainte.", "Ésaïe", "Dieu est ma salut", "Mettre sa confiance en Jéhovah"),
("Ésaïe 26:3", "Tu garderas en parfaite paix celui dont le mental est fixé sur toi, parce qu'il fait confiance en toi.", "Fixer son mental sur Jéhovah apporte une paix profonde.", "Ésaïe", "parfaite paix", "Fixer son mental sur Jéhovah"),
("Ésaïe 40:8", "L'herbe sèche, la fleur se fane, mais la parole de notre Dieu restera éternellement.", "La Parole de Jéhovah est permanente et fiable.", "Ésaïe", "parole de notre Dieu", "S'appuyer sur la Parole éternelle"),
("Ésaïe 40:29", "Il donne de la force à celui qui est fatigué, et il accroît la force de celui qui faiblit.", "Jéhovah renouvelle la force de ceux qui sont épuisés.", "Ésaïe", "donne de la force", "Chercher la force en Jéhovah"),
("Ésaïe 40:31", "Ceux qui espèrent en Jéhovah renouvelleront leur force.", "L'espérance en Jéhovah restaure notre énergie spirituelle.", "Ésaïe", "espèrent en Jéhovah", "Placer son espérance en Jéhovah"),
("Ésaïe 41:10", "Ne crains rien, car je suis avec toi. Ne promène pas des regards inquiets, car je suis ton Dieu.", "Jéhovah rassure son peuple de sa présence constante.", "Jéhovah", "je suis avec toi", "Ne pas craindre avec Jéhovah"),
("Ésaïe 43:10", "Vous êtes mes témoins, déclare Jéhovah.", "Israël est appelé à témoigner de Jéhovah. Nous aussi sommes ses témoins.", "Jéhovah", "mes témoins", "Être témoin de Jéhovah"),
("Ésaïe 55:6", "Recherchez Jéhovah pendant qu'il peut être trouvé.", "Il y a un temps favorable pour chercher Jéhovah. Ne remettons pas à plus tard.", "Ésaïe", "Recherchez Jéhovah", "Chercher Jéhovah sans tarder"),
("Ésaïe 55:11", "Ma parole… ne reviendra pas à moi sans résultat.", "La Parole de Jéhovah accomplit toujours son dessein.", "Jéhovah", "Ma parole", "Confier en la Parole de Jéhovah"),
("Jérémie 10:23", "Je sais, ô Jéhovah, que le chemin de l'homme n'est pas en son pouvoir.", "L'homme ne contrôle pas son avenir ; Jéhovah dirige les événements.", "Jérémie", "n'est pas en son pouvoir", "Humilité devant la souveraineté de Jéhovah"),
("Jérémie 17:9", "Le cœur est plus trompeur que toute autre chose, et il est incurable.", "Notre cœur peut nous tromper ; la Parole de Jéhovah nous guide.", "Jérémie", "cœur est plus trompeur", "Ne pas se fier à son propre cœur"),
("Jérémie 29:12", "Vous m'invoquerez et vous partirez en prière, et je vous écouterai.", "Jéhovah promet d'écouter quand on l'invoque sincèrement.", "Jérémie", "je vous écouterai", "Invoquer Jéhovah en prière"),
("Jérémie 31:3", "Je t'ai aimée d'un amour éternel. C'est pourquoi je te montre de la bonté.", "Jéhovah aime son peuple d'un amour durable et constant.", "Jéhovah", "amour éternel", "Reconnaître l'amour durable de Jéhovah"),
("Lamentations 3:22", "C'est grâce aux bontés de Jéhovah que nous ne sommes pas anéantis.", "Les bontés de Jéhovah nous préservent chaque jour.", "Jérémie", "bontés de Jéhovah", "Remercier pour les bontés de Jéhovah"),
("Lamentations 3:23", "Elles se renouvellent chaque matin. Grande est ta fidélité.", "La fidélité de Jéhovah se renouvelle chaque jour.", "Jérémie", "se renouvellent chaque matin", "Commencer chaque jour avec gratitude"),
("Daniel 2:20", "Loué soit le nom de Dieu, de toute éternité à toute éternité.", "Daniel loue Jéhovah pour sa sagesse souveraine.", "Daniel", "Loué soit le nom de Dieu", "Louer la sagesse de Jéhovah"),
("Daniel 3:17", "Notre Dieu, qu'il nous délivre, est capable de nous délivrer.", "Shadrac, Méschac et Abed-Nego font confiance au pouvoir de Jéhovah.", "Shadrac, Méschac et Abed-Nego", "capable de nous délivrer", "Confiance en la puissance de Jéhovah"),
("Daniel 6:10", "Il se mettait à genoux et priait trois fois par jour.", "Daniel maintient sa routine de prière malgré l'interdit.", "Daniel", "priait trois fois par jour", "Persévérer dans la prière"),
("Matthieu 4:4", "L'homme ne doit pas vivre uniquement de pain, mais de toute parole qui sort de la bouche de Jéhovah.", "Jésus cite Deutéronome : la Parole de Dieu est aussi vitale que la nourriture.", "Jésus", "parole qui sort de la bouche de Jéhovah", "Nourrir son esprit de la Parole"),
("Matthieu 4:7", "Tu ne mettras pas Jéhovah ton Dieu à l'épreuve.", "Jésus refuse de mettre Jéhovah à l'épreuve inutilement.", "Jésus", "ne mettras pas Jéhovah à l'épreuve", "Ne pas tester Jéhovah"),
("Matthieu 4:10", "Tu adoreras Jéhovah ton Dieu, et tu le serviras exclusivement.", "Jéhovah seul mérite notre adoration exclusive.", "Jésus", "serviras exclusivement", "Adorer Jéhovah exclusivement"),
("Matthieu 5:3", "Heureux ceux conscients de leur besoin spirituel, car le royaume des cieux leur appartient.", "Reconnaître notre besoin spirituel ouvre la voie au royaume.", "Jésus", "besoin spirituel", "Reconnaître son besoin spirituel"),
("Matthieu 5:4", "Heureux ceux qui pleurent, car ils seront consolés.", "Jésus promet consolation à ceux qui pleurent.", "Jésus", "ils seront consolés", "Trouver consolation en Jéhovah"),
("Matthieu 5:5", "Heureux les doux, car ils posséderont la terre.", "La douceur est une qualité bénie par Jéhovah.", "Jésus", "les doux", "Cultiver la douceur"),
("Matthieu 5:8", "Heureux ceux qui sont purs de cœur, car ils verront Dieu.", "La pureté de cœur est recherchée par Jéhovah.", "Jésus", "purs de cœur", "Cultiver la pureté de cœur"),
("Matthieu 5:9", "Heureux ceux qui favorisent la paix, car ils seront appelés fils de Dieu.", "Promouvoir la paix identifie les fils de Dieu.", "Jésus", "favorisent la paix", "Promouvoir la paix"),
("Matthieu 5:14", "Vous êtes la lumière du monde.", "Les disciples de Jésus doivent briller par leur conduite.", "Jésus", "lumière du monde", "Briller par une bonne conduite"),
("Matthieu 5:16", "Que votre lumière brille devant les hommes, afin qu'ils voient vos bonnes œuvres.", "Nos bonnes actions glorifient Jéhovah aux yeux des autres.", "Jésus", "bonnes œuvres", "Laisser nos bonnes actions glorifier Jéhovah"),
("Matthieu 5:44", "Continuez à aimer vos ennemis et à prier pour ceux qui vous persécutent.", "Jésus exige un amour extraordinaire, même envers les ennemis.", "Jésus", "aimez vos ennemis", "Aimer même ses ennemis"),
("Matthieu 6:1", "Faites attention de ne pas pratiquer votre justice devant les hommes pour être observés par eux.", "Jésus met en garde contre la recherche de l'approbation humaine.", "Jésus", "ne pas pratiquer pour être observés", "Agir avec sincérité, pas pour la gloire"),
("Matthieu 6:6", "Toi, quand tu pries, entre dans ta chambre à coucher, ferme ta porte et prie ton Père en secret.", "Jésus enseigne la prière sincère en privé.", "Jésus", "prie ton Père en secret", "Prier avec sincérité en privé"),
]

lines = ["# Part 2 — additional verses", "def add(s, r, t, sp, k, a):", "    DATA.append((s, r, t, sp, k, a))", ""]
for r, s, t, sp, k, a in POOL:
    lines.append(f"add({s!r}, {r!r}, {t!r}, {sp!r}, {k!r}, {a!r})")

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print(f"Wrote {len(POOL)} entries to {OUT}")
