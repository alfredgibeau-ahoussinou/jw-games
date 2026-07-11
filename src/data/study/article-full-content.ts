import type { StudyArticleBlock } from "@/types/study";
import { DEFAULT_STUDY_QUESTIONS, h2, h3, note, p, q, sc, ul } from "./article-builder";
import { scriptureSnippet } from "./scripture-snippets";
import { FAMILLE_ARTICLES } from "./content/famille";
import { JEUNESSE_ARTICLES } from "./content/jeunesse";
import { JESUS_ARTICLES } from "./content/jesus";
import { CONFIANCE_ARTICLES } from "./content/confiance";
import { INTEGRITE_ARTICLES } from "./content/integrite";
import { ROYAUME_ARTICLES } from "./content/royaume";
import { SERVICE_ARTICLES } from "./content/service";
import { EXTENDED_ARTICLES } from "./content/extended-articles";

type ThemeArticleMap = Record<string, { blocks: StudyArticleBlock[]; questions: string[] }>;

function mergeThemeArticles(...maps: ThemeArticleMap[]) {
  const blocks: Record<string, StudyArticleBlock[]> = {};
  const questions: Record<string, string[]> = {};
  for (const map of maps) {
    for (const [id, entry] of Object.entries(map)) {
      blocks[id] = entry.blocks;
      questions[id] = entry.questions;
    }
  }
  return { blocks, questions };
}

const THEME_CONTENT = mergeThemeArticles(
  ROYAUME_ARTICLES,
  SERVICE_ARTICLES,
  FAMILLE_ARTICLES,
  JEUNESSE_ARTICLES,
  JESUS_ARTICLES,
  CONFIANCE_ARTICLES,
  INTEGRITE_ARTICLES,
  EXTENDED_ARTICLES
);

/**
 * Contenu structuré pour les articles d'étude — format publication
 * (sections, Écritures citées, questions de méditation).
 * Texte original fondé sur la Bible, pour JW Games.
 */
