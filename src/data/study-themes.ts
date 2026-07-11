import type { StudyMiniGame, StudyTheme } from "@/types/study";
import { getArticlesForTheme, getFeaturedArticles, getStudyArticle } from "./study/articles";
import { EXTENDED_STUDY_THEMES } from "./study/extended-themes";
import { ROLE_STUDY_THEMES } from "./study/role-themes";
import { quiz, reading, tf, verset } from "./study/helpers";

export { getFeaturedArticles, getStudyArticle, getArticlesForTheme };
export type { StudyArticle } from "@/types/study";

const BASE_STUDY_THEMES: StudyTheme[] = [
  {
    id: "priere",
    title: "La prière",
    subtitle: "Parler à Jéhovah chaque jour",
    description:
      "La prière renforce notre amitié avec Dieu. Ces mini-jeux vous aident à méditer sur ce que la Bible enseigne.",
    scriptureHighlight:
      "« Continuez de prier, veillez en cela avec des actions de grâces. »",
    scriptureRef: "Colossiens 4:2",
    articleIds: ["priere-wt-ecoute", "priere-awake-efficace"],
    readings: [
      reading("pri-r1", "Une conversation avec notre Père", [
        "La prière n'est pas un rituel vide : c'est un échange sincère avec Jéhovah. Comme un enfant parle à son père aimant, nous pouvons lui confier nos joies, nos peurs et nos besoins.",
        "Jésus a montré l'exemple en priant régulièrement, seul ou avec ses disciples. Il nous a aussi donné un modèle simple pour structurer nos prières : louange, demandes liées au Royaume, nos besoins quotidiens, pardon et aide face à la tentation.",
      ], ["Matthieu 6:9-13", "Luc 6:12"]),
      reading("pri-r2", "Prier avec persévérance", [
        "Parfois la réponse tarde ou diffère de ce qu'on imaginait. Pourtant Jéhovah écoute toujours. Élie, Anne et Jésus lui-même ont prié avec ferveur et constance.",
        "La prière change aussi notre état d'esprit : elle nous aide à aligner nos désirs sur la volonté de Dieu plutôt que d'agir impulsivement.",
      ], ["1 Thessaloniciens 5:17", "Luc 18:1"]),
    ],
    miniGames: [
      {
        id: "priere-quiz",
        title: "Pourquoi prier ?",
        description: "4 questions sur le rôle de la prière",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-pri-q1",
            "Selon Jésus, où devons-nous prier ?",
            ["En secret, sincèrement", "Seulement en public", "Sans parler", "Uniquement le dimanche"],
            0,
            "Jésus enseigne de prier en secret, avec sincérité.",
            "Matthieu 6:6"
          ),
          quiz(
            "et-pri-q2",
            "Que demande le modèle de prière pour le « pain quotidien » ?",
            ["Nos besoins spirituels et matériels", "Seulement la richesse", "La vengeance", "Rien de concret"],
            0,
            "Nous demandons à Jéhovah ce dont nous avons besoin chaque jour.",
            "Matthieu 6:11"
          ),
          quiz(
            "et-pri-q3",
            "Que fait Jésus dans le jardin de Gethsémané ?",
            ["Il prie avec ferveur à son Père", "Il fuit", "Il dort", "Il refuse de parler à Dieu"],
            0,
            "Jésus montre l'importance de la prière dans l'épreuve.",
            "Luc 22:41-44"
          ),
          quiz(
            "et-pri-q4",
            "Comment Élie a-t-il prié pour la pluie ?",
            ["Avec persévérance", "Une seule fois sans conviction", "En colère", "Sans y croire"],
            0,
            "Élie a prié plusieurs fois jusqu'à ce que la pluie vienne.",
            "1 Rois 18:42-45"
          ),
        ],
      },
      {
        id: "priere-vf",
        title: "Vrai ou faux — Prière",
        description: "Vérifiez vos idées reçues",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-pri-tf1",
            "Nous pouvons parler à Jéhovah comme à un Père qui nous écoute.",
            true,
            "Jésus nous apprend à dire « Notre Père ».",
            "Matthieu 6:9"
          ),
          tf(
            "et-pri-tf2",
            "Il faut réciter les mêmes mots sans réfléchir pour que la prière soit entendue.",
            false,
            "Jésus condamne les prières répétitives sans sincérité.",
            "Matthieu 6:7"
          ),
          tf(
            "et-pri-tf3",
            "La prière peut nous aider à ne pas céder à la tentation.",
            true,
            "Jésus conseille de veiller et prier.",
            "Matthieu 26:41"
          ),
        ],
      },
      {
        id: "priere-verset",
        title: "Versets à compléter",
        description: "Mémorisez les paroles clés",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-pri-v1",
            "Ne vous inquiétez de rien, mais en toute chose faites connaître vos besoins à Dieu par des prières et des ___ accompagnées de actions de grâces.",
            "supplications",
            ["supplications", "colères", "plaintes", "serments"],
            "Philippiens 4:6"
          ),
          verset(
            "et-pri-v2",
            "Notre Père qui es aux cieux, que ton nom soit ___.",
            "sanctifié",
            ["sanctifié", "oublié", "caché", "moqué"],
            "Matthieu 6:9"
          ),
        ],
      },
    ],
  },
  {
    id: "confiance",
    title: "Confiance en Jéhovah",
    subtitle: "Lui faire confiance dans l'épreuve",
    description:
      "La Bible regorge d'exemples de serviteurs qui ont fait confiance à Jéhovah. Méditez sur leur foi.",
    scriptureHighlight: "« Celui qui se confie en Jéhovah est entouré de bonté aimante. »",
    scriptureRef: "Psaume 32:10",
    articleIds: ["confiance-wt-renforcer", "confiance-awake-forces"],
    readings: [
      reading("con-r1", "Faire confiance quand on ne voit pas la solution", [
        "Abraham a quitté sa terre sans connaître la destination. Moïse a fait face à la mer Rouge. Des milliers de serviteurs ont dû attendre que Jéhovah agisse au bon moment.",
        "Faire confiance ne signifie pas être passif : c'est avancer en appliquant les principes bibliques tout en laissant à Jéhovah le soin de diriger l'issue.",
      ], ["Proverbes 3:5, 6", "Hébreux 11:1"]),
    ],
    miniGames: [
      {
        id: "confiance-quiz",
        title: "Exemples de foi",
        description: "Qui a fait confiance à Jéhovah ?",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-con-q1",
            "Face à Goliath, en qui David a-t-il mis sa confiance ?",
            ["Jéhovah", "Son armure", "Sa fronde seule", "Les Philistins"],
            0,
            "David déclare que Jéhovah ne dépend pas de l'épée.",
            "1 Samuel 17:45-47"
          ),
          quiz(
            "et-con-q2",
            "Pourquoi Abraham a-t-il quitté Ur ?",
            ["Parce qu'il faisait confiance aux promesses de Jéhovah", "Pour devenir riche", "Par obligation politique", "Sans raison"],
            0,
            "Abraham partit par la foi.",
            "Hébreux 11:8"
          ),
          quiz(
            "et-con-q3",
            "Comment Jéhovah a-t-il délivré Daniel de la fosse aux lions ?",
            ["Il envoya un ange pour le protéger", "Daniel s'échappa seul", "Les lions dormaient", "Personne ne l'aida"],
            0,
            "Jéhovah ferma la gueule des lions.",
            "Daniel 6:22"
          ),
        ],
      },
      {
        id: "confiance-vf",
        title: "Vrai ou faux — Confiance",
        description: "Test rapide",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-con-tf1",
            "Proverbes 3:5 nous invite à faire confiance à Jéhovah de tout notre cœur.",
            true,
            "Nous ne devons pas nous appuyer sur notre propre intelligence.",
            "Proverbes 3:5"
          ),
          tf(
            "et-con-tf2",
            "Faire confiance à Jéhovah signifie ne jamais agir ni prendre de décisions.",
            false,
            "La confiance inclut d'appliquer ses conseils dans nos choix.",
            "Proverbes 3:6"
          ),
          tf(
            "et-con-tf3",
            "Noé a construit l'arche parce qu'il faisait confiance à Jéhovah.",
            true,
            "Noé marchait avec Dieu.",
            "Genèse 6:22"
          ),
        ],
      },
      {
        id: "confiance-verset",
        title: "Versets de confiance",
        description: "Complétez les promesses",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-con-v1",
            "Confie-toi en Jéhovah de tout ton cœur, et ne t'appuie pas sur ta propre ___.",
            "intelligence",
            ["intelligence", "richesse", "force", "colère"],
            "Proverbes 3:5"
          ),
          verset(
            "et-con-v2",
            "Jéhovah est mon berger. Je ne ___ de rien.",
            "manquerai",
            ["manquerai", "douterai", "fuirai", "crierai"],
            "Psaume 23:1"
          ),
        ],
      },
    ],
  },
  {
    id: "qualites",
    title: "Qualités chrétiennes",
    subtitle: "Le fruit de l'esprit",
    description:
      "Développer l'amour, la joie, la paix et les autres qualités que Jéhovah apprécie.",
    scriptureHighlight:
      "« Le fruit de l'esprit est l'amour, la joie, la paix… »",
    scriptureRef: "Galates 5:22, 23",
    articleIds: ["qualites-wt-imiter", "qualites-awake-personne"],
    readings: [
      reading("qua-r1", "Cultiver le fruit de l'esprit", [
        "Les qualités du fruit de l'esprit ne naissent pas du seul effort humain : elles se développent quand nous laissons l'esprit de Jéhovah nous guider par l'étude et l'application de sa Parole.",
        "Chaque qualité a un impact concret : la patience dans la famille, la bonté au travail, la maîtrise de soi face aux tentations.",
      ], ["Galates 5:22, 23", "Colossiens 3:12, 13"]),
    ],
    miniGames: [
      {
        id: "qualites-quiz",
        title: "Le fruit de l'esprit",
        description: "Reconnaissez les qualités",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-qua-q1",
            "Lequel fait partie du fruit de l'esprit ?",
            ["Bonté", "Jalousie", "Égoïsme", "Rancune"],
            0,
            "Galates 5 énumère les qualités du fruit de l'esprit.",
            "Galates 5:22, 23"
          ),
          quiz(
            "et-qua-q2",
            "Comment l'amour se manifeste-t-il selon 1 Corinthiens 13 ?",
            ["Il est patient et ne garde pas rancune", "Il est arrogant", "Il cherche son intérêt", "Il est irritable"],
            0,
            "L'amour divin est désintéressé.",
            "1 Corinthiens 13:4, 5"
          ),
          quiz(
            "et-qua-q3",
            "Que dit Jésus sur la paix ?",
            ["Il laisse sa paix à ses disciples", "La paix est impossible", "Seuls les rois l'ont", "Elle vient des hommes"],
            0,
            "Jésus promet une paix différente de celle du monde.",
            "Jean 14:27"
          ),
        ],
      },
      {
        id: "qualites-vf",
        title: "Vrai ou faux — Qualités",
        description: "5 affirmations",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-qua-tf1",
            "La colère fait partie du fruit de l'esprit.",
            false,
            "La colère n'est pas listée parmi ces qualités.",
            "Galates 5:22, 23"
          ),
          tf(
            "et-qua-tf2",
            "La maîtrise de soi est une qualité du fruit de l'esprit.",
            true,
            "Elle aide à résister aux mauvaises inclinations.",
            "Galates 5:23"
          ),
          tf(
            "et-qua-tf3",
            "L'amour de Dieu pousse à aimer notre prochain.",
            true,
            "Les deux commandements principaux sont liés.",
            "Matthieu 22:37-39"
          ),
        ],
      },
      {
        id: "qualites-verset",
        title: "Versets sur les qualités",
        description: "Complétez Galates et 1 Corinthiens",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-qua-v1",
            "Le fruit de l'esprit est l'amour, la joie, la ___, la patience…",
            "paix",
            ["paix", "richesse", "gloire", "peur"],
            "Galates 5:22"
          ),
          verset(
            "et-qua-v2",
            "L'amour est ___. Il est plein de bonté.",
            "patient",
            ["patient", "orgueilleux", "égoïste", "bruyant"],
            "1 Corinthiens 13:4"
          ),
        ],
      },
    ],
  },
  {
    id: "jesus",
    title: "Jésus, le Fils de Dieu",
    subtitle: "Sa vie et son enseignement",
    description:
      "Méditez sur la personne et le rôle de Jésus Christ selon les Écritures.",
    scriptureHighlight: "« Je suis le chemin, la vérité et la vie. »",
    scriptureRef: "Jean 14:6",
    articleIds: ["jesus-wt-qui", "jesus-awake-chef"],
    readings: [
      reading("jes-r1", "Pourquoi Jésus est venu sur terre", [
        "Jésus n'est pas venu pour établir un royaume politique temporaire. Sa mission principale était de donner sa vie en rançon pour que nous puissions recevoir le pardon et la vie éternelle.",
        "Il a aussi enseigné la vérité sur son Père, guéri les malades par compassion et montré comment vivre selon les normes du Royaume.",
      ], ["Matthieu 20:28", "Jean 18:37"]),
      reading("jes-r2", "Imiter le modèle de Jésus", [
        "Jésus était humble, obéissant et zélé pour la maison de son Père. Il a prié, étudié les Écritures et fait la volonté de Jéhovah jusqu'au sacrifice suprême.",
        "Nous ne pouvons pas imiter sa perfection divine, mais nous pouvons copier son obéissance, son amour et son endurance.",
      ], ["1 Pierre 2:21", "Philippiens 2:5-8"]),
    ],
    miniGames: [
      {
        id: "jesus-quiz",
        title: "Qui est Jésus ?",
        description: "Questions sur sa mission",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-jes-q1",
            "Pourquoi Jésus est-il venu sur terre ?",
            ["Pour donner sa vie en rançon", "Pour devenir roi politique", "Pour détruire Rome", "Pour écrire un livre"],
            0,
            "Le Fils de l'homme est venu donner sa vie en rançon.",
            "Matthieu 20:28"
          ),
          quiz(
            "et-jes-q2",
            "Que déclare la voix des cieux au baptême de Jésus ?",
            ["« Celui-ci est mon Fils bien-aimé »", "« Sois roi »", "« Retourne à Nazareth »", "« Tu es un prophète ordinaire »"],
            0,
            "Dieu confirme publiquement qui est Jésus.",
            "Matthieu 3:17"
          ),
          quiz(
            "et-jes-q3",
            "Quel enseignement Jésus donne-t-il dans le Sermon sur le montagne ?",
            ["Les Béatitudes", "Les lois romaines", "Comment devenir riche", "Comment éviter la prière"],
            0,
            "Jésus enseigne qui sont heureux aux yeux de Dieu.",
            "Matthieu 5:3-12"
          ),
        ],
      },
      {
        id: "jesus-vf",
        title: "Vrai ou faux — Jésus",
        description: "Affirmations bibliques",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-jes-tf1",
            "Jésus a enseigné ses disciples à prier au nom de Jéhovah.",
            true,
            "Il leur a donné un modèle de prière.",
            "Matthieu 6:9"
          ),
          tf(
            "et-jes-tf2",
            "Jésus a refusé de guérir les malades.",
            false,
            "Il ressentait de la compassion et guérissait.",
            "Matthieu 14:14"
          ),
          tf(
            "et-jes-tf3",
            "Jésus est ressuscité après sa mort sur le bois.",
            true,
            "Les témoins oculaires l'ont vu vivant.",
            "1 Corinthiens 15:3-6"
          ),
        ],
      },
      {
        id: "jesus-verset",
        title: "Paroles de Jésus",
        description: "Complétez ses enseignements",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-jes-v1",
            "Heureux ceux qui ont faim et soif de la ___, car ils seront rassasiés.",
            "justice",
            ["justice", "richesse", "vengeance", "gloire"],
            "Matthieu 5:6"
          ),
          verset(
            "et-jes-v2",
            "Je suis le chemin, la ___ et la vie.",
            "vérité",
            ["vérité", "richesse", "loi", "force"],
            "Jean 14:6"
          ),
        ],
      },
    ],
  },
  {
    id: "famille",
    title: "Famille & culte",
    subtitle: "Grandir ensemble spirituellement",
    description:
      "Le culte familial et l'harmonie à la maison renforcent notre foi.",
    scriptureHighlight:
      "« Que toute la famille serve Jéhovah. »",
    scriptureRef: "Josué 24:15",
    articleIds: ["famille-wt-renforcer", "famille-awake-enfants"],
    readings: [
      reading("fam-r1", "Le culte familial — un moment précieux", [
        "S'asseoir régulièrement en famille pour lire et discuter de la Bible crée des souvenirs spirituels durables. Les enfants retiennent ce qu'ils vivent, pas seulement ce qu'on leur dit.",
        "Le culte familial peut être simple : un passage biblique, une pensée du jour, une prière ensemble. L'important est la régularité et la sincérité.",
      ], ["Deutéronome 6:6, 7", "Josué 24:15"]),
    ],
    miniGames: [
      {
        id: "famille-quiz",
        title: "Une famille qui sert Jéhovah",
        description: "Principes bibliques",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-fam-q1",
            "Que déclare Josué à Israël ?",
            ["« Moi et ma maison, nous servirons Jéhovah »", "« Servons d'autres dieux »", "« Fuyons »", "« Restons neutres »"],
            0,
            "Josué prend une décision claire pour sa famille.",
            "Josué 24:15"
          ),
          quiz(
            "et-fam-q2",
            "Comment les enfants sont-ils encouragés à agir ?",
            ["Obéir à leurs parents dans l'union avec le Seigneur", "Ignorer leurs parents", "Ne jamais écouter", "Obéir seulement à l'école"],
            0,
            "L'obéissance honore Jéhovah.",
            "Éphésiens 6:1"
          ),
          quiz(
            "et-fam-q3",
            "Quel rôle les parents ont-ils selon la Bible ?",
            ["Instruire leurs enfants sur Jéhovah", "Les laisser sans guide", "Éviter d'en parler", "Déléguer tout à l'école"],
            0,
            "Les parents enseignent les voies de Jéhovah.",
            "Deutéronome 6:6, 7"
          ),
        ],
      },
      {
        id: "famille-vf",
        title: "Vrai ou faux — Famille",
        description: "Idées reçues",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-fam-tf1",
            "Le culte familial peut inclure la lecture et l'étude de la Bible ensemble.",
            true,
            "La famille peut s'asseoir pour étudier la Parole.",
            "Deutéronome 6:7"
          ),
          tf(
            "et-fam-tf2",
            "La Bible encourage les enfants à mépriser leurs parents.",
            false,
            "Honorer père et mère est un commandement.",
            "Éphésiens 6:2"
          ),
          tf(
            "et-fam-tf3",
            "L'amour entre époux chrétiens reflète l'amour du Christ.",
            true,
            "L'époux aime sa femme comme Christ aime l'assemblée.",
            "Éphésiens 5:25"
          ),
        ],
      },
      {
        id: "famille-verset",
        title: "Versets familiaux",
        description: "Complétez les passages",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-fam-v1",
            "Moi et ma ___, nous servirons Jéhovah.",
            "maison",
            ["maison", "ville", "armée", "richesse"],
            "Josué 24:15"
          ),
          verset(
            "et-fam-v2",
            "Enfants, soyez ___ à vos parents en union avec le Seigneur.",
            "obéissants",
            ["obéissants", "indifférents", "fiers", "lointains"],
            "Éphésiens 6:1"
          ),
        ],
      },
    ],
  },
  {
    id: "service",
    title: "Service & prédication",
    subtitle: "Partager la bonne nouvelle",
    description:
      "Jésus a confié à ses disciples la mission de faire des disciples. Méditez sur notre service.",
    scriptureHighlight:
      "« Cette bonne nouvelle du Royaume sera prêchée… »",
    scriptureRef: "Matthieu 24:14",
    articleIds: ["service-wt-pourquoi", "service-awake-mondiale"],
    readings: [
      reading("ser-r1", "Une mission pour tous", [
        "Jésus a confié à ses disciples la responsabilité de faire des disciples. Aujourd'hui, des millions de Témoins de Jéhovah participent à cette œuvre dans plus de 240 pays et territoires.",
        "Le service n'est pas une corvée : c'est une expression d'amour pour Jéhovah et pour le prochain. Chacun peut y contribuer selon ses capacités.",
      ], ["Matthieu 28:19, 20", "Matthieu 24:14"]),
    ],
    miniGames: [
      {
        id: "service-quiz",
        title: "La grande commission",
        description: "Notre mission",
        type: "quiz",
        estimatedMinutes: 3,
        quizQuestions: [
          quiz(
            "et-ser-q1",
            "Que dit Matthieu 28:19, 20 aux disciples ?",
            ["Faire des disciples et enseigner", "Rester silencieux", "Construire un temple", "Fuir le monde"],
            0,
            "Jésus leur donne une mission claire.",
            "Matthieu 28:19, 20"
          ),
          quiz(
            "et-ser-q2",
            "Qui peut participer à la prédication ?",
            ["Tous les serviteurs de Jéhovah, jeunes et adultes", "Seulement les anciens", "Personne aujourd'hui", "Seulement les hommes riches"],
            0,
            "Le service est ouvert à ceux qui aiment Jéhovah.",
            "Psaume 148:12, 13"
          ),
          quiz(
            "et-ser-q3",
            "Comment Jésus a-t-il prêché ?",
            ["De maison en maison et en public", "Uniquement par écrit", "Jamais en parlant", "Seulement aux rois"],
            0,
            "Jésus est le modèle du proclamateur.",
            "Luc 8:1"
          ),
        ],
      },
      {
        id: "service-vf",
        title: "Vrai ou faux — Service",
        description: "Test rapide",
        type: "vraifaux",
        estimatedMinutes: 2,
        trueFalseQuestions: [
          tf(
            "et-ser-tf1",
            "La bonne nouvelle du Royaume doit être prêchée dans le monde entier.",
            true,
            "Jésus a annoncé cette prophétie.",
            "Matthieu 24:14"
          ),
          tf(
            "et-ser-tf2",
            "Prêcher signifie seulement distribuer des tracts sans parler.",
            false,
            "Jésus enseignait et conversait avec les gens.",
            "Actes 20:20"
          ),
          tf(
            "et-ser-tf3",
            "Pierre et Jean ont continué à parler de Jésus malgré la pression.",
            true,
            "Ils obéissaient à Dieu plutôt qu'aux hommes.",
            "Actes 5:29"
          ),
        ],
      },
      {
        id: "service-verset",
        title: "Versets sur le service",
        description: "Complétez les passages",
        type: "verset",
        estimatedMinutes: 2,
        verseQuestions: [
          verset(
            "et-ser-v1",
            "Cette bonne nouvelle du Royaume sera prêchée dans toute la terre habitée, en témoignage à toutes les ___.",
            "nations",
            ["nations", "montagnes", "mers", "villes seulement"],
            "Matthieu 24:14"
          ),
          verset(
            "et-ser-v2",
            "Nous obéissons à Dieu comme chef, plutôt qu'aux ___.",
            "hommes",
            ["hommes", "anges", "lois", "prophètes"],
            "Actes 5:29"
          ),
        ],
      },
    ],
  },
];

