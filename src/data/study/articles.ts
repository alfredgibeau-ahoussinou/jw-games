import type { StudyArticle, StudyPublicationKind } from "@/types/study";

function art(
  id: string,
  kind: StudyPublicationKind,
  title: string,
  excerpt: string,
  body: string[],
  opts?: { subtitle?: string; year?: string; issue?: string; scriptureRefs?: string[]; themeId?: string }
): StudyArticle {
  return {
    id,
    kind,
    title,
    excerpt,
    body,
    ...opts,
  };
}

/** Articles complets lus sur le site — inspirés des thèmes des publications officielles */
export const STUDY_ARTICLES: StudyArticle[] = [
  // ——— Prière ———
  art(
    "priere-wt-ecoute",
    "tours-de-garde",
    "La prière — comment Jéhovah nous écoute",
    "Jéhovah n'est pas distant : il entend les prières sincères de ses serviteurs et agit au bon moment, selon sa sagesse parfaite.",
    [
      "La prière est le moyen que Jéhovah nous a donné pour communiquer avec lui. Contrairement à une idole muette, notre Père céleste entend, comprend et répond — parfois d'une manière que nous n'attendions pas, mais toujours selon sa volonté juste.",
      "Jésus a enseigné que nous pouvons parler à Jéhovah comme à un Père aimant. Nous n'avons pas besoin de formules compliquées ni de répéter les mêmes mots sans cesse. Ce qui compte, c'est la sincérité et la foi.",
      "Des exemples bibliques montrent que Jéhovah répond : il a entendu Anne dans son détresse, Élie dans sa persévérance, et les disciples réunis après l'ascension de Jésus. Le livre des Actes montre que l'Esprit saint est venu après une prière collective fervente.",
      "Si une réponse tarde, cela ne signifie pas que Jéhovah nous ignore. Il connaît nos besoins mieux que nous. Continuer à prier, à étudier sa Parole et à appliquer ses conseils nous aide à aligner nos désirs sur les siens.",
    ],
    { year: "Étude biblique", scriptureRefs: ["Matthieu 6:6", "1 Jean 5:14", "Actes 4:31"], themeId: "priere" }
  ),
  art(
    "priere-awake-efficace",
    "reveillez-vous",
    "Apprendre à prier efficacement",
    "Conseils pratiques : moment calme, demandes précises, actions de grâces et prière pour les autres.",
    [
      "Une prière efficace commence souvent par un moment calme. Éteindre les distractions, prendre quelques secondes pour se rappeler à qui nous parlons, puis ouvrir notre cœur avec honnêteté.",
      "Être spécifique dans nos demandes nous aide à remarquer les réponses de Jéhovah. Au lieu de demander vaguement « aide-moi », nous pouvons expliquer notre situation et demander sagesse, courage ou patience pour une épreuve précise.",
      "Les actions de grâces équilibrent nos prières. Avant de lister nos besoins, remercier Jéhovah pour la vie, la nourriture, la famille, la congrégation et les promesses bibliques renforce notre confiance.",
      "Prier pour les autres — famille, amis, collègues de service, dirigeants de la congrégation — élargit notre amour et nous rapproche du Dieu qui « donne à tous libéralement ».",
    ],
    { themeId: "priere", scriptureRefs: ["Philippiens 4:6", "1 Thessaloniciens 5:17"] }
  ),
  // ——— Confiance ———
  art(
    "confiance-wt-renforcer",
    "tours-de-garde",
    "Renforcez votre confiance en Jéhovah",
    "Des exemples bibliques de foi éprouvée et comment remplacer l'inquiétude par la méditation sur les promesses de Dieu.",
    [
      "La confiance en Jéhovah ne signifie pas que nous ne ressentirons jamais de peur. Abraham, Moïse, David et bien d'autres ont connu l'incertitude. Ce qui les distinguait, c'est qu'ils ont choisi de faire confiance malgré ce qu'ils voyaient.",
      "Proverbes 3:5, 6 invite à ne pas s'appuyer sur notre propre intelligence. Cela ne veut pas dire arrêter de réfléchir, mais reconnaître que Jéhovah voit plus loin que nous et que ses conseils sont toujours dans notre intérêt.",
      "Méditer sur les promesses bibliques — comme Psaume 55:22 qui invite à décharger notre fardeau sur Jéhovah — transforme notre état d'esprit. L'inquiétude excessive épuise ; la confiance active nous pousse à agir avec sagesse tout en laissant à Dieu l'issue.",
      "Tenir un « journal spirituel » des fois où Jéhovah nous a aidés renforce notre mémoire spirituelle. Quand une nouvelle épreuve survient, nous pouvons nous rappeler : « Il m'a aidé avant ; il le fera encore. »",
    ],
    { themeId: "confiance", scriptureRefs: ["Proverbes 3:5", "Psaume 55:22", "Hébreux 11:1"] }
  ),
  art(
    "confiance-awake-forces",
    "reveillez-vous",
    "Quand la vie semble dépasser nos forces",
    "Comment des familles traversent maladie, perte d'emploi ou persécution en s'appuyant sur la promesse de Jéhovah.",
    [
      "Personne n'est à l'abri des épreuves : maladie grave, perte d'un emploi, deuil, persécution pour sa foi. Dans ces moments, les émotions peuvent submerger. La Bible reconnaît cette réalité sans minimiser la douleur.",
      "Job a perdu presque tout, mais il n'a pas maudit Jéhovah. Son exemple montre qu'on peut exprimer sa détresse à Dieu tout en gardant loyauté. Jéhovah a finalement béni Job au-delà de ce qu'il avait avant.",
      "Le soutien de la congrégation est un cadeau de Jéhovah. Des visites, des appels, des prières communes et une aide pratique rappellent à celui qui souffre qu'il n'est pas seul.",
      "« Celui qui se confie en Jéhovah est entouré de bonté aimante » n'est pas une formule magique qui efface les problèmes du jour au lendemain. C'est une promesse sur la relation durable que Jéhovah entretient avec ceux qui lui restent fidèles.",
    ],
    { year: "2023", themeId: "confiance", scriptureRefs: ["Psaume 32:10", "Job 1:21", "2 Corinthiens 1:3, 4"] }
  ),
  // ——— Qualités ———
  art(
    "qualites-wt-imiter",
    "tours-de-garde",
    "Imitez les qualités de Jéhovah",
    "L'amour, la justice et la sagesse de Dieu servent de modèle pour transformer notre personnalité au quotidien.",
    [
      "Jéhovah est décrit dans la Bible comme amour, justice, sagesse et puissance. Étudier ces qualités nous aide à comprendre comment il agit et comment nous pouvons le refléter dans nos relations.",
      "L'amour divin n'est pas sentimental : il est actif, patient, désintéressé. Il corrige quand c'est nécessaire et pardonne quand il y a un repentir sincère. Imiter cet amour change notre façon de parler à notre conjoint, à nos enfants et à nos compagnons de service.",
      "La justice de Jéhovah est équilibrée par la miséricorde. Nous aussi pouvons être justes sans être durs, miséricordieux sans fermer les yeux sur ce qui est mal.",
      "Le fruit de l'esprit n'apparaît pas du jour au lendemain. C'est un travail de toute une vie, soutenu par la prière, l'étude et l'aide de l'Esprit saint.",
    ],
    { themeId: "qualites", scriptureRefs: ["Galates 5:22, 23", "1 Corinthiens 13:4-7", "Éphésiens 5:1"] }
  ),
  art(
    "qualites-awake-personne",
    "reveillez-vous",
    "Comment devenir une meilleure personne",
    "Le fruit de l'esprit en pratique : pardonner, contrôler sa langue, rester calme sous pression.",
    [
      "Changer sa personnalité peut sembler impossible, surtout quand on a des habitudes ancrées depuis l'enfance. Pourtant la Bible montre que des personnes très différentes — un persécuteur comme Saul, un pêcheur impulsif comme Pierre — ont pu changer profondément.",
      "Contrôler sa langue est l'un des défis les plus concrets. Avant de répondre sous le coup de la colère, une pause de quelques secondes et une prière silencieuse peuvent éviter des paroles qu'on regrettera.",
      "Pardonner ne signifie pas approuver le mal commis. Cela signifie lâcher prise sur la rancune qui nous ronge et faire confiance à Jéhovah pour la justice.",
      "Rester calme sous pression — au travail, à l'école, en famille — est une preuve visible du fruit de l'esprit. Les autres remarquent cette différence et peuvent être touchés.",
    ],
    { themeId: "qualites", scriptureRefs: ["Jacques 1:19", "Colossiens 3:13", "Proverbes 15:1"] }
  ),
  // ——— Jésus ———
  art(
    "jesus-wt-qui",
    "tours-de-garde",
    "Qui est réellement Jésus Christ ?",
    "Position biblique de Jésus : Fils de Dieu, Roi du Royaume, Rédempteur — distinct de son Père Jéhovah.",
    [
      "La Bible identifie clairement Jésus : il est le Fils de Dieu, envoyé sur terre pour accomplir la volonté de son Père. Au baptême et à la transfiguration, une voix des cieux a déclaré : « Celui-ci est mon Fils bien-aimé. »",
      "Jésus n'a jamais prétendu être son Père. Il a dit : « Le Père est plus grand que moi » et a enseigné ses disciples à prier à Jéhovah. Sa mission était de donner sa vie en rançon et de prêcher le Royaume.",
      "Après sa résurrection, Jésus a reçu l'autorité royale. Il règne maintenant au ciel et dirigera le Royaume qui apportera la paix sur la terre.",
      "Comprendre qui est Jésus nous aide à l'imiter correctement : non pas comme un dieu mystérieux égal au Père, mais comme le Fils obéissant et aimant qui nous montre le chemin vers Jéhovah.",
    ],
    { themeId: "jesus", scriptureRefs: ["Matthieu 3:17", "Jean 14:28", "Matthieu 20:28"] }
  ),
  art(
    "jesus-awake-chef",
    "reveillez-vous",
    "Jésus — un chef digne de confiance",
    "Ses enseignements restent pertinents : relations, honnêteté, paix et espérance pour l'avenir.",
    [
      "Plus de deux mille ans après sa vie sur terre, les paroles de Jésus continuent de transformer des vies. Le Sermon sur le montagne aborde la colère, la pureté, l'honnêteté et l'amour des ennemis — des sujets toujours actuels.",
      "Jésus était accessible. Il parlait aux pauvres, aux malades, aux pécheurs sincères. Il n'établissait pas de barrière de classe. Ses disciples ont appris à servir, pas à dominer.",
      "En tant que Roi désigné, Jésus mérite notre loyauté. Suivre ses enseignements n'est pas optionnel pour un chrétien : c'est la preuve de notre amour pour lui.",
      "Son espérance pour l'avenir n'est pas vague : il a promis la résurrection, la terre paradisiaque et la vie éternelle sous le Royaume de Dieu.",
    ],
    { themeId: "jesus", scriptureRefs: ["Matthieu 5-7", "Jean 13:15", "Jean 14:27"] }
  ),
  // ——— Famille ———
  art(
    "famille-wt-renforcer",
    "tours-de-garde",
    "Renforcez votre famille spirituellement",
    "Conversations constructives, éducation biblique des enfants et harmonie entre époux.",
    [
      "Une famille qui sert Jéhovah ensemble traverse les épreuves avec plus de solidité. Josué a déclaré : « Moi et ma maison, nous servirons Jéhovah. » Cette décision claire unifie et donne une direction.",
      "Le culte familial n'a pas besoin d'être long ni compliqué. Quinze minutes régulières valent mieux qu'une heure rare. Lire un passage, poser une question simple, prier ensemble : c'est accessible à tous.",
      "Les époux chrétiens sont invités à s'aimer, à se pardonner et à communiquer avec respect. Les enfants sont encouragés à obéir et à honorer leurs parents, tandis que les parents évitent de décourager leurs enfants.",
      "Les repas en famille, les sorties simples et les conversations sans écran créent des moments pour parler de Jéhovah naturellement.",
    ],
    { themeId: "famille", scriptureRefs: ["Josué 24:15", "Deutéronome 6:6, 7", "Éphésiens 5:25"] }
  ),
  art(
    "famille-awake-enfants",
    "reveillez-vous",
    "Élever des enfants heureux et responsables",
    "Discipline, écoute, temps de qualité et valeurs morales fondées sur la Bible.",
    [
      "Élever un enfant est l'une des responsabilités les plus importantes qu'on puisse avoir. La Bible ne donne pas un manuel rigide, mais des principes : amour, discipline juste, instruction et bon exemple.",
      "La discipline vise à former, pas à briser. Des règles claires, expliquées avec patience, aident l'enfant à comprendre pourquoi certaines limites existent. L'éloge sincère renforce les bons choix.",
      "Écouter son enfant — vraiment écouter — construit la confiance. Un adolescent qui se sent entendu est plus enclin à parler de ses difficultés avant qu'elles ne deviennent graves.",
      "Le temps de qualité ne nécessite pas de grands moyens. Une promenade, un jeu, cuisiner ensemble : ce sont des occasions d'inculquer des valeurs et de montrer de l'affection.",
    ],
    { year: "Famille", themeId: "famille", scriptureRefs: ["Proverbes 22:6", "Éphésiens 6:4", "Colossiens 3:21"] }
  ),
  // ——— Service ———
  art(
    "service-wt-pourquoi",
    "tours-de-garde",
    "Pourquoi prêcher la bonne nouvelle ?",
    "Prêcher, c'est obéir à Jésus et aimer son prochain en lui offrant une vraie espérance.",
    [
      "Avant de retourner au ciel, Jésus a confié à ses disciples une mission : faire des disciples. Cet ordre n'était pas réservé aux apôtres : il s'applique à tous ceux qui suivent Christ aujourd'hui.",
      "Prêcher, c'est un acte d'amour. Quand nous connaissons une espérance précieuse — le Royaume, la résurrection, la vie éternelle — la garder pour nous seuls serait égoïste.",
      "Le service prend différentes formes : de maison en maison, en public, par écrit, auprès de proches. Chacun peut participer selon ses capacités, son âge et ses circonstances.",
      "Matthieu 24:14 montre que la prédication mondiale est un signe du temps de la fin. Participer à cette œuvre, c'est coopérer avec Jéhovah dans son dessein.",
    ],
    { themeId: "service", scriptureRefs: ["Matthieu 28:19, 20", "Matthieu 24:14", "Romains 10:13-15"] }
  ),
  art(
    "service-awake-mondiale",
    "reveillez-vous",
    "La prédication — une œuvre mondiale",
    "Comment le service est organisé dans le respect des lois et des personnes.",
    [
      "Des millions de Témoins de Jéhovah prêchent dans plus de 240 pays et territoires. Cette diversité culturelle n'empêche pas l'unité du message : la bonne nouvelle du Royaume.",
      "Le service se fait avec respect. On frappe à une porte, on s'adresse poliment à une personne en public, on accepte un refus sans insister. L'objectif est d'offrir un message, pas de contraindre.",
      "Les cartes et publications servent de support, mais le plus important est la conversation. Écouter, poser des questions, adapter le message à l'intérêt de la personne : voilà l'approche de Jésus.",
      "Beaucoup ont commencé par un simple contact, une question sincère, une brochure laissée. Jéhovah bénit les efforts honnêtes, même modestes.",
    ],
    { themeId: "service", scriptureRefs: ["Actes 20:20", "1 Pierre 3:15", "Colossiens 4:6"] }
  ),
  // ——— Royaume ———
  art(
    "royaume-wt-quoi",
    "tours-de-garde",
    "Le Royaume de Dieu — qu'est-ce que c'est ?",
    "Un gouvernement réel établi par Jéhovah, qui remplacera les royaumes humains et apportera la paix.",
    [
      "Quand Jésus a dit « Le Royaume des cieux s'est approché », il annonçait un événement historique : l'installation du gouvernement céleste de Jéhovah par son Fils. Ce n'était pas une métaphore vague.",
      "Daniel 2 a prédit qu'un royaume établi par Dieu écraserait les empires humains et durerait pour toujours. Ce royaume est au pouvoir depuis l'installation de Jésus comme Roi en 1914, date biblique confirmée par les signes du temps de la fin.",
      "Le Royaume apportera ce qu'aucun gouvernement humain n'a réussi à faire : la paix universelle, la justice, la fin de la maladie et de la mort, et la restauration de la terre en paradis.",
      "Prier « Que ton royaume vienne », c'est soutenir activement ce gouvernement et vivre dès maintenant selon ses normes.",
    ],
    { themeId: "royaume", scriptureRefs: ["Matthieu 4:17", "Daniel 2:44", "Matthieu 6:10"] }
  ),
  art(
    "royaume-awake-changer",
    "reveillez-vous",
    "Le Royaume peut-il vraiment changer le monde ?",
    "Les prophéties bibliques s'accomplissent : la bonne nouvelle prêchée partout est un signe du Royaume au pouvoir.",
    [
      "Beaucoup doutent qu'un changement mondial profond soit possible. Pourtant les prophéties bibliques décrivent précisément notre époque : guerres, famines, tremblements de terre, mais aussi la prédication de la bonne nouvelle dans toute la terre habitée.",
      "Ce signe est unique dans l'histoire : jamais auparavant un message religieux n'a été proclamé à une telle échelle mondiale, dans des centaines de langues, par des millions de personnes.",
      "Le Royaume ne change pas seulement les structures politiques : il transforme les personnes. Ceux qui acceptent son règne modifient leur conduite, leurs priorités et leurs relations.",
      "L'espérance du Royaume n'est pas un rêve lointain sans fondement. C'est la réponse de Jéhovah au chaos causé par la rébellion humaine et satanique.",
    ],
    { year: "2024", themeId: "royaume", scriptureRefs: ["Matthieu 24:14", "Ésaïe 9:6, 7", "Apocalypse 21:3, 4"] }
  ),
  art(
    "royaume-livre-attendez",
    "livre",
    "Attendez-vous au Royaume de Dieu",
    "Origine du Royaume, son Roi, ses sujets et les bienfaits pour l'humanité obéissante.",
    [
      "Ce sujet d'étude présente le Royaume de manière structurée : d'où il vient, qui le dirige, qui en fera partie et ce qu'il accomplira concrètement sur la terre.",
      "Vous y apprendrez comment Jésus a prêché le Royaume, comment il a été établi comme Roi au ciel, et pourquoi nous vivons dans la période critique où les signes du temps de la fin s'accomplissent.",
      "Le livre aborde aussi les conditions pour hériter du Royaume : la foi, l'obéissance, le baptême et une vie conforme aux normes de Dieu.",
      "C'est une ressource idéale pour approfondir après avoir lu les articles de cette section et joué aux mini-jeux sur le Royaume.",
    ],
    { themeId: "royaume", scriptureRefs: ["Matthieu 6:33", "Luc 12:32", "2 Timothée 4:18"] }
  ),
  // ——— Résurrection ———
  art(
    "resurrection-wt-promesse",
    "tours-de-garde",
    "La résurrection — une promesse fiable",
    "Jéhovah se souvient de chaque personne et a le pouvoir de restaurer la vie. Jésus en est la preuve.",
    [
      "La résurrection est au cœur de l'espérance chrétienne. Paul a écrit que si Christ n'est pas ressuscité, notre foi est vaine. Mais Christ est bien ressuscité, et des centaines de témoins l'ont vu.",
      "Jéhovah se souvient de tout ce qui fait notre personnalité. Job a exprimé sa confiance que Dieu le garderait en mémoire et le ferait revivre. Cette promesse s'étend à tous ceux qui sont dans les tombeaux.",
      "Jésus a ressuscité Lazare, la fille de Jaïrus et le fils de la veuve de Naïn. Ces miracles montraient en avance ce que le Royaume accomplira à grande échelle.",
      "La résurrection n'est pas une réincarnation ni un état d'esprit vague. C'est un corps réel, sur la terre, pour ceux qui recevront la vie éternelle ici-bas.",
    ],
    { themeId: "resurrection", scriptureRefs: ["1 Corinthiens 15:20-22", "Jean 11:25", "Job 14:13-15"] }
  ),
  art(
    "resurrection-awake-morts",
    "reveillez-vous",
    "Où sont les morts ?",
    "Selon la Bible, les morts sont inconscients, en attente de la résurrection. Cette vérité apaise et éclaire.",
    [
      "Contrairement à de nombreuses croyances populaires, la Bible enseigne que les morts ne sont pas conscients. Ecclésiaste 9:5 dit : « Les morts ne savent rien. » Ils ne souffrent pas, ne nous observent pas, n'interviennent pas dans nos vies.",
      "Cette vérité est réconfortante : nos proches décédés ne sont pas tourmentés dans un lieu de feu. Ils « dorment » dans la mort, en attente de la résurrection.",
      "Jésus a comparé la mort à un sommeil profond. Quand il a ressuscité Lazare, il n'a pas dit que Lazare était au ciel ou en enfer : il l'a simplement rappelé à la vie.",
      "Savoir où sont les morts nous aide à canaliser notre espérance vers la résurrection promise, et non vers des tentatives de communiquer avec eux.",
    ],
    { year: "2023", themeId: "resurrection", scriptureRefs: ["Ecclésiaste 9:5", "Jean 11:11-14", "Actes 24:15"] }
  ),
  // ——— Adoration ———
  art(
    "adoration-wt-coeur",
    "tours-de-garde",
    "Adorez Jéhovah de tout votre cœur",
    "L'adoration pure exclut l'idolâtrie, les images et les traditions humaines qui déplaisent à Jéhovah.",
    [
      "Adorer Jéhovah, ce n'est pas seulement assister à une réunion une fois par semaine. C'est un mode de vie : tout ce que nous faisons peut honorer ou déshonorer son nom.",
      "Le deuxième commandement interdit les images utilisées dans le culte. Jéhovah est un Dieu qui exige une adoration exclusive, sans mélange avec des idoles ou des traditions païennes.",
      "Jésus a dit que les vrais adorateurs adoreraient le Père « avec esprit et vérité ». L'esprit, c'est la sincérité ; la vérité, c'est l'alignement sur ce que la Bible enseigne.",
      "Romains 12:1 invite à présenter notre corps en « sacrifice vivant ». Notre travail, nos loisirs, nos relations peuvent tous devenir une forme d'adoration quand ils sont guidés par les principes de Dieu.",
    ],
    { themeId: "adoration", scriptureRefs: ["Jean 4:23, 24", "Exode 20:4, 5", "Romains 12:1"] }
  ),
  art(
    "adoration-awake-verite",
    "reveillez-vous",
    "Pourquoi la vérité compte dans le culte",
    "Mélanger vérité et erreur ne plaît pas à Dieu. Connaître Jéhovah, c'est connaître sa personnalité et ses exigences.",
    [
      "Beaucoup disent que peu importe ce qu'on croit, tant qu'on est sincère. Pourtant Jésus a déclaré : « Ta parole est vérité. » La sincérité sans vérité ne suffit pas.",
      "Connaître Jéhovah signifie connaître son nom, ses qualités, son dessein et ses exigences. Jean 17:3 définit la vie éternelle comme une connaissance personnelle de Dieu et de son Fils.",
      "Les Pharisiens étaient zélés mais avaient ajouté des traditions humaines qui contredisaient la Parole de Dieu. Jésus les a corrigés fermement. Nous devons veiller à ne pas faire de même.",
      "L'adoration en vérité nous libère des superstitions, des craintes infondées et des pratiques qui fatiguent sans apporter de bénéfice spirituel.",
    ],
    { themeId: "adoration", scriptureRefs: ["Jean 17:17", "Jean 17:3", "Marc 7:6-8"] }
  ),
  // ——— Bible ———
  art(
    "bible-awake-etudier",
    "reveillez-vous",
    "Comment étudier votre Bible",
    "Moment calme, prière, questions et application à la vie quotidienne.",
    [
      "Étudier la Bible, ce n'est pas lire passivement des pages. C'est un dialogue : nous lisons, nous posons des questions, nous cherchons des réponses, nous appliquons.",
      "Avant d'ouvrir la Bible, une courte prière aide à demander la sagesse et la concentration. Même quelques minutes sans distraction valent mieux qu'une longue lecture distraite.",
      "Posez-vous : Qui parle ? À qui ? Quel est le contexte ? Quel principe puis-je tirer ? Comment cela change-t-il ma conduite ? Ces questions transforment la lecture en étude.",
      "Relier ce qu'on lit à sa vie quotidienne ancre la Parole. Un verset sur la patience lu le matin peut nous aider concrètement dans une situation tendue l'après-midi.",
    ],
    { year: "Série pratique", themeId: "bible", scriptureRefs: ["Psaume 119:105", "Jacques 1:22", "Josué 1:8"] }
  ),
  art(
    "bible-wt-profit",
    "tours-de-garde",
    "Tirez le meilleur parti de votre étude personnelle",
    "Noter les points importants, rechercher le contexte, appliquer personnellement. La compréhension prime sur la quantité.",
    [
      "L'étude personnelle n'est pas une course. Lire dix chapitres sans retenir ni appliquer est moins utile qu'un seul passage médité en profondeur.",
      "Noter les versets clés, les promesses et les principes aide à les retrouver. Un carnet simple ou une application sur téléphone suffit.",
      "Le contexte change tout. Un verset isolé peut sembler dire une chose ; lu dans son chapitre et comparé à d'autres Écritures, il prend sa vraie signification.",
      "L'objectif final est la transformation : devenir plus semblable à Jéhovah en personnalité, pas simplement accumuler des connaissances.",
    ],
    { themeId: "bible", scriptureRefs: ["2 Timothée 3:16, 17", "Psaume 1:2", "1 Timothée 4:15"] }
  ),
  art(
    "bible-livre-enseigner",
    "livre",
    "Apprenez à lire et à enseigner la Bible",
    "Préparer des leçons claires, poser de bonnes questions, motiver les étudiants.",
    [
      "Enseigner la Bible est un privilège. Que ce soit en prédication, en réunion ou en culte familial, quelques principes améliorent grandement la clarté du message.",
      "Une leçon efficace a un objectif clair : qu'apprendra la personne ? Par quoi commencer ? Quelle Écriture sera lue ? Quelle question stimulera la réflexion ?",
      "Les questions ouvertes — « Qu'en pensez-vous ? », « Comment cela s'applique-t-il ? » — engagent mieux que des questions fermées qui ne demandent qu'un oui ou un non.",
      "Encourager l'étudiant à lire lui-même la Bible, et non seulement écouter, l'aide à développer sa propre foi et sa confiance en Jéhovah.",
    ],
    { themeId: "bible", scriptureRefs: ["2 Timothée 2:15", "Néhémie 8:8", "Actes 17:2, 3"] }
  ),
  // ——— Sagesse ———
  art(
    "sagesse-wt-acquerir",
    "tours-de-garde",
    "Acquérez la sagesse — elle est précieuse",
    "Les Proverbes aident à éviter les pièges : mauvaises compagnies, parole blessante, orgueil et paresse.",
    [
      "Le livre des Proverbes est un trésor de sagesse pratique. Rédigé en grande partie par Salomon, il aborde l'argent, le travail, la famille, l'amitié et la parole.",
      "La sagesse commence par la crainte de Jéhovah — non pas une peur paralysante, mais un profond respect qui nous pousse à éviter ce qui lui déplaît.",
      "Les mauvaises fréquentations corrompent les bonnes habitudes. Choisir ses amis avec soin est l'une des décisions les plus importantes, surtout pour les jeunes.",
      "La parole peut guérir ou blesser. Proverbes 18:21 compare la langue à une force de vie ou de mort. Réfléchir avant de parler est un signe de maturité spirituelle.",
    ],
    { themeId: "sagesse", scriptureRefs: ["Proverbes 9:10", "Proverbes 13:20", "Proverbes 18:21"] }
  ),
  art(
    "sagesse-awake-numerique",
    "reveillez-vous",
    "Des choix sages à l'ère numérique",
    "Temps d'écran, réseaux sociaux, amitiés en ligne : les principes bibliques restent pertinents.",
    [
      "Internet et les réseaux sociaux offrent des opportunités — étude, contact avec la famille, encouragement spirituel — mais aussi des risques : contenu immoral, cyberharcèlement, perte de temps, comparaison malsaine.",
      "Fixer des limites de temps d'écran n'est pas restrictif : c'est protecteur. Les Proverbes mettent en garde contre la paresse et la distraction ; ces principes s'appliquent parfaitement au numérique.",
      "Ce qu'on publie ou partage en ligne laisse une trace. L'intégrité chrétienne s'applique autant sur un écran que dans la vie réelle.",
      "Les amitiés en ligne peuvent être positives si elles restent honnêtes et encadrées. Prudence avec les inconnus, jamais de rencontre seul sans en parler à un parent ou un responsable.",
    ],
    { year: "2024", themeId: "sagesse", scriptureRefs: ["Éphésiens 5:15, 16", "Proverbes 22:3", "Colossiens 3:5"] }
  ),
  // ——— Endurance ———
  art(
    "endurance-wt-garder",
    "tours-de-garde",
    "Comment garder l'endurance",
    "Fixer les yeux sur l'espérance, prier sans cesse, chercher le soutien de la congrégation.",
    [
      "L'endurance est comparée à une course de fond, pas à un sprint. Paul a dit qu'il courait de manière à obtenir le prix. Cela demande de la constance sur des années.",
      "Fixer les yeux sur l'espérance — la résurrection, le Royaume, la vie éternelle — nous aide à ne pas abandonner quand l'épreuve dure. Hébreux 12:2 nous invite à regarder Jésus, qui a enduré la torture.",
      "La prière régulière recharge nos forces spirituelles. Dans l'épreuve, prier même brièvement et souvent maintient le lien avec Jéhovah.",
      "La congrégation est un filet de sécurité. Parler à un ancien, demander des visites, accepter l'aide : ce n'est pas une faiblesse, c'est de la sagesse.",
    ],
    { themeId: "endurance", scriptureRefs: ["Hébreux 12:1, 2", "Matthieu 24:13", "Galates 6:9"] }
  ),
  art(
    "endurance-awake-vie",
    "reveillez-vous",
    "Tenir bon quand tout semble s'effondrer",
    "Maladie, deuil, persécution : des témoignages de foi qui inspirent.",
    [
      "Certaines épreuves frappent sans prévenir : un diagnostic grave, la mort d'un proche, la perte du travail, l'opposition à cause de sa foi. Dans ces moments, tenir bon semble impossible.",
      "La Bible ne promet pas une vie sans problèmes. Elle promet que Jéhovah ne nous abandonnera pas et qu'il donnera la force de tenir.",
      "Des serviteurs modernes ont traversé des camps de concentration, des interdictions de culte, des persécutions familiales — et ont gardé leur intégrité. Leur exemple prouve que l'endurance est possible.",
      "Après l'épreuve, beaucoup témoignent avoir été plus forts spirituellement. Jéhovah utilise parfois l'épreuve pour affiner notre foi, comme l'or est affiné par le feu.",
    ],
    { themeId: "endurance", scriptureRefs: ["1 Pierre 1:6, 7", "2 Corinthiens 4:16-18", "Jacques 1:12"] }
  ),
  // ——— Amour ———
  art(
    "amour-wt-imiter",
    "tours-de-garde",
    "Imitez l'amour de Jéhovah",
    "Patience, pardon, sacrifice pour les autres, refus de garder rancune.",
    [
      "1 Corinthiens 13 est souvent lu lors des mariages, mais il décrit l'amour divin dans tous les domaines de la vie. Cet amour est patient, ne garde pas rancune, ne cherche pas son intérêt.",
      "L'amour de Jéhovah s'est manifesté de manière suprême en envoyant son Fils. Imiter cet amour, c'est parfois sacrifier notre temps, notre confort ou notre orgueil pour aider quelqu'un.",
      "Le pardon est au cœur de l'amour chrétien. Jéhovah pardonne généreusement ; nous sommes invités à faire de même, jusqu'à « soixante-dix fois sept fois » si nécessaire.",
      "L'amour est la qualité qui donne de la valeur à tout le reste. Sans amour, même les dons spirituels impressionnants ne servent à rien.",
    ],
    { themeId: "amour", scriptureRefs: ["1 Corinthiens 13:4-8", "1 Jean 4:19", "Matthieu 18:21, 22"] }
  ),
  art(
    "amour-awake-quotidien",
    "reveillez-vous",
    "Comment montrer de l'amour au quotidien",
    "Écouter, aider, encourager, pardonner : l'amour chrétien est pratique.",
    [
      "L'amour chrétien ne se résume pas à des sentiments. Jean écrit : « Petits enfants, n'aimons pas d'une manière verbale ni avec la langue, mais en action et en vérité. »",
      "Écouter quelqu'un qui traverse une épreuve, sans interrompre ni minimiser sa douleur, est un acte d'amour puissant.",
      "Les petits services — porter des courses, garder des enfants, aider à déménager — renforcent les liens dans la congrégation et reflètent l'amour de Jéhovah.",
      "Encourager par des paroles sincères, une carte, un message : cela peut changer la journée de quelqu'un qui se sent découragé.",
    ],
    { themeId: "amour", scriptureRefs: ["1 Jean 3:18", "Galates 6:10", "Jean 13:35"] }
  ),
  // ——— Création ———
  art(
    "creation-awake-miracle",
    "reveillez-vous",
    "La vie — un miracle qui défie le hasard",
    "L'ADN, les cellules et l'univers finement réglé pointent vers un Concepteur intelligent.",
    [
      "La complexité de la vie dépasse de loin ce que le hasard pourrait produire. L'ADN contient des instructions précises, comparables à une bibliothèque de plusieurs volumes, dans chaque cellule.",
      "Les constantes physiques de l'univers — gravité, forces atomiques — sont réglées avec une précision qui permet la vie. Un léger changement rendrait l'existence impossible.",
      "La science honnête observe et décrit ; elle ne peut pas expliquer l'origine de la vie sans postuler un commencement. La Bible répond : « Au commencement, Dieu créa. »",
      "Reconnaître un Créateur n'empêche pas d'apprécier la science. Cela donne un sens à la beauté et à l'ordre que nous observons.",
    ],
    { year: "Science & foi", themeId: "creation", scriptureRefs: ["Psaume 19:1", "Romains 1:20", "Genèse 1:1"] }
  ),
  art(
    "creation-wt-createur",
    "tours-de-garde",
    "Jéhovah — le Grand Créateur",
    "Croire en la création, c'est reconnaître les limites des théories qui excluent un Créateur.",
    [
      "Jéhovah est appelé le « Créateur des extrémités de la terre ». Sa puissance créative est sans limite, mais il utilise aussi la sagesse et l'amour dans tout ce qu'il fait.",
      "Job 38-41 présente Jéhovah rappelant à Job la grandeur de la création : constellations, animaux, cycles de la nature. Face à cela, Job a reconnu sa petitesse et sa confiance a grandi.",
      "L'évolution sans concepteur ne peut pas expliquer la conscience, la moralité, ni l'apparition soudaine de formes de vie complexes dans le registre fossile.",
      "Honorer le Créateur, c'est respecter sa création et vivre selon ses normes morales, reconnaissant qu'il a un dessein pour l'humanité et la terre.",
    ],
    { themeId: "creation", scriptureRefs: ["Ésaïe 40:28", "Job 38:4", "Apocalypse 4:11"] }
  ),
  // ——— Jeunesse ———
  art(
    "jeunesse-awake-defis",
    "reveillez-vous",
    "Les jeunes face aux défis d'aujourd'hui",
    "Anxiété, cyberharcèlement, relations et recherche de sens : la Bible aide.",
    [
      "Les jeunes d'aujourd'hui font face à des pressions que leurs grands-parents n'imaginaient pas : réseaux sociaux, anxiété scolaire, incertitude sur l'avenir, tentations morales accessibles en un clic.",
      "La Bible n'est pas dépassée. Ses principes sur la pureté, l'amitié, le respect des parents et la confiance en Jéhovah répondent à ces défis modernes.",
      "Parler à un parent, un ancien ou un ami spirituel mature n'est pas une faiblesse. C'est un moyen sage d'obtenir de l'aide avant qu'un problème ne grossisse.",
      "Des milliers de jeunes Témoins de Jéhovah trouvent joie et but dans le service, les réunions et des amitiés saines. Servir Jéhovah jeune donne une direction claire.",
    ],
    { year: "2024", themeId: "jeunesse", scriptureRefs: ["Ecclésiaste 12:1", "1 Timothée 4:12", "Proverbes 1:10"] }
  ),
  art(
    "jeunesse-wt-force",
    "tours-de-garde",
    "Les jeunes — une force pour le Royaume",
    "Participer au service, aux réunions et à l'étude. Jéhovah valorise leur dévouement.",
    [
      "Jéhovah n'attend pas que les jeunes soient adultes pour les utiliser. Samuel, Josias, Timothée et Jésus adolescent montrent que l'âge n'est pas un obstacle à la fidélité.",
      "Participer aux réunions — préparer un commentaire, lire une assignation — développe des compétences et renforce la confiance.",
      "Le service de prédication permet aux jeunes de parler de Jéhovah à leurs pairs et à des adultes, avec l'accompagnement d'un parent ou d'un compagnon expérimenté.",
      "Les jeunes qui servent Jéhovah avec zèle sont une force pour la congrégation et un témoignage pour leur génération.",
    ],
    { themeId: "jeunesse", scriptureRefs: ["1 Samuel 2:18", "2 Chroniques 34:3", "Psaume 148:12, 13"] }
  ),
  // ——— Paix ———
  art(
    "paix-wt-interieure",
    "tours-de-garde",
    "Comment trouver la paix intérieure",
    "Harmonie avec Jéhovah, accepter sa volonté, remplacer les pensées négatives par la méditation biblique.",
    [
      "La paix du monde dépend des circonstances : guerre, économie, santé. La paix de Jéhovah peut exister même quand tout va mal autour de nous.",
      "Philippiens 4:6, 7 lie la paix à la prière : ne pas s'inquiéter de tout, mais présenter nos demandes à Dieu avec actions de grâces. Ensuite, « la paix de Dieu surpasse toute pensée ».",
      "Accepter la volonté de Jéhovah ne signifie pas renoncer à agir. Cela signifie reconnaître qu'il voit plus loin et que sa sagesse est supérieure à la nôtre.",
      "Remplacer les pensées négatives par la méditation sur des versets encourageants est une discipline qui se cultive. Psaume 119:165 dit que ceux qui aiment la loi de Jéhovah ont une grande paix.",
    ],
    { themeId: "paix", scriptureRefs: ["Philippiens 4:6, 7", "Jean 14:27", "Psaume 119:165"] }
  ),
  art(
    "paix-awake-anxiete",
    "reveillez-vous",
    "Anxiété — des solutions qui fonctionnent",
    "Limiter les inquiétudes inutiles, demander de l'aide, structurer sa journée autour de priorités spirituelles.",
    [
      "L'anxiété touche de plus en plus de personnes, jeunes et adultes. Ce n'est pas un signe de faiblesse spirituelle, mais un défi à gérer avec sagesse.",
      "Jésus a dit de ne pas nous inquiéter du lendemain. Cela ne veut pas dire ne pas planifier, mais éviter de tourner en boucle sur des scénarios catastrophes improbables.",
      "Demander de l'aide professionnelle en complément du soutien spirituel est une décision responsable quand l'anxiété devient envahissante.",
      "Structurer sa journée — étude, prière, service, repos — donne un cadre qui réduit le sentiment de chaos. Des priorités claires libèrent l'esprit.",
    ],
    { year: "2023", themeId: "paix", scriptureRefs: ["Matthieu 6:34", "1 Pierre 5:7", "Psaume 34:4"] }
  ),
  // ——— Intégrité ———
  art(
    "integrite-wt-developper",
    "tours-de-garde",
    "Développer l'intégrité",
    "Étude, prière et bonnes habitudes avant la crise : quand la pression arrive, les fondations tiennent.",
    [
      "L'intégrité, c'est être entier — sans division entre ce qu'on croit et ce qu'on fait. Job est l'exemple classique : il a tout perdu mais n'a pas abandonné Jéhovah.",
      "On ne construit pas l'intégrité le jour où la tentation frappe. C'est un travail quotidien : étude, prière, choix honnêtes dans les « petites » choses.",
      "Daniel a pris une résolution à l'avance de ne pas se souiller. Quand la pression est venue, il savait déjà quelle serait sa réponse.",
      "Jéhovah valorise l'intégrité plus que l'apparence. Il voit le cœur et récompense ceux qui lui restent fidèles.",
    ],
    { themeId: "integrite", scriptureRefs: ["Job 2:3", "Daniel 1:8", "Psaume 26:11"] }
  ),
  art(
    "integrite-awake-honnetete",
    "reveillez-vous",
    "Être honnête au travail et à l'école",
    "Refuser la triche, rendre la monnaie, ne pas mentir sur ses heures.",
    [
      "L'honnêteté chrétienne s'applique partout : à l'école, au travail, dans les impôts, en ligne. Un serviteur de Jéhovah ne triche pas, même si personne ne regarde.",
      "Rendre la monnaie en trop, signaler une erreur en sa faveur, ne pas voler du temps de travail : ce sont des tests d'intégrité quotidiens.",
      "À l'école, copier ou faire faire ses devoirs par quelqu'un d'autre est malhonnête et nuit à son propre apprentissage.",
      "L'honnêteté peut coûter à court terme — un contrat perdu, une note plus basse — mais elle plaît à Jéhovah et préserve notre conscience.",
    ],
    { themeId: "integrite", scriptureRefs: ["Proverbes 11:1", "Colossiens 3:9", "Luc 16:10"] }
  ),
  // ——— Prophéties ———
  art(
    "prophéties-wt-fil",
    "tours-de-garde",
    "Les prophéties — un fil conducteur dans l'histoire",
    "Daniel, Ésaïe et Apocalypse s'harmonisent pour révéler le dessein de Jéhovah.",
    [
      "Les prophéties bibliques ne sont pas des énigmes sans sens. Elles forment un fil conducteur qui relie la Genèse à l'Apocalypse et éclaire notre époque.",
      "Daniel 2 et 7 décrivent une succession d'empires et l'établissement du Royaume de Dieu. Ces prophéties se sont accomplies avec une précision remarquable.",
      "Les prophéties messianiques — naissance à Bethléem, mort sur le bois, résurrection — se sont accomplies en Jésus, confirmant qu'il est le Christ promis.",
      "Étudier les prophéties avec humilité et en comparant les Écritures nous protège des interprétations fantaisistes et renforce notre confiance en Jéhovah.",
    ],
    { themeId: "prophéties", scriptureRefs: ["Ésaïe 46:10", "Daniel 2:44", "2 Pierre 1:19"] }
  ),
  art(
    "prophéties-livre-apocalypse",
    "livre",
    "Apocalypse — son accomplissement",
    "Comprendre les symboles de l'Apocalypse et leur lien avec l'histoire et notre époque.",
    [
      "Le livre de l'Apocalypse utilise des symboles — bêtes, montagnes, fleuves — qui s'alignent sur d'autres livres prophétiques de la Bible, notamment Daniel et Ésaïe.",
      "Plutôt que de chercher un sens caché dans chaque détail, l'approche biblique consiste à identifier les thèmes principaux : le conflit entre le Royaume et les puissances corrompues, le sort des fidèles, la victoire finale de Jéhovah.",
      "L'Apocalypse réconforte : malgré les événements troublants des derniers jours, le dessein de Dieu avance et aboutira à la paix éternelle.",
      "Cette étude complète les mini-jeux sur les prophéties et aide à lire l'Apocalypse avec confiance plutôt qu'avec crainte.",
    ],
    { themeId: "prophéties", scriptureRefs: ["Apocalypse 1:1-3", "Apocalypse 21:3, 4", "Daniel 7:13, 14"] }
  ),
];

export const STUDY_ARTICLES_BY_ID: Record<string, StudyArticle> = Object.fromEntries(
  STUDY_ARTICLES.map((a) => [a.id, a])
);

export function getStudyArticle(id: string): StudyArticle | undefined {
  return STUDY_ARTICLES_BY_ID[id];
}

export function getArticlesForTheme(themeId: string): StudyArticle[] {
  return STUDY_ARTICLES.filter((a) => a.themeId === themeId);
}

export function getFeaturedArticles(limit = 8): StudyArticle[] {
  return STUDY_ARTICLES.slice(0, limit);
}

export function getAllArticleIds(): string[] {
  return STUDY_ARTICLES.map((a) => a.id);
}
