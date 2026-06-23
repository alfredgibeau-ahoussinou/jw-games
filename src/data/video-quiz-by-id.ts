/** Questions spécifiques par vidéo — complément à video-quiz-bank.ts */
import type { MiniVideoQuestion } from "./video-quiz-bank";
import { q } from "./video-quiz-bank";

export const VIDEO_QUIZ_BY_ID: Record<string, MiniVideoQuestion[]> = {
  "gnj-pisode-1-la-vraie-lumi-re-du-monde": [
    q("gnj-pisode-1-la-vraie-lumi-re-du-monde-s1", {
      question: "Dans l'épisode 1, que déclare Nathanaël après que Philippe l'a invité à rencontrer Jésus ?",
      options: ["« Rabbi, tu es le Fils de Dieu »", "« Je ne crois pas aux prophètes »", "« Retournons à la pêche »", "« Jésus est un simple rabbin »"],
      correctIndex: 0,
      explanation: "Nathanaël reconnaît Jésus comme le Fils de Dieu (Jean 1:49).",
    }),
  ],
  "gnj-pisode-2-voici-mon-fils": [
    q("gnj-pisode-2-voici-mon-fils-s1", {
      question: "Après son baptême, où Jésus est-il conduit par l'esprit dans cet épisode ?",
      options: ["Au désert pour être tenté", "Directement au temple", "En Égypte", "À Rome"],
      correctIndex: 0,
      explanation: "Jésus jeûne quarante jours au désert avant de commencer son ministère (Matthieu 4:1).",
    }),
  ],
  "gnj-pisode-3-je-suis-celui-ci": [
    q("gnj-pisode-3-je-suis-celui-ci-s1", {
      question: "Quel passage du prophète Ésaïe Jésus lit-il à Nazareth dans cet épisode ?",
      options: ["« L'esprit de Jéhovah est sur moi… pour prêcher la bonne nouvelle aux pauvres »", "« Un enfant nous est né »", "« Voici mon serviteur que j'ai choisi »", "« Ils forgeront leurs épées en socs de charrue »"],
      correctIndex: 0,
      explanation: "Jésus lit Ésaïe 61:1, 2 et déclare : « Aujourd'hui ce passage des Écritures s'est accompli ».",
    }),
  ],
  "gnj-pisode-4-c-est-pour-cela-que-je-suis-venu": [
    q("gnj-pisode-4-c-est-pour-cela-que-je-suis-venu-s1", {
      question: "Dans l'épisode 4, pourquoi Jésus guérit-il le beau-fils de la veuve de Naïn ?",
      options: ["Parce qu'il est ému de compassion pour elle", "Pour recevoir de l'argent", "Pour devenir roi de la ville", "Parce qu'on le lui a ordonné par la force"],
      correctIndex: 0,
      explanation: "Jésus ressent de la compassion et ressuscite le jeune homme (Luc 7:13-15).",
    }),
  ],
  "gnj-pisode-5-bahis-par-sa-mani-re-d-enseigner": [
    q("gnj-pisode-5-bahis-par-sa-mani-re-d-enseigner-s1", {
      question: "Dans cet épisode, quelle différence remarquent les gens entre Jésus et les scribes ?",
      options: ["Jésus enseigne avec autorité, pas comme les scribes", "Jésus ne cite jamais les Écritures", "Les scribes enseignent mieux que Jésus", "Jésus enseigne seulement en grec"],
      correctIndex: 0,
      explanation: "Les auditeurs sont ébahis : Jésus enseigne comme ayant autorité (Marc 1:22).",
    }),
  ],
  "gnj-pisode-6-es-tu-celui-qui-devait-venir": [
    q("gnj-pisode-6-es-tu-celui-qui-devait-venir-s1", {
      question: "Quelles œuvres Jésus cite-t-il pour rassurer les disciples de Jean le Baptiseur ?",
      options: ["Les aveugles voient, les boiteux marchent, les lépreux sont guéris", "La destruction du temple", "Sa fuite en Égypte", "Le couronnement comme roi"],
      correctIndex: 0,
      explanation: "Jésus montre que les prophéties messianiques s'accomplissent (Matthieu 11:4, 5).",
    }),
  ],
  "gnj-son-nom-est-jean": [
    q("gnj-son-nom-est-jean-s1", {
      question: "Pourquoi Zacharie et Élisabeth donnent-ils à leur fils le nom Jean malgré les objections ?",
      options: ["Parce que l'ange de Jéhovah l'avait ordonné", "Parce que c'était la mode à l'époque", "Parce que les voisins l'ont choisi", "Parce que Jean signifie « roi »"],
      correctIndex: 0,
      explanation: "Zacharie obéit à l'instruction divine et recouvre la parole (Luc 1:13, 63, 64).",
    }),
  ],
  "gnj-je-suis-l-esclave-de-j-hovah": [
    q("gnj-je-suis-l-esclave-de-j-hovah-s1", {
      question: "Quel geste concret Jésus accomplit-il pour enseigner l'humilité à ses disciples ?",
      options: ["Il lave leurs pieds", "Il leur donne des couronnes", "Il les envoie combattre", "Il leur cache la Bible"],
      correctIndex: 0,
      explanation: "Jésus se met au service de ses disciples en leur lavant les pieds (Jean 13:4, 5).",
    }),
  ],
  "gnj-il-suivit-les-instructions-de-l-ange-de-j-hovah": [
    q("gnj-il-suivit-les-instructions-de-l-ange-de-j-hovah-s1", {
      question: "Où Joseph emmène-t-il Marie et Jésus après le songe de l'ange ?",
      options: ["En Égypte", "À Jérusalem", "À Rome", "En Babylonie"],
      correctIndex: 0,
      explanation: "Joseph obéit et part en Égypte pour protéger Jésus de Hérode (Matthieu 2:13, 14).",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-lie": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-lie-s1", {
      question: "Sur quelle montagne Élie défie-t-il les 450 prophètes de Baal dans cette leçon ?",
      options: ["Le mont Carmel", "Le mont Sinaï", "Le mont des Oliviers", "Le mont Nébo"],
      correctIndex: 0,
      explanation: "Le défi sur le mont Carmel prouve que Jéhovah est le vrai Dieu (1 Rois 18:19-24).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-lie-s2", {
      question: "Après la victoire sur le mont Carmel, que demande Élie à Jéhovah ?",
      options: ["De faire tomber la pluie après une longue sécheresse", "De le nommer roi", "De détruire Israël", "De retirer son esprit"],
      correctIndex: 0,
      explanation: "Élie prie et Jéhovah envoie la pluie, mettant fin à la sécheresse (1 Rois 18:41-45).",
    }),
  ],
  "bjf-j-hovah-est-une-personne-r-elle": [
    q("bjf-j-hovah-est-une-personne-r-elle-s1", {
      question: "Dans cette leçon, Caleb partage-t-il une expérience abstraite ou personnelle avec Jéhovah ?",
      options: ["Une expérience personnelle — Jéhovah lui a répondu", "Une théorie philosophique", "Une légende ancienne", "Une blague"],
      correctIndex: 0,
      explanation: "Caleb montre que Jéhovah est proche et entend nos prières.",
    }),
    q("bjf-j-hovah-est-une-personne-r-elle-s2", {
      question: "Que peut-on faire parce que Jéhovah est une personne réelle ?",
      options: ["Lui parler en prière et développer une amitié avec lui", "L'ignorer complètement", "Le remplacer par des idoles", "Penser qu'il est loin"],
      correctIndex: 0,
      explanation: "Jacques 4:8 dit : « Approchez-vous de Dieu, et il s'approchera de vous ».",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-mefibosheth": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-mefibosheth-s1", {
      question: "Quel handicap Mefibosheth avait-il selon cette leçon ?",
      options: ["Il était estropié des deux pieds", "Il était aveugle", "Il ne pouvait pas parler", "Il était sourd"],
      correctIndex: 0,
      explanation: "Mefibosheth était estropié des deux pieds (2 Samuel 4:4).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-mefibosheth-s2", {
      question: "Où David invite-t-il Mefibosheth à manger régulièrement ?",
      options: ["À sa table, comme l'un de ses fils", "Dans la rue", "En exil", "Au temple seulement"],
      correctIndex: 0,
      explanation: "David traite Mefibosheth avec bonté et l'honore à sa table (2 Samuel 9:7, 11).",
    }),
  ],
  "bjf-bande-annonce-deviens-l-ami-de-j-hovah-j-hovah-est-une-": [
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-j-hovah-est-une--s1", {
      question: "Cette bande-annonce présente quelle leçon principale de la série BJF ?",
      options: ["Jéhovah est une personne réelle avec qui on peut parler", "Jéhovah est une force invisible sans personnalité", "Dieu n'existe pas", "Seuls les adultes peuvent prier"],
      correctIndex: 0,
      explanation: "La bande-annonce introduit la leçon sur la personnalité réelle de Jéhovah.",
    }),
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-j-hovah-est-une--s2", {
      question: "Quel personnage animé de la série partage son expérience dans la leçon annoncée ?",
      options: ["Caleb", "Goliath", "Pharaon", "Baal"],
      correctIndex: 0,
      explanation: "Caleb raconte comment Jéhovah l'a aidé concrètement.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-joseph": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-joseph-s1", {
      question: "Dans cette leçon, que font les frères de Joseph quand ils le voient venir au puits ?",
      options: ["Ils complotent pour le vendre", "Ils l'accueillent avec joie", "Ils lui offrent un trône", "Ils partent prêcher"],
      correctIndex: 0,
      explanation: "Par jalousie, les frères vendent Joseph à des marchands (Genèse 37:28).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-joseph-s2", {
      question: "Malgré l'injustice, que fait Joseph en Égypte grâce à Jéhovah ?",
      options: ["Il devient un administrateur de confiance", "Il devient pharaon", "Il abandonne sa foi", "Il se venge immédiatement"],
      correctIndex: 0,
      explanation: "Jéhovah bénit Joseph qui sert fidèlement même en Égypte (Genèse 39:2-4).",
    }),
  ],
  "bjf-sois-hospitalier": [
    q("bjf-sois-hospitalier-s1", {
      question: "Quel exemple biblique d'hospitalité cette leçon met-elle en avant ?",
      options: ["Abraham accueille des visiteurs avec soin", "Pharaon chasse les étrangers", "Les Sodomites sont hospitaliers", "Baal reçoit des sacrifices"],
      correctIndex: 0,
      explanation: "Abraham accueille généreusement trois visiteurs (Genèse 18:1-8).",
    }),
    q("bjf-sois-hospitalier-s2", {
      question: "Pourquoi montrer de l'hospitalité plaît-il à Jéhovah ?",
      options: ["C'est une expression concrète de l'amour chrétien", "C'est une obligation sans intérêt", "Pour impressionner les voisins", "Pour recevoir de l'argent"],
      correctIndex: 0,
      explanation: "Hébreux 13:2 rappelle que certains ont accueilli des anges sans le savoir.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-josu-et-caleb": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-josu-et-caleb-s1", {
      question: "Combien d'espions sur douze recommandent-ils d'entrer en Canaan avec confiance ?",
      options: ["Deux — Josué et Caleb", "Six", "Tous les douze", "Aucun"],
      correctIndex: 0,
      explanation: "Seuls Josué et Caleb font confiance aux promesses de Jéhovah (Nombres 14:6-9).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-josu-et-caleb-s2", {
      question: "Que disent Josué et Caleb aux Israélites effrayés par les habitants du pays ?",
      options: ["« Jéhovah est avec nous, ne les craignez pas »", "« Retournons en Égypte »", "« Abandonnons la Terre promise »", "« Fuyons sans combattre »"],
      correctIndex: 0,
      explanation: "Josué et Caleb encouragent le peuple à faire confiance à Jéhovah (Nombres 14:9).",
    }),
  ],
  "bjf-tu-pourras-tre-pionnier": [
    q("bjf-tu-pourras-tre-pionnier-s1", {
      question: "Quel jeune personnage de la leçon envisage de devenir pionnier un jour ?",
      options: ["Un enfant qui aime prêcher la bonne nouvelle", "Un soldat romain", "Un pharaon", "Un marchand"],
      correctIndex: 0,
      explanation: "La leçon montre qu'un jeune peut servir Jéhovah de manière accrue.",
    }),
    q("bjf-tu-pourras-tre-pionnier-s2", {
      question: "Que signifie être pionnier selon cette leçon ?",
      options: ["Consacrer plus de temps à prêcher la bonne nouvelle", "Devenir célèbre", "Arrêter d'étudier la Bible", "Voyager pour le plaisir"],
      correctIndex: 0,
      explanation: "Le pionnierat est un service plein temps de prédication.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-abiga-l": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-abiga-l-s1", {
      question: "Quel mari orgueilleux et mauvais Abigaïl est-elle obligée d'apaiser ?",
      options: ["Nabal", "Saül", "Goliath", "Absalom"],
      correctIndex: 0,
      explanation: "Nabal insulte les hommes de David ; Abigaïl intervient avec sagesse (1 Samuel 25:10-11).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-abiga-l-s2", {
      question: "Quels cadeaux Abigaïl apporte-t-elle à David pour calmer sa colère ?",
      options: ["Du pain, du vin, des raisins secs et des figues", "De l'or et des épées", "Rien du tout", "Des idoles"],
      correctIndex: 0,
      explanation: "Abigaïl prépare des provisions généreuses pour apaiser David (1 Samuel 25:18).",
    }),
  ],
  "bjf-le-plus-bel-acte-d-amour": [
    q("bjf-le-plus-bel-acte-d-amour-s1", {
      question: "Quel acte d'amour cette leçon présente-t-elle comme le plus grand ?",
      options: ["Jésus donne sa vie pour nous sauver", "Un cadeau coûteux entre amis", "Une victoire sportive", "Un voyage en vacances"],
      correctIndex: 0,
      explanation: "Jean 15:13 : « Personne n'a un amour plus grand que celui-ci ».",
    }),
    q("bjf-le-plus-bel-acte-d-amour-s2", {
      question: "Pourquoi le sacrifice de Jésus est-il un acte d'amour unique ?",
      options: ["Il ouvre la possibilité du pardon et de la vie éternelle", "Il était obligatoire par la loi romaine", "Il ne change rien pour nous", "Il concerne seulement les Juifs"],
      correctIndex: 0,
      explanation: "Romains 5:8 montre l'amour de Dieu manifesté par le sacrifice du Christ.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-d-borah": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-d-borah-s1", {
      question: "Sous quel arbre Déborah siégeait-elle pour juger Israël ?",
      options: ["Sous le palmier de Déborah", "Sous le chêne de Mamré", "Sous l'olivier de Gethsémané", "Sous le cèdre du Liban"],
      correctIndex: 0,
      explanation: "Déborah siégeait sous le palmier qui porte son nom (Juges 4:4, 5).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-d-borah-s2", {
      question: "Avec qui Déborah encourage-t-elle Israël à combattre les Cananéens ?",
      options: ["Barak", "Saül", "Goliath", "Absalom"],
      correctIndex: 0,
      explanation: "Déborah et Barak remportent la victoire avec l'aide de Jéhovah (Juges 4:6-9).",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-abel": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-abel-s1", {
      question: "Quelle offrande Abel présente-t-il à Jéhovah dans cette leçon ?",
      options: ["Les premiers-nés de son troupeau", "Des fruits pourris", "De l'or", "Des idoles"],
      correctIndex: 0,
      explanation: "Abel offre les premiers-nés de son troupeau avec foi (Genèse 4:4).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-abel-s2", {
      question: "Pourquoi Caïn devient-il jaloux de son frère Abel ?",
      options: ["Parce que Jéhovah agrée l'offrande d'Abel et non la sienne", "Parce qu'Abel est plus riche", "Parce qu'Abel est plus âgé", "Sans raison"],
      correctIndex: 0,
      explanation: "Jéhovah regarda Abel et son offrande, mais pas Caïn (Genèse 4:4, 5).",
    }),
  ],
  "bjf-c-est-dieu-qui-fait-pousser": [
    q("bjf-c-est-dieu-qui-fait-pousser-s1", {
      question: "Quel aspect de la création cette leçon met-elle en avant ?",
      options: ["Jéhovah fait pousser les plantes qui nourrissent les hommes", "Les plantes apparaissent par hasard", "Les hommes créent la nourriture", "La pluie n'a aucun rôle"],
      correctIndex: 0,
      explanation: "Genèse 1:11 montre que Jéhovah a créé la végétation.",
    }),
    q("bjf-c-est-dieu-qui-fait-pousser-s2", {
      question: "Que devrions-nous ressentir en voyant les récoltes pousser ?",
      options: ["De la gratitude envers Jéhovah", "De l'indifférence", "De l'orgueil envers nous-mêmes", "De la peur"],
      correctIndex: 0,
      explanation: "Actes 14:17 : Jéhovah nous donne pluie et saisons fertiles.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-j-r-mie": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-j-r-mie-s1", {
      question: "Quelle excuse Jérémie donne-t-il quand Jéhovah l'appelle à prophétiser ?",
      options: ["« Je suis trop jeune »", "« Je suis trop riche »", "« Je ne parle pas hébreu »", "« Je veux être roi »"],
      correctIndex: 0,
      explanation: "Jérémie dit : « Ah, Seigneur Jéhovah ! Je ne sais pas parler, car je suis un enfant » (Jérémie 1:6).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-j-r-mie-s2", {
      question: "Que fait Jéhovah pour rassurer le jeune Jérémie ?",
      options: ["Il lui dit de ne pas dire qu'il est trop jeune et l'envoie parler", "Il le rejette", "Il le rend roi", "Il le met en prison"],
      correctIndex: 0,
      explanation: "Jéhovah touche la bouche de Jérémie et lui confie sa parole (Jérémie 1:7, 9).",
    }),
  ],
  "bjf-j-hovah-est-notre-p-re": [
    q("bjf-j-hovah-est-notre-p-re-s1", {
      question: "Quelle image Jéhovah utilise-t-il pour décrire son amour pour son peuple ?",
      options: ["L'amour d'un père pour son fils", "L'amour d'un soldat pour son arme", "L'amour d'un marchand pour l'argent", "L'indifférence"],
      correctIndex: 0,
      explanation: "Jérémie 31:9 : « Car je suis devenu un père pour Israël ».",
    }),
    q("bjf-j-hovah-est-notre-p-re-s2", {
      question: "Comment un enfant peut-il renforcer sa relation avec Jéhovah comme Père ?",
      options: ["Par la prière, l'étude et l'obéissance", "En l'ignorant", "En ne lui parlant jamais", "En copiant le monde"],
      correctIndex: 0,
      explanation: "Nous pouvons parler à Jéhovah comme un enfant à un Père aimant.",
    }),
  ],
  "bjf-apprends-avec-les-amis-de-j-hovah-hanania-mishael-et-az": [
    q("bjf-apprends-avec-les-amis-de-j-hovah-hanania-mishael-et-az-s1", {
      question: "Quel roi ordonne à Hanania, Mishael et Azarias de s'incliner devant une statue ?",
      options: ["Nebucadnetsar", "Darius", "Cyrus", "Saül"],
      correctIndex: 0,
      explanation: "Nebucadnetsar dresse une statue d'or et exige qu'on l'adore (Daniel 3:1, 5).",
    }),
    q("bjf-apprends-avec-les-amis-de-j-hovah-hanania-mishael-et-az-s2", {
      question: "Que fait Jéhovah quand les trois amis sont jetés dans la fournaise ardente ?",
      options: ["Il les délivre — même le feu ne les brûle pas", "Il les abandonne", "Il change le roi en statue", "Il les rend invisibles pour toujours"],
      correctIndex: 0,
      explanation: "Jéhovah envoie son ange et les trois hommes sortent indemnes (Daniel 3:25, 27).",
    }),
  ],
  "bjf-tu-es-pr-cieux-pour-j-hovah": [
    q("bjf-tu-es-pr-cieux-pour-j-hovah-s1", {
      question: "Quel oiseau Jésus mentionne-t-il pour montrer que Jéhovah prend soin de nous ?",
      options: ["Les moineaux — aucun ne tombe sans que le Père le sache", "Les aigles seulement", "Les autruches", "Aucun oiseau"],
      correctIndex: 0,
      explanation: "Matthieu 10:29, 31 : vous valez plus que beaucoup de moineaux.",
    }),
    q("bjf-tu-es-pr-cieux-pour-j-hovah-s2", {
      question: "Que signifie être « précieux pour Jéhovah » pour un enfant ?",
      options: ["Jéhovah connaît, aime et valorise chaque enfant qui le sert", "Seuls les parfaits comptent", "Personne n'a de valeur", "La valeur vient des notes scolaires"],
      correctIndex: 0,
      explanation: "Psaume 139:14 : « Je suis une création merveilleuse ».",
    }),
  ],
  "bjf-bande-annonce-deviens-l-ami-de-j-hovah-tu-es-pr-cieux-p": [
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-tu-es-pr-cieux-p-s1", {
      question: "Quel message principal cette bande-annonce transmet-elle aux enfants ?",
      options: ["Chaque enfant a de la valeur aux yeux de Jéhovah", "Seuls les adultes comptent", "Dieu ne s'intéresse pas aux enfants", "Il faut être parfait pour plaire à Dieu"],
      correctIndex: 0,
      explanation: "La leçon « Tu es précieux pour Jéhovah » rassure les jeunes serviteurs.",
    }),
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-tu-es-pr-cieux-p-s2", {
      question: "Cette bande-annonce annonce une leçon sur quelle vérité réconfortante ?",
      options: ["Jéhovah connaît et aime chaque enfant individuellement", "Les enfants doivent se cacher", "La Bible n'est pas pour les jeunes", "Jéhovah est loin"],
      correctIndex: 0,
      explanation: "La bande-annonce invite à découvrir combien Jéhovah accorde de valeur à chacun.",
    }),
  ],
  "bjf-les-tapes-qui-m-nent-au-bapt-me": [
    q("bjf-les-tapes-qui-m-nent-au-bapt-me-s1", {
      question: "Quelle première étape vers le baptême cette leçon mentionne-t-elle ?",
      options: ["Apprendre ce que la Bible enseigne sur Jéhovah", "Se baigner dans une rivière sans préparation", "Devenir célèbre", "Quitter sa famille"],
      correctIndex: 0,
      explanation: "Matthieu 28:19 : faire des disciples en les enseignant.",
    }),
    q("bjf-les-tapes-qui-m-nent-au-bapt-me-s2", {
      question: "Pourquoi le baptême est-il une décision sérieuse selon cette leçon ?",
      options: ["C'est un engagement public envers Jéhovah", "C'est juste une tradition", "Cela ne change rien", "C'est seulement pour les adultes"],
      correctIndex: 0,
      explanation: "Le baptême symbolise la dédicace à Jéhovah (Romains 6:3, 4).",
    }),
  ],
  "bjf-deviens-proclamateur-non-baptis": [
    q("bjf-deviens-proclamateur-non-baptis-s1", {
      question: "Quel jeune personnage de la leçon participe-t-il à la prédication avant son baptême ?",
      options: ["Un enfant qui accompagne ses parents et parle de Jéhovah", "Un soldat", "Un pharaon", "Un marchand"],
      correctIndex: 0,
      explanation: "Les jeunes peuvent servir Jéhovah comme proclamateurs non baptisés.",
    }),
    q("bjf-deviens-proclamateur-non-baptis-s2", {
      question: "Que peut faire un proclamateur non baptisé selon cette leçon ?",
      options: ["Participer activement à la prédication avec l'approbation de ses parents", "Diriger l'assemblée", "Baptiser d'autres", "Rien du tout"],
      correctIndex: 0,
      explanation: "Un jeune peut honorer Jéhovah par la prédication avant le baptême.",
    }),
  ],
  "bjf-qui-choisir-comme-ami": [
    q("bjf-qui-choisir-comme-ami-s1", {
      question: "Quel principe biblique cette leçon applique-t-elle au choix des amis ?",
      options: ["« Les mauvaises compagnies corrompent les bonnes habitudes »", "« Tous les amis sont pareils »", "« L'argent fait les amis »", "« Mieux vaut être seul pour toujours »"],
      correctIndex: 0,
      explanation: "1 Corinthiens 15:33 met en garde contre les mauvaises compagnies.",
    }),
    q("bjf-qui-choisir-comme-ami-s2", {
      question: "Quelle qualité devrions-nous chercher chez un bon ami selon cette leçon ?",
      options: ["Qu'il aime Jéhovah et nous aide à rester fidèles", "Qu'il soit le plus populaire", "Qu'il nous pousse à désobéir", "Qu'il nous fasse mentir"],
      correctIndex: 0,
      explanation: "Proverbes 13:20 : « Celui qui se promène avec les sages deviendra sage ».",
    }),
  ],
  "bjf-bande-annonce-deviens-l-ami-de-j-hovah-qui-choisir-comm": [
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-qui-choisir-comm-s1", {
      question: "Quel sujet pratique cette bande-annonce présente-t-elle aux enfants ?",
      options: ["Comment choisir de bons amis qui aident notre service à Jéhovah", "Comment devenir riche", "Comment éviter l'école", "Comment combattre"],
      correctIndex: 0,
      explanation: "La leçon « Qui choisir comme ami ? » aide les jeunes à faire de bons choix.",
    }),
    q("bjf-bande-annonce-deviens-l-ami-de-j-hovah-qui-choisir-comm-s2", {
      question: "Pourquoi cette leçon est-elle importante pour un jeune serviteur de Jéhovah ?",
      options: ["Les amis influencent fortement nos choix spirituels", "Les amis ne changent rien", "Il vaut mieux ne jamais avoir d'amis", "Seule la famille compte"],
      correctIndex: 0,
      explanation: "De bons amis nous encouragent à aimer Jéhovah.",
    }),
  ],
  "bjf-pourquoi-ob-ir-dieu-alors-qu-on-ne-le-voit-pas": [
    q("bjf-pourquoi-ob-ir-dieu-alors-qu-on-ne-le-voit-pas-s1", {
      question: "Quelle raison principale cette leçon donne-t-elle pour obéir à Jéhovah sans le voir ?",
      options: ["Parce qu'on lui fait confiance et qu'on sait qu'il nous aime", "Parce que c'est facile", "Parce que les autres nous regardent", "Parce qu'on a peur des hommes"],
      correctIndex: 0,
      explanation: "Hébreux 11:1 : « La foi est l'assurance des choses qu'on espère ».",
    }),
    q("bjf-pourquoi-ob-ir-dieu-alors-qu-on-ne-le-voit-pas-s2", {
      question: "Quel exemple d'obéissance sans voir Dieu cette leçon pourrait-elle citer ?",
      options: ["Noé construit l'arche avant de voir le déluge", "Adam mange le fruit", "Jonas fuit initialement", "Les Israélites adorent le veau d'or"],
      correctIndex: 0,
      explanation: "Noé obéit à Jéhovah par la foi avant de voir la pluie (Hébreux 11:7).",
    }),
  ],
  "bjf-ne-baisse-pas-les-bras": [
    q("bjf-ne-baisse-pas-les-bras-s1", {
      question: "Quelle situation difficile le jeune personnage de la leçon affronte-t-il ?",
      options: ["Il est tenté d'abandonner mais continue à servir Jéhovah", "Il devient roi", "Il gagne un concours", "Il ne rencontre aucun problème"],
      correctIndex: 0,
      explanation: "La leçon encourage à persévérer même quand c'est difficile.",
    }),
    q("bjf-ne-baisse-pas-les-bras-s2", {
      question: "Quel verset biblique correspond au message « Ne baisse pas les bras » ?",
      options: ["Galates 6:9 — ne nous lassons pas de faire le bien", "Ecclésiaste 3:1 — il y a un temps pour tout", "Proverbes 1:7 — la crainte de Jéhovah", "Genèse 1:1 — au commencement"],
      correctIndex: 0,
      explanation: "Galates 6:9 promet une moisson si nous ne nous lassons pas.",
    }),
  ],
  "enfants-films-david-il-mettait-sa-confiance-en-j-hovah": [
    q("enfants-films-david-il-mettait-sa-confiance-en-j-hovah-s1", {
      question: "Contre quel géant philistin David se bat-il dans ce film ?",
      options: ["Goliath", "Og", "Sisera", "Absalom"],
      correctIndex: 0,
      explanation: "David affronte Goliath avec une fronde et confiance en Jéhovah (1 Samuel 17:49).",
    }),
    q("enfants-films-david-il-mettait-sa-confiance-en-j-hovah-s2", {
      question: "Quelle arme David utilise-t-il pour vaincre Goliath ?",
      options: ["Une fronde et une pierre", "Une épée de Goliath d'abord", "Une armée de 10 000 hommes", "Un char"],
      correctIndex: 0,
      explanation: "David dit : « Jéhovah ne dépend pas de l'épée ni de la lance » (1 Samuel 17:47).",
    }),
    q("enfants-films-david-il-mettait-sa-confiance-en-j-hovah-s3", {
      question: "Pourquoi Saül hésite-t-il à laisser David combattre Goliath ?",
      options: ["Parce que David est jeune et n'a pas l'expérience d'un guerrier", "Parce que David est roi", "Parce que Goliath est petit", "Parce que David refuse"],
      correctIndex: 0,
      explanation: "Saül dit : « Tu n'es qu'un garçon, et lui est un homme de guerre » (1 Samuel 17:33).",
    }),
  ],
  "enfants-films-no-il-marchait-avec-dieu": [
    q("enfants-films-no-il-marchait-avec-dieu-s1", {
      question: "Combien d'années Noé met-il-il à construire l'arche selon ce film ?",
      options: ["Plusieurs décennies — environ 40 à 50 ans", "Une semaine", "Un an", "Cent jours"],
      correctIndex: 0,
      explanation: "Noé obéit patiemment pendant de longues années (Genèse 6:3, 22).",
    }),
    q("enfants-films-no-il-marchait-avec-dieu-s2", {
      question: "Combien de personnes de la famille de Noé entrent dans l'arche ?",
      options: ["Huit personnes — Noé, sa femme, ses trois fils et leurs femmes", "Deux seulement", "Toute la ville", "Personne"],
      correctIndex: 0,
      explanation: "Seuls Noé et sa famille survivent au déluge (1 Pierre 3:20).",
    }),
    q("enfants-films-no-il-marchait-avec-dieu-s3", {
      question: "Quel signe Jéhovah envoie-t-il après le déluge pour promettre de ne plus détruire la terre par l'eau ?",
      options: ["L'arc-en-ciel", "Une étoile filante", "Un tonnerre", "Une couronne"],
      correctIndex: 0,
      explanation: "Jéhovah place son arc dans les nuages comme signe d'alliance (Genèse 9:13).",
    }),
  ],
  "chansons-enfants-je-vois-j-hovah": [
    q("chansons-enfants-je-vois-j-hovah-s1", {
      question: "Dans la chanson « Je vois Jéhovah », où l'enfant remarque-t-il les œuvres de Jéhovah ?",
      options: ["Dans la nature, les animaux et la vie quotidienne", "Seulement au temple", "Nulle part", "Uniquement dans les livres"],
      correctIndex: 0,
      explanation: "Romains 1:20 : les qualités invisibles de Dieu se voient par les choses créées.",
    }),
    q("chansons-enfants-je-vois-j-hovah-s2", {
      question: "Que nous encourage cette chanson à faire quand nous voyons la création ?",
      options: ["Remercier Jéhovah pour ce qu'il a fait", "Ignorer Dieu", "Admirer seulement nous-mêmes", "Cacher nos sentiments"],
      correctIndex: 0,
      explanation: "Psaume 104:24 : « Que tes œuvres sont nombreuses, ô Jéhovah ! »",
    }),
  ],
  "chansons-enfants-pour-te-faire-des-amis-toi-m-me-sois-un-ami": [
    q("chansons-enfants-pour-te-faire-des-amis-toi-m-me-sois-un-ami-s1", {
      question: "Quel principe cette chanson enseigne-t-elle sur l'amitié ?",
      options: ["Pour avoir de bons amis, il faut d'abord être un bon ami", "Les amis viennent sans effort", "Il faut acheter l'amitié", "Mieux vaut être méchant"],
      correctIndex: 0,
      explanation: "Proverbes 18:24 : « L'homme qui a des amis doit se montrer amical ».",
    }),
    q("chansons-enfants-pour-te-faire-des-amis-toi-m-me-sois-un-ami-s2", {
      question: "Quelle qualité un enfant devrait-il montrer pour se faire des amis selon la chanson ?",
      options: ["Gentillesse, partage et loyauté", "Égoïsme", "Méchanceté", "Indifférence"],
      correctIndex: 0,
      explanation: "L'amour est la qualité distinctive des vrais chrétiens (Jean 13:35).",
    }),
  ],
  "chansons-enfants-j-hovah-est-fier-de-toi": [
    q("chansons-enfants-j-hovah-est-fier-de-toi-s1", {
      question: "Quand Jéhovah est-il « fier » de nous selon cette chanson ?",
      options: ["Quand nous faisons de notre mieux pour lui plaire", "Seulement quand nous sommes parfaits", "Jamais", "Quand nous sommes célèbres"],
      correctIndex: 0,
      explanation: "Proverbes 27:11 : « Mon fils, sois sage et réjouis mon cœur ».",
    }),
    q("chansons-enfants-j-hovah-est-fier-de-toi-s2", {
      question: "Que peut faire un enfant pour rendre Jéhovah heureux selon la chanson ?",
      options: ["Obéir, prier et aider les autres", "Désobéir à ses parents", "Ignorer la Bible", "Se moquer des autres"],
      correctIndex: 0,
      explanation: "1 Samuel 2:26 : Jésus enfant grandissait en sagesse et en grâce.",
    }),
  ],
  "chansons-enfants-j-hovah-je-cours-vers-toi": [
    q("chansons-enfants-j-hovah-je-cours-vers-toi-s1", {
      question: "Que symbolise « courir vers Jéhovah » dans cette chanson ?",
      options: ["Se réfugier près de lui quand on a besoin d'aide", "Fuir loin de Dieu", "Courir un marathon", "Éviter la prière"],
      correctIndex: 0,
      explanation: "Psaume 46:1 : « Dieu est pour nous un refuge et une force ».",
    }),
    q("chansons-enfants-j-hovah-je-cours-vers-toi-s2", {
      question: "Dans quelles situations l'enfant de la chanson « court vers » Jéhovah ?",
      options: ["Quand il a peur, est triste ou a besoin de réconfort", "Seulement quand il joue", "Jamais", "Quand il est en colère contre Dieu"],
      correctIndex: 0,
      explanation: "1 Pierre 5:7 : « Déchargez-vous sur lui de tous vos soucis ».",
    }),
  ],
  "chansons-enfants-ranger-laver-j-aime-a": [
    q("chansons-enfants-ranger-laver-j-aime-a-s1", {
      question: "Quelles tâches ménagères la chanson « Ranger, laver, j'aime ça ! » mentionne-t-elle ?",
      options: ["Ranger et laver — aider à la maison", "Conduire une voiture", "Voter", "Combattre"],
      correctIndex: 0,
      explanation: "Colossiens 3:23 : « Tout ce que vous faites, faites-le de bon cœur ».",
    }),
    q("chansons-enfants-ranger-laver-j-aime-a-s2", {
      question: "Pourquoi aider aux tâches ménagères peut-il être joyeux selon la chanson ?",
      options: ["Parce que servir sa famille plaît à Jéhovah", "Parce que c'est une punition", "Parce que les parents paient", "Parce que c'est obligatoire sans joie"],
      correctIndex: 0,
      explanation: "Servir les autres avec joie honore Jéhovah.",
    }),
  ],
  "chansons-enfants-enfin-l-assembl-e": [
    q("chansons-enfants-enfin-l-assembl-e-s1", {
      question: "Pourquoi les enfants sont-ils contents d'aller à l'assemblée dans cette chanson ?",
      options: ["Ils y apprennent sur Jéhovah et voient leurs amis", "C'est une punition", "Il n'y a rien à faire", "Ils y vont par force seulement"],
      correctIndex: 0,
      explanation: "Hébreux 10:24, 25 encourage à nous assembler.",
    }),
    q("chansons-enfants-enfin-l-assembl-e-s2", {
      question: "Que font les enfants à l'assemblée selon la chanson ?",
      options: ["Écouter, chanter et apprendre", "Dormir seulement", "Jouer sans écouter", "Quitter immédiatement"],
      correctIndex: 0,
      explanation: "L'assemblée est un lieu d'apprentissage pour toute la famille.",
    }),
  ],
  "chansons-enfants-le-fruit-de-l-esprit-apprends-par-c-ur-ses-qualit-s": [
    q("chansons-enfants-le-fruit-de-l-esprit-apprends-par-c-ur-ses-qualit-s-s1", {
      question: "Quelle qualité du fruit de l'esprit commence-t-elle souvent la liste en Galates 5:22 ?",
      options: ["L'amour", "La jalousie", "La colère", "L'orgueil"],
      correctIndex: 0,
      explanation: "Galates 5:22, 23 énumère l'amour, la joie, la paix, etc.",
    }),
    q("chansons-enfants-le-fruit-de-l-esprit-apprends-par-c-ur-ses-qualit-s-s2", {
      question: "Combien de qualités le « fruit de l'esprit » comprend-il selon Galates 5:22, 23 ?",
      options: ["Neuf qualités", "Trois seulement", "Une seule", "Douze"],
      correctIndex: 0,
      explanation: "Amour, joie, paix, patience, bonté, bonté, foi, douceur, maîtrise de soi.",
    }),
  ],
  "chansons-enfants-je-veux-tre-humble-comme-mo-se": [
    q("chansons-enfants-je-veux-tre-humble-comme-mo-se-s1", {
      question: "Pourquoi Moïse est-il décrit comme très humble dans Nombres 12:3 ?",
      options: ["Il ne se mettait pas au-dessus des autres malgré sa position", "Il était orgueilleux", "Il refusait de parler", "Il était roi"],
      correctIndex: 0,
      explanation: "Moïse est « le plus humble de tous les hommes sur la face de la terre ».",
    }),
    q("chansons-enfants-je-veux-tre-humble-comme-mo-se-s2", {
      question: "Que demande cette chanson aux enfants concernant l'humilité ?",
      options: ["Imiter l'humilité de Moïse dans leur vie", "Devenir célèbres", "Dominer les autres", "Refuser d'apprendre"],
      correctIndex: 0,
      explanation: "1 Pierre 5:5 : « Revêtez-vous d'humilité ».",
    }),
  ],
  "chansons-enfants-j-hovah-maman-et-moi": [
    q("chansons-enfants-j-hovah-maman-et-moi-s1", {
      question: "Qui prie avec l'enfant dans la chanson « Jéhovah, maman et moi » ?",
      options: ["Sa maman — ensemble ils parlent à Jéhovah", "Personne", "Un soldat", "Un roi"],
      correctIndex: 0,
      explanation: "Les parents peuvent enseigner à leurs enfants à prier (Deutéronome 6:7).",
    }),
    q("chansons-enfants-j-hovah-maman-et-moi-s2", {
      question: "Quel lien familial cette chanson met-elle en avant ?",
      options: ["L'amour entre maman, enfant et Jéhovah", "La dispute", "L'isolement", "L'indifférence"],
      correctIndex: 0,
      explanation: "Le culte familial renforce les liens avec Jéhovah.",
    }),
  ],
  "chansons-enfants-on-a-h-te-de-te-voir": [
    q("chansons-enfants-on-a-h-te-de-te-voir-s1", {
      question: "Qui les amis ont-ils hâte de revoir dans cette chanson ?",
      options: ["Leurs amis du Royaume à l'assemblée ou aux réunions", "Des personnages de télévision", "Des inconnus", "Personne"],
      correctIndex: 0,
      explanation: "L'affection entre amis spirituels est une joie du service.",
    }),
    q("chansons-enfants-on-a-h-te-de-te-voir-s2", {
      question: "Quel sentiment positif cette chanson exprime-t-elle ?",
      options: ["L'impatience joyeuse de retrouver ses amis", "La colère", "L'envie", "La peur"],
      correctIndex: 0,
      explanation: "Romains 12:10 : « Aimez-vous ardemment les uns les autres ».",
    }),
  ],
  "chansons-enfants-mon-tout-petit": [
    q("chansons-enfants-mon-tout-petit-s1", {
      question: "À qui s'adresse la chanson « Mon tout-petit » ?",
      options: ["À un bébé ou très jeune enfant chéri par sa famille", "À un soldat", "À un roi", "À un animal"],
      correctIndex: 0,
      explanation: "La chanson célèbre l'amour tendre d'un parent pour son enfant.",
    }),
    q("chansons-enfants-mon-tout-petit-s2", {
      question: "Quel message sur la valeur des tout-petits cette chanson transmet-elle ?",
      options: ["Chaque enfant est un cadeau précieux de Jéhovah", "Les bébés n'ont pas de valeur", "Seuls les adultes comptent", "Les enfants gênent"],
      correctIndex: 0,
      explanation: "Psaume 127:3 : « Les fils sont un héritage de Jéhovah ».",
    }),
  ],
  "chansons-enfants-david-un-exemple-pour-les-jeunes": [
    q("chansons-enfants-david-un-exemple-pour-les-jeunes-s1", {
      question: "Quel métier David exerçait-il quand il combattit Goliath ?",
      options: ["Berger — il gardait les moutons de son père", "Roi", "Soldat professionnel", "Prêtre"],
      correctIndex: 0,
      explanation: "David était berger avant de devenir roi (1 Samuel 16:11).",
    }),
    q("chansons-enfants-david-un-exemple-pour-les-jeunes-s2", {
      question: "Pourquoi David est-il un bon exemple pour les jeunes dans cette chanson ?",
      options: ["Il faisait confiance à Jéhovah dès son jeune âge", "Il était parfait", "Il ne connaissait pas Dieu", "Il était toujours roi"],
      correctIndex: 0,
      explanation: "David a combattu Goliath en comptant sur Jéhovah (1 Samuel 17:37).",
    }),
  ],
  "chansons-enfants-ruth-une-vraie-amie": [
    q("chansons-enfants-ruth-une-vraie-amie-s1", {
      question: "Quelle belle-mère Ruth refuse-t-elle d'abandonner dans cette chanson ?",
      options: ["Naomi", "Esther", "Déborah", "Marie"],
      correctIndex: 0,
      explanation: "Ruth dit : « Là où tu habiteras j'habiterai, ton peuple sera mon peuple » (Ruth 1:16).",
    }),
    q("chansons-enfants-ruth-une-vraie-amie-s2", {
      question: "Quelle qualité de Ruth la chanson met-elle en avant ?",
      options: ["Sa loyauté envers Naomi et Jéhovah", "Sa richesse", "Sa colère", "Son orgueil"],
      correctIndex: 0,
      explanation: "Ruth est un modèle de loyauté et d'amour (Ruth 2:11, 12).",
    }),
  ],
  "chansons-enfants-marie-humble-et-volontaire": [
    q("chansons-enfants-marie-humble-et-volontaire-s1", {
      question: "Comment Marie répond-elle à l'ange Gabriel dans la Bible ?",
      options: ["« Voici la servante de Jéhovah ; qu'il m'arrive selon ta parole »", "« Je refuse »", "« Je ne crois pas »", "« Je suis roi »"],
      correctIndex: 0,
      explanation: "Marie accepte humblement la mission que Jéhovah lui confie (Luc 1:38).",
    }),
    q("chansons-enfants-marie-humble-et-volontaire-s2", {
      question: "Quelles deux qualités le titre « humble et volontaire » attribue-t-il à Marie ?",
      options: ["Humilité et disposition à servir Jéhovah", "Orgueil et paresse", "Colère et peur", "Indifférence"],
      correctIndex: 0,
      explanation: "Marie est un exemple de soumission volontaire à la volonté de Dieu.",
    }),
  ],
  "chansons-enfants-connais-tu-les-douze-ap-tres": [
    q("chansons-enfants-connais-tu-les-douze-ap-tres-s1", {
      question: "Combien d'apôtres Jésus choisit-il selon cette chanson ?",
      options: ["Douze", "Sept", "Quatre", "Cent"],
      correctIndex: 0,
      explanation: "Jésus choisit douze apôtres pour être avec lui (Marc 3:14).",
    }),
    q("chansons-enfants-connais-tu-les-douze-ap-tres-s2", {
      question: "Quel apôtre trahit Jésus et est mentionné dans la liste des douze ?",
      options: ["Judas Iscariot", "Pierre seulement comme traître", "Jean", "Matthieu"],
      correctIndex: 0,
      explanation: "Judas Iscariot fait partie des douze mais le trahit (Matthieu 26:14, 15).",
    }),
  ],
  "chansons-enfants-l-amour-c-est-la-vie": [
    q("chansons-enfants-l-amour-c-est-la-vie-s1", {
      question: "Selon cette chanson, d'où vient la vraie vie ?",
      options: ["De l'amour — surtout l'amour de Jéhovah", "De l'argent", "De la célébrité", "De la chance"],
      correctIndex: 0,
      explanation: "1 Jean 4:8 : « Dieu est amour ».",
    }),
    q("chansons-enfants-l-amour-c-est-la-vie-s2", {
      question: "Comment l'amour est-il lié à la vie selon le message de la chanson ?",
      options: ["Aimer Jéhovah et les autres donne un sens à la vie", "L'amour n'a aucun rapport", "Seul plaisir compte", "L'amour est une faiblesse"],
      correctIndex: 0,
      explanation: "Matthieu 22:37-39 résume la loi en amour de Dieu et du prochain.",
    }),
  ],
  "ados-spiritualite-la-bible-peut-elle-vraiment-t-aider": [
    q("ados-spiritualite-la-bible-peut-elle-vraiment-t-aider-s1", {
      question: "Quel jeune de la vidéo découvre que la Bible répond à ses questions personnelles ?",
      options: ["Un adolescent qui lit la Bible et trouve des conseils pratiques", "Un roi antique", "Un pharaon", "Un soldat romain"],
      correctIndex: 0,
      explanation: "2 Timothée 3:16 : « Toute Écriture est inspirée de Dieu et utile pour enseigner ».",
    }),
    q("ados-spiritualite-la-bible-peut-elle-vraiment-t-aider-s2", {
      question: "Quel sujet concret la Bible peut-elle aider un adolescent à gérer ?",
      options: ["Le stress, les amis et les choix moraux", "Seulement l'histoire ancienne", "Rien de pratique", "Comment devenir riche"],
      correctIndex: 0,
      explanation: "Psaume 119:105 : « Ta parole est une lampe à mes pieds ».",
    }),
  ],
  "ados-spiritualite-pourquoi-tre-honn-te": [
    q("ados-spiritualite-pourquoi-tre-honn-te-s1", {
      question: "Quel exemple négatif cette vidéo montre-t-elle quand on ment ?",
      options: ["On perd la confiance des autres et on déplaît à Jéhovah", "On devient populaire", "On gagne toujours", "Rien ne change"],
      correctIndex: 0,
      explanation: "Proverbes 12:22 : « Jéhovah a en horreur des lèvres mensongères ».",
    }),
    q("ados-spiritualite-pourquoi-tre-honn-te-s2", {
      question: "Pourquoi l'honnêteté vaut-elle la peine même quand mentir semble plus facile ?",
      options: ["Jéhovah valorise l'intégrité et protège ceux qui sont honnêtes", "Personne ne remarque", "Mentir est toujours meilleur", "L'honnêteté ne sert à rien"],
      correctIndex: 0,
      explanation: "Proverbes 10:9 : « Celui qui marche dans l'intégrité marche en sécurité ».",
    }),
  ],
  "ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-richesse": [
    q("ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-richesse-s1", {
      question: "Quel danger cette vidéo associe-t-elle spécifiquement à la richesse ?",
      options: ["Elle peut disparaître et ne pas apporter le vrai bonheur", "Elle garantit le bonheur éternel", "Elle remplace Jéhovah", "Elle ne pose aucun problème"],
      correctIndex: 0,
      explanation: "1 Timothée 6:10 : « L'amour de l'argent est une racine de toutes sortes de vices ».",
    }),
    q("ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-richesse-s2", {
      question: "Dans quoi cette vidéo encourage-t-elle plutôt à mettre sa confiance ?",
      options: ["En Jéhovah et en son Royaume permanent", "En la loterie", "En la célébrité", "En soi seul"],
      correctIndex: 0,
      explanation: "Matthieu 6:19, 20 : amassez-vous des trésors dans le ciel.",
    }),
  ],
  "ados-spiritualite-on-peut-faire-plus-en-ayant-des-attentes-raisonnables": [
    q("ados-spiritualite-on-peut-faire-plus-en-ayant-des-attentes-raisonnables-s1", {
      question: "Que signifie avoir des « attentes raisonnables » selon cette vidéo ?",
      options: ["Ne pas exiger la perfection de soi-même ni des autres", "Ne jamais essayer", "Exiger l'impossible", "Abandonner tout effort"],
      correctIndex: 0,
      explanation: "Des attentes réalistes nous aident à progresser sans découragement.",
    }),
    q("ados-spiritualite-on-peut-faire-plus-en-ayant-des-attentes-raisonnables-s2", {
      question: "Comment des attentes raisonnables nous aident-elles à « faire plus » ?",
      options: ["Elles nous évitent le découragement et nous motivent à continuer", "Elles nous empêchent de servir", "Elles remplacent la prière", "Elles éliminent tout effort"],
      correctIndex: 0,
      explanation: "Galates 6:4 : « Que chacun examine sa propre conduite ».",
    }),
  ],
  "ados-spiritualite-comment-bien-g-rer-ton-argent": [
    q("ados-spiritualite-comment-bien-g-rer-ton-argent-s1", {
      question: "Quel principe biblique cette vidéo applique-t-elle à la gestion de l'argent ?",
      options: ["Budgéter, éviter les dettes et être généreux", "Dépenser sans limite", "Emprunter le maximum", "Ignorer ses finances"],
      correctIndex: 0,
      explanation: "Proverbes 21:5 : « Les plans du diligent mènent sûrement à l'abondance ».",
    }),
    q("ados-spiritualite-comment-bien-g-rer-ton-argent-s2", {
      question: "Pourquoi un adolescent devrait-il apprendre à gérer son argent tôt ?",
      options: ["Pour développer de bonnes habitudes qui honorent Jéhovah", "Pour devenir riche à tout prix", "Pour impressionner ses amis", "Pour éviter de travailler"],
      correctIndex: 0,
      explanation: "Luc 16:10 : celui qui est fidèle dans les petites choses l'est aussi dans les grandes.",
    }),
  ],
  "ados-spiritualite-ne-laisse-pas-ta-vie-partir-en-fum-e": [
    q("ados-spiritualite-ne-laisse-pas-ta-vie-partir-en-fum-e-s1", {
      question: "Quelle habitude destructrice cette vidéo met-elle en garde — d'où le titre « partir en fumée » ?",
      options: ["Le tabagisme et les addictions qui détruisent la santé", "L'exercice physique", "La prière", "L'étude biblique"],
      correctIndex: 0,
      explanation: "2 Corinthiens 7:1 : « Purifions-nous de toute souillure de la chair ».",
    }),
    q("ados-spiritualite-ne-laisse-pas-ta-vie-partir-en-fum-e-s2", {
      question: "Pourquoi commencer à fumer jeune est-il particulièrement dangereux ?",
      options: ["L'addiction peut durer toute la vie et nuire au service", "C'est sans conséquence", "C'est bon pour la santé", "Jéhovah l'approuve"],
      correctIndex: 0,
      explanation: "Notre corps est un don de Jéhovah à chérir (1 Corinthiens 6:19, 20).",
    }),
  ],
  "ados-spiritualite-les-jeux-vid-o-c-est-qui-le-vrai-gagnant": [
    q("ados-spiritualite-les-jeux-vid-o-c-est-qui-le-vrai-gagnant-s1", {
      question: "Qui est le « vrai gagnant » selon cette vidéo — celui qui gagne en jeu ou autre chose ?",
      options: ["Celui qui garde des priorités saines et sert Jéhovah", "Celui qui joue le plus longtemps", "Celui qui dépense le plus", "Celui qui néglige le sommeil"],
      correctIndex: 0,
      explanation: "Les loisirs doivent rester équilibrés avec le service à Jéhovah.",
    }),
    q("ados-spiritualite-les-jeux-vid-o-c-est-qui-le-vrai-gagnant-s2", {
      question: "Quel danger les jeux vidéo excessifs peuvent-ils poser pour un serviteur de Jéhovah ?",
      options: ["Vol de temps précieux pour l'étude, la prière et le service", "Aucun danger", "Amélioration automatique de la spiritualité", "Remplacement de la Bible"],
      correctIndex: 0,
      explanation: "Éphésiens 5:15, 16 : « Achetez le temps opportun ».",
    }),
  ],
  "ados-spiritualite-triste-ou-optimiste": [
    q("ados-spiritualite-triste-ou-optimiste-s1", {
      question: "Quelle perspective biblique cette vidéo propose-t-elle face à la tristesse ?",
      options: ["Jéhovah comprend nos émotions et nous donne de l'espoir", "Il faut toujours être triste", "Dieu ne se soucie pas", "L'optimisme est interdit"],
      correctIndex: 0,
      explanation: "Romains 15:13 : « Que le Dieu qui donne l'espérance vous remplisse de joie ».",
    }),
    q("ados-spiritualite-triste-ou-optimiste-s2", {
      question: "Comment un adolescent peut-il cultiver une attitude optimiste selon la vidéo ?",
      options: ["Méditer sur les promesses de Jéhovah et compter ses bénédictions", "Ignorer tous ses problèmes", "Cacher ses émotions", "Blâmer les autres"],
      correctIndex: 0,
      explanation: "Philippiens 4:6, 7 : la prière apporte la paix de Dieu.",
    }),
  ],
  "ados-spiritualite-comment-communiquer-avec-mes-parents": [
    q("ados-spiritualite-comment-communiquer-avec-mes-parents-s1", {
      question: "Quel conseil pratique cette vidéo donne-t-elle pour parler à ses parents ?",
      options: ["Choisir le bon moment, écouter et parler avec respect", "Crier pour se faire entendre", "Ne jamais parler", "Mentir pour éviter les conflits"],
      correctIndex: 0,
      explanation: "Colossiens 3:20 : « Obéissez à vos parents en toutes choses ».",
    }),
    q("ados-spiritualite-comment-communiquer-avec-mes-parents-s2", {
      question: "Pourquoi une bonne communication avec ses parents est-elle importante ?",
      options: ["Ils veulent notre bonheur et peuvent nous guider selon la Bible", "Ils ne comprennent jamais rien", "La communication est inutile", "Seuls les amis comptent"],
      correctIndex: 0,
      explanation: "Proverbes 1:8 : « Écoute, mon fils, l'instruction de ton père ».",
    }),
  ],
  "ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-disparaitre": [
    q("ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-disparaitre-s1", {
      question: "Outre la richesse, quels autres exemples de choses « qui disparaissent » cette vidéo cite-t-elle ?",
      options: ["La célébrité, les possessions matérielles et les plaisirs temporaires", "Jéhovah et son Royaume", "La Bible", "L'amour familial"],
      correctIndex: 0,
      explanation: "1 Jean 2:17 : « Le monde passe et sa désir ».",
    }),
    q("ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-disparaitre-s2", {
      question: "Quelle promesse permanente cette vidéo oppose-t-elle aux choses temporaires ?",
      options: ["Le Royaume de Jéhovah et la vie éternelle", "La richesse éternelle sur terre", "La célébrité permanente", "Rien n'est permanent"],
      correctIndex: 0,
      explanation: "Matthieu 6:33 : « Cherchez d'abord le royaume ».",
    }),
  ],
  "ados-spiritualite-fuyez-toute-conduite-sexuelle-immorale": [
    q("ados-spiritualite-fuyez-toute-conduite-sexuelle-immorale-s1", {
      question: "Pourquoi la Bible dit-elle de « fuir » l'immoralité sexuelle plutôt que de la combattre seul ?",
      options: ["Parce que s'éloigner est souvent la meilleure protection", "Parce que c'est sans danger", "Parce que Jéhovah tolère l'immoralité", "Parce que tout est permis"],
      correctIndex: 0,
      explanation: "1 Corinthiens 6:18 : « Fuyez l'immoralité sexuelle ».",
    }),
    q("ados-spiritualite-fuyez-toute-conduite-sexuelle-immorale-s2", {
      question: "Quel effet l'immoralité sexuelle peut-elle avoir sur notre relation avec Jéhovah ?",
      options: ["Elle l'endommage et nous cause du chagrin", "Elle la renforce", "Aucun effet", "Elle est approuvée"],
      correctIndex: 0,
      explanation: "Galates 5:19-21 met en garde contre les œuvres de la chair.",
    }),
  ],
  "ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux": [
    q("ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-s1", {
      question: "Qui sont les « lâches » que cette vidéo nous met en garde d'imiter ?",
      options: ["Les habitants de Méroz qui n'ont pas aidé Barak", "Barak et Déborah", "Josué et Caleb", "Les anges"],
      correctIndex: 0,
      explanation: "Juges 5:23 maudit Méroz pour son indifférence face au combat de Jéhovah.",
    }),
    q("ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-s2", {
      question: "Quel exemple de courage cette vidéo présente-t-elle ?",
      options: ["Des serviteurs de Jéhovah qui agissent malgré la peur", "Ceux qui fuient leur responsabilité", "Ceux qui renient leur foi", "Les indifférents"],
      correctIndex: 0,
      explanation: "Josué 1:9 : « Sois fort et courageux ».",
    }),
  ],
  "ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-pas-les-hab": [
    q("ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-pas-les-hab-s1", {
      question: "Quelle femme courageuse cette vidéo courte met-elle en avant à la place des habitants de Méroz ?",
      options: ["Jael", "Déborah seulement comme lâche", "Esther comme lâche", "Marie comme lâche"],
      correctIndex: 0,
      explanation: "Jael agit avec courage contre Sisera (Juges 4:21, 22).",
    }),
    q("ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-pas-les-hab-s2", {
      question: "Que fit Jael que les habitants de Méroz avaient refusé de faire ?",
      options: ["Elle prit part au combat pour la cause de Jéhovah", "Elle fuit le combat", "Elle trahit Israël", "Elle resta indifférente"],
      correctIndex: 0,
      explanation: "Jael est bénie dans le cantique de Déborah (Juges 5:24).",
    }),
  ],
  "ados-spiritualite-des-jeunes-qui-apprennent-aimer-la-parole-de-dieu": [
    q("ados-spiritualite-des-jeunes-qui-apprennent-aimer-la-parole-de-dieu-s1", {
      question: "Que font les jeunes de cette vidéo pour apprendre à aimer la Bible ?",
      options: ["Ils étudient, méditent et appliquent ce qu'ils lisent", "Ils ignorent la Bible", "Ils la lisent sans réfléchir", "Ils la remplacent par Internet"],
      correctIndex: 0,
      explanation: "Psaume 1:2 : « Son plaisir est dans la loi de Jéhovah, et il medite jour et nuit ».",
    }),
    q("ados-spiritualite-des-jeunes-qui-apprennent-aimer-la-parole-de-dieu-s2", {
      question: "Quel bénéfice ces jeunes tirent-ils de l'étude régulière de la Bible ?",
      options: ["Ils grandissent spirituellement et prennent de meilleures décisions", "Ils deviennent populaires", "Ils n'apprennent rien", "Ils perdent du temps"],
      correctIndex: 0,
      explanation: "2 Timothée 3:15 : les Écritures rendent sage pour le salut.",
    }),
  ],
  "ados-spiritualite-nous-devons-courir-avec-endurance-alimentons-nous-saine": [
    q("ados-spiritualite-nous-devons-courir-avec-endurance-alimentons-nous-saine-s1", {
      question: "Quelle métaphore sportive Paul utilise-t-il dans Hébreux 12:1 ?",
      options: ["Courir avec endurance la course qui nous est ouverte", "Nager sans effort", "Dormir longtemps", "Abandonner la course"],
      correctIndex: 0,
      explanation: "Hébreux 12:1 : « Courons avec endurance la course qui nous est ouverte ».",
    }),
    q("ados-spiritualite-nous-devons-courir-avec-endurance-alimentons-nous-saine-s2", {
      question: "Comment « nous alimenter sainement » selon cette vidéo ?",
      options: ["Par l'étude biblique, la prière et les réunions chrétiennes", "Par la malnutrition spirituelle", "En ignorant Jéhovah", "En suivant le monde"],
      correctIndex: 0,
      explanation: "Matthieu 4:4 : « L'homme ne vivra pas de pain seulement, mais de toute parole de Jéhovah ».",
    }),
  ],
  "ados-spiritualite-dieu-conna-t-les-secrets-du-c-ur": [
    q("ados-spiritualite-dieu-conna-t-les-secrets-du-c-ur-s1", {
      question: "Que signifie que Jéhovah « connaît les secrets du cœur » (Psaume 44:21) ?",
      options: ["Il voit nos pensées et motivations profondes", "Il ne nous connaît pas", "Seuls les autres nous jugent", "Rien n'est important"],
      correctIndex: 0,
      explanation: "Jérémie 17:10 : « Moi, Jéhovah, je sonde le cœur ».",
    }),
    q("ados-spiritualite-dieu-conna-t-les-secrets-du-c-ur-s2", {
      question: "Pourquoi cette vérité devrait-elle nous encourager à être sincères ?",
      options: ["On ne peut rien cacher à Jéhovah — il voit qui nous sommes vraiment", "On peut tromper Jéhovah", "L'apparence suffit", "Dieu ne se soucie pas"],
      correctIndex: 0,
      explanation: "1 Samuel 16:7 : Jéhovah regarde le cœur, pas l'apparence.",
    }),
  ],
  "ados-spiritualite-stephen-lett-jeunes-gens-j-hovah-vous-aime": [
    q("ados-spiritualite-stephen-lett-jeunes-gens-j-hovah-vous-aime-s1", {
      question: "Quel message personnel Stephen Lett adresse-t-il aux jeunes dans cette vidéo ?",
      options: ["Jéhovah vous aime et tient à chacun de vous", "Les jeunes ne comptent pas", "Le service n'est pas pour vous", "Abandonnez votre foi"],
      correctIndex: 0,
      explanation: "Jéhovah accorde une place spéciale aux jeunes serviteurs.",
    }),
    q("ados-spiritualite-stephen-lett-jeunes-gens-j-hovah-vous-aime-s2", {
      question: "Pourquoi un jeune peut-il être encouragé en sachant que Jéhovah l'aime ?",
      options: ["Cela lui donne confiance pour servir Jéhovah malgré les défis", "Cela ne change rien", "Cela le rend orgueilleux", "Cela l'isole"],
      correctIndex: 0,
      explanation: "1 Jean 4:19 : « Nous l'aimons, parce qu'il nous a aimés le premier ».",
    }),
  ],
  "ados-spiritualite-le-retour-d-un-fils": [
    q("ados-spiritualite-le-retour-d-un-fils-s1", {
      question: "Quelle parabole de Jésus ce film « Le retour d'un fils » illustre-t-il ?",
      options: ["Le fils prodigue", "Le bon Samaritain", "Le semeur", "Les dix vierges"],
      correctIndex: 0,
      explanation: "Luc 15:11-32 raconte le fils qui revient et est accueilli par son père.",
    }),
    q("ados-spiritualite-le-retour-d-un-fils-s2", {
      question: "Comment le père accueille-t-il son fils quand il revient ?",
      options: ["Avec joie, un festin et un manteau neuf", "Avec colère et rejet", "En l'ignorant", "En le chassant"],
      correctIndex: 0,
      explanation: "Le père court vers son fils et l'embrasse (Luc 15:20).",
    }),
    q("ados-spiritualite-le-retour-d-un-fils-s3", {
      question: "Que représente le père dans cette parabole ?",
      options: ["Jéhovah qui accueille avec joie celui qui revient sincèrement", "Un roi terrestre", "Un juge cruel", "Un étranger"],
      correctIndex: 0,
      explanation: "Jéhovah réjouit du repentir sincère (Luc 15:7).",
    }),
  ],
  "ados-spiritualite-le-retour-d-un-fils-interviews": [
    q("ados-spiritualite-le-retour-d-un-fils-interviews-s1", {
      question: "Que partagent les jeunes dans les interviews de « Le retour d'un fils » ?",
      options: ["Comment la parabole les a touchés personnellement", "Des recettes de cuisine", "Des scores sportifs", "Rien de spirituel"],
      correctIndex: 0,
      explanation: "Les interviews montrent l'impact personnel de la parabole.",
    }),
    q("ados-spiritualite-le-retour-d-un-fils-interviews-s2", {
      question: "Quelle leçon les jeunes retiennent-ils souvent de cette parabole ?",
      options: ["Jéhovah pardonne et accueille celui qui revient à lui", "Il est trop tard pour revenir", "Le père rejette toujours", "La famille n'a pas d'importance"],
      correctIndex: 0,
      explanation: "Luc 15:24 : « Mon fils mort est redevenu vivant ».",
    }),
  ],
  "ados-spiritualite-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-la": [
    q("ados-spiritualite-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-la-s1", {
      question: "Quel aspect de « Que vais-je faire de ma vie ? » cette vidéo courte met-elle en avant ?",
      options: ["La valeur de l'étude biblique individuelle pour trouver sa voie", "Comment devenir riche", "Comment éviter l'école", "Comment devenir célèbre"],
      correctIndex: 0,
      explanation: "L'étude personnelle aide à fixer des objectifs qui honorent Jéhovah.",
    }),
    q("ados-spiritualite-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-la-s2", {
      question: "Pourquoi l'étude individuelle aide-t-elle à répondre à « Que vais-je faire de ma vie ? »",
      options: ["Elle permet de connaître les principes de Jéhovah pour nos décisions", "Elle remplace la prière", "Elle est inutile", "Elle concerne seulement les anciens"],
      correctIndex: 0,
      explanation: "Josué 1:8 : « Tu mediteras jour et nuit sur ce livre de la loi ».",
    }),
  ],
  "ados-social-comment-devrais-tu-consid-rer-les-personnes-g-es": [
    q("ados-social-comment-devrais-tu-consid-rer-les-personnes-g-es-s1", {
      question: "Quel principe biblique cette vidéo applique-t-elle envers les personnes âgées ?",
      options: ["Les honorer et leur montrer du respect", "Les ignorer", "Se moquer d'eux", "Les éviter"],
      correctIndex: 0,
      explanation: "Lévitique 19:32 : « Tu te lèveras devant les cheveux gris ».",
    }),
    q("ados-social-comment-devrais-tu-consid-rer-les-personnes-g-es-s2", {
      question: "Pourquoi les personnes âgées méritent-elles notre considération ?",
      options: ["Elles ont de l'expérience et beaucoup à nous apprendre", "Elles sont moins importantes", "Elles ne comptent pas", "Pour les impressionner"],
      correctIndex: 0,
      explanation: "Job 12:12 : « La sagesse est chez les cheveux gris ».",
    }),
  ],
  "ados-social-il-y-a-un-temps-fix-pour-tout-nouer-des-amiti-s-demande": [
    q("ados-social-il-y-a-un-temps-fix-pour-tout-nouer-des-amiti-s-demande-s1", {
      question: "Quel verset biblique inspire le titre « Il y a un temps fixé pour tout » ?",
      options: ["Ecclésiaste 3:1", "Genèse 1:1", "Apocalypse 21:4", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "Ecclésiaste 3:1 : « Il y a un temps fixé pour tout ».",
    }),
    q("ados-social-il-y-a-un-temps-fix-pour-tout-nouer-des-amiti-s-demande-s2", {
      question: "Pourquoi nouer de vraies amitiés « demande du temps » selon cette vidéo ?",
      options: ["La confiance et la loyauté se construisent progressivement", "On devient amis en une heure", "Les amis ne sont pas importants", "Il vaut mieux être seul"],
      correctIndex: 0,
      explanation: "Proverbes 17:17 : « Un véritable ami aime en tout temps ».",
    }),
  ],
  "ados-social-sois-malin-reste-propre": [
    q("ados-social-sois-malin-reste-propre-s1", {
      question: "Que signifie « sois malin » dans le sens biblique de cette vidéo ?",
      options: ["Agir avec sagesse et discernement", "Tromper les autres", "Être naïf", "Suivre la foule"],
      correctIndex: 0,
      explanation: "Matthieu 10:16 : « Soyez prudents comme les serpents ».",
    }),
    q("ados-social-sois-malin-reste-propre-s2", {
      question: "« Reste propre » dans cette vidéo concerne surtout quoi ?",
      options: ["La propreté morale — éviter l'immoralité sexuelle", "Seulement se laver les mains", "Porter des vêtements neufs", "Nettoyer sa chambre"],
      correctIndex: 0,
      explanation: "2 Corinthiens 7:1 : purifions-nous de toute souillure de la chair.",
    }),
  ],
  "ados-social-qu-est-ce-qu-un-pr-jug": [
    q("ados-social-qu-est-ce-qu-un-pr-jug-s1", {
      question: "Qu'est-ce qu'un préjugé selon cette vidéo ?",
      options: ["Un jugement injuste basé sur des idées fausses avant de connaître la personne", "Une opinion fondée sur des faits", "Un compliment", "Une vérité biblique"],
      correctIndex: 0,
      explanation: "Jacques 2:1 met en garde contre les préjugés.",
    }),
    q("ados-social-qu-est-ce-qu-un-pr-jug-s2", {
      question: "Comment combattre les préjugés selon la vidéo ?",
      options: ["Connaître les gens et appliquer l'amour chrétien", "Suivre ses impressions", "Éviter tout le monde", "Se moquer des différences"],
      correctIndex: 0,
      explanation: "Colossiens 3:11 : « Il n'y a ni Grec ni Juif… mais Christ est toutes choses ».",
    }),
  ],
  "ados-social-ce-que-tu-dois-savoir-sur-le-sport": [
    q("ados-social-ce-que-tu-dois-savoir-sur-le-sport-s1", {
      question: "Quel équilibre cette vidéo recommande-t-elle concernant le sport ?",
      options: ["Profiter du sport sans qu'il devienne une idole", "Abandonner le service pour le sport", "Devenir professionnel à tout prix", "Éviter tout exercice"],
      correctIndex: 0,
      explanation: "1 Corinthiens 9:25 : les athlètes s'imposent une discipline — nous aussi pour le Royaume.",
    }),
    q("ados-social-ce-que-tu-dois-savoir-sur-le-sport-s2", {
      question: "Quel danger le sport excessif ou compétitif peut-il poser ?",
      options: ["Vol de temps pour les activités spirituelles", "Aucun danger", "Amélioration automatique de la foi", "Remplacement de la Bible"],
      correctIndex: 0,
      explanation: "Nos priorités doivent honorer Jéhovah (Matthieu 6:33).",
    }),
  ],
  "ados-social-boire-ou-pas-dans-tous-les-cas-pense-aux-d-g-ts": [
    q("ados-social-boire-ou-pas-dans-tous-les-cas-pense-aux-d-g-ts-s1", {
      question: "Quels dégâts l'alcool peut-il causer même sans être alcoolique ?",
      options: ["Accidents, mauvaises décisions et problèmes de santé", "Aucun dégât", "Sagesse accrue", "Popularité garantie"],
      correctIndex: 0,
      explanation: "Proverbes 20:1 : « Le vin est moqueur ».",
    }),
    q("ados-social-boire-ou-pas-dans-tous-les-cas-pense-aux-d-g-ts-s2", {
      question: "Pourquoi un serviteur de Jéhovah évite-t-il l'alcool ?",
      options: ["Pour garder l'esprit clair et plaire à Jéhovah", "Parce que c'est à la mode", "Sans raison", "Pour impressionner"],
      correctIndex: 0,
      explanation: "Éphésiens 5:18 : « Ne vous enivrez pas de vin ».",
    }),
  ],
  "ados-social-les-appareils-lectroniques-qui-contr-le-qui": [
    q("ados-social-les-appareils-lectroniques-qui-contr-le-qui-s1", {
      question: "Quelle question centrale pose cette vidéo sur les appareils électroniques ?",
      options: ["Est-ce que nous contrôlons nos appareils ou l'inverse ?", "Comment acheter le plus d'appareils", "Comment jouer 24h/24", "Comment éviter l'école grâce au téléphone"],
      correctIndex: 0,
      explanation: "Nous devons maîtriser la technologie, pas en être esclaves.",
    }),
    q("ados-social-les-appareils-lectroniques-qui-contr-le-qui-s2", {
      question: "Quel conseil pratique cette vidéo donne-t-elle sur l'utilisation du téléphone ?",
      options: ["Fixer des limites pour ne pas négliger Jéhovah et les autres", "Utiliser sans aucune limite", "Cacher son téléphone aux parents", "Ignorer la famille pour le téléphone"],
      correctIndex: 0,
      explanation: "Éphésiens 5:15, 16 : achetez le temps opportun.",
    }),
  ],
  "ados-social-comment-arr-ter-les-bruits-qui-courent": [
    q("ados-social-comment-arr-ter-les-bruits-qui-courent-s1", {
      question: "Que sont les « bruits qui courent » dans cette vidéo ?",
      options: ["Les rumeurs et commérages qui blessent les autres", "La musique forte", "Le bruit de la circulation", "Les chants à l'assemblée"],
      correctIndex: 0,
      explanation: "Proverbes 26:20 : sans bois, le feu s'éteint — sans commérage, la querelle s'arrête.",
    }),
    q("ados-social-comment-arr-ter-les-bruits-qui-courent-s2", {
      question: "Comment arrêter une rumeur selon la vidéo ?",
      options: ["Ne pas la répandre et ne pas l'écouter", "L'amplifier", "L'inventer", "La publier en ligne"],
      correctIndex: 0,
      explanation: "1 Pierre 4:8 : « L'amour couvre une multitude de péchés ».",
    }),
  ],
  "ados-social-se-pr-parer-au-mariage-calculer-la-d-pense-3e-partie": [
    q("ados-social-se-pr-parer-au-mariage-calculer-la-d-pense-3e-partie-s1", {
      question: "Que signifie « calculer la dépense » dans le contexte du mariage (Luc 14:28) ?",
      options: ["Planifier financièrement avant de se marier", "Dépenser sans compter", "Éviter le mariage", "Emprunter le maximum"],
      correctIndex: 0,
      explanation: "Luc 14:28 : « Qui de vous, voulant bâtir une tour, ne s'assied d'abord pour calculer la dépense ? »",
    }),
    q("ados-social-se-pr-parer-au-mariage-calculer-la-d-pense-3e-partie-s2", {
      question: "Pourquoi la préparation financière est-elle importante avant le mariage ?",
      options: ["Pour éviter le stress et honorer Jéhovah dans la gestion", "Pour impressionner les invités", "Pour devenir riche", "Ce n'est pas important"],
      correctIndex: 0,
      explanation: "Proverbes 21:5 : les plans du diligent mènent à l'abondance.",
    }),
  ],
  "ados-social-est-ce-de-l-amour-ou-du-b-guin": [
    q("ados-social-est-ce-de-l-amour-ou-du-b-guin-s1", {
      question: "Quelle différence cette vidéo établit-elle entre amour et béguin ?",
      options: ["L'amour véritable respecte les principes de Dieu ; le béguin est une attirance passagère", "C'est exactement la même chose", "Le béguin dure toujours", "L'amour ignore la Bible"],
      correctIndex: 0,
      explanation: "1 Corinthiens 13:4-7 décrit le vrai amour.",
    }),
    q("ados-social-est-ce-de-l-amour-ou-du-b-guin-s2", {
      question: "Pourquoi un adolescent devrait-il attendre avant de penser au mariage ?",
      options: ["Pour mûrir spirituellement et émotionnellement", "Parce que l'amour n'existe pas", "Pour devenir célèbre", "Sans raison"],
      correctIndex: 0,
      explanation: "La patience et la sagesse protègent notre avenir (Proverbes 19:2).",
    }),
  ],
  "ados-social-r-siste-la-pression-du-groupe": [
    q("ados-social-r-siste-la-pression-du-groupe-s1", {
      question: "Quelle situation cette vidéo illustre-t-elle avec la pression du groupe ?",
      options: ["Des amis poussent à faire quelque chose de mal", "Des amis encouragent à servir Jéhovah", "Personne n'influence personne", "La pression n'existe pas"],
      correctIndex: 0,
      explanation: "Exode 23:2 : « Ne suis pas la foule pour faire le mal ».",
    }),
    q("ados-social-r-siste-la-pression-du-groupe-s2", {
      question: "Comment résister à la pression du groupe selon la vidéo ?",
      options: ["Rester ferme sur ses convictions bibliques et chercher de bons amis", "Suivre tout le monde", "Renier sa foi", "Avoir honte de Jéhovah"],
      correctIndex: 0,
      explanation: "Daniel 3:16-18 : les trois amis restent fidèles malgré la pression.",
    }),
  ],
  "ados-social-r-seaux-sociaux-ne-te-laisse-pas-avoir": [
    q("ados-social-r-seaux-sociaux-ne-te-laisse-pas-avoir-s1", {
      question: "Quel piège des réseaux sociaux cette vidéo met-elle en garde ?",
      options: ["Partager trop d'informations personnelles et suivre de mauvaises influences", "Utiliser Internet pour étudier", "Parler à sa famille", "Lire la Bible en ligne"],
      correctIndex: 0,
      explanation: "Proverbes 22:3 : « Le prudent voit le danger et se cache ».",
    }),
    q("ados-social-r-seaux-sociaux-ne-te-laisse-pas-avoir-s2", {
      question: "Que devrait-on éviter de publier sur les réseaux sociaux ?",
      options: ["Des informations privées, des photos compromettantes et des propos blessants", "Des versets bibliques", "Des messages positifs", "Rien — tout est acceptable"],
      correctIndex: 0,
      explanation: "Éphésiens 4:29 : « Que votre parole soit toujours accompagnée de grâce ».",
    }),
  ],
  "ados-social-qu-est-ce-qu-un-vrai-ami": [
    q("ados-social-qu-est-ce-qu-un-vrai-ami-s1", {
      question: "Quelle qualité distingue un vrai ami selon cette vidéo ?",
      options: ["Il nous aide à aimer Jéhovah et à faire le bien", "Il nous pousse à désobéir", "Il nous flatte toujours", "Il nous isole des autres"],
      correctIndex: 0,
      explanation: "Proverbes 17:17 : « Un véritable ami aime en tout temps ».",
    }),
    q("ados-social-qu-est-ce-qu-un-vrai-ami-s2", {
      question: "Quel verset résume l'amitié véritable dans la Bible ?",
      options: ["Proverbes 17:17 — un véritable ami aime en tout temps", "Ecclésiaste 3:1", "Genèse 1:1", "Apocalypse 22:21"],
      correctIndex: 0,
      explanation: "Un vrai ami reste loyal dans les bons et mauvais moments.",
    }),
  ],
  "ados-social-mets-un-harceleur-k-o-sans-utiliser-les-poings": [
    q("ados-social-mets-un-harceleur-k-o-sans-utiliser-les-poings-s1", {
      question: "Comment « mettre K.-O. un harceleur sans utiliser les poings » selon la vidéo ?",
      options: ["Ignorer les provocations, parler à un adulte et rester calme", "Se battre", "Harceler en retour", "Se venger"],
      correctIndex: 0,
      explanation: "Romains 12:17 : « Ne rendez pas mal pour mal ».",
    }),
    q("ados-social-mets-un-harceleur-k-o-sans-utiliser-les-poings-s2", {
      question: "À qui un adolescent devrait-il parler s'il est harcelé ?",
      options: ["À ses parents ou à un adulte de confiance", "Personne", "Seulement à ses amis", "Au harceleur seulement"],
      correctIndex: 0,
      explanation: "Les parents et les anciens peuvent aider à résoudre le problème.",
    }),
  ],
  "ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis": [
    q("ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-s1", {
      question: "Quel jeune personnage du film cherche à se faire de vrais amis ?",
      options: ["Un adolescent qui apprend à choisir des amis qui aiment Jéhovah", "Un pharaon", "Un soldat", "Un roi"],
      correctIndex: 0,
      explanation: "Le film montre des situations réelles de la vie d'un adolescent.",
    }),
    q("ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-s2", {
      question: "Où le jeune du film trouve-t-il de bons amis ?",
      options: ["À l'assemblée et parmi ceux qui servent Jéhovah", "Dans de mauvaises compagnies", "En ligne seulement", "Nulle part"],
      correctIndex: 0,
      explanation: "Psaume 119:63 : « Je suis l'ami de tous ceux qui te craignent ».",
    }),
    q("ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-s3", {
      question: "Quelle leçon principale ce film enseigne-t-il sur l'amitié ?",
      options: ["De vrais amis nous encouragent spirituellement", "Les amis ne comptent pas", "Il faut suivre la foule", "Mieux vaut être seul pour toujours"],
      correctIndex: 0,
      explanation: "Proverbes 13:20 : celui qui marche avec les sages deviendra sage.",
    }),
  ],
  "ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-interviews": [
    q("ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-interviews-s1", {
      question: "Que partagent les jeunes dans les interviews de ce film ?",
      options: ["Leurs expériences personnelles pour se faire de bons amis", "Des recettes", "Des scores sportifs", "Rien d'utile"],
      correctIndex: 0,
      explanation: "Les témoignages montrent comment appliquer les principes bibliques.",
    }),
    q("ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-interviews-s2", {
      question: "Quel conseil revient souvent dans les interviews sur l'amitié ?",
      options: ["Chercher des amis à l'assemblée qui aiment Jéhovah", "Éviter tout le monde", "Suivre les amis du monde", "Ne jamais parler"],
      correctIndex: 0,
      explanation: "1 Corinthiens 15:33 : les mauvaises compagnies corrompent les bonnes habitudes.",
    }),
  ],
  "ados-films-qu-est-ce-que-le-vrai-amour": [
    q("ados-films-qu-est-ce-que-le-vrai-amour-s1", {
      question: "Quel couple biblique ce film « Qu'est-ce que le vrai amour ? » utilise-t-il comme exemple positif ?",
      options: ["Joseph et Marie — ils obéissent à Jéhovah dans leur mariage", "Adam et Ève après la chute", "Hérode et Hérodiade", "Ananias et Saphira"],
      correctIndex: 0,
      explanation: "Joseph et Marie font confiance à Jéhovah dans leur vie de couple.",
    }),
    q("ados-films-qu-est-ce-que-le-vrai-amour-s2", {
      question: "Quelle qualité du vrai amour ce film met-il en avant en 1 Corinthiens 13 ?",
      options: ["L'amour est patient, il est bondé de bonté", "L'amour est égoïste", "L'amour est jaloux", "L'amour est temporaire seulement"],
      correctIndex: 0,
      explanation: "1 Corinthiens 13:4-7 décrit les qualités du vrai amour.",
    }),
    q("ados-films-qu-est-ce-que-le-vrai-amour-s3", {
      question: "Comment le vrai amour se manifeste-t-il dans un mariage chrétien selon le film ?",
      options: ["Par le respect mutuel et l'application des principes bibliques", "Par la domination", "Par l'indifférence", "Par l'égoïsme"],
      correctIndex: 0,
      explanation: "Éphésiens 5:25-33 décrit l'amour dans le mariage chrétien.",
    }),
  ],
  "ados-films-poursuivez-des-objectifs-qui-honorent-dieu": [
    q("ados-films-poursuivez-des-objectifs-qui-honorent-dieu-s1", {
      question: "Quel jeune du film apprend-il à fixer des objectifs spirituels ?",
      options: ["Un adolescent qui choisit de servir Jéhovah pleinement", "Un pharaon", "Un soldat romain", "Un marchand"],
      correctIndex: 0,
      explanation: "Le film montre comment honorer Dieu par nos choix de vie.",
    }),
    q("ados-films-poursuivez-des-objectifs-qui-honorent-dieu-s2", {
      question: "Quel objectif le film encourage-t-il plutôt que la réussite matérielle seule ?",
      options: ["Servir Jéhovah et aider les autres", "Devenir riche", "Devenir célèbre", "Vivre sans but"],
      correctIndex: 0,
      explanation: "Matthieu 6:33 : cherchez d'abord le royaume.",
    }),
    q("ados-films-poursuivez-des-objectifs-qui-honorent-dieu-s3", {
      question: "Pourquoi poursuivre des objectifs qui honorent Dieu est-il plus satisfaisant ?",
      options: ["Cela donne un sens durable à la vie", "C'est sans intérêt", "Cela empêche le bonheur", "Cela concerne seulement les anciens"],
      correctIndex: 0,
      explanation: "Écclésiaste 12:13 : « La conclusion de toute parole entendue : Crains le vrai Dieu ».",
    }),
  ],
  "ados-films-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie": [
    q("ados-films-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-s1", {
      question: "Quelle question centrale les jeunes du film se posent-ils ?",
      options: ["« Que vais-je faire de ma vie ? »", "« Comment devenir riche ? »", "« Comment éviter l'école ? »", "« Comment devenir célèbre ? »"],
      correctIndex: 0,
      explanation: "Le film explore les choix d'avenir des adolescents.",
    }),
    q("ados-films-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-s2", {
      question: "Quel facteur aide les jeunes du film à prendre de bonnes décisions ?",
      options: ["Consulter Jéhovah par la prière et l'étude biblique", "Suivre la foule", "Ignorer leurs parents", "Décider impulsivement"],
      correctIndex: 0,
      explanation: "Proverbes 3:5, 6 : « Confie-toi à Jéhovah de tout ton cœur ».",
    }),
    q("ados-films-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-s3", {
      question: "Quel type d'objectifs le film encourage-t-il les jeunes à poursuivre ?",
      options: ["Des objectifs spirituels qui honorent Jéhovah", "La richesse à tout prix", "La célébrité", "Aucun objectif"],
      correctIndex: 0,
      explanation: "Jérémie 29:11 : Jéhovah a des pensées de paix pour nous.",
    }),
  ],
  "famille-les-secrets-d-un-mariage-heureux-lire-la-parole-de-dieu": [
    q("famille-les-secrets-d-un-mariage-heureux-lire-la-parole-de-dieu-s1", {
      question: "Quel « secret » d'un mariage heureux cette vidéo présente-t-elle en premier ?",
      options: ["Lire et appliquer la Parole de Dieu ensemble", "Éviter toute discussion", "Chacun pour soi", "Ignorer la Bible"],
      correctIndex: 0,
      explanation: "Éphésiens 5:22-33 guide le mariage chrétien.",
    }),
    q("famille-les-secrets-d-un-mariage-heureux-lire-la-parole-de-dieu-s2", {
      question: "Pourquoi lire la Bible ensemble renforce-t-il le mariage ?",
      options: ["Cela unit le couple autour des principes de Jéhovah", "Cela crée des disputes", "C'est une perte de temps", "Seul un époux doit lire"],
      correctIndex: 0,
      explanation: "Deutéronome 6:6, 7 encourage à parler de la Parole à la maison.",
    }),
  ],
  "famille-avec-patience-supportons-nous-les-uns-les-autres-dans-l": [
    q("famille-avec-patience-supportons-nous-les-uns-les-autres-dans-l-s1", {
      question: "Quel aspect familial cette vidéo met-elle en avant avec Éphésiens 4:2 ?",
      options: ["Élever les enfants avec patience et amour", "Ignorer les enfants", "Punir sans amour", "Laisser les enfants sans guide"],
      correctIndex: 0,
      explanation: "Éphésiens 4:2 : « Supportez-vous les uns les autres avec patience ».",
    }),
    q("famille-avec-patience-supportons-nous-les-uns-les-autres-dans-l-s2", {
      question: "Comment les parents peuvent-ils « se supporter » avec leurs enfants ?",
      options: ["En restant calmes et en enseignant avec douceur", "En criant toujours", "En abandonnant", "En comparant les enfants"],
      correctIndex: 0,
      explanation: "Colossiens 3:21 : « Pères, n'exaspérez pas vos enfants ».",
    }),
  ],
  "famille-les-secrets-d-un-mariage-heureux-quand-on-n-est-pas-d-a": [
    q("famille-les-secrets-d-un-mariage-heureux-quand-on-n-est-pas-d-a-s1", {
      question: "Que conseille cette vidéo quand un couple chrétien n'est pas d'accord ?",
      options: ["Communiquer calmement et appliquer les principes bibliques", "Crier jusqu'à gagner", "Ignorer le problème", "Abandonner le mariage"],
      correctIndex: 0,
      explanation: "Jacques 1:19 : « Que tout homme soit prompt à écouter, lent à parler, lent à la colère ».",
    }),
    q("famille-les-secrets-d-un-mariage-heureux-quand-on-n-est-pas-d-a-s2", {
      question: "Quel principe biblique aide à résoudre les désaccords dans le mariage ?",
      options: ["L'humilité et le pardon mutuel", "L'orgueil", "La vengeance", "Le silence permanent"],
      correctIndex: 0,
      explanation: "Colossiens 3:13 : « Continuez à vous pardonner mutuellement ».",
    }),
  ],
  "famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-predication": [
    q("famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-predication-s1", {
      question: "Quelle situation de prédication cette vidéo illustre-t-elle ?",
      options: ["Faire preuve de patience quand les gens sont indifférents ou impolis", "Abandonner la prédication", "Se disputer avec les gens", "Prêcher avec colère"],
      correctIndex: 0,
      explanation: "2 Corinthiens 6:4 : « Nous nous recommandons comme serviteurs de Dieu… par la patience ».",
    }),
    q("famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-predication-s2", {
      question: "Pourquoi la patience est-elle essentielle en prédication ?",
      options: ["Certaines personnes ont besoin de temps pour réagir à la bonne nouvelle", "La patience est inutile", "Il faut forcer les gens", "La prédication ne sert à rien"],
      correctIndex: 0,
      explanation: "2 Pierre 3:9 : Jéhovah est patient, ne voulant pas qu'aucun ne périsse.",
    }),
  ],
  "famille-mieux-vaut-tre-patient-qu-avoir-l-esprit-hautain-imiton": [
    q("famille-mieux-vaut-tre-patient-qu-avoir-l-esprit-hautain-imiton-s1", {
      question: "Quel personnage biblique illustre l'impatience dans cette vidéo ?",
      options: ["Ésaü qui vend son droit d'aînesse pour un plat de lentilles", "Jacob seulement comme mauvais exemple", "Moïse", "Noé"],
      correctIndex: 0,
      explanation: "Ésaü méprisa son droit d'aînesse par impatience (Genèse 25:29-34).",
    }),
    q("famille-mieux-vaut-tre-patient-qu-avoir-l-esprit-hautain-imiton-s2", {
      question: "Quelle qualité de Jacob cette vidéo met-elle en avant ?",
      options: ["Sa patience en attendant la bénédiction de Jéhovah", "Sa violence", "Son mensonge seulement", "Son orgueil"],
      correctIndex: 0,
      explanation: "Proverbes 16:32 : « Mieux vaut être patient qu'avoir l'esprit hautain ».",
    }),
  ],
  "famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p": [
    q("famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-s1", {
      question: "Quel verset inspire le titre de cette vidéo sur la patience ?",
      options: ["2 Corinthiens 6:4", "Genèse 1:1", "Apocalypse 21:4", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "2 Corinthiens 6:4 : « Nous nous recommandons… par la patience ».",
    }),
    q("famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-s2", {
      question: "Dans quelles situations un chrétien doit-il faire preuve de patience selon la vidéo ?",
      options: ["En prédication, en famille et face aux épreuves", "Jamais", "Seulement au travail", "Seulement en public"],
      correctIndex: 0,
      explanation: "Romains 12:12 : « Perseverez dans la prière… soyez patients ».",
    }),
  ],
  "famille-la-langue-du-c-ur": [
    q("famille-la-langue-du-c-ur-s1", {
      question: "Que signifie parler la « langue du cœur » dans le contexte familial ?",
      options: ["Communiquer avec sincérité et amour, pas seulement avec des mots", "Mentir poliment", "Se taire toujours", "Critiquer les autres"],
      correctIndex: 0,
      explanation: "1 Pierre 3:8 : « Ayez tous un même sentiment d'amour ».",
    }),
    q("famille-la-langue-du-c-ur-s2", {
      question: "Pourquoi la communication sincère est-elle vitale dans la famille ?",
      options: ["Elle renforce l'unité et la confiance", "Elle crée des conflits", "Elle est inutile", "Seuls les mots comptent"],
      correctIndex: 0,
      explanation: "Proverbes 15:23 : « La réponse qu'on donne au bon moment, combien est bonne ! »",
    }),
  ],
  "famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-darr": [
    q("famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-darr-s1", {
      question: "Quel témoignage de couple cette vidéo présente-t-elle ?",
      options: ["Darrel et Deborah Freisinger — leur expérience de paix véritable", "Pharaon et sa femme", "Hérode et Hérodiade", "Ananias et Saphira"],
      correctIndex: 0,
      explanation: "Le couple partage comment la vraie paix vient de Jéhovah.",
    }),
    q("famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-darr-s2", {
      question: "Qu'est-ce qu'une « paix illusoire » selon cette vidéo ?",
      options: ["Une fausse sécurité sans obéissance sincère à Jéhovah", "La vraie paix de Dieu", "La prière", "L'étude biblique"],
      correctIndex: 0,
      explanation: "Jérémie 6:14 : « Ils guérissent légèrement la plaie de mon peuple ».",
    }),
  ],
  "famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-chib": [
    q("famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-chib-s1", {
      question: "Quel témoignage personnel cette vidéo présente-t-elle ?",
      options: ["Chibisa Selemani — comment il a trouvé la vraie paix", "Moïse", "David", "Saül"],
      correctIndex: 0,
      explanation: "Chibisa partage son expérience de paix fondée sur Jéhovah.",
    }),
    q("famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-chib-s2", {
      question: "Comment distinguer la vraie paix de Jéhovah d'une paix illusoire ?",
      options: ["La vraie paix vient de l'obéissance à Jéhovah", "Toute paix est identique", "La paix n'existe pas", "Seul le confort matériel compte"],
      correctIndex: 0,
      explanation: "Jean 14:27 : « Je vous laisse la paix, je vous donne ma paix ».",
    }),
  ],
  "famille-suivez-le-guide-essentiel-la-paix-dans-la-famille": [
    q("famille-suivez-le-guide-essentiel-la-paix-dans-la-famille-s1", {
      question: "Quel « guide essentiel » cette vidéo recommande-t-elle pour la paix familiale ?",
      options: ["La Bible — la Parole de Jéhovah", "Les magazines séculiers", "Les réseaux sociaux", "Les traditions humaines"],
      correctIndex: 0,
      explanation: "Psaume 119:105 : « Ta parole est une lampe à mes pieds ».",
    }),
    q("famille-suivez-le-guide-essentiel-la-paix-dans-la-famille-s2", {
      question: "Quel principe biblique cette vidéo applique-t-elle à la paix dans la famille ?",
      options: ["Appliquer l'amour, le pardon et la communication", "Ignorer les problèmes", "Chacun pour soi", "La colère permanente"],
      correctIndex: 0,
      explanation: "Colossiens 3:13-14 : revêtez-vous d'amour, qui est un lien parfait d'unité.",
    }),
  ],
  "famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-mo-": [
    q("famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-mo--s1", {
      question: "Quel contraste cette vidéo établit-elle entre Moïse et Pharaon ?",
      options: ["Moïse obéit à Jéhovah ; Pharaon s'endurcit", "Pharaon est un homme de foi", "Moïse abandonne Jéhovah", "Ils sont identiques"],
      correctIndex: 0,
      explanation: "Moïse choisit de souffrir avec le peuple de Dieu (Hébreux 11:24-27).",
    }),
    q("famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-mo--s2", {
      question: "Pourquoi imiter Moïse plutôt que Pharaon ?",
      options: ["Moïse fait confiance à Jéhovah malgré les difficultés", "Pharaon est plus puissant", "Moïse est roi d'Égypte", "Pharaon libère Israël"],
      correctIndex: 0,
      explanation: "Hébreux 11:27 : Moïse endure comme voyant celui qui est invisible.",
    }),
  ],
  "famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-no-": [
    q("famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-no--s1", {
      question: "Quel contraste cette vidéo établit-elle entre Noé et ses contemporains ?",
      options: ["Noé obéit et construit l'arche ; les autres ignorent l'avertissement", "Tous construisent une arche", "Noé refuse d'obéir", "Personne n'est averti"],
      correctIndex: 0,
      explanation: "Noé est un prédicateur de justice (2 Pierre 2:5).",
    }),
    q("famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-no--s2", {
      question: "Que peut apprendre une famille de la foi de Noé ?",
      options: ["Obéir à Jéhovah même quand les autres se moquent", "Suivre la foule", "Ignorer les avertissements", "Abandonner la foi"],
      correctIndex: 0,
      explanation: "Hébreux 11:7 : Noé construisit l'arche par la foi.",
    }),
  ],
  "bible-epoque-respectons-l-autorit-de-j-hovah": [
    q("bible-epoque-respectons-l-autorit-de-j-hovah-s1", {
      question: "Quel roi de Juda ce film « Respectons l'autorité de Jéhovah » met-il en avant ?",
      options: ["Josias", "Saül", "Jéroboam", "Achab"],
      correctIndex: 0,
      explanation: "Josias restaura le vrai culte et respecta l'autorité de Jéhovah (2 Rois 22-23).",
    }),
    q("bible-epoque-respectons-l-autorit-de-j-hovah-s2", {
      question: "Que découvre Josias en réparant le temple ?",
      options: ["Le rouleau de la loi — le livre de la loi", "Un trésor d'or", "Une idole", "Rien"],
      correctIndex: 0,
      explanation: "La découverte du rouleau pousse Josias à une réforme (2 Rois 22:8-13).",
    }),
    q("bible-epoque-respectons-l-autorit-de-j-hovah-s3", {
      question: "Pourquoi respecter l'autorité de Jéhovah protège-t-il un peuple ?",
      options: ["Obéir à Jéhovah apporte bénédiction et vie", "L'obéissance est inutile", "Jéhovah est lointain", "Seuls les rois comptent"],
      correctIndex: 0,
      explanation: "Deutéronome 28:1-2 : l'obéissance apporte des bénédictions.",
    }),
  ],
  "bible-epoque-des-exemples-qui-nous-servent-d-avertissement": [
    q("bible-epoque-des-exemples-qui-nous-servent-d-avertissement-s1", {
      question: "Quel verset explique pourquoi ces exemples bibliques nous servent d'avertissement ?",
      options: ["1 Corinthiens 10:11", "Genèse 1:1", "Apocalypse 22:21", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "1 Corinthiens 10:11 : « Ces choses leur sont arrivées pour servir d'exemples ».",
    }),
    q("bible-epoque-des-exemples-qui-nous-servent-d-avertissement-s2", {
      question: "Quel exemple négatif ce film pourrait-il illustrer ?",
      options: ["Les Israélites qui murmurèrent et n'entrèrent pas en Canaan", "Josué et Caleb", "Noé", "Abraham"],
      correctIndex: 0,
      explanation: "Nombres 14:22-23 : la génération incrédule ne vit pas la Terre promise.",
    }),
    q("bible-epoque-des-exemples-qui-nous-servent-d-avertissement-s3", {
      question: "Pourquoi étudier les mauvais exemples bibliques ?",
      options: ["Pour éviter de répéter les mêmes erreurs", "Pour les imiter", "Par curiosité seulement", "Sans utilité"],
      correctIndex: 0,
      explanation: "Romains 15:4 : les choses écrites d'avance nous enseignent.",
    }),
  ],
  "bible-epoque-pas-une-seule-parole-n-a-failli": [
    q("bible-epoque-pas-une-seule-parole-n-a-failli-s1", {
      question: "Quel roi de Juda ce film « Pas une seule parole n'a failli » présente-t-il ?",
      options: ["Ézékias", "Manassé jeune", "Achab", "Saül"],
      correctIndex: 0,
      explanation: "Ézékias fit confiance à Jéhovah face à Sennachérib (2 Rois 18-19).",
    }),
    q("bible-epoque-pas-une-seule-parole-n-a-failli-s2", {
      question: "Comment Jéhovah sauve-t-il Jérusalem du siège assyrien ?",
      options: ["Un ange frappe 185 000 soldats", "Ézékias combat seul", "Les Assyriens gagnent", "Jérusalem est détruite"],
      correctIndex: 0,
      explanation: "2 Rois 19:35 : l'ange de Jéhovah frappe le camp assyrien.",
    }),
    q("bible-epoque-pas-une-seule-parole-n-a-failli-s3", {
      question: "Que prouve l'accomplissement des prophéties dans ce récit ?",
      options: ["Les promesses de Jéhovah ne faillissent jamais", "La Bible est fausse", "Dieu change d'avis", "Rien ne s'accomplit"],
      correctIndex: 0,
      explanation: "Josué 21:45 : « Pas une seule de toutes les bonnes paroles… n'a failli ».",
    }),
  ],
  "bible-epoque-pas-une-seule-parole-n-a-failli-extrait": [
    q("bible-epoque-pas-une-seule-parole-n-a-failli-extrait-s1", {
      question: "Quel moment fort de l'histoire d'Ézékias cet extrait met-il en avant ?",
      options: ["La prière d'Ézékias et la délivrance de Jérusalem", "La construction de l'arche", "Le baptême de Jésus", "La résurrection de Lazare"],
      correctIndex: 0,
      explanation: "Ézékias prie et Jéhovah répond par une délivrance miraculeuse.",
    }),
    q("bible-epoque-pas-une-seule-parole-n-a-failli-extrait-s2", {
      question: "Pourquoi Ézékias envoie-t-il des messagers à Ésaïe en temps de crise ?",
      options: ["Pour chercher le conseil de Jéhovah par son prophète", "Pour capituler", "Pour fuir", "Pour négocier avec les idoles"],
      correctIndex: 0,
      explanation: "Ézékias fait confiance à la parole de Jéhovah par Ésaïe (2 Rois 19:2-7).",
    }),
  ],
  "bible-epoque-l-histoire-de-jonas-une-le-on-de-courage-et-de-mis-rico": [
    q("bible-epoque-l-histoire-de-jonas-une-le-on-de-courage-et-de-mis-rico-s1", {
      question: "Où Jéhovah envoie-t-il Jonas pour prêcher ?",
      options: ["Ninive", "Jérusalem", "Babylone", "Égypte"],
      correctIndex: 0,
      explanation: "Jonas reçoit la mission d'avertir Ninive (Jonas 1:2).",
    }),
    q("bible-epoque-l-histoire-de-jonas-une-le-on-de-courage-et-de-mis-rico-s2", {
      question: "Comment Jonas est-il d'abord puni pour avoir fui sa mission ?",
      options: ["Il est avalé par un grand poisson", "Il devient roi", "Il est ignoré", "Il gagne un trésor"],
      correctIndex: 0,
      explanation: "Jonas passe trois jours dans le ventre du poisson (Jonas 1:17).",
    }),
    q("bible-epoque-l-histoire-de-jonas-une-le-on-de-courage-et-de-mis-rico-s3", {
      question: "Quelle leçon de miséricorde Jonas apprend-il à Ninive ?",
      options: ["Jéhovah pardonne quand les gens se repentent sincèrement", "Jéhovah ne pardonne jamais", "La repentance est inutile", "Ninive est détruite immédiatement"],
      correctIndex: 0,
      explanation: "Jonas 3:10 : Jéhovah voit leur repentir et renonce au mal.",
    }),
  ],
  "bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance": [
    q("bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-s1", {
      question: "Quel roi de Juda est au centre de ce film « Ô Jéhovah, en toi j'ai placé ma confiance ! » ?",
      options: ["Ézékias", "Josias", "Manassé", "Saül"],
      correctIndex: 0,
      explanation: "Ézékias place sa confiance en Jéhovah face à l'Assyrie (2 Rois 18:5).",
    }),
    q("bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-s2", {
      question: "Quelle maladie Ézékias contracte-t-il dans ce récit ?",
      options: ["Une maladie mortelle — un ulcère", "Une cécité seulement", "Une paralysie", "Aucune maladie"],
      correctIndex: 0,
      explanation: "Ézékias tombe malade et Jéhovah prolonge sa vie (2 Rois 20:1-6).",
    }),
    q("bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-s3", {
      question: "Quel signe Jéhovah donne-t-il à Ézékias pour confirmer sa promesse ?",
      options: ["L'ombre recule de dix degrés sur le cadran solaire", "Un arc-en-ciel", "Un tremblement de terre", "Une couronne"],
      correctIndex: 0,
      explanation: "2 Rois 20:9-11 : le signe confirme la parole de Jéhovah.",
    }),
  ],
  "bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-extrait": [
    q("bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-extrait-s1", {
      question: "Quel verset inspire le titre de ce film et de cet extrait ?",
      options: ["Psaume 31:14 — « Ô Jéhovah, en toi j'ai placé ma confiance »", "Genèse 1:1", "Apocalypse 21:4", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "Ézékias fait confiance à Jéhovah dans l'épreuve (Psaume 31:14).",
    }),
    q("bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-extrait-s2", {
      question: "Que montre cet extrait sur la foi d'Ézékias ?",
      options: ["Il prie avec ferveur quand sa vie est menacée", "Il abandonne Jéhovah", "Il se rend aux Assyriens", "Il ignore la prière"],
      correctIndex: 0,
      explanation: "La prière sincère d'Ézékias touche Jéhovah (2 Rois 20:2-3).",
    }),
  ],
  "bible-epoque-sauve-nous-s-il-te-pla-t": [
    q("bible-epoque-sauve-nous-s-il-te-pla-t-s1", {
      question: "Quelle situation de détresse ce court métrage « Sauve-nous, s'il te plaît » illustre-t-il ?",
      options: ["Des serviteurs de Jéhovah priant pour être sauvés dans l'épreuve", "Un banquet royal", "Une victoire sportive", "Une construction d'arche"],
      correctIndex: 0,
      explanation: "Psaume 109:26 : « Aide-moi, ô Jéhovah mon Dieu ; sauve-moi ».",
    }),
    q("bible-epoque-sauve-nous-s-il-te-pla-t-s2", {
      question: "Qui peut répondre à la prière « Sauve-nous, s'il te plaît » ?",
      options: ["Jéhovah — il entend et délivre ses serviteurs", "Les idoles", "Les hommes seuls", "Personne"],
      correctIndex: 0,
      explanation: "Psaume 34:17 : « Jéhovah entend et les délivre de toutes leurs détresses ».",
    }),
  ],
  "bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-1": [
    q("bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-1-s1", {
      question: "Quel jeune personnage de la partie 1 apprend-il à laisser Jéhovah guider sa vie ?",
      options: ["Un adolescent confronté à des choix importants pour son avenir", "Un pharaon", "Un soldat romain", "Un roi d'Israël"],
      correctIndex: 0,
      explanation: "Proverbes 3:5, 6 : « Confie-toi à Jéhovah de tout ton cœur ».",
    }),
    q("bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-1-s2", {
      question: "Que signifie « laisser Jéhovah tracer ton chemin » dans ce drame ?",
      options: ["Consulter Jéhovah par la prière avant les grandes décisions", "Agir sans réfléchir", "Ignorer la Bible", "Suivre le monde"],
      correctIndex: 0,
      explanation: "Jéhovah guide ceux qui lui font confiance (Psaume 32:8).",
    }),
  ],
  "bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-2": [
    q("bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-2-s1", {
      question: "Comment l'histoire se poursuit-elle dans la partie 2 ?",
      options: ["Le jeune voit les bénédictions de faire confiance à Jéhovah", "Il abandonne sa foi", "Il devient riche seul", "Il quitte sa famille"],
      correctIndex: 0,
      explanation: "Jéhovah bénit ceux qui le mettent en premier (Matthieu 6:33).",
    }),
    q("bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-2-s2", {
      question: "Quelle leçon la partie 2 confirme-t-elle sur la confiance en Jéhovah ?",
      options: ["Jéhovah guide ceux qui lui font confiance dans leurs choix", "Il vaut mieux compter sur soi seul", "La prière ne sert à rien", "La Bible est dépassée"],
      correctIndex: 0,
      explanation: "Ésaïe 30:21 : « Voici le chemin, marchez-y ».",
    }),
  ],
  "bible-moderne-souvenez-vous-de-la-femme-de-lot-1re-partie": [
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-1re-partie-s1", {
      question: "Pourquoi Lot et sa famille doivent-ils fuir Sodome ?",
      options: ["Parce que Jéhovah va détruire la ville pour sa méchanceté", "Pour un voyage d'agrément", "Parce que Lot devient roi", "Sans raison"],
      correctIndex: 0,
      explanation: "Genèse 19:13 : « Nous allons détruire cet endroit ».",
    }),
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-1re-partie-s2", {
      question: "Quelle instruction les anges donnent-ils en quittant Sodome ?",
      options: ["« Ne regardez pas derrière vous »", "« Revenez demain »", "« Prenez des souvenirs »", "« Restez un moment »"],
      correctIndex: 0,
      explanation: "Genèse 19:17 : ne regardez pas derrière vous.",
    }),
  ],
  "bible-moderne-souvenez-vous-de-la-femme-de-lot-2e-partie": [
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-2e-partie-s1", {
      question: "Que fait la femme de Lot malgré l'avertissement ?",
      options: ["Elle regarde en arrière vers Sodome", "Elle court sans s'arrêter", "Elle aide les autres", "Elle prie"],
      correctIndex: 0,
      explanation: "Genèse 19:26 : elle devient une colonne de sel.",
    }),
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-2e-partie-s2", {
      question: "Pourquoi la femme de Lot est-elle un avertissement pour nous ?",
      options: ["Elle illustre l'attachement au monde détruit par Jéhovah", "Elle est un modèle de foi", "Elle obéit parfaitement", "Elle ne compte pas"],
      correctIndex: 0,
      explanation: "Luc 17:32 : « Souvenez-vous de la femme de Lot ».",
    }),
  ],
  "bible-moderne-souvenez-vous-de-la-femme-de-lot-3e-partie": [
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-3e-partie-s1", {
      question: "Quelle leçon la partie 3 tire-t-elle de l'histoire de la femme de Lot ?",
      options: ["Ne pas regretter le monde corrompu que Jéhovah condamne", "Regarder en arrière sans conséquence", "Retourner à Sodome", "Ignorer les avertissements"],
      correctIndex: 0,
      explanation: "1 Jean 2:15 : « N'aimez pas le monde ni les choses du monde ».",
    }),
    q("bible-moderne-souvenez-vous-de-la-femme-de-lot-3e-partie-s2", {
      question: "Comment appliquer aujourd'hui l'avertissement de la femme de Lot ?",
      options: ["Ne pas regretter les plaisirs du monde qui déplaisent à Jéhovah", "Copier le monde", "Retourner aux anciennes habitudes", "Ignorer Jéhovah"],
      correctIndex: 0,
      explanation: "Romains 12:2 : « Ne vous conformez pas au siècle présent ».",
    }),
  ],
  "bible-moderne-esp-rons-ce-que-nous-ne-voyons-pas": [
    q("bible-moderne-esp-rons-ce-que-nous-ne-voyons-pas-s1", {
      question: "Quel verset inspire le titre « Espérons ce que nous ne voyons pas » ?",
      options: ["Romains 8:25", "Genèse 1:1", "Apocalypse 21:4", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "Romains 8:25 : « Si nous espérons ce que nous ne voyons pas, nous persistons ».",
    }),
    q("bible-moderne-esp-rons-ce-que-nous-ne-voyons-pas-s2", {
      question: "De quoi les personnages de ce drame espèrent-ils sans le voir encore ?",
      options: ["Les promesses de Jéhovah — le Royaume et la vie éternelle", "La richesse immédiate", "La célébrité", "Rien"],
      correctIndex: 0,
      explanation: "Hébreux 11:1 : la foi est l'assurance des choses qu'on espère.",
    }),
    q("bible-moderne-esp-rons-ce-que-nous-ne-voyons-pas-s3", {
      question: "Comment l'espérance biblique aide-t-elle dans l'épreuve ?",
      options: ["Elle nous donne la force de persévérer", "Elle nous décourage", "Elle remplace l'action", "Elle est inutile"],
      correctIndex: 0,
      explanation: "Romains 15:13 : le Dieu qui donne l'espérance nous remplit de joie.",
    }),
  ],
  "bible-moderne-qu-est-ce-que-le-vrai-amour-extrait": [
    q("bible-moderne-qu-est-ce-que-le-vrai-amour-extrait-s1", {
      question: "Quel aspect du « vrai amour » cet extrait met-il en avant ?",
      options: ["L'amour désintéressé fondé sur les principes de Jéhovah", "L'attirance passagère", "L'égoïsme", "L'indifférence"],
      correctIndex: 0,
      explanation: "1 Jean 4:8 : « Dieu est amour ».",
    }),
    q("bible-moderne-qu-est-ce-que-le-vrai-amour-extrait-s2", {
      question: "Quelle scène du film complet « Qu'est-ce que le vrai amour ? » cet extrait reprend-il ?",
      options: ["Un moment clé illustrant l'amour dans le mariage chrétien", "La construction de l'arche", "Le combat de David", "Le baptême de Jésus"],
      correctIndex: 0,
      explanation: "L'extrait met en lumière des principes bibliques sur l'amour.",
    }),
  ],
  "pkon-001": [
    q("pkon-001-s1", {
      question: "Quel principe la chanson « Aime toutes sortes de gens » enseigne-t-elle ?",
      options: ["Aimer les gens de différentes origines comme Jéhovah le fait", "N'aimer que ceux qui nous ressemblent", "Éviter les étrangers", "Juger sur l'apparence"],
      correctIndex: 0,
      explanation: "Actes 10:34, 35 : « Dieu n'a point de favoritisme ».",
    }),
    q("pkon-001-s2", {
      question: "Pourquoi Jéhovah veut-il que nous aimions « toutes sortes de gens » ?",
      options: ["Parce qu'il aime toute sorte de personnes qui le servent", "Parce que certains ne comptent pas", "Parce que l'amour est optionnel", "Sans raison"],
      correctIndex: 0,
      explanation: "Jean 3:16 montre l'amour universel de Jéhovah pour l'humanité.",
    }),
  ],
  "pkon-002": [
    q("pkon-002-s1", {
      question: "Que signifie « respecte les personnes âgées » dans cette chanson pkon ?",
      options: ["Leur montrer considération et écouter leur expérience", "Les ignorer", "Se moquer d'eux", "Les éviter"],
      correctIndex: 0,
      explanation: "Lévitique 19:32 : « Tu te lèveras devant les cheveux gris ».",
    }),
    q("pkon-002-s2", {
      question: "Comment un enfant peut-il montrer du respect aux personnes âgées ?",
      options: ["Parler poliment, écouter et aider quand c'est possible", "Les interrompre", "Les critiquer", "Les imiter moqueusement"],
      correctIndex: 0,
      explanation: "1 Timothée 5:1, 2 encourage le respect envers les aînés.",
    }),
  ],
  "pkon-003": [
    q("pkon-003-s1", {
      question: "Quels livres bibliques la partie 1 de « Apprends les livres de la Bible » couvre-t-elle ?",
      options: ["Les livres de la Genèse à l'Esther (Hébreu)", "Seulement les Évangiles", "Seulement l'Apocalypse", "Aucun livre"],
      correctIndex: 0,
      explanation: "La partie 1 aide à mémoriser les livres hébreux de la Bible.",
    }),
    q("pkon-003-s2", {
      question: "Pourquoi apprendre l'ordre des livres bibliques est-il utile ?",
      options: ["Pour trouver rapidement un passage lors de l'étude", "Pour remplacer la lecture", "Sans utilité", "Pour impressionner seulement"],
      correctIndex: 0,
      explanation: "Connaître la structure de la Bible facilite l'étude personnelle.",
    }),
  ],
  "pkon-004": [
    q("pkon-004-s1", {
      question: "Quels livres la partie 2 de « Apprends les livres de la Bible » couvre-t-elle ?",
      options: ["Les livres grecs — Évangiles et lettres", "Seulement la Genèse", "Seulement les Proverbes", "Les livres apocryphes"],
      correctIndex: 0,
      explanation: "La partie 2 continue avec les Écritures grecs chrétiennes.",
    }),
    q("pkon-004-s2", {
      question: "Combien de parties composent la chanson sur les livres de la Bible ?",
      options: ["Trois parties", "Une seule", "Cinq", "Dix"],
      correctIndex: 0,
      explanation: "Les parties 1, 2 et 3 couvrent toute la Bible.",
    }),
  ],
  "pkon-005": [
    q("pkon-005-s1", {
      question: "Envers qui la chanson « Sois reconnaissant » nous encourage-t-elle d'être reconnaissants ?",
      options: ["Jéhovah et ceux qui nous aident", "Personne", "Seulement nous-mêmes", "Les inconnus seulement"],
      correctIndex: 0,
      explanation: "1 Thessaloniciens 5:18 : « Rendez grâces en toutes circonstances ».",
    }),
    q("pkon-005-s2", {
      question: "Pourquoi la gratitude est-elle importante pour un enfant chrétien ?",
      options: ["Elle montre que nous apprécions ce que Jéhovah et les autres font pour nous", "Elle est inutile", "Elle rend orgueilleux", "Elle remplace la prière"],
      correctIndex: 0,
      explanation: "Colossiens 3:15 : « Soyez reconnaissants ».",
    }),
  ],
  "pkon-006": [
    q("pkon-006-s1", {
      question: "Quels livres la partie 3 de « Apprends les livres de la Bible » complète-t-elle ?",
      options: ["La fin des Écritures grecs — jusqu'à l'Apocalypse", "Seulement la Genèse", "Seulement les Psaumes", "Les livres de la loi seulement"],
      correctIndex: 0,
      explanation: "La partie 3 termine la mémorisation de tous les livres bibliques.",
    }),
    q("pkon-006-s2", {
      question: "Combien de livres la Bible contient-elle au total ?",
      options: ["66 livres", "27 livres", "100 livres", "12 livres"],
      correctIndex: 0,
      explanation: "La Bible comprend 39 livres hébreux et 27 grecs.",
    }),
  ],
  "pkon-007": [
    q("pkon-007-s1", {
      question: "Quels événements de la vie de Jésus la chanson « La vie de Jésus » mentionne-t-elle ?",
      options: ["Sa naissance, son ministère, sa mort et sa résurrection", "Seulement sa naissance", "Seulement sa mort", "Son règne terrestre"],
      correctIndex: 0,
      explanation: "La chanson parcourt les étapes principales du ministère de Jésus.",
    }),
    q("pkon-007-s2", {
      question: "Pourquoi apprendre la vie de Jésus est-il important pour un enfant ?",
      options: ["Jésus est notre modèle parfait", "C'est une simple histoire", "Jésus n'est pas important", "Seuls les adultes doivent l'apprendre"],
      correctIndex: 0,
      explanation: "1 Pierre 2:21 : Christ nous a laissé un modèle à suivre.",
    }),
  ],
  "pkon-008": [
    q("pkon-008-s1", {
      question: "Que représente le « voyage » dans « Mon voyage avec les amis de Jéhovah » ?",
      options: ["Grandir spirituellement en apprenant des personnages bibliques", "Un voyage en avion", "Une course sportive", "Une punition"],
      correctIndex: 0,
      explanation: "Chaque personnage biblique enseigne une leçon précieuse.",
    }),
    q("pkon-008-s2", {
      question: "Qui sont les « amis de Jéhovah » dans cette chanson ?",
      options: ["Les personnages bibliques fidèles dont on apprend les histoires", "Des animaux", "Des rois païens", "Des soldats romains"],
      correctIndex: 0,
      explanation: "La série « Apprends avec les amis de Jéhovah » présente ces personnages.",
    }),
  ],
  "pkon-009": [
    q("pkon-009-s1", {
      question: "Pour qui la chanson « Prie pour les autres » nous encourage-t-elle de prier ?",
      options: ["Nos amis, notre famille et d'autres serviteurs de Jéhovah", "Personne", "Seulement pour nous-mêmes", "Pour les méchants seulement"],
      correctIndex: 0,
      explanation: "Jacques 5:16 : « La prière fervente du juste a une grande force ».",
    }),
    q("pkon-009-s2", {
      question: "Pourquoi prier pour les autres est-il un acte d'amour ?",
      options: ["Nous demandons à Jéhovah de les bénir et de les aider", "C'est une formalité", "C'est inutile", "Seuls les anciens peuvent prier"],
      correctIndex: 0,
      explanation: "Prier pour les autres montre notre amour chrétien.",
    }),
  ],
  "pkon-010": [
    q("pkon-010-s1", {
      question: "Quels « nouveaux projets » l'enfant de la chanson envisage-t-il ?",
      options: ["Des projets spirituels comme le baptême ou le pionnierat", "Devenir riche", "Devenir célèbre", "Abandonner l'école"],
      correctIndex: 0,
      explanation: "La chanson encourage à planifier un avenir qui honore Jéhovah.",
    }),
    q("pkon-010-s2", {
      question: "Pourquoi consulter Jéhovah dans nos projets ?",
      options: ["Il veut nous bénir et nous guider", "Il ne s'intéresse pas à nous", "Nos projets ne comptent pas", "Il refuse d'aider"],
      correctIndex: 0,
      explanation: "Proverbes 16:3 : « Confie à Jéhovah ce que tu fais ».",
    }),
  ],
  "pkon-011": [
    q("pkon-011-s1", {
      question: "Quel verset inspire « Jéhovah m'a fait d'une belle manière » ?",
      options: ["Psaume 139:14 — « Je suis une création merveilleuse »", "Genèse 1:1", "Apocalypse 21:4", "Matthieu 6:9"],
      correctIndex: 0,
      explanation: "Psaume 139:14 célèbre la façon dont Jéhovah nous a faits.",
    }),
    q("pkon-011-s2", {
      question: "Pourquoi chaque enfant peut-il se sentir valorisé grâce à cette chanson ?",
      options: ["Jéhovah nous a créés avec soin et nous accorde de la valeur", "Seuls les parfaits comptent", "Personne n'a de valeur", "La valeur vient de l'apparence"],
      correctIndex: 0,
      explanation: "Genèse 1:27 : nous sommes créés à l'image de Dieu.",
    }),
  ],
  "pkon-012": [
    q("pkon-012-s1", {
      question: "Que signifie « Jéhovah est mon meilleur Ami » pour un enfant ?",
      options: ["On peut lui parler de tout en prière et compter sur lui", "Jéhovah est lointain", "On ne peut pas être ami avec Dieu", "Seuls les humains comptent"],
      correctIndex: 0,
      explanation: "Jacques 2:23 : Abraham fut appelé « l'ami de Dieu ».",
    }),
    q("pkon-012-s2", {
      question: "Comment renforcer son amitié avec Jéhovah selon cette chanson ?",
      options: ["Par la prière, l'étude et l'obéissance", "En l'ignorant", "En ne lui parlant jamais", "En copiant le monde"],
      correctIndex: 0,
      explanation: "Jean 15:14 : « Vous êtes mes amis si vous faites ce que je vous commande ».",
    }),
  ],
  "pkon-013": [
    q("pkon-013-s1", {
      question: "Quel est le thème principal de la chanson « Deviens l'ami de Jéhovah » ?",
      options: ["Apprendre à connaître et aimer Jéhovah personnellement", "Devenir riche", "Devenir célèbre", "Ignorer Dieu"],
      correctIndex: 0,
      explanation: "La série BJF aide les enfants à devenir amis de Jéhovah.",
    }),
    q("pkon-013-s2", {
      question: "Pour qui la série « Deviens l'ami de Jéhovah » est-elle conçue ?",
      options: ["Les enfants qui veulent apprendre à servir Jéhovah", "Les adultes seulement", "Les rois", "Les soldats"],
      correctIndex: 0,
      explanation: "Les leçons et chansons pkon sont adaptées aux jeunes serviteurs.",
    }),
  ],
  "pkon-014": [
    q("pkon-014-s1", {
      question: "Qu'est-ce que le « culte familial » dans « Nous aimons le culte familial » ?",
      options: ["Étudier la Bible et prier ensemble en famille", "Regarder la télévision", "Manger seulement", "Ignorer Jéhovah"],
      correctIndex: 0,
      explanation: "Deutéronome 6:7 : parler de la Parole à la maison.",
    }),
    q("pkon-014-s2", {
      question: "Pourquoi les enfants de la chanson aiment-ils le culte familial ?",
      options: ["Ils apprennent sur Jéhovah avec leurs proches", "C'est une punition", "Il n'y a rien à faire", "C'est ennuyeux"],
      correctIndex: 0,
      explanation: "Le culte familial renforce les liens avec Jéhovah et la famille.",
    }),
  ],
  "pkon-015": [
    q("pkon-015-s1", {
      question: "Que célèbre la chanson « C'est ma famille à moi » ?",
      options: ["L'amour et l'unité dans une famille qui sert Jéhovah", "La dispute familiale", "L'isolement", "L'indifférence"],
      correctIndex: 0,
      explanation: "Éphésiens 3:14, 15 : toute famille porte le nom de Jéhovah.",
    }),
    q("pkon-015-s2", {
      question: "Quel rôle Jéhovah joue-t-il dans la famille de la chanson ?",
      options: ["Il guide et bénit la famille qui le sert", "Il est absent", "Il divise la famille", "Il ne se soucie pas"],
      correctIndex: 0,
      explanation: "Josué 24:15 : « Moi et ma maison, nous servirons Jéhovah ».",
    }),
  ],
  "pkon-016": [
    q("pkon-016-s1", {
      question: "À qui s'adresse le message « Merci d'être toi » ?",
      options: ["À chaque enfant — Jéhovah l'apprécie tel qu'il est", "Seulement aux parfaits", "Aux adultes seulement", "Personne"],
      correctIndex: 0,
      explanation: "Chaque enfant est unique et précieux aux yeux de Jéhovah.",
    }),
    q("pkon-016-s2", {
      question: "Pourquoi Jéhovah apprécie chaque enfant individuellement ?",
      options: ["Il nous connaît personnellement et aime nos qualités", "Il ne nous connaît pas", "Seuls les autres comptent", "L'apparence suffit"],
      correctIndex: 0,
      explanation: "Psaume 139:1 : « Ô Jéhovah, tu m'as sonde et tu me connais ».",
    }),
  ],
  "pkon-017": [
    q("pkon-017-s1", {
      question: "Que signifie « sois fidèle » dans cette chanson pkon ?",
      options: ["Rester loyal envers Jéhovah dans toutes les situations", "Changer d'avis souvent", "Suivre la foule", "Abandonner la prière"],
      correctIndex: 0,
      explanation: "Apocalypse 2:10 : « Sois fidèle jusqu'à la mort ».",
    }),
    q("pkon-017-s2", {
      question: "Quel exemple de fidélité la chanson pourrait-elle citer ?",
      options: ["Daniel qui resta fidèle malgré la pression", "Judas qui trahit", "Peter qui renie trois fois sans regret", "Les Israélites adorant le veau d'or"],
      correctIndex: 0,
      explanation: "Daniel resta fidèle même sous la menace de la mort (Daniel 6).",
    }),
  ],
  "pkon-018": [
    q("pkon-018-s1", {
      question: "Quelle qualité de Noé la chanson « Imite la foi de Noé » met-elle en avant ?",
      options: ["Sa foi et son obéissance en construisant l'arche", "Son orgueil", "Sa paresse", "Sa colère"],
      correctIndex: 0,
      explanation: "Hébreux 11:7 : Noé construisit l'arche par la foi.",
    }),
    q("pkon-018-s2", {
      question: "Pendant combien de temps environ Noé construisit-il l'arche ?",
      options: ["Plusieurs décennies", "Une semaine", "Un jour", "Cent ans exactement"],
      correctIndex: 0,
      explanation: "Noé obéit patiemment pendant de longues années (Genèse 6:22).",
    }),
  ],
  "pkon-019": [
    q("pkon-019-s1", {
      question: "Quel acte courageux Esther accomplit-elle dans la chanson « Esther avait du courage » ?",
      options: ["Elle se présente devant le roi pour sauver son peuple", "Elle fuit le palais", "Elle trahit son peuple", "Elle refuse d'obéir"],
      correctIndex: 0,
      explanation: "Esther dit : « J'irai vers le roi… et si je dois mourir, je mourrai » (Esther 4:16).",
    }),
    q("pkon-019-s2", {
      question: "Qui Esther risque-t-elle de déplaire en allant voir le roi sans invitation ?",
      options: ["Le roi Assuérus — selon la loi, elle pourrait mourir", "Mordicaï seulement", "Jéhovah", "Personne"],
      correctIndex: 0,
      explanation: "Esther 4:11 : quiconque entre sans être appelé est condamné à mort.",
    }),
  ],
  "pkon-020": [
    q("pkon-020-s1", {
      question: "Selon « L'amour, c'est la vie », d'où vient le vrai amour ?",
      options: ["De Jéhovah — il est la source de l'amour", "De l'argent", "De la célébrité", "De la chance"],
      correctIndex: 0,
      explanation: "1 Jean 4:8 : « Dieu est amour ».",
    }),
    q("pkon-020-s2", {
      question: "Comment l'amour est-il lié à la vie dans cette chanson pkon ?",
      options: ["Aimer Jéhovah et les autres donne un sens à la vie", "L'amour n'a aucun rapport", "Seul plaisir compte", "L'amour est une faiblesse"],
      correctIndex: 0,
      explanation: "Matthieu 22:37-39 résume la loi en amour de Dieu et du prochain.",
    }),
  ],
};
