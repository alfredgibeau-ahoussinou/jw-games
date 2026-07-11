import type { StudyArticleBlock } from "@/types/study";
import { h2, h3, note, p, q, sc, ul } from "../article-builder";

export const SERVICE_ARTICLES: Record<
  string,
  { blocks: StudyArticleBlock[]; questions: string[] }
> = {
  "service-wt-pourquoi": {
    blocks: [
      note(
        "Dans cet article",
        "Nous verrons pourquoi Jésus a confié la prédication à ses disciples, en quoi c'est un acte d'amour, et comment chacun peut y participer selon ses capacités."
      ),
      h2("Un ordre qui vient du cœur de Jéhovah"),
      p(
        "Avant de retourner au ciel, Jésus a réuni ses disciples et leur a donné une mission claire : faire des disciples de toutes les nations. Cet ordre — souvent appelé la grande commission — n'était pas une suggestion optionnelle. C'était l'expression de la volonté de Jéhovah pour tous ceux qui suivent son Fils."
      ),
      p(
        "Pourquoi Jéhovah veut-il que la bonne nouvelle soit proclamée ? Parce qu'il est un Dieu d'amour qui ne veut pas que quiconque périsse. Il offre à chaque personne sincère la chance de connaître la vérité, de changer sa vie et d'obtenir la vie éternelle sous le Royaume de son Fils."
      ),
      sc(
        "« Allez donc, faites des disciples de toutes les nations, les baptisant… et leur enseignez à observer toutes les choses que je vous ai commandées. »",
        "Matthieu 28:19, 20"
      ),
      h2("Prêcher, c'est aimer son prochain"),
      p(
        "Imaginez connaître un remède capable de guérir une maladie mortelle et de le garder pour soi. Serait-ce un acte d'amour ? Quand nous connaissons l'espérance que Jéhovah offre — le Royaume, la résurrection, la vie éternelle sur une terre paradisiaque — la garder pour nous seuls serait égoïste."
      ),
      p(
        "La prédication n'est pas une tentative de convaincre à tout prix. C'est une invitation sincère. Nous offrons à chaque personne la possibilité d'examiner les Écritures et de décider librement si elle veut servir Jéhovah. Respecter le libre arbitre fait partie de l'amour chrétien."
      ),
      h3("Différentes façons de servir"),
      ul([
        "La prédication de maison en maison, en respectant les personnes et les lois locales.",
        "Le témoignage en public, dans les lieux où la loi l'autorise.",
        "Les conversations informelles avec des proches, collègues ou voisins.",
        "L'aide aux réunions et aux activités de la congrégation qui soutiennent l'œuvre de prédication.",
      ]),
      h2("Un signe du temps de la fin"),
      p(
        "Jésus a donné à ses disciples un signe remarquable pour identifier la période précédant la fin de ce système : la bonne nouvelle du Royaume serait prêchée dans toute la terre habitée. Aujourd'hui, des millions de Témoins de Jéhovah participent à cette œuvre dans plus de 240 pays et territoires."
      ),
      p(
        "Participer à la prédication, c'est donc coopérer avec Jéhovah dans son dessein. Ce n'est pas une simple activité religieuse parmi d'autres — c'est la preuve visible que le Royaume est au pouvoir et que l'accomplissement des prophéties progresse."
      ),
      sc(
        "« Cette bonne nouvelle du Royaume sera prêchée dans toute la terre habitée, à toutes les nations, et alors la fin viendra. »",
        "Matthieu 24:14"
      ),
      h2("Chacun a sa place dans l'œuvre"),
      p(
        "Tous n'ont pas les mêmes capacités, le même âge ou les mêmes circonstances. Un adolescent peut témoigner à l'école avec sagesse. Une personne âgée peut encourager par sa fidélité. Un parent de jeunes enfants peut prêcher avec sa famille. Jéhovah valorise chaque effort sincère, même modeste."
      ),
      p(
        "L'apôtre Paul a comparé la congrégation à un corps : chaque membre a un rôle. Certains plantent, d'autres arrosent, mais c'est Jéhovah qui fait croître. L'important est de participer avec joie et de continuer à progresser dans notre capacité à présenter le message clairement."
      ),
      sc(
        "« Comment invoqueront-ils celui en qui ils n'ont pas mis leur foi ? Comment mettront-ils leur foi en celui dont ils n'ont pas entendu parler ? Et comment en entendront-ils parler si personne ne prêche ? »",
        "Romains 10:14"
      ),
      q(
        "Qu'est-ce qui vous motive personnellement à participer à la prédication de la bonne nouvelle ?"
      ),
      q(
        "Y a-t-il une personne à qui vous aimeriez parler de l'espérance biblique prochainement ?"
      ),
    ],
    questions: [
      "Pourquoi Jésus a-t-il donné la grande commission à ses disciples ?",
      "En quoi la prédication est-elle un acte d'amour envers notre prochain ?",
      "Comment Matthieu 24:14 confirme-t-il l'importance de l'œuvre de prédication ?",
      "Quelle forme de service pourriez-vous renforcer ce mois-ci ?",
    ],
  },

  "service-awake-mondiale": {
    blocks: [
      note(
        "Dans cet article",
        "Découvrez comment la prédication est organisée dans le monde entier, dans le respect des lois et des personnes, et pourquoi chaque contact compte."
      ),
      h2("Une œuvre sans précédent dans l'histoire"),
      p(
        "Aucun mouvement religieux n'a jamais proclamé un même message dans autant de langues, dans autant de pays, par autant de personnes ordinaires. Des villageoises en Afrique aux professionnels en Europe, des jeunes en Amérique latine aux aînés en Asie — tous portent le même message : la bonne nouvelle du Royaume de Dieu."
      ),
      p(
        "Cette unité mondiale ne repose pas sur la contrainte ni sur la richesse. Elle repose sur l'amour pour Jéhovah, l'étude commune de la Bible et l'obéissance aux mêmes principes chrétiens. C'est exactement ce que Jésus a prédit pour le temps de la fin."
      ),
      sc(
        "« Vous serez mes témoins… jusqu'aux extrémités de la terre. »",
        "Actes 1:8"
      ),
      h2("Prêcher avec respect et dignité"),
      p(
        "Le service de prédication se fait toujours dans le respect des lois locales et des personnes. On ne force personne à écouter. On accepte un refus avec courtoisie. On ne revient pas là où on nous a demandé de ne pas revenir. Cette approche reflète la personnalité de Jéhovah, qui respecte le libre arbitre de chaque humain."
      ),
      p(
        "En public comme de maison en maison, l'objectif est d'engager une conversation, pas de distribuer des documents sans explication. Écouter la personne, comprendre ses préoccupations et adapter le message à son intérêt : c'est l'approche que Jésus lui-même utilisait avec les gens qu'il rencontrait."
      ),
      h3("Principes qui guident notre service"),
      ul([
        "Être poli et souriant, même face à un refus.",
        "Écouter avant de parler, pour comprendre les besoins de la personne.",
        "Utiliser la Bible comme autorité, pas nos opinions personnelles.",
        "Laisser des publications seulement quand c'est approprié et bienvenu.",
      ]),
      h2("L'organisation au service du message"),
      p(
        "L'œuvre de prédication est soutenue par une organisation internationale qui forme, encourage et coordonne les serviteurs de Jéhovah sans rémunérer les prédicateurs. Les congrégations locales organisent des sorties de service régulières, où chacun peut apprendre auprès de compagnons plus expérimentés."
      ),
      p(
        "Les cartes et publications — brochures, vidéos, site jw.org — servent de supports pour faciliter la conversation. Mais le plus précieux reste l'échange humain : une question sincère, une Écriture partagée, une prière offerte. Jéhovah bénit ces efforts honnêtes, même quand les résultats ne sont pas immédiats."
      ),
      sc(
        "« Mais sanctifiez le Christ comme Seigneur dans vos cœurs, étant toujours prêts à faire une défense devant quiconque vous demande de rendre compte de l'espérance qui est en vous. »",
        "1 Pierre 3:15"
      ),
      h2("Chaque contact peut faire la différence"),
      p(
        "Beaucoup de Témoins de Jéhovah ont commencé leur étude biblique grâce à un contact apparemment banal : une brochure laissée à la porte, une question posée en public, une conversation avec un collègue ou un voisin. Jéhovah peut utiliser le moindre effort sincère pour toucher un cœur ouvert."
      ),
      p(
        "Si vous participez déjà au service, rappelez-vous que vous n'êtes pas seul. Des millions de frères et sœurs prêchent en même temps que vous, dans des fuseaux horaires différents, dans des langues différentes, mais avec le même amour pour Jéhovah et pour leur prochain."
      ),
      q(
        "Comment pouvez-vous montrer plus de respect et d'écoute lors de votre prochaine sortie de service ?"
      ),
      q(
        "Connaissez-vous quelqu'un dont la vie a changé grâce à un simple contact de prédication ?"
      ),
    ],
    questions: [
      "Qu'est-ce qui rend l'œuvre de prédication mondiale unique dans l'histoire ?",
      "Pourquoi est-il important de respecter les lois et les personnes lors du service ?",
      "Quel rôle jouent les publications par rapport à la conversation ?",
      "Quel principe de cet article allez-vous appliquer lors de votre prochaine sortie ?",
    ],
  },
};