export const STUDY_THEMES: StudyTheme[] = [
  ...BASE_STUDY_THEMES,
  ...EXTENDED_STUDY_THEMES,
  ...ROLE_STUDY_THEMES,
];

export function getThemeArticles(themeId: string) {
  const theme = getStudyTheme(themeId);
  if (!theme?.articleIds) return getArticlesForTheme(themeId);
  return theme.articleIds
    .map((id) => getStudyArticle(id))
    .filter((a): a is NonNullable<typeof a> => a != null);
}

export function getStudyThemeIds(): string[] {
  return STUDY_THEMES.map((t) => t.id);
}

const STUDY_THEME_ALIASES: Record<string, string> = {
  prophéties: "propheties",
};

const STUDY_GAME_ALIASES: Record<string, string> = {
  "prophéties-quiz": "propheties-quiz",
  "prophéties-vf": "propheties-vf",
  "prophéties-verset": "propheties-verset",
};

export function normalizeStudyThemeId(id: string): string {
  try {
    const decoded = decodeURIComponent(id);
    return STUDY_THEME_ALIASES[decoded] ?? decoded;
  } catch {
    return STUDY_THEME_ALIASES[id] ?? id;
  }
}

export function normalizeStudyGameId(gameId: string): string {
  try {
    const decoded = decodeURIComponent(gameId);
    return STUDY_GAME_ALIASES[decoded] ?? decoded;
  } catch {
    return STUDY_GAME_ALIASES[gameId] ?? gameId;
  }
}

export function getStudyTheme(id: string): StudyTheme | undefined {
  const themeId = normalizeStudyThemeId(id);
  return STUDY_THEMES.find((t) => t.id === themeId);
}

export function getStudyMiniGame(themeId: string, gameId: string): StudyMiniGame | undefined {
  const theme = normalizeStudyThemeId(themeId);
  const game = normalizeStudyGameId(gameId);
  return STUDY_THEMES.find((t) => t.id === theme)?.miniGames.find((g) => g.id === game);
}

export function getStudyGameParams(): { themeId: string; gameId: string }[] {
  return STUDY_THEMES.flatMap((t) =>
    t.miniGames.map((g) => ({ themeId: t.id, gameId: g.id }))
  );
}
