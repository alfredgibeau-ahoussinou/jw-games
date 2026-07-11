import type { StudyArticleBlock } from "@/types/study";
import { h2, h3, note, p, q, sc, ul } from "../article-builder";

export const CONFIANCE_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "confiance-wt-renforcer": {
    blocks: [
      note(
        "Dans cet article",
        "La confiance en Jéhovah ne signifie pas l'absence de peur. Voyons comment des serviteurs bibliques ont fait confiance malgré l'incertitude — et comment nous pouvons renforcer notre foi aujourd'hui."
      ),
      h2("Faire confiance malgré ce qu'on voit"),
      p(
        "Abraham a quitté sa patrie sans savoir où il allait. Moïse a affronté le plus puissant empire de son temps. David a combattu un géant avec une fronde. Chacun a connu la peur — mais ils ont choisi de faire confiance à Jéhovah plutôt que de se fier uniquement à leurs propres forces."
      ),
      p(
        "La confiance en Jéhovah n'est pas de l'aveuglement. C'est reconnaître que notre vision est limitée et que le Créateur voit l'ensemble du tableau. Il connaît notre passé, notre présent et notre avenir. Ses conseils sont toujours dans notre intérêt, même quand nous ne comprenons pas immédiatement pourquoi."
      ),
      sc(
        "« Confie-toi en Jéhovah de tout ton cœur, et ne t'appuie pas sur ta propre intelligence. »",
        "Proverbes 3:5"
      ),
      h2("Décharger son fardeau"),
      p(
        "L'inquiétude excessive épuise le corps et l'esprit. Elle nous pousse à imaginer le pire sans agir avec sagesse. La Bible invite à une démarche différente : lancer notre fardeau sur Jéhovah, puis agir avec confiance selon ses principes."
      ),
      p(
        "Décharger son fardeau ne veut pas dire devenir passif. Cela signifie prier sincèrement, faire ce qui dépend de nous, puis accepter que l'issue finale appartient à Jéhovah. Cette attitude libère de l'énergie pour servir et aimer les autres au lieu de tourner en boucle dans nos craintes."
      ),
      sc(
        "« Lance-toi sur lui le fardeau qui te pèse, et il te soutiendra. »",
        "Psaume 55:22"
      ),
      h3("Renforcer sa mémoire spirituelle"),
      ul([
        "Tenir un journal des fois où Jéhovah vous a aidé.",
        "Relire régulièrement des passages qui parlent de sa fidélité.",
        "Parler avec des amis spirituels de comment Jéhovah les a soutenus.",
        "Méditer sur des exemples bibliques de foi éprouvée.",
      ]),
      h2("La foi — preuve de choses qu'on ne voit pas"),
      p(
        "La foi n'est pas une émotion passagère. C'est une conviction profonde fondée sur ce que nous savons de Jéhovah par la Bible et par notre expérience personnelle. Quand une nouvelle épreuve survient, cette conviction nous rappelle : « Il m'a aidé avant ; il le fera encore. »"
      ),
      p(
        "Renforcer sa confiance demande de l'effort : étude régulière, prière honnête, application des principes bibliques. Chaque fois que nous voyons Jéhovah répondre — parfois d'une manière inattendue — notre foi grandit un peu plus."
      ),
      sc(
        "« La foi est la preuve convaincante de choses qu'on ne voit pas. »",
        "Hébreux 11:1"
      ),
      q(
        "Quel exemple biblique de confiance vous encourage le plus en ce moment ?"
      ),
    ],
    questions: [
      "Pourquoi la confiance en Jéhovah ne signifie-t-elle pas l'absence de peur ?",
      "Comment décharger son fardeau sur Jéhovah tout en agissant avec sagesse ?",
      "Qu'est-ce qui renforce votre mémoire spirituelle ?",
      "Quelle situation actuelle pourriez-vous confier à Jéhovah cette semaine ?",
    ],
  },

  "confiance-awake-forces": {
    blocks: [
      note(
        "Dans cet article",
        "Maladie, perte d'emploi, deuil, persécution : personne n'est à l'abri des épreuves. Voyons comment des familles traversent ces moments en s'appuyant sur les promesses de Jéhovah."
      ),
      h2("Quand la vie dépasse nos forces"),
      p(
        "La Bible ne minimise pas la douleur. Job a perdu ses enfants, ses biens et sa santé en peu de temps. Jésus lui-même a pleuré à la mort de son ami Lazare. Reconnaître notre détresse devant Jéhovah n'est pas un manque de foi — c'est de l'honnêteté."
      ),
      p(
        "Beaucoup se sentent coupables de douter quand les circonstances s'accumulent. Pourtant Jéhovah comprend nos limites. Il ne nous demande pas de nier nos émotions, mais de ne pas laisser la désespérance nous éloigner de lui."
      ),
      sc(
        "« Celui qui se confie en Jéhovah est entouré de bonté aimante. »",
        "Psaume 32:10"
      ),
      h2("L'exemple de Job — loyauté dans la douleur"),
      p(
        "Job a exprimé sa détresse ouvertement. Il a posé des questions difficiles à Jéhovah. Mais il n'a pas maudit son Créateur. Son exemple montre qu'on peut être honnête avec Dieu tout en restant fidèle. Jéhovah a finalement béni Job au-delà de ce qu'il avait avant."
      ),
      p(
        "L'histoire de Job nous rappelle aussi que nous ne voyons pas toute la situation. Satan avait mis en cause les motivations de Job. Jéhovah a permis l'épreuve pour prouver l'intégrité de son serviteur. Un jour, nous comprendrons pourquoi certaines épreuves ont été nécessaires."
      ),
      sc(
        "« Jéhovah a donné, et Jéhovah a repris. Que le nom de Jéhovah soit béni. »",
        "Job 1:21"
      ),
      h3("Le soutien de la congrégation"),
      ul([
        "Des visites et des appels qui rappellent qu'on n'est pas seul.",
        "Des prières communes qui apportent du réconfort.",
        "Une aide pratique — courses, transport, garde d'enfants.",
        "Des paroles encourageantes fondées sur la Bible, pas des clichés vides.",
      ]),
      h2("Le Père des tendres compassions"),
      p(
        "Paul a appelé Jéhovah « le Père des tendres compassions et le Dieu de tout réconfort ». Quand nous traversons une épreuve, Jéhovah compatit à notre douleur. Il ne nous abandonne pas. Parfois il soulage la situation ; parfois il nous donne la force de l'endurer ; toujours il prépare un avenir meilleur."
      ),
      p(
        "Cette promesse ne garantit pas que les problèmes disparaîtront du jour au lendemain. Elle garantit une relation durable avec Celui qui peut vraiment nous aider — maintenant et pour l'éternité."
      ),
      sc(
        "« Béni soit le Dieu et Père de notre Seigneur Jésus Christ, le Père des tendres compassions et le Dieu de tout réconfort. »",
        "2 Corinthiens 1:3, 4"
      ),
      q(
        "Comment la congrégation ou votre famille pourrait-elle mieux soutenir quelqu'un en épreuve ?"
      ),
    ],
    questions: [
      "Pourquoi est-il normal de ressentir de la détresse face aux épreuves ?",
      "Que nous apprend l'exemple de Job sur la loyauté ?",
      "Comment la congrégation peut-elle soutenir concrètement ceux qui souffrent ?",
      "Quelle promesse de Jéhovah vous réconforte le plus en ce moment ?",
    ],
  },
};
