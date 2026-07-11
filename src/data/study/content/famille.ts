import type { StudyArticleBlock } from "@/types/study";
import { h2, h3, note, p, q, sc, ul } from "../article-builder";

export const FAMILLE_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "famille-wt-renforcer": {
    blocks: [
      note(
        "Dans cet article",
        "Nous verrons comment unir sa famille autour du service de Jéhovah, cultiver des conversations constructives et renforcer l'harmonie entre époux et entre parents et enfants."
      ),
      h2("Une décision qui unifie la famille"),
      p(
        "Josué, à la fin de sa vie, a posé un choix clair devant tout Israël : « Moi et ma maison, nous servirons Jéhovah. » Cette déclaration n'était pas individuelle — elle englobait sa famille entière. Une famille qui sert Jéhovah ensemble possède une direction commune qui la fortifie face aux épreuves."
      ),
      p(
        "Dans un monde où les valeurs changent constamment et où les distractions sont nombreuses, une famille ancrée dans la Parole de Dieu trouve un point de repère stable. Les décisions sur l'éducation, les loisirs, les amitiés et les priorités peuvent être prises en harmonie avec les principes de Jéhovah plutôt qu'au gré des modes passagères."
      ),
      sc(
        "« Moi et ma maison, nous servirons Jéhovah. »",
        "Josué 24:15"
      ),
      h2("Le culte familial — un pilier essentiel"),
      p(
        "Le culte familial n'a pas besoin d'être long ni compliqué pour être efficace. Quinze minutes régulières valent infiniment mieux qu'une heure occasionnelle. Lire un passage biblique, poser une question simple que chacun peut répondre, puis prier ensemble : c'est accessible à toutes les familles, quelle que soit leur composition."
      ),
      p(
        "Moïse a instruit les Israélites d'inculquer les paroles de Jéhovah à leurs enfants de manière continue — en parlant à la maison, en marchant, au coucher et au lever. L'idée est claire : l'éducation spirituelle ne se limite pas à un moment formel, elle imprègne la vie quotidienne."
      ),
      sc(
        "« Tu les inculqueras à tes fils, et tu en parleras quand tu seras assis dans ta maison, quand tu marcheras sur le chemin, quand tu te coucheras et quand tu te lèveras. »",
        "Deutéronome 6:6, 7"
      ),
      h3("Idées pour un culte familial vivant"),
      ul([
        "Choisir un passage court et le lire à tour de rôle.",
        "Poser une question du type « Qu'est-ce que ce verset m'apprend sur Jéhovah ? »",
        "Relier le passage à une situation concrète vécue par la famille.",
        "Terminer par une prière où chacun peut participer, même brièvement.",
      ]),
      h2("L'harmonie entre époux"),
      p(
        "L'apôtre Paul a comparé l'amour du mari pour sa femme à celui que Christ a pour la congrégation. Ce n'est pas un amour sentimental passager, mais un amour actif, patient et désintéressé. Le mariage chrétien repose sur le respect mutuel, le pardon et une communication honnête."
      ),
      p(
        "Les disputes sont inévitables dans tout couple, mais la façon dont on les gère fait la différence. Appliquer le conseil de Jacques — être prompt à écouter, lent à parler, lent à se mettre en colère — peut éviter que de petits malentendus ne deviennent de grandes blessures. Prier ensemble renforce aussi le lien spirituel entre époux."
      ),
      sc(
        "« Maris, continuez à aimer vos femmes, tout comme le Christ a aimé la congrégation et s'est livré lui-même pour elle. »",
        "Éphésiens 5:25"
      ),
      h2("Créer des moments pour parler de Jéhovah"),
      p(
        "Les repas en famille, les promenades, les trajets en voiture et les activités simples offrent des occasions naturelles de parler de Jéhovah. Pas besoin d'un sermon formel : une remarque sur la beauté de la création, un commentaire sur un article lu ensemble, une prière de remerciement avant un repas suffisent à rappeler que Jéhovah est au centre de la vie familiale."
      ),
      p(
        "Limiter le temps passé devant les écrans crée de l'espace pour ces conversations. Quand chaque membre de la famille est absorbé par son appareil, les liens s'affaiblissent. Des règles simples — pas de téléphone pendant les repas, une soirée sans écran par semaine — peuvent transformer l'atmosphère du foyer."
      ),
      q(
        "Quel moment de la journée conviendrait le mieux à un culte familial régulier dans votre foyer ?"
      ),
      q(
        "Quelle habitude pourriez-vous renforcer pour parler plus naturellement de Jéhovah en famille ?"
      ),
    ],
    questions: [
      "Pourquoi la décision de Josué 24:15 est-elle un bon modèle pour les familles aujourd'hui ?",
      "Comment rendre le culte familial simple et régulier ?",
      "Quels principes bibliques renforcent l'harmonie entre époux ?",
      "Quel moment pourriez-vous utiliser cette semaine pour parler de Jéhovah en famille ?",
    ],
  },

  "famille-awake-enfants": {
    blocks: [
      note(
        "Dans cet article",
        "Élever des enfants heureux et responsables demande amour, patience et sagesse. Voyons comment les principes bibliques guident les parents face aux défis concrets de l'éducation."
      ),
      h2("Une responsabilité précieuse"),
      p(
        "Le psalmiste a comparé les enfants à des flèches dans le carquois d'un guerrier. Cette image suggère que les parents ont la responsabilité de préparer leurs enfants à affronter la vie avec direction et force. L'éducation biblique n'est pas un luxe réservé aux familles « parfaites » — c'est un besoin fondamental pour tout enfant."
      ),
      p(
        "La Bible ne fournit pas un manuel rigide avec des règles pour chaque situation. Elle offre des principes intemporels : aimer ses enfants, les discipliner avec justice, leur donner un bon exemple et ne pas les décourager. Ces principes s'adaptent à chaque famille, chaque culture et chaque époque."
      ),
      sc(
        "« Instruis l'enfant selon la voie qu'il doit suivre ; même quand il sera vieux, il ne s'en détournera pas. »",
        "Proverbes 22:6"
      ),
      h2("La discipline qui forme, pas qui brise"),
      p(
        "La discipline biblique vise à corriger un comportement nuisible et à enseigner une leçon, pas à humilier ou à blesser l'enfant. Des règles claires, expliquées avec patience, aident l'enfant à comprendre pourquoi certaines limites existent. Quand il sait ce qui est attendu de lui, il se sent en sécurité."
      ),
      p(
        "Paul a averti les pères de ne pas provoquer leurs enfants au courroux, pour qu'ils ne se découragent pas. Un enfant constamment critiqué, comparé à d'autres ou privé d'affection peut perdre confiance en lui et se détourner de l'autorité parentale — y compris celle de Jéhovah."
      ),
      h3("Discipline efficace et aimante"),
      ul([
        "Expliquer la règle avant de la faire respecter.",
        "Être cohérent entre les deux parents autant que possible.",
        "Féliciter sincèrement les bons choix, pas seulement corriger les erreurs.",
        "Montrer de l'affection après une correction, pour rassurer l'enfant.",
      ]),
      sc(
        "« Pères, ne provoquez pas vos enfants au courroux, mais élevez-les dans la discipline et les remontrances de Jéhovah. »",
        "Éphésiens 6:4"
      ),
      h2("Écouter pour mieux guider"),
      p(
        "Un parent qui écoute vraiment son enfant — sans interrompre, sans juger immédiatement — construit un pont de confiance. Un adolescent qui se sent entendu est plus enclin à parler de ses difficultés avant qu'elles ne deviennent graves. L'écoute active montre à l'enfant que son opinion compte, même quand la décision finale revient au parent."
      ),
      p(
        "Cela ne signifie pas approuver tout ce que l'enfant dit ou fait. Mais commencer par comprendre son point de vue avant de donner un conseil rend la communication plus efficace. Jésus lui-même posait des questions avant d'enseigner, pour toucher le cœur de ses interlocuteurs."
      ),
      h2("Le temps de qualité, un investissement durable"),
      p(
        "Le temps de qualité ne nécessite pas de grands moyens financiers. Une promenade, un jeu de société, cuisiner ensemble ou réparer quelque chose en duo : ce sont des occasions d'inculquer des valeurs, de montrer de l'affection et de créer des souvenirs positifs. L'enfant retiendra davantage ce qu'il a vécu avec ses parents que ce qu'on lui a simplement dit."
      ),
      p(
        "Impliquer les enfants dans le service de Jéhovah — les emmener en prédication, les encourager à participer aux réunions — leur donne un but et des repères moraux solides. Un jeune qui sert Jéhovah avec ses parents développe une relation personnelle avec son Créateur qui le soutiendra toute sa vie."
      ),
      sc(
        "« Pères, ne exaspérez pas vos enfants, afin qu'ils ne perdent pas courage. »",
        "Colossiens 3:21"
      ),
      q(
        "Votre enfant se sent-il libre de vous parler de ses difficultés ? Que pourriez-vous faire pour renforcer cette confiance ?"
      ),
      q(
        "Quelle activité simple pourriez-vous proposer cette semaine pour passer du temps de qualité avec votre enfant ?"
      ),
    ],
    questions: [
      "Pourquoi l'éducation biblique est-elle essentielle pour les enfants ?",
      "Quelle est la différence entre une discipline qui forme et une qui décourage ?",
      "Comment l'écoute active renforce-t-elle la relation parent-enfant ?",
      "Quel moment de qualité allez-vous créer avec votre enfant cette semaine ?",
    ],
  },
};
