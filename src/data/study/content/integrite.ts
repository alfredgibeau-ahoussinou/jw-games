import type { StudyArticleBlock } from "@/types/study";
import { h2, h3, note, p, q, sc, ul } from "../article-builder";

export const INTEGRITE_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "integrite-wt-developper": {
    blocks: [
      note(
        "Dans cet article",
        "L'intégrité ne s'improvise pas le jour de la crise. Voyons comment des serviteurs bibliques l'ont cultivée à l'avance — et comment nous pouvons renforcer nos fondations spirituelles."
      ),
      h2("Être entier — sans division intérieure"),
      p(
        "L'intégrité, c'est être entier : ce que nous croyons, ce que nous disons et ce que nous faisons vont dans la même direction. Job en est l'exemple classique. Il a tout perdu — biens, enfants, santé — mais Jéhovah a pu dire de lui qu'il restait attaché à son intégrité."
      ),
      p(
        "Dans un monde où beaucoup adaptent leurs valeurs selon les circonstances, l'intégrité est un trésor. Elle plaît à Jéhovah et inspire confiance chez les autres. C'est aussi une protection : une conscience intacte nous évite des regrets profonds."
      ),
      sc(
        "« Mon serviteur Job… il reste attaché à son intégrité. »",
        "Job 2:3"
      ),
      h2("Construire avant la tempête"),
      p(
        "On ne forge pas l'intégrité le jour où la tentation frappe. C'est un travail quotidien : étude régulière de la Parole, prière sincère, et choix honnêtes dans les « petites » situations du quotidien."
      ),
      p(
        "Chaque fois que nous choisissons la voie juste quand personne ne nous regarde, nous renforçons un muscle spirituel. Quand une épreuve majeure arrive, nos réflexes sont déjà formés."
      ),
      h3("L'exemple de Daniel"),
      ul([
        "Il a pris une résolution à l'avance de ne pas se souiller par les mets du roi.",
        "Quand la pression est venue, il savait déjà quelle serait sa réponse.",
        "Son intégrité a été remarquée par des dirigeants païens eux-mêmes.",
      ]),
      sc(
        "« Daniel prit la ferme résolution de ne pas se souiller par les mets du roi. »",
        "Daniel 1:8"
      ),
      h2("Jéhovah voit le cœur"),
      p(
        "L'intégrité ne consiste pas à donner une image parfaite aux autres. Jéhovah voit nos motivations profondes. David a prié : « Moi, je marcherai dans mon intégrité. » Ce désir sincère compte aux yeux de Dieu."
      ),
      sc(
        "« Moi, je marcherai dans mon intégrité. Rachète-moi et montre-moi de la faveur. »",
        "Psaume 26:11"
      ),
      q("Dans quelle « petite » situation pourriez-vous montrer plus d'intégrité cette semaine ?"),
    ],
    questions: [
      "Que signifie être une personne d'intégrité aux yeux de Jéhovah ?",
      "Pourquoi l'exemple de Daniel est-il pertinent pour nous aujourd'hui ?",
      "Comment l'étude et la prière renforcent-elles l'intégrité ?",
      "Quelle décision à l'avance pourriez-vous prendre pour tenir bon sous pression ?",
    ],
  },

  "integrite-awake-honnetete": {
    blocks: [
      note(
        "Dans cet article",
        "L'honnêteté chrétienne ne s'arrête pas à la porte de la salle du Royaume. Voyons comment l'appliquer concrètement à l'école, au travail et dans la vie numérique."
      ),
      h2("Honnête même quand personne ne regarde"),
      p(
        "Un serviteur de Jéhovah ne triche pas — pas à l'examen, pas sur sa feuille de temps, pas sur ses déclarations. Cette norme peut sembler exigeante dans un environnement où la malhonnêteté est parfois banalisée. Pourtant elle reflète le caractère de Jéhovah."
      ),
      p(
        "Des balances fausses sont en horreur à Jéhovah. Il valorise un « poids exact » — c'est-à-dire des relations et des transactions justes. Notre honnêteté est une forme d'adoration."
      ),
      sc(
        "« Des balances fausses sont en horreur à Jéhovah, mais un poids exact lui plaît. »",
        "Proverbes 11:1"
      ),
      h2("Au travail et à l'école"),
      p(
        "Rendre la monnaie en trop, signaler une erreur en sa faveur, ne pas voler du temps de travail : ce sont des tests d'intégrité quotidiens. À l'école, copier ou faire faire ses devoirs par quelqu'un d'autre est malhonnête et nuit à son propre apprentissage."
      ),
      p(
        "Sur Internet, l'anonymat ne change rien aux yeux de Jéhovah. Mentir sur son identité, voler du contenu ou tricher dans un jeu en ligne reste contraire à la vérité."
      ),
      sc(
        "« N'ayez pas l'habitude de mentir les uns aux autres. »",
        "Colossiens 3:9"
      ),
      h3("Quand l'honnêteté coûte"),
      ul([
        "Un contrat perdu parce qu'on a refusé de mentir.",
        "Une note plus basse parce qu'on n'a pas triché.",
        "Une opportunité manquée par loyauté envers son employeur.",
      ]),
      p(
        "Ces sacrifices à court terme préservent notre conscience et notre amitié avec Jéhovah. Celui qui est fidèle dans les petites choses le sera aussi dans les grandes."
      ),
      sc(
        "« Celui qui est fidèle dans les choses les plus petites est aussi fidèle dans les plus grandes. »",
        "Luc 16:10"
      ),
      q("Quelle situation concrète exige de vous plus d'honnêteté en ce moment ?"),
    ],
    questions: [
      "Pourquoi l'honnêteté plaît-elle à Jéhovah ?",
      "Donnez un exemple d'intégrité au travail ou à l'école.",
      "Que faire quand l'honnêteté semble coûter cher ?",
      "Comment votre intégrité peut-elle toucher positivement les autres ?",
    ],
  },
};
