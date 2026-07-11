import type { StudyTheme } from "@/types/study";
import { quiz, reading, tf, verset } from "./helpers";

/** Thématiques ciblées par rôle au ministère et tranche d'âge */
export const ROLE_STUDY_THEMES: StudyTheme[] = [
  {
    id: "decouvrir-bible",
    title: "Découvrir la Bible",
    subtitle: "Premiers pas dans la Parole de Dieu",
    description:
      "Vous débutez ? Ces lectures et mini-jeux vous aident à comprendre qui est Jéhovah, pourquoi la Bible est fiable et comment commencer une étude régulière.",
    scriptureHighlight: "« Ta parole est une lampe à mes pieds, une lumière sur mon sentier. »",
    scriptureRef: "Psaume 119:105",
    articleIds: ["decouverte-wt-premiers-pas", "decouverte-brochure-bible"],
    readings: [
      reading("dec-r1", "Pourquoi lire la Bible ?", [
        "La Bible n'est pas un livre comme les autres : c'est la Parole de Jéhovah, inspirée par lui pour nous guider. Elle répond aux grandes questions — d'où venons-nous ? pourquoi souffrons-nous ? que nous réserve l'avenir ?",
        "Commencer par de courts passages, comme les récits de la Genèse ou l'évangile de Marc, aide à prendre l'habitude sans se décourager.",
      ], ["2 Timothée 3:16", "Jean 17:3"]),
      reading("dec-r2", "Comment étudier efficacement", [
        "Choisissez un moment calme, priez brièvement, lisez lentement et posez-vous : « Qu'est-ce que Jéhovah me montre sur lui-même ? Que dois-je faire ? »",
        "Noter une idée par lecture suffit au début. La régularité — même 10 minutes — vaut mieux qu'une longue session rare.",
      ], ["Josué 1:8", "Psaume 1:2"]),
    ],
    miniGames: [
      {
        id: "decouvrir-quiz",
        title: "Premiers repères bibliques",
        description: "5 questions pour débuter",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-dec-q1", "Qui a écrit la majorité des psaumes ?", ["David", "Paul", "Pierre", "Moïse seul"], 0, "David est l'auteur de nombreux psaumes.", "Psaume 62:title"),
          quiz("et-dec-q2", "Combien de livres compte la Bible protestante ?", ["66", "27", "12", "100"], 0, "39 livres hébreux + 27 grecs.", "Étude biblique"),
          quiz("et-dec-q3", "Quel livre raconte la vie de Jésus de façon concise ?", ["Marc", "Apocalypse", "Lévitique", "Nahum"], 0, "Marc est court et dynamique.", "Marc 1:1"),
          quiz("et-dec-q4", "Que signifie le nom Jéhovah ?", ["Il fait venir à l'existence", "Il dort", "Il est loin", "Il change"], 0, "Jéhovah est le Dieu qui accomplit ses promesses.", "Exode 3:14, 15"),
          quiz("et-dec-q5", "Pourquoi la Bible est-elle utile ?", ["Pour enseigner et corriger", "Seulement pour l'histoire", "Pour la magie", "Pour juger sans lire"], 0, "2 Timothée 3:16, 17.", "2 Timothée 3:16"),
        ],
      },
      {
        id: "decouvrir-vf",
        title: "Vrai ou faux — Débuter",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-dec-tf1", "On peut comprendre la Bible sans l'aide de personne.", false, "Les disciples expliquaient les Écritures.", "Actes 8:30, 31"),
          tf("et-dec-tf2", "Jéhovah veut que nous le connaissions.", true, "La vie éternelle implique connaître Dieu.", "Jean 17:3"),
          tf("et-dec-tf3", "Il faut tout lire en une semaine pour être un bon chrétien.", false, "La régularité compte plus que la vitesse.", "Psaume 1:2"),
          tf("et-dec-tf4", "La prière aide à comprendre la Bible.", true, "Jéhovah donne sagesse à qui la demande.", "Jacques 1:5"),
        ],
      },
      {
        id: "decouvrir-verset",
        title: "Versets pour commencer",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-dec-v1", "Ta parole est une ___ à mes pieds.", "lampe", ["lampe", "chaîne", "ombre", "mur"], "Psaume 119:105"),
          verset("et-dec-v2", "Cette bonne nouvelle du ___ sera prêchée dans toute la terre habitée.", "Royaume", ["Royaume", "commerce", "temple", "loi"], "Matthieu 24:14"),
          verset("et-dec-v3", "Heureux ceux qui écoutent la parole de Dieu et qui la ___.", "gardent", ["gardent", "oublient", "cachent", "vendent"], "Luc 11:28"),
        ],
      },
    ],
  },
  {
    id: "predication",
    title: "La prédication",
    subtitle: "Parler avec courage et tact",
    description:
      "Renforcez votre confiance pour le ministère de la prédication : préparation, conversations naturelles et persévérance avec bienveillance.",
    scriptureHighlight: "« Rendez témoignage du Royaume à toutes les nations. »",
    scriptureRef: "Matthieu 24:14",
    articleIds: ["predication-wt-courage", "predication-awake-conversations"],
    readings: [
      reading("pre-r1", "Parler avec sincérité", [
        "Jésus et les apôtres conversaient avec les gens là où ils se trouvaient : marchés, rives, foyers. Ils ne récitaient pas un discours figé — ils adaptaient le message à l'auditeur.",
        "Notre but n'est pas de « gagner un débat », mais d'éveiller l'intérêt pour Jéhovah et son Royaume. Un ton calme et respectueux ouvre des portes.",
      ], ["Actes 17:2, 3", "Colossiens 4:6"]),
      reading("pre-r2", "Persévérer avec joie", [
        "Tous ne réagissent pas positivement. Jésus l'avait prédit. Pourtant chaque conversation honnête honore Jéhovah et peut planter une graine.",
        "Préparer une phrase d'introduction, une publication et une question simple réduit le stress et libère l'esprit pour écouter vraiment.",
      ], ["Matthieu 10:11-14", "Philippiens 4:13"]),
    ],
    miniGames: [
      {
        id: "predication-quiz",
        title: "Ministère de la prédication",
        description: "6 questions pratiques",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-pre-q1", "Quel signe Jésus a-t-il donné pour les derniers jours ?", ["La prédication mondiale", "La fin des livres", "L'arrêt des prières", "La disparition des églises"], 0, "Matthieu 24:14.", "Matthieu 24:14"),
          quiz("et-pre-q2", "Comment Paul prêchait-il à Thessalonique ?", ["En raisonnant à partir des Écritures", "Sans ouvrir la Bible", "Uniquement par courrier", "En secret toujours"], 0, "Actes 17:2, 3.", "Actes 17:2, 3"),
          quiz("et-pre-q3", "Que doit être notre parole selon Colossiens 4:6 ?", ["Toujours accompagnée de grâce", "Amère et dure", "Silencieuse", "Moqueuse"], 0, "La grâce attire.", "Colossiens 4:6"),
          quiz("et-pre-q4", "Que faire si une maison n'est pas réceptive ?", ["Passer à autre chose", "Insister agressivement", "Abandonner le service", "Se disputer"], 0, "Jésus a donné cette instruction.", "Matthieu 10:14"),
          quiz("et-pre-q5", "Qui était le premier missionnaire chrétien ?", ["Jésus", "César", "Hérode", "Pharaon"], 0, "Jésus est venu chercher et sauver.", "Luc 19:10"),
          quiz("et-pre-q6", "Pourquoi prêcher fait-il du bien à celui qui prêche ?", ["On médite et on grandit spirituellement", "On devient riche", "On évite la Bible", "On n'a plus besoin de prière"], 0, "Enseigner renforce notre foi.", "1 Timothée 4:15, 16"),
        ],
      },
      {
        id: "predication-vf",
        title: "Vrai ou faux — Prédication",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-pre-tf1", "La prédication est réservée aux pionniers.", false, "Tous les disciples participent.", "Matthieu 28:19, 20"),
          tf("et-pre-tf2", "Écouter l'interlocuteur est aussi important que parler.", true, "Comprendre ses besoins aide à adapter le message.", "Jacques 1:19"),
          tf("et-pre-tf3", "Philippe a expliqué les Écritures à l'eunuque éthiopien.", true, "Actes 8:30-35.", "Actes 8:35"),
          tf("et-pre-tf4", "Un mauvais accueil signifie que Jéhovah n'aime pas notre effort.", false, "Jéhovah voit notre cœur et notre obéissance.", "1 Samuel 16:7"),
        ],
      },
      {
        id: "predication-verset",
        title: "Versets pour le service",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-pre-v1", "Rendez témoignage du ___ à toutes les nations.", "Royaume", ["Royaume", "richesse", "politique", "tradition"], "Matthieu 24:14"),
          verset("et-pre-v2", "Que votre parole soit toujours accompagnée de ___.", "grâce", ["grâce", "colère", "ironie", "peur"], "Colossiens 4:6"),
          verset("et-pre-v3", "Nous ne pouvons pas nous empêcher de parler de ce que nous avons ___ et entendu.", "vu", ["vu", "oublié", "nié", "caché"], "Actes 4:20"),
        ],
      },
    ],
  },
  {
    id: "pionnier",
    title: "Vie de pionnier",
    subtitle: "Organisation, joie et endurance",
    description:
      "Pour ceux qui consacrent plus de temps au service : gérer ses heures, garder la joie et approfondir sa relation avec Jéhovah.",
    scriptureHighlight: "« Ne vous lassiez pas de faire le bien. »",
    scriptureRef: "Galates 6:9",
    articleIds: ["pionnier-wt-joie", "pionnier-brochure-organisation"],
    readings: [
      reading("pio-r1", "Garder la joie dans le service", [
        "Le service de pionnier n'est pas une course à la performance. Jéhovah voit nos efforts, nos limites et notre motivation. Paul travaillait, prêchait et gardait sa joie parce qu'il savait pourquoi il servait.",
        "Alterner visites, prédication et étude personnelle évite l'épuisement. Des pauses régulières et un sommeil suffisant sont aussi spirituels que les heures comptées.",
      ], ["Philippiens 4:4", "2 Corinthiens 12:15"]),
      reading("pio-r2", "Organiser ses journées", [
        "Planifier la semaine — quels jours pour le service, l'étude, la famille — réduit le stress. Une liste simple de buts quotidiens aide à rester concentré.",
        "Imiter Jésus qui se levait tôt pour prier montre que la force vient d'abord de Jéhovah, pas de notre seule volonté.",
      ], ["Marc 1:35", "Éphésiens 5:15, 16"]),
    ],
    miniGames: [
      {
        id: "pionnier-quiz",
        title: "Servir comme pionnier",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-pio-q1", "Que conseille Paul à propos du bien ?", ["Ne pas se lasser", "L'abandonner vite", "Le cacher", "Le repousser"], 0, "Galates 6:9.", "Galates 6:9"),
          quiz("et-pio-q2", "Quand Jésus priait-il souvent ?", ["Tôt le matin", "Jamais", "Uniquement le soir", "Seulement le sabbat"], 0, "Marc 1:35.", "Marc 1:35"),
          quiz("et-pio-q3", "Que dit 1 Timothée 4:16 sur le ministère ?", ["Y persévérer profite à tous", "L'arrêter vite", "Le garder secret", "Le fuir"], 0, "Paul encourage la persévérance.", "1 Timothée 4:16"),
          quiz("et-pio-q4", "Pourquoi Jésus est-il venu ?", ["Chercher et sauver les perdus", "Devenir roi terrestre", "Éviter le service", "Remplacer la Bible"], 0, "Luc 19:10.", "Luc 19:10"),
          quiz("et-pio-q5", "Comment acheter du temps selon Éphésiens 5:16 ?", ["En l'utilisant avec sagesse", "En le gaspillant", "En dormant toujours", "En évitant le service"], 0, "Le temps est précieux.", "Éphésiens 5:16"),
        ],
      },
      {
        id: "pionnier-vf",
        title: "Vrai ou faux — Pionnier",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-pio-tf1", "Seul un pionnier peut prêcher efficacement.", false, "Chaque serviteur a sa part.", "1 Corinthiens 3:6"),
          tf("et-pio-tf2", "La prière aide à tenir dans le service intensif.", true, "Jésus priait avant les journées chargées.", "Luc 6:12"),
          tf("et-pio-tf3", "L'épuisement spirituel n'existe pas.", false, "Élie a connu un moment de découragement.", "1 Rois 19:4"),
          tf("et-pio-tf4", "Jéhovah renforce ceux qui le servent.", true, "Philippiens 4:13.", "Philippiens 4:13"),
        ],
      },
      {
        id: "pionnier-verset",
        title: "Versets pour pionniers",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-pio-v1", "Ne vous lassez pas de faire le ___.", "bien", ["bien", "mal", "repos", "silence"], "Galates 6:9"),
          verset("et-pio-v2", "À cause de la grande activité, ne ___ pas de prier.", "cessez", ["cessez", "pensez", "rêvez", "parlez"], "Luc 18:1"),
          verset("et-pio-v3", "Tout ce que vous faites, faites-le de tout votre ___.", "cœur", ["cœur", "argent", "orgueil", "hasard"], "Colossiens 3:23"),
        ],
      },
    ],
  },
  {
    id: "ecole-biblique",
    title: "École biblique",
    subtitle: "Apprendre avec plaisir quand on est jeune",
    description:
      "Histoires bibliques, qualités chrétiennes et jeux pour les 7-12 ans — ou pour étudier en famille avec des enfants.",
    scriptureHighlight: "« Jésus progresse en sagesse, en taille et en grâce. »",
    scriptureRef: "Luc 2:52",
    articleIds: ["ecole-wt-enfants", "ecole-awake-famille"],
    readings: [
      reading("eco-r1", "Des héros pour nous inspirer", [
        "La Bible regorge de jeunes courageux : Samuel qui a répondu à Jéhovah, David face à Goliath, Josias roi à 8 ans, Jésus à 12 ans au temple. Leurs exemples montrent qu'on n'est jamais trop jeune pour servir Dieu.",
        "Chaque histoire enseigne une qualité : obéissance, courage, honnêteté, amour pour Jéhovah.",
      ], ["1 Samuel 3:10", "Luc 2:49"]),
      reading("eco-r2", "Étudier avec maman et papa", [
        "Le culte familial peut être court : lire un récit, poser une question simple, prier ensemble. Les enfants retiennent mieux quand ils participent.",
        "Les parents n'ont pas besoin de tout savoir : découvrir la Bible ensemble est une belle aventure.",
      ], ["Deutéronome 6:6, 7", "Josué 24:15"]),
    ],
    miniGames: [
      {
        id: "ecole-quiz",
        title: "Héros bibliques jeunes",
        description: "5 questions amusantes",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-eco-q1", "Qui a combattu Goliath ?", ["David", "Saül", "Moïse", "Noé"], 0, "David était encore jeune.", "1 Samuel 17"),
          quiz("et-eco-q2", "Que répondit Samuel à Jéhovah ?", ["Parle, ton serviteur écoute", "Je suis fatigué", "Plus tard", "Non"], 0, "1 Samuel 3:10.", "1 Samuel 3:10"),
          quiz("et-eco-q3", "À quel âge Josias devint-il roi ?", ["8 ans", "30 ans", "50 ans", "12 ans"], 0, "2 Rois 22:1.", "2 Rois 22:1"),
          quiz("et-eco-q4", "Où trouva-t-on Jésus à 12 ans ?", ["Au temple", "En Égypte", "Sur un bateau", "Dans le désert"], 0, "Luc 2:46.", "Luc 2:46"),
          quiz("et-eco-q5", "Qui fut avalé par un grand poisson ?", ["Jonas", "Pierre", "Paul", "Jean"], 0, "Jonas 1:17.", "Jonas 1:17"),
        ],
      },
      {
        id: "ecole-vf",
        title: "Vrai ou faux — Jeunes",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-eco-tf1", "Les enfants peuvent plaire à Jéhovah.", true, "Jésus accueillait les enfants.", "Matthieu 19:14"),
          tf("et-eco-tf2", "Timothée était trop jeune pour servir Dieu.", false, "Paul l'encourageait malgré son jeune âge.", "1 Timothée 4:12"),
          tf("et-eco-tf3", "Noé obéit quand il construisit l'arche.", true, "Genèse 6:22.", "Genèse 6:22"),
          tf("et-eco-tf4", "On ne peut pas prier quand on est enfant.", false, "La prière est pour tous.", "Psaume 8:2"),
        ],
      },
      {
        id: "ecole-verset",
        title: "Versets pour enfants",
        description: "3 versets simples",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-eco-v1", "Obéissez à vos parents dans le Seigneur, car c'est ce qui est ___.", "juste", ["juste", "facile", "rare", "inutile"], "Éphésiens 6:1"),
          verset("et-eco-v2", "Jésus progresse en sagesse, en taille et en ___.", "grâce", ["grâce", "richesse", "colère", "peur"], "Luc 2:52"),
          verset("et-eco-v3", "Que le petit et le grand connaissent ___.", "Jéhovah", ["Jéhovah", "personne", "Satan", "le hasard"], "Jérémie 31:34"),
        ],
      },
    ],
  },
  {
    id: "vie-chretienne",
    title: "Vie chrétienne au quotidien",
    subtitle: "Appliquer la Bible dans la vie réelle",
    description:
      "École, travail, amitiés, réseaux sociaux : comment vivre en chrétien quand personne ne nous regarde ?",
    scriptureHighlight: "« Soyez imitateurs de Dieu, comme des enfants bien-aimés. »",
    scriptureRef: "Éphésiens 5:1",
    articleIds: ["vie-wt-quotidien", "vie-awake-adolescents"],
    readings: [
      reading("vie-r1", "Être chrétien à l'école ou au travail", [
        "Notre conduite parle autant que nos paroles. Ponctualité, honnêteté, respect des règles et gentillesse sont des témoignages silencieux.",
        "Quand la pression des pairs pousse à tricher ou à se moquer, se rappeler que Jéhovah voit tout aide à faire le bon choix.",
      ], ["Colossiens 3:23", "1 Pierre 2:12"]),
      reading("vie-r2", "Gérer le temps et les distractions", [
        "Écrans, jeux vidéo et réseaux sociaux ne sont pas mauvais en soi, mais ils peuvent voler le temps de l'étude et de la prière. Fixer des limites est une preuve de maturité.",
        "Commencer la journée par une prière courte et un verset donne un cap spirituel avant les distractions.",
      ], ["Éphésiens 5:15, 16", "Psaume 90:12"]),
    ],
    miniGames: [
      {
        id: "vie-quiz",
        title: "Choix du quotidien",
        description: "5 questions",
        type: "quiz",
        estimatedMinutes: 4,
        quizQuestions: [
          quiz("et-vie-q1", "Comment doit-on travailler selon Colossiens 3:23 ?", ["De tout cœur pour Jéhovah", "Sans effort", "En trichant", "En secret seulement"], 0, "Colossiens 3:23.", "Colossiens 3:23"),
          quiz("et-vie-q2", "Que dit Timothée 4:12 aux jeunes ?", ["Soyez un modèle en conduite", "Restez silencieux toujours", "Évitez le service", "Ne lisez pas la Bible"], 0, "1 Timothée 4:12.", "1 Timothée 4:12"),
          quiz("et-vie-q3", "Comment Jésus veut-il qu'on traite les autres ?", ["Comme nous voulons être traités", "Avec mépris", "Sans parler", "Avec violence"], 0, "Matthieu 7:12.", "Matthieu 7:12"),
          quiz("et-vie-q4", "Que doit-on rechercher d'abord ?", ["Le Royaume et sa justice", "Les vêtements", "La popularité", "La vengeance"], 0, "Matthieu 6:33.", "Matthieu 6:33"),
          quiz("et-vie-q5", "Pourquoi contrôler notre langage ?", ["Elle peut blesser ou édifier", "Cela n'a pas d'importance", "Dieu n'écoute pas", "Seuls les anciens doivent parler"], 0, "Jacques 3:5-10.", "Jacques 3:9, 10"),
        ],
      },
      {
        id: "vie-vf",
        title: "Vrai ou faux — Quotidien",
        description: "4 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf("et-vie-tf1", "On peut être chrétien seulement le week-end.", false, "La fidélité est quotidienne.", "Luc 9:23"),
          tf("et-vie-tf2", "Les amis influencent nos choix.", true, "1 Corinthiens 15:33 avertit des mauvaises fréquentations.", "1 Corinthiens 15:33"),
          tf("et-vie-tf3", "Prier le matin peut aider toute la journée.", true, "Jésus priait régulièrement.", "Marc 1:35"),
          tf("et-vie-tf4", "Tricher à un examen est acceptable si personne ne voit.", false, "L'honnêteté plaît à Jéhovah.", "Proverbes 11:1"),
        ],
      },
      {
        id: "vie-verset",
        title: "Versets pour le quotidien",
        description: "3 versets",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset("et-vie-v1", "Soyez imitateurs de Dieu, comme des enfants ___.", "bien-aimés", ["bien-aimés", "oubliés", "fiers", "peureux"], "Éphésiens 5:1"),
          verset("et-vie-v2", "Que personne ne méprise ta ___.", "jeunesse", ["jeunesse", "richesse", "force", "maison"], "1 Timothée 4:12"),
          verset("et-vie-v3", "Cherchez d'abord le ___ et sa justice.", "Royaume", ["Royaume", "monde", "plaisir", "honneur"], "Matthieu 6:33"),
        ],
      },
    ],
  },
];