export const FULL_ARTICLE_BLOCKS: Record<string, StudyArticleBlock[]> = {
  ...THEME_CONTENT.blocks,
  "priere-wt-ecoute": [
    note(
      "Dans cet article",
      "Nous verrons pourquoi Jéhovah écoute nos prières, comment Jésus nous a montré l'exemple, et comment garder confiance quand la réponse semble tarder."
    ),
    h2("Un Père qui entend vraiment"),
    p(
      "La prière est le moyen que Jéhovah nous a donné pour communiquer avec lui. Contrairement à une idole muette, notre Père céleste entend, comprend et répond — parfois d'une manière que nous n'attendions pas, mais toujours selon sa volonté juste."
    ),
    p(
      "Beaucoup se demandent si Dieu les écoute vraiment. La Bible montre que Jéhovah n'est ni distant ni indifférent. Il connaît nos pensées, nos besoins et nos larmes. Il agit au moment qu'il juge bon, selon sa sagesse parfaite."
    ),
    sc(
      "« Continuez de prier, veillez en cela avec des actions de grâces. »",
      "Colossiens 4:2"
    ),
    h2("Jésus nous apprend à prier"),
    p(
      "Jésus a enseigné que nous pouvons parler à Jéhovah comme à un Père aimant. Nous n'avons pas besoin de formules compliquées ni de répéter les mêmes mots sans cesse. Ce qui compte, c'est la sincérité et la foi."
    ),
    p(
      "Le modèle de prière qu'il a donné — louange, demandes liées au Royaume, nos besoins quotidiens, pardon et aide face à la tentation — nous aide à structurer nos conversations avec Jéhovah sans les rendre mécaniques."
    ),
    sc(
      "« Vous devez donc prier comme ceci : “Notre Père qui es aux cieux, que ton nom soit sanctifié.” »",
      "Matthieu 6:9"
    ),
    h3("Des exemples qui nous encouragent"),
    ul([
      "Anne, en détresse, a prié avec tant de ferveur que le prêtre la crut ivre — Jéhovah l'a exaucée.",
      "Élie a prié plusieurs fois pour la pluie jusqu'à ce qu'elle vienne.",
      "Les disciples réunis après l'ascension ont prié collectivement — l'Esprit saint est venu.",
    ]),
    q("Quel exemple biblique de prière vous encourage le plus personnellement ?"),
    h2("Quand la réponse tarde"),
    p(
      "Si une réponse tarde, cela ne signifie pas que Jéhovah nous ignore. Il connaît nos besoins mieux que nous. Parfois il répond « oui », parfois « pas encore », parfois « j'ai quelque chose de meilleur pour toi »."
    ),
    p(
      "Continuer à prier, à étudier sa Parole et à appliquer ses conseils nous aide à aligner nos désirs sur les siens. La prière change aussi notre état d'esprit : elle nous calme, nous éclaire et nous fortifie pour agir avec sagesse."
    ),
    sc(
      "« Voici la confiance que nous avons en lui : si nous demandons quoi que ce soit selon sa volonté, il nous écoute. »",
      "1 Jean 5:14"
    ),
    q("Comment pouvez-vous remarquer que Jéhovah a répondu à l'une de vos prières récemment ?"),
    h2("Application — cultiver une vie de prière"),
    p(
      "Une vie de prière régulière ne se construit pas du jour au lendemain. Commencez par un moment fixe — au réveil, avant un repas, le soir — même court. Jéhovah valorise la constance et la sincérité plus que la durée."
    ),
    p(
      "Tenir une simple liste de sujets de prière aide à ne pas oublier ceux qui comptent pour nous : famille, congrégation, dirigeants, personnes que nous côtoyons dans le service. Cocher ce pour quoi nous avons vu une réponse renforce notre confiance."
    ),
    ul([
      "Choisir un endroit calme où vous pouvez parler à Jéhovah sans interruption.",
      "Alterner louange, demandes pour le Royaume et besoins personnels.",
      "Prier aussi pour les autres — amis, proches, collègues de service.",
    ]),
    h2("Méditation personnelle"),
    q("Quelle prière souhaitez-vous approfondir cette semaine, et à quel moment de la journée ?"),
  ],
  "priere-awake-efficace": [
    note(
      "Dans cet article",
      "Conseils pratiques pour rendre la prière plus naturelle et plus utile : moment calme, demandes précises, actions de grâces et intercession pour les autres."
    ),
    h2("Préparer son cœur"),
    p(
      "Une prière efficace commence souvent par un moment calme. Éteindre les distractions, prendre quelques secondes pour se rappeler à qui nous parlons, puis ouvrir notre cœur avec honnêteté."
    ),
    p(
      "Il n'est pas nécessaire d'utiliser un langage compliqué. Jéhovah voit nos motivations. Parler simplement, comme à un Père qui nous connaît, suffit."
    ),
    sc(
      "« Ne vous inquiétez de rien, mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, accompagnées de actions de grâces. »",
      "Philippiens 4:6"
    ),
    h2("Être précis dans ses demandes"),
    p(
      "Être spécifique dans nos demandes nous aide à remarquer les réponses de Jéhovah. Au lieu de demander vaguement « aide-moi », nous pouvons expliquer notre situation et demander sagesse, courage ou patience pour une épreuve précise."
    ),
    p(
      "Tenir une courte liste de sujets de prière — famille, service, études, santé — peut structurer notre temps sans le rigidifier."
    ),
    h3("Équilibrer demandes et remerciements"),
    ul([
      "Remercier pour la vie, la nourriture, la famille et la congrégation.",
      "Louer Jéhovah pour ses qualités et ses promesses.",
      "Prier ensuite pour nos besoins et ceux des autres.",
    ]),
    h2("Prier pour les autres"),
    p(
      "Intercéder pour les autres élargit notre amour et nous rapproche du Dieu qui « donne à tous libéralement et sans reprocher ». Prier pour un proche malade, un collègue de service en difficulté ou un dirigeant de la congrégation nous sort de nos propres préoccupations."
    ),
    p(
      "Jésus a prié pour ses disciples — y compris pour nous, « afin qu'ils soient unis ». Paul mentionnait souvent par la prière ceux qu'il servait. Suivre leur exemple enrichit nos relations et notre service."
    ),
    sc(
      "« Je vous exhorte, frères, par le nom de notre Seigneur Jésus Christ, à parler tous d'une même manière. »",
      "1 Corinthiens 1:10"
    ),
    h2("Méditation et application"),
    q("Quelle habitude de prière allez-vous renforcer cette semaine ?"),
    q("Pour qui pourriez-vous prier de façon plus régulière ?"),
  ],
};

