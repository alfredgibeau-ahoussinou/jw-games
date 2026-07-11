import type { StudyArticleBlock } from "@/types/study";
import { h2, h3, note, p, q, sc, ul } from "../article-builder";

export const JEUNESSE_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "jeunesse-wt-force": {
    blocks: [
      note(
        "Dans cet article",
        "Jéhovah n'attend pas que les jeunes deviennent adultes pour les utiliser. Découvrez comment les adolescents et jeunes adultes peuvent être une force réelle pour le Royaume."
      ),
      h2("Jéhovah utilise les jeunes fidèles"),
      p(
        "L'âge n'a jamais été un obstacle à la fidélité envers Jéhovah. Samuel a servi dans le tabernacle dès l'enfance. Josias n'avait que huit ans quand il est devenu roi et a entrepris de purifier le culte de Jéhovah en Juda. Timothée était un jeune homme quand Paul l'a pris sous sa tutelle pour l'œuvre de prédication. Jésus lui-même, à douze ans, était assis parmi les enseignants du temple, posant des questions qui étonnaient par leur profondeur."
      ),
      p(
        "Ces exemples montrent que Jéhovah voit le potentiel des jeunes et les utilise quand ils lui montrent de la sincérité. Il ne demande pas la perfection — il demande un cœur dévoué et une volonté d'apprendre."
      ),
      sc(
        "« Samuel faisait le service devant Jéhovah ; c'était un jeune garçon portant un éphod de lin. »",
        "1 Samuel 2:18"
      ),
      h2("Participer activement aux réunions"),
      p(
        "Les réunions chrétiennes ne sont pas conçues uniquement pour les adultes. Préparer un commentaire, lire une assignation, participer aux lectures théâtrales ou aux démonstrations : autant de moyens pour un jeune de développer ses compétences et sa confiance en soi."
      ),
      p(
        "Quand un adolescent prend la parole lors d'une réunion, il ne se contente pas d'apprendre — il encourage toute la congrégation. Les frères et sœurs plus âgés sont souvent impressionnés par le zèle des jeunes et en retirent eux-mêmes de la force spirituelle."
      ),
      h3("Comment progresser aux réunions"),
      ul([
        "Préparer ses commentaires à l'avance en lisant le matériel avec attention.",
        "Demander à un parent ou un ami de répéter une lecture avant la réunion.",
        "Noter les points qui touchent personnellement pour enrichir ses interventions.",
        "Arriver un peu en avance pour se mettre dans un état d'esprit favorable.",
      ]),
      h2("Le service de prédication — un terrain d'apprentissage"),
      p(
        "Participer à la prédication permet aux jeunes de parler de Jéhovah à leurs pairs comme à des adultes. Accompagné d'un parent ou d'un compagnon expérimenté, un adolescent apprend à présenter le message, à écouter et à s'adapter à la personne rencontrée. Ces compétences lui seront utiles toute sa vie."
      ),
      p(
        "Josias a commencé à rechercher le Dieu de David alors qu'il était encore adolescent. Son zèle a transformé tout un royaume. Un jeune qui sert Jéhovah avec sincérité aujourd'hui peut avoir une influence bien plus grande qu'il ne l'imagine — sur sa famille, ses amis et sa congrégation."
      ),
      sc(
        "« Josias avait huit ans quand il devint roi… Il a commencé à rechercher le Dieu de David, son ancêtre, quand il était encore adolescent. »",
        "2 Chroniques 34:1, 3"
      ),
      h2("Une force pour la congrégation et pour sa génération"),
      p(
        "Les jeunes qui servent Jéhovah avec zèle sont un témoignage vivant pour leur génération. Dans un monde où beaucoup de adolescents cherchent un but sans le trouver, un jeune Témoin de Jéhovah qui participe activement à l'œuvre de Dieu montre qu'il existe une direction claire et une espérance solide."
      ),
      p(
        "Le psalmiste a invité les jeunes hommes et les jeunes filles, les vieillards et les enfants à louer le nom de Jéhovah. Chaque tranche d'âge a sa place dans la louange collective. Les jeunes ne sont pas les leaders de demain seulement — ils sont une force pour le Royaume aujourd'hui."
      ),
      sc(
        "« Jeunes hommes et jeunes filles, vieillards et enfants, qu'ils louent le nom de Jéhovah. »",
        "Psaume 148:12, 13"
      ),
      q(
        "Quelle participation aux réunions ou au service aimeriez-vous renforcer cette année ?"
      ),
      q(
        "Quel jeune de la Bible vous inspire le plus, et pourquoi ?"
      ),
    ],
    questions: [
      "Quels exemples bibliques montrent que Jéhovah utilise les jeunes ?",
      "Comment la participation aux réunions aide-t-elle un adolescent à progresser ?",
      "Pourquoi le service de prédication est-il formateur pour les jeunes ?",
      "De quelle manière pouvez-vous être une force pour votre congrégation ?",
    ],
  },

  "jeunesse-awake-defis": {
    blocks: [
      note(
        "Dans cet article",
        "Anxiété, pression des pairs, réseaux sociaux et quête de sens : les jeunes d'aujourd'hui font face à des défis réels. Voyons comment la Bible offre des réponses concrètes."
      ),
      h2("Des pressions que les générations précédentes ne connaissaient pas"),
      p(
        "Les réseaux sociaux exposent les jeunes à une comparaison permanente avec les autres, à des contenus inappropriés accessibles en un clic et parfois au cyberharcèlement. L'anxiété liée aux études, à l'avenir professionnel et aux relations amoureuses touche un nombre croissant d'adolescents. Beaucoup se sentent seuls malgré des centaines de « amis » en ligne."
      ),
      p(
        "Ces défis ne signifient pas que la Bible est dépassée. Au contraire, ses principes sur la pureté, l'amitié sincère, le respect des parents et la confiance en Jéhovah répondent précisément aux besoins des jeunes d'aujourd'hui — peut-être plus que jamais."
      ),
      sc(
        "« Souviens-toi de ton Créateur pendant les jours de ta jeunesse, avant que ne viennent les jours mauvais. »",
        "Ecclésiaste 12:1"
      ),
      h2("Rester pur dans un monde impur"),
      p(
        "La tentation d'explorer des contenus sexuellement explicites, de céder à la pression des pairs ou de s'engager dans des relations prématurées est réelle pour beaucoup de jeunes. La Bible ne minimise pas ces luttes — elle offre des principes clairs et la promesse que Jéhovah donne la force de résister."
      ),
      p(
        "Paul a encouragé le jeune Timothée à fuir les désirs de la jeunesse et à rechercher la justice, la foi, l'amour et la paix avec ceux qui invoquent Jéhovah d'un cœur pur. Fuir ne signifie pas fuir la vie — cela signifie choisir consciemment des amitiés et des activités qui nous rapprochent de Jéhovah plutôt que de nous en éloigner."
      ),
      h3("Stratégies pratiques"),
      ul([
        "Limiter le temps sur les réseaux sociaux et choisir ce qu'on y consulte.",
        "Cultiver des amitiés avec des compagnons qui partagent vos valeurs.",
        "Parler à un parent ou un ancien de confiance quand la pression devient forte.",
        "Prier Jéhovah pour obtenir de la force avant de faire face à une tentation.",
      ]),
      sc(
        "« Que personne ne méprise ta jeunesse, mais sois un exemple pour les croyants dans ta façon de parler, de te conduire, d'aimer, de croire, de mener une vie pure. »",
        "1 Timothée 4:12"
      ),
      h2("Demander de l'aide n'est pas une faiblesse"),
      p(
        "Beaucoup de jeunes hésitent à parler de leurs difficultés de peur d'être jugés ou de décevoir leurs parents. Pourtant, Proverbes invite le jeune homme à écouter les conseils de ses parents plutôt que de suivre aveuglément ses compagnons. Parler à un parent, un ancien ou un ami spirituel mature est un acte de sagesse, pas de faiblesse."
      ),
      p(
        "Jéhovah a placé dans la congrégation des hommes qualifiés pour nous aider spirituellement. Un adolescent qui ose demander de l'aide avant qu'un problème ne grossisse montre de la maturité. Et ceux qui l'écoutent ont la responsabilité de répondre avec compassion et discrétion."
      ),
      h2("Trouver un but qui donne de la joie"),
      p(
        "Le vide intérieur pousse beaucoup de jeunes vers des comportements destructeurs. Servir Jéhovah jeune donne une direction claire : participer aux réunions, à la prédication, aider dans la congrégation. Des milliers de jeunes Témoins de Jéhovah témoignent que cette vie leur apporte une joie que le monde ne peut pas offrir."
      ),
      p(
        "L'écrivain d'Ecclésiaste a exhorté les jeunes à se souvenir de leur Créateur pendant les jours de leur jeunesse — avant que les responsabilités et les difficultés ne se multiplient. Commencer tôt à servir Jéhovah, c'est construire un fondement solide pour toute la vie."
      ),
      sc(
        "« Mon fils, si des pécheurs veulent te séduire, n'y consens pas. »",
        "Proverbes 1:10"
      ),
      q(
        "Quel défi personnel touche le plus votre vie de jeune, et comment la Bible peut-elle vous aider ?"
      ),
      q(
        "Avez-vous une personne de confiance à qui vous pouvez parler quand les choses deviennent difficiles ?"
      ),
    ],
    questions: [
      "Quels défis modernes touchent particulièrement les jeunes d'aujourd'hui ?",
      "Comment 1 Timothée 4:12 peut-il guider un adolescent au quotidien ?",
      "Pourquoi est-il sage de demander de l'aide quand on traverse une épreuve ?",
      "Quelle activité spirituelle pourrait vous apporter plus de joie cette semaine ?",
    ],
  },
};
