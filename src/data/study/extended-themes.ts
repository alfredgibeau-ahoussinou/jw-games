import type { StudyTheme } from "@/types/study";
import { quiz, reading, tf, verset } from "./helpers";

/** Thématiques supplémentaires — lectures, publications WT / Réveillez-vous, mini-jeux enrichis */
export const EXTENDED_STUDY_THEMES: StudyTheme[] = [
  {
    id: "royaume",
    title: "Le Royaume de Dieu",
    subtitle: "La bonne nouvelle que Jésus a prêchée",
    description:
      "Le Royaume est au cœur de l'enseignement de Jésus. Comprendre ce qu'il est nous aide à fixer nos priorités et à garder l'espérance.",
    scriptureHighlight: "« Que ton royaume vienne. Que ta volonté se fasse sur la terre comme au ciel. »",
    scriptureRef: "Matthieu 6:10",
    articleIds: ["royaume-wt-quoi", "royaume-awake-changer", "royaume-livre-attendez"],
    readings: [
      reading("roy-r1", "Qu'est-ce que le Royaume ?", [
        "Quand Jésus a commencé son ministère, il a annoncé : « Le Royaume des cieux s'est approché. » Ce n'était pas un simple message politique : il parlait du gouvernement céleste de son Père, Jéhovah, qui apportera la paix et la justice sur toute la terre.",
        "Le Royaume résout les problèmes que les gouvernements humains ne peuvent pas régler : la guerre, la maladie, la mort et l'injustice. C'est pourquoi nous prions chaque jour pour qu'il « vienne ».",
      ], ["Matthieu 4:17", "Daniel 2:44"]),
      reading("roy-r2", "Qui règne dans le Royaume ?", [
        "Jéhovah a confié le Royaume à Jésus Christ, son Fils. Après sa résurrection, Jésus a reçu toute autorité au ciel et sur la terre. Il n'est pas un roi cruel : il gouverne avec amour et justice.",
        "Sous son règne, les humains fidèles vivront pour toujours sur une terre transformée en paradis. Cette promesse donne un sens concret à notre espérance.",
      ], ["Matthieu 28:18", "Apocalypse 11:15"]),
    ],
    miniGames: [
      {
        id: "royaume-quiz",
        title: "Comprendre le Royaume",
        description: "6 questions sur la bonne nouvelle",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-roy-q1", "Quel était le message principal de Jésus ?", ["Le Royaume de Dieu", "La richesse", "La politique romaine", "La guerre"], 0, "Jésus prêchait le Royaume.", "Matthieu 4:23"),
          quiz("et-roy-q2", "Dans la prière modèle, que demandons-nous concernant le Royaume ?", ["Qu'il vienne", "Qu'il disparaisse", "Qu'il reste caché", "Qu'il soit oublié"], 0, "Nous prions pour l'avènement du Royaume.", "Matthieu 6:10"),
          quiz("et-roy-q3", "Qui détruira tous les royaumes humains selon Daniel 2 ?", ["Le Royaume de Dieu", "Rome seule", "Aucun pouvoir", "Les anges rebelles"], 0, "La pierre symbolise le Royaume.", "Daniel 2:44"),
          quiz("et-roy-q4", "Jésus a dit aux disciples de chercher d'abord quoi ?", ["Le Royaume et sa justice", "Les richesses", "La gloire", "Le repos"], 0, "Les priorités spirituelles passent avant tout.", "Matthieu 6:33"),
          quiz("et-roy-q5", "Quel signe mondial Jésus a-t-il donné ?", ["La prédication de la bonne nouvelle", "La fin de la Bible", "L'arrêt de la prière", "La disparition des églises"], 0, "Matthieu 24:14 décrit ce signe.", "Matthieu 24:14"),
          quiz("et-roy-q6", "Qui est le Roi du Royaume ?", ["Jésus Christ", "César", "Moïse", "David vivant aujourd'hui"], 0, "Jéhovah a établi Jésus comme Roi.", "Luc 1:32, 33"),
        ],
      },
      {
        id: "royaume-vf",
        title: "Vrai ou faux — Royaume",
        description: "5 affirmations",
        type: "vraifaux",
        estimatedMinutes: 3,
        trueFalseQuestions: [
          tf("et-roy-tf1", "Le Royaume de Dieu apportera la paix sur la terre.", true, "Les prophètes ont annoncé un monde sans guerre.", "Ésaïe 2:4"),
          tf("et-roy-tf2", "Le Royaume est seulement une idée dans le cœur des chrétiens.", false, "C'est un gouvernement réel établi par Jéhovah.", "Daniel 2:44"),
          tf("et-roy-tf3", "Nicodème a appris que naître de nouveau est lié au Royaume.", true, "Jésus lui a parlé de la naissance spirituelle.", "Jean 3:3-5"),
          tf("et-roy-tf4", "Les méchants hériteront du Royaume sans changement.", false, "Seuls ceux qui font la volonté de Dieu y entrent.", "Matthieu 7:21"),
          tf("et-roy-tf5", "Abraham attendait une cité dont Dieu est l'architecte.", true, "Son espérance était céleste et royale.", "Hébreux 11:10"),
        ],
      },
      {
        id: "royaume-verset",
        title: "Versets sur le Royaume",
        description: "4 versets à compléter",
        type: "verset",
        estimatedMinutes: 3,
        verseQuestions: [
          verset("et-roy-v1", "Cherchez d'abord le ___ et sa justice.", "Royaume", ["Royaume", "monde", "argent", "honneur"], "Matthieu 6:33"),
          verset("et-roy-v2", "Cette bonne nouvelle du ___ sera prêchée dans toute la terre habitée.", "Royaume", ["Royaume", "temple", "commerce", "loi"], "Matthieu 24:14"),
          verset("et-roy-v3", "Le Royaume des cieux s'est ___.", "approché", ["approché", "disparu", "retardé", "changé"], "Matthieu 4:17"),
          verset("et-roy-v4", "Ton Royaume ___ ; que ta volonté se fasse.", "viens", ["viens", "part", "doute", "sommeil"], "Matthieu 6:10"),
        ],
      },
    ],
  },
  {
    id: "resurrection",
    title: "La résurrection",
    subtitle: "Notre espérance vivante",
    description:
      "La Bible enseigne que les morts revivront. Cette promesse réconforte ceux qui ont perdu des proches et renforce notre confiance en Jéhovah.",
    scriptureHighlight: "« Jésus lui dit : Je suis la résurrection et la vie. »",
    scriptureRef: "Jean 11:25",
    articleIds: ["resurrection-wt-promesse", "resurrection-awake-morts"],
    readings: [
      reading("res-r1", "Pourquoi la résurrection est-elle essentielle ?", [
        "Sans résurrection, la mort serait la fin définitive. Pourtant Jéhovah promet de ramener à la vie ceux qui sont dans la tombe. Jésus a démontré ce pouvoir en ressuscitant Lazare, la fille de Jaïrus et le fils de la veuve de Naïn.",
        "Sa propre résurrection est la garantie que Jéhovah peut tenir toutes ses promesses. C'est pourquoi Paul écrit que si Christ n'est pas ressuscité, notre foi est vaine.",
      ], ["Jean 11:25", "1 Corinthiens 15:14"]),
      reading("res-r2", "Sur quelle terre les ressuscités vivront-ils ?", [
        "La Bible associe la résurrection à la vie sur la terre pour la grande majorité de l'humanité. Jéhovah a créé l'homme pour habiter la terre, et il ne changera pas ce dessein.",
        "Ceux qui auront la vie éternelle jouiront d'un paradis où la mort, la douleur et les larmes n'existeront plus.",
      ], ["Psaume 37:29", "Apocalypse 21:4"]),
    ],
    miniGames: [
      {
        id: "resurrection-quiz",
        title: "Espérance de la résurrection",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-res-q1", "Qui Jésus a-t-il ressuscité à Béthanie ?", ["Lazare", "Pierre", "Moïse", "Élie"], 0, "Lazare était mort depuis quatre jours.", "Jean 11:43, 44"),
          quiz("et-res-q2", "Que dit Jésus à Marthe ?", ["Celui qui croit en moi vivra même s'il meurt", "Les morts ne reviendront jamais", "Oublie ton frère", "La résurrection est impossible"], 0, "Jésus est la résurrection et la vie.", "Jean 11:25, 26"),
          quiz("et-res-q3", "Combien de témoins oculaires ont vu le Christ ressuscité ?", ["Plus de 500", "Personne", "Un seul", "Douze seulement en secret"], 0, "Paul mentionne plus de 500 frères.", "1 Corinthiens 15:6"),
          quiz("et-res-q4", "Que deviendrait notre foi sans résurrection ?", ["Vaine", "Plus forte", "Identique", "Politique"], 0, "La résurrection est au cœur de l'espérance chrétienne.", "1 Corinthiens 15:17"),
          quiz("et-res-q5", "Jéhovah promet d'ôter quoi pour toujours ?", ["La mort", "La terre", "La prière", "La famille"], 0, "La mort sera engloutie.", "1 Corinthiens 15:26"),
        ],
      },
      {
        id: "resurrection-vf",
        title: "Vrai ou faux — Résurrection",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-res-tf1", "Les morts sont conscients et nous observent.", false, "Les morts ne savent rien.", "Ecclésiaste 9:5"),
          tf("et-res-tf2", "Jésus a promis de ressusciter les justes et les injustes.", true, "Tous ceux dans les tombeaux entendront sa voix.", "Actes 24:15"),
          tf("et-res-tf3", "La résurrection du Christ est un fait historique attesté.", true, "De nombreux témoins l'ont confirmé.", "1 Corinthiens 15:3-8"),
          tf("et-res-tf4", "Dieu a oublié ceux qui sont morts.", false, "Il se souvient et peut les restaurer.", "Job 14:13-15"),
        ],
      },
      {
        id: "resurrection-verset",
        title: "Versets d'espérance",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-res-v1", "Jésus lui dit : Je suis la ___ et la vie.", "résurrection", ["résurrection", "loi", "richesse", "colère"], "Jean 11:25"),
          verset("et-res-v2", "Il essuiera toute larme de leurs yeux, et la mort ne sera plus.", "mort", ["mort", "joie", "travail", "famille"], "Apocalypse 21:4"),
          verset("et-res-v3", "Tous ceux qui sont dans les mémoriaux entendront sa voix et en ___", "sortiront", ["sortiront", "dormiront", "fuiront", "douteront"], "Jean 5:28, 29"),
        ],
      },
    ],
  },
  {
    id: "adoration",
    title: "Adoration en vérité",
    subtitle: "Connaître et servir Jéhovah correctement",
    description:
      "Jésus a dit que les vrais adorateurs doivent adorer le Père « avec esprit et vérité ». Étudions ce que cela implique au quotidien.",
    scriptureHighlight: "« Adorez avec esprit et vérité. »",
    scriptureRef: "Jean 4:24",
    articleIds: ["adoration-wt-coeur", "adoration-awake-verite"],
    readings: [
      reading("ado-r1", "Adorer « en vérité »", [
        "Adorer en vérité signifie rejeter les doctrines qui contredisent la Bible. Jéhovah ne change pas : ce qu'il a révélé dans sa Parole reste le fondement de notre culte.",
        "Cela implique aussi d'appliquer ce que nous apprenons. L'adoration n'est pas seulement une émotion : c'est un mode de vie qui honore Dieu.",
      ], ["Jean 17:17", "Jacques 1:22"]),
      reading("ado-r2", "Adorer « avec esprit »", [
        "Adorer avec esprit, c'est le faire avec sincérité, de tout cœur, en comprenant pourquoi nous servons Jéhovah. Il voit nos motivations.",
        "La prière, l'étude personnelle, les réunions et la prédication sont des expressions concrètes de notre adoration.",
      ], ["Philippiens 3:3", "Psaume 86:12"]),
    ],
    miniGames: [
      {
        id: "adoration-quiz",
        title: "Adoration biblique",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-ado-q1", "À qui Jésus a-t-il dit d'adorer le Père ?", ["La Samaritaine", "Pilate", "Hérode", "Judas"], 0, "Jean 4 traite de l'adoration véritable.", "Jean 4:23, 24"),
          quiz("et-ado-q2", "Que dit le deuxième commandement sur les images ?", ["Ne pas les adorer", "Les fabriquer pour Jéhovah", "Les vendre", "Les cacher"], 0, "L'idolâtrie est interdite.", "Exode 20:4, 5"),
          quiz("et-ado-q3", "Comment Jésus a-t-il réagi face à la tentation d'adorer Satan ?", ["Il a refusé : adorer Jéhovah seul", "Il a accepté", "Il a négocié", "Il est parti sans répondre"], 0, "Seul Jéhovah mérite l'adoration.", "Matthieu 4:10"),
          quiz("et-ado-q4", "Que demande Romains 12:1 ?", ["Présenter son corps en sacrifice vivant", "Arrêter de prier", "Adorer les anges", "Ignorer la Bible"], 0, "Le culte sacré est notre vie quotidienne.", "Romains 12:1"),
          quiz("et-ado-q5", "Qui les disciples ont-ils adoré après la résurrection de Jésus ?", ["Jéhovah, par l'honneur rendu au Fils", "Rome", "Eux-mêmes", "Personne"], 0, "Ils ont reconnu la position de Jésus.", "Matthieu 28:17"),
        ],
      },
      {
        id: "adoration-vf",
        title: "Vrai ou faux — Adoration",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-ado-tf1", "On peut adorer Jéhovah n'importe comment si l'intention est bonne.", false, "Il faut adorer en vérité.", "Jean 4:24"),
          tf("et-ado-tf2", "Les traditions humaines peuvent contredire le commandement de Dieu.", true, "Jésus a mis en garde les Pharisiens.", "Marc 7:8"),
          tf("et-ado-tf3", "L'étude de la Bible fait partie de notre culte.", true, "Connaître Jéhovah, c'est l'adorer.", "Jean 17:3"),
          tf("et-ado-tf4", "Jéhovah accepte le partage de son gloire avec des idoles.", false, "Il exige une adoration exclusive.", "Ésaïe 42:8"),
        ],
      },
      {
        id: "adoration-verset",
        title: "Versets sur l'adoration",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-ado-v1", "Les vrais adorateurs l'adoreront avec esprit et ___.", "vérité", ["vérité", "peur", "argent", "hâte"], "Jean 4:24"),
          verset("et-ado-v2", "C'est Jéhovah ton Dieu que tu dois adorer, et c'est à lui ___ que tu dois rendre un culte sacré.", "seul", ["seul", "parfois", "rarement", "avec les idoles"], "Matthieu 4:10"),
          verset("et-ado-v3", "Louez-le pour ses actes puissants ; louez-le selon sa ___ surpassante.", "grandeur", ["grandeur", "colère", "silence", "absence"], "Psaume 150:2"),
        ],
      },
    ],
  },
  {
    id: "bible",
    title: "Étudier la Bible",
    subtitle: "Méthodes pour méditer avec profit",
    description:
      "La Bible est la Parole de Jéhovah. Apprendre à l'étudier régulièrement nourrit notre foi et nous prépare à enseigner les autres.",
    scriptureHighlight: "« Ta parole est une lampe à mes pieds. »",
    scriptureRef: "Psaume 119:105",
    articleIds: ["bible-awake-etudier", "bible-wt-profit", "bible-livre-enseigner"],
    readings: [
      reading("bib-r1", "Pourquoi étudier chaque jour ?", [
        "Une lampe éclaire le chemin pas à pas. De même, la Bible éclaire nos décisions morales, familiales et spirituelles. Sans étude régulière, il est facile de s'éloigner des normes de Jéhovah.",
        "Fixer un moment et un lieu aide à être constant. Même 15 minutes de lecture attentive valent mieux qu'une longue séance rare.",
      ], ["Josué 1:8", "Psaume 1:2"]),
      reading("bib-r2", "Comment méditer efficacement ?", [
        "Posez-vous des questions : Qui parle ? À qui ? Pourquoi ? Comment cela s'applique-t-il aujourd'hui ? Notez les versets clés et les promesses de Jéhovah.",
        "Comparez les Écritures entre elles. La Bible s'explique elle-même : un verset éclaire un autre sur le même thème.",
      ], ["1 Corinthiens 2:13", "Psaume 77:12"]),
    ],
    miniGames: [
      {
        id: "bible-quiz",
        title: "Étude biblique",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-bib-q1", "Que compare le Psaume 119 à nos pieds ?", ["Une lampe", "Un rocher", "Un fleuve", "Un miroir"], 0, "La Parole guide nos pas.", "Psaume 119:105"),
          quiz("et-bib-q2", "Que doit faire le homme heureux selon le Psaume 1 ?", ["Méditer jour et nuit sur la loi", "Éviter la Bible", "Lire une fois par an", "Copier sans réfléchir"], 0, "La méditation constante est bénie.", "Psaume 1:2"),
          quiz("et-bib-q3", "Comment Timothée a-t-il connu les Écritures ?", ["Depuis son enfance", "À l'université romaine", "Par hasard", "Sans enseignement"], 0, "Sa mère et sa grand-mère l'ont instruit.", "2 Timothée 3:15"),
          quiz("et-bib-q4", "À quoi sert la Bible selon 2 Timothée 3:16 ?", ["Enseigner, réprimander, corriger, former", "Divertir seulement", "Remplacer la prière", "Cacher la vérité"], 0, "Toute Écriture est utile.", "2 Timothée 3:16, 17"),
          quiz("et-bib-q5", "Que fait l'homme spirituel ?", ["Juge toutes choses par les Écritures", "Ignore la Bible", "Lit sans comprendre", "N'étudie jamais"], 0, "Les pensées de Dieu nous éclairent.", "1 Corinthiens 2:15"),
        ],
      },
      {
        id: "bible-vf",
        title: "Vrai ou faux — Étude",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-bib-tf1", "La Bible est inspirée de Dieu.", true, "Paul l'affirme clairement.", "2 Timothée 3:16"),
          tf("et-bib-tf2", "Il est inutile de méditer après la lecture.", false, "La méditation aide à retenir et appliquer.", "Psaume 1:2"),
          tf("et-bib-tf3", "Jésus citait les Écritures pour répondre aux tentations.", true, "Il a dit : « Il est écrit… »", "Matthieu 4:4, 7, 10"),
          tf("et-bib-tf4", "Seuls les anciens peuvent comprendre la Bible.", false, "Les « tout-petits » reçoivent aussi la vérité.", "Matthieu 11:25"),
        ],
      },
      {
        id: "bible-verset",
        title: "Versets pour l'étude",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-bib-v1", "Ta parole est une ___ à mes pieds.", "lampe", ["lampe", "chaîne", "porte", "ombre"], "Psaume 119:105"),
          verset("et-bib-v2", "Médite sur ces choses ; sois entièrement absorbé par elles.", "Médite", ["Médite", "Oublie", "Cache", "Moque"], "1 Timothée 4:15"),
          verset("et-bib-v3", "Cet homme est heureux […] dont la loi de Jéhovah est son ___.", "délice", ["délice", "fardeau", "ennemi", "secret"], "Psaume 1:2"),
        ],
      },
    ],
  },
  {
    id: "sagesse",
    title: "Sagesse pratique",
    subtitle: "Appliquer les conseils de Jéhovah",
    description:
      "Les Proverbes et d'autres livres regorgent de sagesse pour les relations, le travail, la parole et les choix quotidiens.",
    scriptureHighlight: "« La crainte de Jéhovah est le commencement de la sagesse. »",
    scriptureRef: "Proverbes 9:10",
    articleIds: ["sagesse-wt-acquerir", "sagesse-awake-numerique"],
    readings: [
      reading("sag-r1", "D'où vient la vraie sagesse ?", [
        "La sagesse humaine change avec les modes. La sagesse de Jéhovah repose sur le respect de ses normes. Elle commence par reconnaître qui il est et ce qu'il attend de nous.",
        "Demander la sagesse à Jéhovah dans la prière est une habitude biblique. Il donne généreusement à ceux qui le demandent sans douter.",
      ], ["Proverbes 9:10", "Jacques 1:5"]),
    ],
    miniGames: [
      {
        id: "sagesse-quiz",
        title: "Conseils des Proverbes",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-sag-q1", "Qu'est-ce qui commence la sagesse ?", ["La crainte de Jéhovah", "La richesse", "La force", "La vengeance"], 0, "Proverbes 9:10 l'affirme.", "Proverbes 9:10"),
          quiz("et-sag-q2", "Que dit Proverbes sur la langue ?", ["Elle peut blesser ou guérir", "Elle est sans importance", "Il faut toujours crier", "Elle ne sert à rien"], 0, "La parole a un grand pouvoir.", "Proverbes 18:21"),
          quiz("et-sag-q3", "Comment traiter un conseil sage ?", ["L'écouter et en tenir compte", "Le rejeter systématiquement", "S'en moquer", "L'oublier aussitôt"], 0, "Le sage écoute les conseils.", "Proverbes 12:15"),
          quiz("et-sag-q4", "Que recommande Proverbes sur les amis ?", ["Choisir ses compagnons avec soin", "Suivre n'importe qui", "Éviter tout le monde", "Ne jamais parler"], 0, "Les mauvaises fréquentations corrompent.", "Proverbes 13:20"),
          quiz("et-sag-q5", "Qui doit-on demander la sagesse ?", ["Jéhovah", "Les idoles", "Les astres", "Personne"], 0, "Jacques 1:5 invite à demander à Dieu.", "Jacques 1:5"),
        ],
      },
      {
        id: "sagesse-vf",
        title: "Vrai ou faux — Sagesse",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-sag-tf1", "L'orgueil précède souvent la chute.", true, "Proverbes 16:18 met en garde.", "Proverbes 16:18"),
          tf("et-sag-tf2", "La paresse mène à la prospérité.", false, "Le travailleur diligent prospère.", "Proverbes 10:4"),
          tf("et-sag-tf3", "Écouter avant de répondre est sage.", true, "Être prompt à écouter, lent à parler.", "Jacques 1:19"),
          tf("et-sag-tf4", "La sagesse de Dieu est dépassée.", false, "Elle est éternellement pertinente.", "Psaume 111:10"),
        ],
      },
      {
        id: "sagesse-verset",
        title: "Versets de sagesse",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-sag-v1", "La crainte de Jéhovah est le commencement de la ___.", "sagesse", ["sagesse", "richesse", "peur", "honte"], "Proverbes 9:10"),
          verset("et-sag-v2", "Celui qui répond avant d'écouter fait un ___ et s'expose à la honte.", "fou", ["fou", "roi", "prophète", "sage"], "Proverbes 18:13"),
          verset("et-sag-v3", "Si quelqu'un des vôtres manque de sagesse, qu'il la demande à ___.", "Dieu", ["Dieu", "personne", "Satan", "la foule"], "Jacques 1:5"),
        ],
      },
    ],
  },
  {
    id: "endurance",
    title: "Endurance",
    subtitle: "Tenir bon sous l'épreuve",
    description:
      "Servir Jéhovah ne nous épargne pas les difficultés. La Bible montre comment l'endurance, soutenue par la prière et la foi, nous fortifie.",
    scriptureHighlight: "« Celui qui endure jusqu'à la fin sera sauvé. »",
    scriptureRef: "Matthieu 24:13",
    articleIds: ["endurance-wt-garder", "endurance-awake-vie"],
    readings: [
      reading("end-r1", "Pourquoi Jéhovah permet-il l'épreuve ?", [
        "L'épreuve révèle ce que nous sommes vraiment et affine notre loyauté. Job, Joseph et Jésus ont tous enduré des épreuves sévères sans abandonner Jéhovah.",
        "Dieu ne nous abandonne pas : il donne la force de tenir bon et promet que l'épreuve aura une fin.",
      ], ["Jacques 1:12", "1 Corinthiens 10:13"]),
    ],
    miniGames: [
      {
        id: "endurance-quiz",
        title: "Exemples d'endurance",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-end-q1", "Qui a perdu tout mais est resté fidèle ?", ["Job", "Judas", "Saül", "Achab"], 0, "Job a tenu bon malgré l'épreuve.", "Job 1:22"),
          quiz("et-end-q2", "Que dit Jacques sur l'épreuve ?", ["Elle produit l'endurance", "Elle est inutile", "Il faut fuir", "Dieu est absent"], 0, "L'endurance doit s'accomplir.", "Jacques 1:3, 4"),
          quiz("et-end-q3", "Comment Paul a-t-il fini sa course ?", ["Il a combattu le bon combat", "Il a abandonné", "Il a renié Christ", "Il a fui"], 0, "Il attendait la couronne.", "2 Timothée 4:7, 8"),
          quiz("et-end-q4", "Que promet Jéhovah à celui qui endure ?", ["La couronne de la vie", "La richesse immédiate", "L'absence de tout problème", "La gloire humaine"], 0, "Jacques 1:12 promet la vie.", "Jacques 1:12"),
          quiz("et-end-q5", "Jésus a enduré quoi pour nous ?", ["La torture et la mort", "Rien de sérieux", "Seulement la faim", "L'exil"], 0, "Il est notre modèle d'endurance.", "Hébreux 12:2"),
        ],
      },
      {
        id: "endurance-vf",
        title: "Vrai ou faux — Endurance",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-end-tf1", "Celui qui endure jusqu'à la fin sera sauvé.", true, "Matthieu 24:13.", "Matthieu 24:13"),
          tf("et-end-tf2", "Dieu nous laisse affronter des tentations impossibles à résister.", false, "Il limite l'épreuve.", "1 Corinthiens 10:13"),
          tf("et-end-tf3", "Joseph a gardé l'intégrité en Égypte.", true, "Il a refusé de pécher contre Dieu.", "Genèse 39:9"),
          tf("et-end-tf4", "L'endurance signifie ne jamais demander d'aide.", false, "La congrégation soutient les faibles.", "1 Thessaloniciens 5:14"),
        ],
      },
      {
        id: "endurance-verset",
        title: "Versets d'endurance",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-end-v1", "Celui qui endure jusqu'à la fin sera ___.", "sauvé", ["sauvé", "oublié", "riche", "seul"], "Matthieu 24:13"),
          verset("et-end-v2", "L'épreuve de votre foi produit l'___.", "endurance", ["endurance", "orgueil", "peur", "paresse"], "Jacques 1:3"),
          verset("et-end-v3", "Courons avec endurance la course qui nous est ___", "proposée", ["proposée", "interdite", "facile", "cachée"], "Hébreux 12:1"),
        ],
      },
    ],
  },
  {
    id: "amour",
    title: "L'amour — qualité suprême",
    subtitle: "Aimer Jéhovah et le prochain",
    description:
      "Sans amour, nous ne sommes rien. Méditons sur l'amour divin et comment le manifester concrètement.",
    scriptureHighlight: "« L'amour ne tombe jamais en défaillance. »",
    scriptureRef: "1 Corinthiens 13:8",
    articleIds: ["amour-wt-imiter", "amour-awake-quotidien"],
    readings: [
      reading("amr-r1", "L'amour de Jéhovah envers nous", [
        "Jéhovah a montré son amour en donnant son Fils pour nous. Cet amour n'est pas passif : il agit pour notre bien éternel.",
        "Répondre à cet amour, c'est obéir à ses commandements et imiter ses qualités envers les autres.",
      ], ["Jean 3:16", "1 Jean 5:3"]),
    ],
    miniGames: [
      {
        id: "amour-quiz",
        title: "L'amour selon la Bible",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-amr-q1", "Quels sont les deux plus grands commandements ?", ["Aimer Dieu et le prochain", "Prier et jeûner", "Donner et recevoir", "Travailler et dormir"], 0, "Jésus les a résumés ainsi.", "Matthieu 22:37-39"),
          quiz("et-amr-q2", "Comment 1 Corinthiens 13 décrit-il l'amour ?", ["Patient et ne garde pas rancune", "Orgueilleux", "Égoïste", "Irritable"], 0, "L'amour divin est désintéressé.", "1 Corinthiens 13:4, 5"),
          quiz("et-amr-q3", "Comment Jéhovah a-t-il prouvé son amour ?", ["En envoyant son Fils", "En nous ignorant", "En nous punissant sans but", "En restant silencieux"], 0, "Jean 3:16 est le verset clé.", "Jean 3:16"),
          quiz("et-amr-q4", "Que dit Jean sur celui qui n'aime pas ?", ["Il demeure dans la mort", "Il est parfait", "Il n'a pas besoin de Dieu", "Il est sage"], 0, "L'amour est vital.", "1 Jean 3:14"),
          quiz("et-amr-q5", "Comment les disciples seront-ils reconnus ?", ["À l'amour qu'ils ont les uns pour les autres", "À leurs richesses", "À leur force", "À leur silence"], 0, "Jésus l'a dit clairement.", "Jean 13:35"),
        ],
      },
      {
        id: "amour-vf",
        title: "Vrai ou faux — Amour",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-amr-tf1", "Aimer Jéhovah, c'est garder ses commandements.", true, "1 Jean 5:3.", "1 Jean 5:3"),
          tf("et-amr-tf2", "L'amour chrétien est seulement un sentiment.", false, "Il se manifeste par des actes.", "1 Jean 3:18"),
          tf("et-amr-tf3", "Nous devons aimer même nos ennemis.", true, "Jésus l'enseigne.", "Matthieu 5:44"),
          tf("et-amr-tf4", "Sans amour, le don de langues suffit.", false, "Paul dit que nous ne sommes rien.", "1 Corinthiens 13:1-3"),
        ],
      },
      {
        id: "amour-verset",
        title: "Versets sur l'amour",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-amr-v1", "L'amour est ___. Il est plein de bonté.", "patient", ["patient", "fier", "bruyant", "égoïste"], "1 Corinthiens 13:4"),
          verset("et-amr-v2", "Dieu a tant aimé le monde qu'il a donné son Fils ___.", "unique", ["unique", "riche", "caché", "lointain"], "Jean 3:16"),
          verset("et-amr-v3", "Nous aimons parce qu'il nous a aimés le ___.", "premier", ["premier", "moins", "jamais", "par hasard"], "1 Jean 4:19"),
        ],
      },
    ],
  },
  {
    id: "creation",
    title: "La création",
    subtitle: "La terre révèle le Créateur",
    description:
      "Les cieux déclarent la gloire de Jéhovah. Observer la création renforce notre conviction qu'il existe et qu'il nous aime.",
    scriptureHighlight: "« Les cieux déclarent la gloire de Dieu. »",
    scriptureRef: "Psaume 19:1",
    articleIds: ["creation-awake-miracle", "creation-wt-createur"],
    readings: [
      reading("cre-r1", "Un témoignage silencieux mais puissant", [
        "La complexité de la vie, l'ordre des saisons, la beauté de la nature ne peuvent pas s'expliquer par le hasard. Paul note que les qualités invisibles de Dieu se voient par ce qu'il a fait.",
        "Reconnaître Jéhovah comme Créateur nous rend reconnaissants et responsables envers sa création.",
      ], ["Romains 1:20", "Genèse 1:1"]),
    ],
    miniGames: [
      {
        id: "creation-quiz",
        title: "Le Créateur et son œuvre",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-cre-q1", "Que déclarent les cieux ?", ["La gloire de Dieu", "Le silence", "Le hasard", "Rien"], 0, "Psaume 19:1.", "Psaume 19:1"),
          quiz("et-cre-q2", "Comment Dieu a-t-il créé l'homme ?", ["À son image", "Par accident", "Comme les animaux sans différence", "Sans but"], 0, "Genèse 1:27.", "Genèse 1:27"),
          quiz("et-cre-q3", "Que fit Jéhovah le septième jour ?", ["Il se reposa de son œuvre", "Il détruisit tout", "Il abandonna la terre", "Il créa encore"], 0, "Genèse 2:2.", "Genèse 2:2"),
          quiz("et-cre-q4", "Qui a nié la création dans Romains 1 ?", ["Ceux qui refusent de glorifier Dieu", "Les prophètes", "Jésus", "Les anges"], 0, "Ils devinrent vains dans leur raisonnement.", "Romains 1:21"),
          quiz("et-cre-q5", "Quel est le premier verset de la Bible ?", ["Au commencement, Dieu créa…", "Jésus naquit…", "Moïse partit…", "Paul écrivit…"], 0, "Genèse 1:1.", "Genèse 1:1"),
        ],
      },
      {
        id: "creation-vf",
        title: "Vrai ou faux — Création",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-cre-tf1", "Jéhovah a créé les cieux et la terre.", true, "Genèse 1:1.", "Genèse 1:1"),
          tf("et-cre-tf2", "La création n'a aucun lien avec la foi.", false, "Elle rend témoignage de Dieu.", "Romains 1:20"),
          tf("et-cre-tf3", "Job a parlé de la sagesse de Dieu dans la nature.", true, "Job 38-41.", "Job 38:4"),
          tf("et-cre-tf4", "L'homme n'a aucune responsabilité envers la terre.", false, "Dieu lui a confié la terre.", "Genèse 1:28"),
        ],
      },
      {
        id: "creation-verset",
        title: "Versets sur la création",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-cre-v1", "Au commencement, Dieu ___ les cieux et la terre.", "créa", ["créa", "oublia", "vendit", "cacha"], "Genèse 1:1"),
          verset("et-cre-v2", "Les cieux ___ la gloire de Dieu.", "déclarent", ["déclarent", "cachent", "nient", "moquent"], "Psaume 19:1"),
          verset("et-cre-v3", "Dieu créa l'homme à son ___.", "image", ["image", "hasard", "colère", "oubli"], "Genèse 1:27"),
        ],
      },
    ],
  },
  {
    id: "jeunesse",
    title: "Perspectives pour les jeunes",
    subtitle: "Choisir le bon chemin tôt",
    description:
      "La Bible regorge de conseils pour les jeunes : pureté, sagesse, service et confiance en Jéhovah quand on construit son avenir.",
    scriptureHighlight: "« Souviens-toi de ton Créateur pendant ta jeunesse. »",
    scriptureRef: "Ecclésiaste 12:1",
    articleIds: ["jeunesse-awake-defis", "jeunesse-wt-force"],
    readings: [
      reading("jeu-r1", "Pourquoi servir Jéhovah jeune ?", [
        "Timothée, Samuel et Jésus adolescent montrent qu'on peut plaire à Dieu dès le jeune âge. Les choix faits tôt influencent toute une vie.",
        "Les jeunes qui aiment Jéhovah trouvent un but clair, une vraie amitié dans la congrégation et une joie qui ne dépend pas des modes passagères.",
      ], ["Ecclésiaste 12:1", "1 Timothée 4:12"]),
      reading("jeu-r2", "Gérer la pression des pairs", [
        "Il n'est pas facile d'être différent à l'école ou en ligne. Pourtant Daniel et ses trois compagnons ont refusé de se conformer à Babylone.",
        "Chercher des amis qui aiment Jéhovah, parler à des parents ou des anciens, et prier régulièrement sont des moyens concrets de tenir bon.",
      ], ["Daniel 1:8", "Proverbes 1:10"]),
    ],
    miniGames: [
      {
        id: "jeunesse-quiz",
        title: "Jeunes fidèles",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-jeu-q1", "À quel âge Jésus a-t-il impressionné les docteurs au temple ?", ["12 ans", "30 ans", "5 ans", "20 ans"], 0, "Luc 2:42, 47.", "Luc 2:42, 47"),
          quiz("et-jeu-q2", "Que dit Paul à Timothée sur son âge ?", ["Qu'il soit un exemple malgré sa jeunesse", "Qu'il attende d'être vieux", "Qu'il se taise", "Qu'il quitte la vérité"], 0, "1 Timothée 4:12.", "1 Timothée 4:12"),
          quiz("et-jeu-q3", "Qui a servi Jéhovah dès l'enfance au tabernacle ?", ["Samuel", "Saül", "Goliath", "Absalom"], 0, "1 Samuel 2:18.", "1 Samuel 2:18"),
          quiz("et-jeu-q4", "Que recommande Ecclésiaste 12:1 ?", ["Se souvenir de son Créateur jeune", "Attendre la vieillesse", "Oublier Dieu", "Ne jamais étudier"], 0, "Mieux vaut commencer tôt.", "Ecclésiaste 12:1"),
          quiz("et-jeu-q5", "Comment Daniel a-t-il résisté à Babylone ?", ["Il a pris une résolution ferme", "Il a tout accepté", "Il a fui", "Il a renié Jéhovah"], 0, "Daniel 1:8.", "Daniel 1:8"),
        ],
      },
      {
        id: "jeunesse-vf",
        title: "Vrai ou faux — Jeunesse",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-jeu-tf1", "Les jeunes peuvent être un exemple en parole et conduite.", true, "1 Timothée 4:12.", "1 Timothée 4:12"),
          tf("et-jeu-tf2", "Il est trop tard pour servir Jéhovah à 15 ans.", false, "On peut servir Dieu à tout âge.", "Ecclésiaste 12:1"),
          tf("et-jeu-tf3", "Les mauvaises fréquentations n'influencent pas.", false, "Elles corrompent les bonnes habitudes.", "1 Corinthiens 15:33"),
          tf("et-jeu-tf4", "Josias a cherché Jéhovah jeune.", true, "2 Chroniques 34:3.", "2 Chroniques 34:3"),
        ],
      },
      {
        id: "jeunesse-verset",
        title: "Versets pour les jeunes",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-jeu-v1", "Souviens-toi de ton Créateur pendant ta ___.", "jeunesse", ["jeunesse", "richesse", "retraite", "peur"], "Ecclésiaste 12:1"),
          verset("et-jeu-v2", "Que personne ne méprise ta ___.", "jeunesse", ["jeunesse", "joie", "force", "maison"], "1 Timothée 4:12"),
          verset("et-jeu-v3", "Mon fils, si des pécheurs veulent te ___, n'y consens pas.", "séduire", ["séduire", "bénir", "honorer", "écouter"], "Proverbes 1:10"),
        ],
      },
    ],
  },
  {
    id: "paix",
    title: "Paix intérieure",
    subtitle: "Malgré un monde troublé",
    description:
      "Jésus a promis une paix différente de celle du monde. Méditons sur comment la recevoir et la garder.",
    scriptureHighlight: "« Je vous laisse la paix, je vous donne ma paix. »",
    scriptureRef: "Jean 14:27",
    articleIds: ["paix-wt-interieure", "paix-awake-anxiete"],
    readings: [
      reading("paix-r1", "Une paix qui surpasse toute pensée", [
        "Le monde offre une paix fragile basée sur les circonstances. Jéhovah offre une paix profonde : savoir que nos péchés peuvent être pardonnés, que notre avenir est sûr et que Dieu gouverne.",
        "Cette paix se cultive par la prière, la méditation et la confiance active en les promesses.",
      ], ["Philippiens 4:6, 7", "Jean 14:27"]),
    ],
    miniGames: [
      {
        id: "paix-quiz",
        title: "La paix de Christ",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-paix-q1", "Quelle paix Jésus donne-t-il ?", ["Une paix différente du monde", "Aucune", "Seulement politique", "Temporaire et vide"], 0, "Jean 14:27.", "Jean 14:27"),
          quiz("et-paix-q2", "Que recommande Philippiens 4:6 ?", ["Ne pas s'inquiéter mais prier", "S'inquiéter sans fin", "Éviter Dieu", "Crier sur les autres"], 0, "La prière apaise.", "Philippiens 4:6, 7"),
          quiz("et-paix-q3", "Qui sont heureux selon Matthieu 5:9 ?", ["Les artisans de paix", "Les violents", "Les indifférents", "Les menteurs"], 0, "Ils seront appelés fils de Dieu.", "Matthieu 5:9"),
          quiz("et-paix-q4", "Comment Isaïe décrit-il les pensées de Jéhovah ?", ["Elles sont plus élevées que les nôtres", "Elles sont identiques au hasard", "Elles sont absentes", "Elles sont cruelles"], 0, "Isaïe 55:8, 9.", "Isaïe 55:8, 9"),
          quiz("et-paix-q5", "Que doit faire le juste pour vivre en paix ?", ["Chercher la paix et la poursuivre", "Provoquer toujours", "Fuir tout contact", "Ignorer les autres"], 0, "Psaume 34:14.", "Psaume 34:14"),
        ],
      },
      {
        id: "paix-vf",
        title: "Vrai ou faux — Paix",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-paix-tf1", "La paix de Dieu garde nos cœurs.", true, "Philippiens 4:7.", "Philippiens 4:7"),
          tf("et-paix-tf2", "S'inquiéter de tout est une preuve de foi.", false, "Jésus dit de ne pas nous inquiéter.", "Matthieu 6:34"),
          tf("et-paix-tf3", "Le Royaume apportera la paix universelle.", true, "Ésaïe 9:6, 7.", "Ésaïe 9:7"),
          tf("et-paix-tf4", "La méditation sur la Parole aide à la paix.", true, "Psaume 119:165.", "Psaume 119:165"),
        ],
      },
      {
        id: "paix-verset",
        title: "Versets de paix",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-paix-v1", "Je vous laisse la ___, je vous donne ma paix.", "paix", ["paix", "loi", "peur", "colère"], "Jean 14:27"),
          verset("et-paix-v2", "Ne vous inquiétez de ___.", "rien", ["rien", "tout", "personne", "Dieu"], "Philippiens 4:6"),
          verset("et-paix-v3", "Heureux les artisans de ___, car ils seront appelés fils de Dieu.", "paix", ["paix", "guerre", "discorde", "haine"], "Matthieu 5:9"),
        ],
      },
    ],
  },
  {
    id: "integrite",
    title: "Intégrité",
    subtitle: "Rester fidèle sous pression",
    description:
      "L'intégrité, c'est être entier, sans division entre ce qu'on croit et ce qu'on fait — même quand cela coûte cher.",
    scriptureHighlight: "« Intègre et droit, Job continua à craindre Dieu. »",
    scriptureRef: "Job 1:1",
    articleIds: ["integrite-wt-developper", "integrite-awake-honnetete"],
    readings: [
      reading("int-r1", "Tenir bon quand tout va mal", [
        "Job a perdu ses biens, ses enfants et sa santé, mais il n'a pas maudit Jéhovah. Son intégrité a été un témoignage pour les anges et pour nous.",
        "L'intégrité ne signifie pas la perfection, mais une loyauté constante : revenir à Jéhovah après une chute et refuser de renoncer à ses normes.",
      ], ["Job 1:22", "Job 2:3"]),
    ],
    miniGames: [
      {
        id: "integrite-quiz",
        title: "Exemples d'intégrité",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz("et-int-q1", "Pourquoi Job est-il célèbre ?", ["Son intégrité sous l'épreuve", "Sa richesse seule", "Sa politique", "Sa guerre"], 0, "Job 1:1.", "Job 1:1"),
          quiz("et-int-q2", "Que refusa Daniel de faire ?", ["Manger des aliments impurs", "Prier", "Servir le roi", "Travailler"], 0, "Daniel 1:8.", "Daniel 1:8"),
          quiz("et-int-q3", "Que firent les trois Hébreux face à l'image d'or ?", ["Ils refusèrent de l'adorer", "Ils se prosternèrent", "Ils fuirent Babylone", "Ils négocièrent"], 0, "Daniel 3:16-18.", "Daniel 3:17, 18"),
          quiz("et-int-q4", "Comment Joseph réagit-il face à la femme de Potiphar ?", ["Il fuit pour ne pas pécher", "Il accepte", "Il ment", "Il trahit Dieu"], 0, "Genèse 39:9-12.", "Genèse 39:9"),
          quiz("et-int-q5", "Que dit Proverbes sur les balances fausses ?", ["Jéhovah les déteste", "Il les approuve", "Il est indifférent", "Il les recommande"], 0, "Proverbes 11:1.", "Proverbes 11:1"),
        ],
      },
      {
        id: "integrite-vf",
        title: "Vrai ou faux — Intégrité",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-int-tf1", "L'intégrité plaît à Jéhovah.", true, "Job 2:3.", "Job 2:3"),
          tf("et-int-tf2", "Mentir est acceptable si cela évite des problèmes.", false, "Dieu déteste le mensonge.", "Proverbes 6:16-19"),
          tf("et-int-tf3", "Pierre a renié Jésus mais s'est repentis.", true, "Luc 22:61, 62.", "Luc 22:62"),
          tf("et-int-tf4", "L'intégrité n'a aucun lien avec le travail.", false, "Colossiens 3:22 parle d'obéissance sincère.", "Colossiens 3:22"),
        ],
      },
      {
        id: "integrite-verset",
        title: "Versets d'intégrité",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-int-v1", "Il était intègre et ___, et il craignait Dieu.", "droit", ["droit", "riche", "fier", "paresseux"], "Job 1:1"),
          verset("et-int-v2", "L'honnêteté des balances justes plaît à ___.", "Jéhovah", ["Jéhovah", "personne", "Satan", "la foule"], "Proverbes 11:1"),
          verset("et-int-v3", "Que le menteur ne ___ plus dans la congrégation.", "demeure", ["demeure", "prie", "chante", "serve"], "Psaume 101:7"),
        ],
      },
    ],
  },
  {
    id: "prophéties",
    title: "Prophéties bibliques",
    subtitle: "Des paroles qui s'accomplissent",
    description:
      "Jéhovah a annoncé à l'avance des événements majeurs. Reconnaître leur accomplissement renforce notre foi.",
    scriptureHighlight: "« Je suis le Dieu […] qui déclare la fin dès le commencement. »",
    scriptureRef: "Ésaïe 46:10",
    articleIds: ["prophéties-wt-fil", "prophéties-livre-apocalypse"],
    readings: [
      reading("pro-r1", "Pourquoi Dieu prophétise ?", [
        "Les prophéties prouvent que Jéhovah connaît l'avenir et tient ses promesses. Quand nous voyons leur accomplissement, notre confiance grandit.",
        "Jésus a donné des signes du « temps de la fin » : guerres, famines, tremblements de terre, mais aussi la prédication mondiale de la bonne nouvelle.",
      ], ["Ésaïe 46:10", "Matthieu 24:3-14"]),
    ],
    miniGames: [
      {
        id: "prophéties-quiz",
        title: "Prophéties et accomplissement",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-pro-q1", "Où Jésus est-il né selon la prophétie ?", ["Bethléem", "Nazareth", "Jérusalem", "Rome"], 0, "Michée 5:2.", "Michée 5:2"),
          quiz("et-pro-q2", "Quel signe mondial Jésus a-t-il donné ?", ["La prédication dans toute la terre habitée", "La fin de toute guerre", "La disparition de la Bible", "L'arrêt du service"], 0, "Matthieu 24:14.", "Matthieu 24:14"),
          quiz("et-pro-q3", "Qui Daniel a-t-il identifié comme le petit cor ?", ["Un roi grec", "Rome seule", "Personne", "Moïse"], 0, "Daniel 8.", "Daniel 8:21-23"),
          quiz("et-pro-q4", "Que dit Ésaïe 9:6, 7 du Prince de la paix ?", ["Son gouvernement sera en paix sans fin", "Il échouera", "Il sera oublié", "Il n'aura pas de règne"], 0, "Le Royaume est éternel.", "Ésaïe 9:7"),
          quiz("et-pro-q5", "Comment reconnaître un vrai prophète ?", ["Ses paroles s'accomplissent", "Il est riche", "Il prédit toujours la guerre", "Il se contredit"], 0, "Deutéronome 18:22.", "Deutéronome 18:22"),
        ],
      },
      {
        id: "prophéties-vf",
        title: "Vrai ou faux — Prophéties",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-pro-tf1", "Jéhovah déclare la fin dès le commencement.", true, "Ésaïe 46:10.", "Ésaïe 46:10"),
          tf("et-pro-tf2", "Aucune prophétie messianique ne s'est accomplie.", false, "De nombreuses prophéties concernant Jésus se sont accomplies.", "Actes 3:18"),
          tf("et-pro-tf3", "Les signes du temps de la fin incluent des troubles multiples.", true, "Matthieu 24.", "Matthieu 24:7"),
          tf("et-pro-tf4", "Étudier les prophéties est inutile.", false, "Elles fortifient notre espérance.", "2 Pierre 1:19"),
        ],
      },
      {
        id: "prophéties-verset",
        title: "Versets prophétiques",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-pro-v1", "Je suis le Dieu […] qui déclare la fin dès le ___.", "commencement", ["commencement", "hasard", "silence", "oubli"], "Ésaïe 46:10"),
          verset("et-pro-v2", "Toi, Bethléem […] de toi sortira celui qui dominera sur ___.", "Israël", ["Israël", "Rome", "personne", "Satan"], "Michée 5:2"),
          verset("et-pro-v3", "Nous avons la parole prophétique rendue plus ___.", "ferme", ["ferme", "faible", "secrète", "inutile"], "2 Pierre 1:19"),
        ],
      },
    ],
  },
];