export const FULL_STUDY_QUESTIONS: Record<string, string[]> = {
  ...THEME_CONTENT.questions,
  "priere-wt-ecoute": [
    "Pourquoi la prière est-elle comparée à une conversation avec un Père ?",
    "Quels éléments du modèle de prière de Jésus pouvez-vous utiliser ce soir ?",
    "Comment la prière vous aide-t-elle quand vous êtes inquiet ?",
    "Quelle prière souhaitez-vous faire avec plus de régularité cette semaine ?",
  ],
  "priere-awake-efficace": [
    "À quel moment de la journée pouvez-vous prier sans distraction ?",
    "Pour quoi pourriez-vous remercier Jéhovah avant de présenter vos demandes ?",
    "Qui pourriez-vous mentionner dans vos prières cette semaine ?",
    "Quelle demande précise allez-vous présenter à Jéhovah aujourd'hui ?",
  ],
};

/**
 * Enrichit un article dont le contenu n'a pas encore été réécrit manuellement :
 * structure publication + paragraphes existants + Écritures + questions.
 */
export function buildStructuredArticle(opts: {
  id: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  scriptureRefs?: string[];
  kind: "tours-de-garde" | "reveillez-vous" | "livre" | "brochure";
}): { body: StudyArticleBlock[]; studyQuestions: string[] } {
  const existing = FULL_ARTICLE_BLOCKS[opts.id];
  if (existing) {
    return {
      body: existing,
      studyQuestions: FULL_STUDY_QUESTIONS[opts.id] ?? defaultStudyQuestions(opts.title),
    };
  }

  const refs = opts.scriptureRefs ?? [];
  const isAwake = opts.kind === "reveillez-vous";
  const extraParas = opts.paragraphs.slice(4);

  const body: StudyArticleBlock[] = [
    note("Dans cet article", opts.excerpt),
    h2(isAwake ? "Une situation que beaucoup vivent" : "Introduction — pourquoi ce sujet compte"),
  ];

  for (const para of opts.paragraphs.slice(0, 2)) {
    if (para) body.push(p(para));
  }
  if (refs[0]) body.push(sc(scriptureSnippet(refs[0]), refs[0]));

  body.push(h2("Ce que la Bible nous apprend"));
  for (const para of opts.paragraphs.slice(2, 4)) {
    if (para) body.push(p(para));
  }
  if (refs[1]) body.push(sc(scriptureSnippet(refs[1]), refs[1]));

  if (extraParas.length > 0) {
    body.push(h2("Approfondir notre compréhension"));
    for (const para of extraParas) body.push(p(para));
  }

  body.push(h2("Application pratique"));
  body.push(
    p(
      isAwake
        ? "Choisissez une action concrète cette semaine : une habitude à renforcer, une conversation à avoir, ou un principe biblique à mettre en pratique dans une situation précise. Notez-la par écrit pour augmenter vos chances de la réaliser."
        : "L'étude de la Parole n'est pas théorique : elle transforme notre façon de parler, de servir et de faire face aux épreuves. Avant de fermer cet article, notez une application personnelle — une attitude à adopter, une parole à modérer, un service à renforcer."
    )
  );
  body.push(
    p(
      isAwake
        ? "Les principes de Jéhovah restent pertinents quelle que soit notre époque. Des milliers de serviteurs constatent chaque jour que les conseils bibliques « fonctionnent » dans la vie réelle, même quand les circonstances semblent les défier."
        : "Jéhovah bénit ceux qui cherchent à lui plaire. Continuer à étudier, prier et appliquer renforce notre amitié avec lui et notre confiance en l'avenir qu'il a promis sous le Royaume de Dieu."
    )
  );
  body.push(
    ul([
      "Relire un verset clé de cet article et le méditer calmement.",
      "Partager un point appris avec un proche ou un compagnon de service.",
      "Prier Jéhovah en mentionnant une application concrète.",
    ])
  );

  if (refs[2]) body.push(sc(scriptureSnippet(refs[2]), refs[2]));
  if (refs[3]) body.push(sc(scriptureSnippet(refs[3]), refs[3]));

  body.push(h2("Méditation personnelle"));
  body.push(
    q(`Qu'est-ce que « ${opts.title.toLowerCase()} » m'apprend sur la personnalité de Jéhovah ?`)
  );
  body.push(q("Quel changement concret puis-je faire cette semaine grâce à ce que j'ai lu ?"));
  body.push(q("Comment puis-je utiliser cet enseignement pour encourager quelqu'un d'autre ?"));

  return {
    body,
    studyQuestions: DEFAULT_STUDY_QUESTIONS(opts.title),
  };
}

function defaultStudyQuestions(title: string): string[] {
  return DEFAULT_STUDY_QUESTIONS(title);
}
