import type { StudyThemeGuide } from "./types";
import { v } from "./helpers";

export const ROLE_THEME_GUIDES: Record<string, StudyThemeGuide> = {
  "decouvrir-bible": {
    introParagraphs: [
      "Vous débutez dans l'étude biblique ? Ce pôle est conçu pour vos premiers pas. La Bible n'est pas un livre comme les autres : c'est la Parole de Jéhovah, inspirée par lui pour nous guider dans toutes les circonstances de la vie.",
      "Elle répond aux grandes questions — d'où venons-nous ? pourquoi souffrons-nous ? que nous réserve l'avenir ? Commencer par de courts passages, comme les récits de la Genèse ou l'évangile de Marc, aide à prendre l'habitude sans se décourager.",
      "Des lectures simples, des articles accessibles et des mini-jeux vous accompagnent pour découvrir qui est Jéhovah, pourquoi la Bible est fiable et comment commencer une étude régulière.",
    ],
    whyTheme:
      "Jean 17:3 dit que la vie éternelle consiste à connaître Jéhovah et Jésus Christ. 2 Timothée 3:16 affirme que toute Écriture est inspirée de Dieu et utile. Sans bases solides, il est difficile de progresser. Ce pôle pose les fondations avant d'explorer des thèmes plus profonds.",
    learningGoals: [
      "Comprendre pourquoi la Bible mérite d'être lue et étudiée",
      "Découvrir qui est Jéhovah et ce que signifie son nom",
      "Apprendre des méthodes simples pour commencer l'étude",
      "Prendre confiance : on n'a pas besoin de tout savoir d'un coup",
      "Mémoriser des versets de base pour débuter",
    ],
    keyVerses: [
      v("Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.", "Psaume 119:105"),
      v("Toute Écriture est inspirée de Dieu et utile pour enseigner, pour réprimander, pour corriger, pour former.", "2 Timothée 3:16"),
      v("Cette signifie la vie éternelle : qu'ils te connaissent, toi, le seul vrai Dieu, et celui que tu as envoyé, Jésus Christ.", "Jean 17:3"),
      v("Heureux ceux qui écoutent la parole de Dieu et qui la gardent !", "Luc 11:28"),
      v("Cette bonne nouvelle du Royaume sera prêchée dans toute la terre habitée.", "Matthieu 24:14"),
      v("Médite jour et nuit sur le livre de la loi.", "Josué 1:8"),
    ],
    meditationTips: [
      "Commencez par 10 minutes par jour — régularité plutôt que quantité.",
      "Choisissez un livre court (Marc, Jean) ou des récits de Genèse.",
      "Notez une seule idée par séance dans un carnet.",
      "Priez brièvement avant de lire : « Aide-moi à te connaître, Jéhovah. »",
    ],
    howToAdvance: [
      { title: "Méditez sur Psaume 119:105", detail: "Comment la Bible peut-elle éclairer votre chemin aujourd'hui ?" },
      { title: "Lisez les méditations", detail: "Pourquoi lire la Bible, et comment étudier efficacement." },
      { title: "Étudiez les articles", detail: "Premiers pas WT et brochure d'introduction à la Bible." },
      { title: "Jouez aux mini-jeux", detail: "Quiz, vrai/faux et versets pour débuter." },
    ],
    relatedThemes: ["bible", "jesus", "royaume"],
  },

  predication: {
    introParagraphs: [
      "La prédication est au cœur de la vie chrétienne. Jésus et les apôtres conversaient avec les gens là où ils se trouvaient — marchés, rives, foyers — en adaptant le message à chaque auditeur. Ce pôle renforce votre confiance pour parler avec courage et tact.",
      "Notre but n'est pas de « gagner un débat », mais d'éveiller l'intérêt pour Jéhovah et son Royaume. Un ton calme et respectueux ouvre des portes. Colossiens 4:6 recommande que notre parole soit toujours accompagnée de grâce.",
      "Préparer une phrase d'introduction, une publication et une question simple réduit le stress et libère l'esprit pour écouter vraiment l'interlocuteur.",
    ],
    whyTheme:
      "Matthieu 24:14 identifie la prédication mondiale comme un signe des derniers jours. Philippe a expliqué les Écritures à l'eunuque éthiopien (Actes 8:35). Jacques 1:19 rappelle d'être prompt à écouter, lent à parler. Étudier la prédication améliore notre efficacité et notre joie dans le service.",
    learningGoals: [
      "Parler avec sincérité et adaptabilité",
      "Préparer des introductions et des questions simples",
      "Écouter l'interlocuteur avant de répondre",
      "Persévérer avec joie malgré les refus",
      "Mémoriser des versets pour le ministère",
    ],
    keyVerses: [
      v("Rendez témoignage du Royaume à toutes les nations.", "Matthieu 24:14"),
      v("Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel.", "Colossiens 4:6"),
      v("Nous ne pouvons pas nous empêcher de parler de ce que nous avons vu et entendu.", "Actes 4:20"),
      v("Il leur expliquait et démontrait que le Christ devait souffrir et ressusciter.", "Actes 17:3"),
      v("Si le lieu ou la maison ne vous accueille pas, sortez de là et secouez la poussière de vos pieds.", "Matthieu 10:14"),
      v("Soyez prompt à écouter, lent à parler, lent à se mettre en colère.", "Jacques 1:19"),
      v("Philippe courut vers lui et entendit qu'il lisait le prophète Ésaïe.", "Actes 8:30"),
    ],
    meditationTips: [
      "Préparez une introduction de 20 secondes pour votre prochaine sortie.",
      "Après le service, notez une conversation qui s'est bien passée et une leçon apprise.",
      "Pratiquez une question ouverte avec un ami de la congrégation.",
      "Priez pour le courage et le tact avant chaque sortie (Philippiens 4:13).",
    ],
    howToAdvance: [
      { title: "Méditez sur Matthieu 24:14", detail: "Comment votre service contribue-t-il à ce signe mondial ?" },
      { title: "Lisez les méditations", detail: "Parler avec sincérité, et persévérer avec joie." },
      { title: "Étudiez les articles", detail: "Articles sur le courage et les conversations naturelles." },
      { title: "Jouez aux mini-jeux", detail: "Quiz pratiques sur le ministère de la prédication." },
    ],
    relatedThemes: ["service", "pionnier", "royaume"],
  },

  pionnier: {
    introParagraphs: [
      "Le service de pionnier demande plus de temps consacré à la prédication et à l'étude. Ce n'est pas une course à la performance : Jéhovah voit nos efforts, nos limites et notre motivation. Paul travaillait, prêchait et gardait sa joie parce qu'il savait pourquoi il servait.",
      "Organiser ses journées — quels jours pour le service, l'étude, la famille — réduit le stress. Imiter Jésus qui se levait tôt pour prier (Marc 1:35) montre que la force vient d'abord de Jéhovah, pas de notre seule volonté.",
      "Ce pôle aide à gérer ses heures, garder la joie et approfondir sa relation avec Jéhovah dans un service intensifié.",
    ],
    whyTheme:
      "Galates 6:9 conseille de ne pas se lasser de faire le bien. 1 Timothée 4:16 dit que persévérer dans le ministère profite à tous. Élie aussi a connu un moment de découragement (1 Rois 19:4) — l'épuisement existe, mais Jéhovah restaure. Étudier ce thème aide à servir avec endurance et sagesse.",
    learningGoals: [
      "Organiser ses journées pour équilibrer service, étude et repos",
      "Garder la joie sans viser la performance",
      "Reconnaître les signes d'épuisement et demander de l'aide",
      "Imiter Jésus dans la prière et la planification",
      "Mémoriser des versets pour les pionniers",
    ],
    keyVerses: [
      v("Ne vous lassez pas de faire le bien ; car nous moissonnerons au temps voulu si nous ne nous lassons pas.", "Galates 6:9"),
      v("De bon matin, pendant qu'il faisait encore très sombre, il se leva et sortit de la maison pour aller dans un endroit solitaire et prier.", "Marc 1:35"),
      v("À cause de la grande activité, ne cessez pas de prier.", "Luc 18:1"),
      v("Tout ce que vous faites, faites-le de tout votre cœur, comme pour Jéhovah et non pour des hommes.", "Colossiens 3:23"),
      v("Faites bien attention à vous-même et à votre enseignement. Persévérez dans ces choses.", "1 Timothée 4:16"),
      v("Achetez du temps opportun, car les jours sont mauvais.", "Éphésiens 5:16"),
      v("Je peux tout par celui qui me donne la force.", "Philippiens 4:13"),
    ],
    meditationTips: [
      "Planifiez votre semaine la veille du dimanche — heures de service, pauses, étude.",
      "Alternez types de service (visites, prédication, lettres) pour garder la fraîcheur.",
      "Si vous êtes épuisé, parlez-en à un ancien — demander de l'aide est sage.",
      "Commencez chaque journée de service par une prière comme Jésus (Marc 1:35).",
    ],
    howToAdvance: [
      { title: "Méditez sur Galates 6:9", detail: "Comment éviter de se lasser dans le service intensif ?" },
      { title: "Lisez les méditations", detail: "Garder la joie, et organiser ses journées." },
      { title: "Étudiez les articles", detail: "Articles sur la joie du pionnier et l'organisation." },
      { title: "Jouez aux mini-jeux", detail: "Quiz, vrai/faux et versets pour pionniers." },
    ],
    relatedThemes: ["service", "predication", "endurance"],
  },

  "ecole-biblique": {
    introParagraphs: [
      "L'école biblique est pensée pour les 7-12 ans — ou pour étudier en famille avec des enfants. La Bible regorge de jeunes courageux : Samuel, David face à Goliath, Josias roi à 8 ans, Jésus à 12 ans au temple. Leurs exemples montrent qu'on n'est jamais trop jeune pour servir Dieu.",
      "Chaque histoire enseigne une qualité : obéissance, courage, honnêteté, amour pour Jéhovah. Le culte familial peut être court : lire un récit, poser une question simple, prier ensemble.",
      "Les parents n'ont pas besoin de tout savoir : découvrir la Bible ensemble est une belle aventure qui crée des liens durables.",
    ],
    whyTheme:
      "Matthieu 19:14 montre que Jésus accueillait les enfants. Jérémie 31:34 promet que le petit et le grand connaîtront Jéhovah. Deutéronome 6:7 charge les parents d'instruire leurs enfants. Former les jeunes dès le début est un investissement spirituel précieux.",
    learningGoals: [
      "Découvrir des héros bibliques jeunes inspirants",
      "Apprendre des qualités chrétiennes par les récits",
      "Participer au culte familial de façon active",
      "Comprendre que Jéhovah aime les enfants",
      "Mémoriser des versets simples",
    ],
    keyVerses: [
      v("Jésus progresse en sagesse, en taille et en grâce auprès de Dieu et des hommes.", "Luc 2:52"),
      v("Parle, car ton serviteur écoute.", "1 Samuel 3:10"),
      v("Enfants, obéissez à vos parents en union avec le Seigneur, car c'est ce qui est juste.", "Éphésiens 6:1"),
      v("Laissez les petits enfants venir à moi ; ne les empêchez pas.", "Marc 10:14"),
      v("Que le petit et le grand connaissent Jéhovah.", "Jérémie 31:34"),
      v("Noé fit exactement ce que Dieu lui avait commandé.", "Genèse 6:22"),
    ],
    meditationTips: [
      "Lisez un récit biblique en famille et demandez : « Qu'a fait ce personnage qui plaît à Jéhovah ? »",
      "Dessinez ou racontez l'histoire après la lecture pour les plus jeunes.",
      "Apprenez un verset par cœur ensemble — un mot par jour.",
      "Priez en incluant les préoccupations des enfants.",
    ],
    howToAdvance: [
      { title: "Méditez sur Luc 2:52", detail: "Comment Jésus a-t-il progressé quand il était jeune ?" },
      { title: "Lisez les méditations", detail: "Des héros pour nous inspirer, et étudier en famille." },
      { title: "Étudiez les articles", detail: "Articles sur les enfants et la vie de famille." },
      { title: "Jouez aux mini-jeux", detail: "Quiz amusants sur les héros bibliques jeunes." },
    ],
    relatedThemes: ["famille", "jeunesse", "qualites"],
  },

  "vie-chretienne": {
    introParagraphs: [
      "Être chrétien ne se limite pas aux réunions du week-end. Éphésiens 5:1 nous invite à être imitateurs de Dieu « comme des enfants bien-aimés » — à l'école, au travail, en ligne, dans nos amitiés et quand personne ne nous regarde.",
      "Notre conduite parle autant que nos paroles. Ponctualité, honnêteté, respect des règles et gentillesse sont des témoignages silencieux. Colossiens 3:23 dit de travailler de tout cœur, comme pour Jéhovah.",
      "Ce pôle aborde les défis concrets : pression des pairs, écrans et distractions, choix moraux — avec des principes bibliques applicables dès aujourd'hui.",
    ],
    whyTheme:
      "Luc 9:23 montre que suivre Jésus est un engagement quotidien. 1 Pierre 2:12 dit que notre bonne conduite peut inciter les gens à glorifier Dieu. Matthieu 7:12 — la règle d'or — guide nos interactions. Vivre en chrétien au quotidien rend notre foi crédible.",
    learningGoals: [
      "Appliquer la Bible à l'école, au travail et en ligne",
      "Gérer le temps et les distractions (écrans, réseaux)",
      "Résister à la pression des pairs avec sagesse",
      "Devenir un modèle en conduite (1 Timothée 4:12)",
      "Mémoriser des versets pour le quotidien",
    ],
    keyVerses: [
      v("Soyez imitateurs de Dieu, comme des enfants bien-aimés.", "Éphésiens 5:1"),
      v("Tout ce que vous faites, faites-le de tout votre cœur, comme pour Jéhovah.", "Colossiens 3:23"),
      v("Tout ce que vous voudriez que les hommes vous fassent, faites-le de même pour eux.", "Matthieu 7:12"),
      v("Cherchez d'abord le royaume et sa justice.", "Matthieu 6:33"),
      v("Que personne ne méprise ta jeunesse, mais sois un modèle pour les croyants.", "1 Timothée 4:12"),
      v("Achetez du temps opportun, car les jours sont mauvais.", "Éphésiens 5:16"),
      v("Les mauvaises compagnies corrompent les bonnes habitudes.", "1 Corinthiens 15:33"),
    ],
    meditationTips: [
      "Commencez la journée par une prière courte et un verset — cela donne un cap spirituel.",
      "Fixez une limite d'écran et un créneau d'étude protégé.",
      "Avant un choix difficile, demandez : « Que ferait Jésus ? Que dit la Bible ? »",
      "Notez une situation cette semaine où vous pouvez appliquer Matthieu 7:12.",
    ],
    howToAdvance: [
      { title: "Méditez sur Éphésiens 5:1", detail: "Que signifie imiter Dieu dans votre quotidien ?" },
      { title: "Lisez les méditations", detail: "Être chrétien à l'école ou au travail, et gérer les distractions." },
      { title: "Étudiez les articles", detail: "Articles sur la vie chrétienne quotidienne." },
      { title: "Jouez aux mini-jeux", detail: "Quiz sur les choix du quotidien." },
    ],
    relatedThemes: ["jeunesse", "integrite", "qualites"],
  },
};
