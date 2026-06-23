export interface MiniVideoQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

type Q = Omit<MiniVideoQuestion, "id">;

function q(id: string, data: Q): MiniVideoQuestion {
  return { id, ...data };
}

export { q };

/** Personnages des leçons « Apprends avec les amis de Jéhovah » */
export const CHARACTER_QUIZZES: Record<string, MiniVideoQuestion[]> = {
  Élie: [
    q("elie-1", {
      question: "Quel défi Élie a-t-il lancé aux prophètes de Baal au mont Carmel ?",
      options: ["Prouver qui est le vrai Dieu", "Devenir roi d'Israël", "Construire un temple", "Fuir en Égypte"],
      correctIndex: 0,
      explanation: "Élie défia les prophètes de Baal pour montrer que Jéhovah est le vrai Dieu.",
    }),
    q("elie-2", {
      question: "Comment Jéhovah a-t-il répondu au sacrifice d'Élie ?",
      options: ["Le feu du ciel consuma l'offrande", "Rien ne se passa", "Un tremblement de terre", "La pluie seule"],
      correctIndex: 0,
      explanation: "Jéhovah fit descendre le feu, prouvant qu'il est le Dieu vivant.",
    }),
  ],
  Mefibosheth: [
    q("mefi-1", {
      question: "Pourquoi David a-t-il montré de la bonté à Mefibosheth ?",
      options: ["À cause de son alliance avec Jonathan", "Pour sa richesse", "Par hasard", "Pour un échange politique"],
      correctIndex: 0,
      explanation: "David honora l'amitié qu'il avait eue avec Jonathan, le père de Mefibosheth.",
    }),
    q("mefi-2", {
      question: "Quelle qualité de David cette histoire met-elle en avant ?",
      options: ["Loyauté et bonté", "Cruauté", "Indifférence", "Orgueil"],
      correctIndex: 0,
      explanation: "David agit avec loyauté envers la maison de Saül.",
    }),
  ],
  Joseph: [
    q("joseph-1", {
      question: "Comment Joseph réagit-il quand ses frères le vendent ?",
      options: ["Il reste fidèle à Jéhovah malgré l'injustice", "Il se venge immédiatement", "Il abandonne sa foi", "Il devient roi"],
      correctIndex: 0,
      explanation: "Joseph garde confiance en Jéhovah même dans l'épreuve.",
    }),
    q("joseph-2", {
      question: "Quel poste Joseph obtient-il finalement en Égypte ?",
      options: ["Gouverneur", "Esclave seulement", "Soldat", "Prêtre"],
      correctIndex: 0,
      explanation: "Jéhovah bénit Joseph qui devient gouverneur d'Égypte.",
    }),
  ],
  Josué: [
    q("josue-1", {
      question: "Quelle instruction Jéhovah donne-t-il à Josué avant d'entrer en Canaan ?",
      options: ["Être fort et courageux", "Retourner en Égypte", "Éviter le combat", "Chercher un autre roi"],
      correctIndex: 0,
      explanation: "Jéhovah encourage Josué à être fort et courageux.",
    }),
    q("josue-2", {
      question: "Avec qui Josué et Caleb ont-ils fait confiance contre la majorité des espions ?",
      options: ["Jéhovah", "Les Philistins", "Leur propre force", "Personne"],
      correctIndex: 0,
      explanation: "Josué et Caleb ont cru les promesses de Jéhovah.",
    }),
  ],
  Caleb: [
    q("caleb-1", {
      question: "Pourquoi Caleb et Josué ont-ils été les seuls à entrer dans la Terre promise ?",
      options: ["Ils avaient fait confiance à Jéhovah", "Ils étaient les plus âgés", "Ils étaient rois", "Par tirage au sort"],
      correctIndex: 0,
      explanation: "Leur foi en Jéhovah les distingua des dix autres espions.",
    }),
  ],
  Abigaïl: [
    q("abigail-1", {
      question: "Comment Abigaïl empêche-t-elle David de commettre une erreur ?",
      options: ["Elle intervient avec sagesse et humilité", "Elle fuit sans parler", "Elle appelle les Philistins", "Elle se moque de lui"],
      correctIndex: 0,
      explanation: "Abigaïl calme David et l'empêche d'agir sous la colère.",
    }),
    q("abigail-2", {
      question: "Quelle qualité d'Abigaïl est mise en avant ?",
      options: ["Sagesse et discernement", "Égoïsme", "Paresse", "Violence"],
      correctIndex: 0,
      explanation: "Abigaïl fait preuve de sagesse remarquable.",
    }),
  ],
  Déborah: [
    q("debora-1", {
      question: "Quel rôle Déborah exerçait-elle en Israël ?",
      options: ["Prophétesse et juge", "Reine guerrière seule", "Prêtresse du temple", "Marchande"],
      correctIndex: 0,
      explanation: "Déborah servait comme prophétesse et juge en Israël.",
    }),
  ],
  Abel: [
    q("abel-1", {
      question: "Pourquoi l'offrande d'Abel fut-elle agréée par Jéhovah ?",
      options: ["Il offrit selon la volonté de Dieu avec foi", "Il offrit plus d'argent", "Il était l'aîné", "Il mentit"],
      correctIndex: 0,
      explanation: "Abel offrit les premiers-nés de son troupeau par la foi.",
    }),
    q("abel-2", {
      question: "Quelle leçon tirons-nous de la foi d'Abel ?",
      options: ["Jéhovah valorise une adoration sincère", "L'offrande n'a pas d'importance", "Caïn avait raison", "La jalousie est bonne"],
      correctIndex: 0,
      explanation: "Abel est cité en exemple de foi en Hébreux chapitre 11.",
    }),
  ],
  Jérémie: [
    q("jer-1", {
      question: "Quelle excuse Jérémie donne-t-il quand Jéhovah l'appelle ?",
      options: ["Il se dit trop jeune", "Il est trop riche", "Il ne parle pas hébreu", "Il veut être roi"],
      correctIndex: 0,
      explanation: "Jérémie dit : « Ah, Seigneur Jéhovah ! Je ne sais pas parler, car je suis un enfant ».",
    }),
    q("jer-2", {
      question: "Que fait Jéhovah face à l'hésitation de Jérémie ?",
      options: ["Il l'encourage et l'envoie parler", "Il le rejette", "Il le rend roi", "Il le met en prison"],
      correctIndex: 0,
      explanation: "Jéhovah rassure Jérémie et lui donne sa parole.",
    }),
  ],
  Hanania: [
    q("hanania-1", {
      question: "Que refusent Hanania, Mishael et Azarias de faire à Babylone ?",
      options: ["Adorer une statue du roi", "Étudier la Bible", "Prier Jéhovah", "Servir le peuple"],
      correctIndex: 0,
      explanation: "Ils restent fidèles à Jéhovah malgré la menace de la fournaise ardente.",
    }),
    q("hanania-2", {
      question: "Comment Jéhovah les protège-t-il ?",
      options: ["Il les sauve de la fournaise ardente", "Il les cache en Égypte", "Il les rend invisibles", "Il change le roi"],
      correctIndex: 0,
      explanation: "Jéhovah délivre ses serviteurs fidèles de la fournaise.",
    }),
  ],
};

/** Épisodes GNJ — questions liées au contenu de chaque épisode */
export const GNJ_EPISODE_QUIZZES: Record<string, MiniVideoQuestion[]> = {
  "1": [
    q("gnj1-1", {
      question: "Dans l'épisode 1, pourquoi Jean le Baptiseur parle-t-il de Jésus comme de la lumière ?",
      options: ["Jésus vient révéler la vérité sur Jéhovah", "Jésus allume des lampes", "Jean veut devenir roi", "C'est une métaphore sans sens"],
      correctIndex: 0,
      explanation: "Jésus est la vraie lumière qui éclaire le chemin vers Dieu.",
    }),
    q("gnj1-2", {
      question: "Quel témoin confirme au début que Jésus est le Messie ?",
      options: ["Jean le Baptiseur", "Hérode", "Pilate", "Caïphre"],
      correctIndex: 0,
      explanation: "Jean prépare le chemin et pointe vers Jésus.",
    }),
  ],
  "2": [
    q("gnj2-1", {
      question: "Que déclare la voix des cieux au baptême de Jésus ?",
      options: ["« Celui-ci est mon Fils, le bien-aimé »", "« Sois roi maintenant »", "« Retourne à Nazareth »", "« Tu es un prophète ordinaire »"],
      correctIndex: 0,
      explanation: "Dieu confirme publiquement qui est Jésus.",
    }),
    q("gnj2-2", {
      question: "Où Jean baptise-t-il Jésus dans cet épisode ?",
      options: ["Dans le Jourdain", "En mer Morte", "Au temple", "En Galilée seulement"],
      correctIndex: 0,
      explanation: "Jésus se fait baptiser dans le Jourdain, comme les autres.",
    }),
    q("gnj2-3", {
      question: "Que voit Jean après le baptême de Jésus ?",
      options: ["L'esprit de Dieu descendre comme une colombe", "Un char de feu", "Rien", "Une armée"],
      correctIndex: 0,
      explanation: "L'esprit descend sur Jésus — signe de son onction.",
    }),
  ],
  "3": [
    q("gnj3-1", {
      question: "Dans l'épisode 3, que signifie quand Jésus dit « Je suis celui-ci » ?",
      options: ["Il remplit la prophétie du Messie", "Il se nomme différemment", "Il refuse son rôle", "Il part en exil"],
      correctIndex: 0,
      explanation: "Jésus s'identifie comme celui dont les prophètes ont parlé.",
    }),
    q("gnj3-2", {
      question: "Dans quelle synagogue Jésus lit-il un rouleau d'Ésaïe ?",
      options: ["À Nazareth", "À Jérusalem", "À Capernaüm", "À Bethléem"],
      correctIndex: 0,
      explanation: "Jésus lit la prophétie messianique dans sa ville natale.",
    }),
    q("gnj3-3", {
      question: "Comment réagissent certains auditeurs à Nazareth ?",
      options: ["Ils sont étonnés puis certains se scandalisent", "Tous le couronnent roi", "Personne n'écoute", "Ils partent immédiatement"],
      correctIndex: 0,
      explanation: "L'enseignement de Jésus provoque admiration puis rejet.",
    }),
  ],
  "4": [
    q("gnj4-1", {
      question: "Pourquoi Jésus dit-il « C'est pour cela que je suis venu » ?",
      options: ["Pour accomplir la volonté de son Père", "Pour devenir riche", "Pour fuir les Romains", "Pour enseigner seulement à Nazareth"],
      correctIndex: 0,
      explanation: "Jésus met l'accent sur sa mission donnée par Jéhovah.",
    }),
    q("gnj4-2", {
      question: "Quel type de miracles Jésus accomplit-il dans cet épisode ?",
      options: ["Guérisons par compassion", "Miracles pour devenir riche", "Aucun", "Punitions"],
      correctIndex: 0,
      explanation: "Jésus guérit parce qu'il ressent de la compassion.",
    }),
    q("gnj4-3", {
      question: "Que montre Jésus en prêchant dans toute la Galilée ?",
      options: ["Son zèle pour la bonne nouvelle du Royaume", "Son désir de pouvoir politique", "Son refus d'enseigner", "Sa fuite devant la foule"],
      correctIndex: 0,
      explanation: "Jésus parcourt la région pour prêcher le Royaume.",
    }),
  ],
  "5": [
    q("gnj5-1", {
      question: "Comment les auditeurs réagissent-ils à l'enseignement de Jésus dans cet épisode ?",
      options: ["Ils sont ébahis par son autorité", "Ils s'endorment", "Ils le chassent", "Ils ne l'écoutent pas"],
      correctIndex: 0,
      explanation: "Les foules remarquent que Jésus enseigne différemment des scribes.",
    }),
    q("gnj5-2", {
      question: "Quelle différence les gens remarquent-ils chez Jésus ?",
      options: ["Il enseigne avec autorité, pas comme les scribes", "Il récite sans comprendre", "Il évite la Bible", "Il parle latin seulement"],
      correctIndex: 0,
      explanation: "Son enseignement vient de Jéhovah, pas de traditions humaines.",
    }),
    q("gnj5-3", {
      question: "Où Jésus enseigne-t-il souvent dans cet épisode ?",
      options: ["Dans les synagogues et en public", "Seulement en secret", "Uniquement au temple de Rome", "Jamais en Galilée"],
      correctIndex: 0,
      explanation: "Jésus enseigne ouvertement le peuple.",
    }),
  ],
  "6": [
    q("gnj6-1", {
      question: "Qui envoie ses disciples demander à Jésus s'il est « celui qui devait venir » ?",
      options: ["Jean le Baptiseur", "Hérode", "Pierre", "Les pharisiens"],
      correctIndex: 0,
      explanation: "Jean, en prison, cherche une confirmation sur Jésus.",
    }),
    q("gnj6-2", {
      question: "Comment Jésus répond-il aux disciples de Jean ?",
      options: ["Il leur montre les œuvres qui prouvent qu'il est le Messie", "Il refuse de répondre", "Il les chasse", "Il dit non"],
      correctIndex: 0,
      explanation: "Jésus pointe vers les guérisons et la bonne nouvelle annoncée.",
    }),
    q("gnj6-3", {
      question: "Que dit Jésus de Jean le Baptiseur ?",
      options: ["C'est plus qu'un prophète", "C'est un imposteur", "Il ne le connaît pas", "Il est son ennemi"],
      correctIndex: 0,
      explanation: "Jésus honore Jean comme celui qui prépare le chemin.",
    }),
  ],
};

export const GNJ_SPECIAL_QUIZZES: Record<string, MiniVideoQuestion[]> = {
  jean: [
    q("gnj-jean-1", {
      question: "« Son nom est Jean » — qui est Jean dans cette vidéo ?",
      options: ["Jean le Baptiseur", "Jean l'apôtre", "Jean le disciple de Paul", "Jean le scribe"],
      correctIndex: 0,
      explanation: "Il s'agit de Jean le Baptiseur qui prépare le chemin du Messie.",
    }),
    q("gnj-jean-2", {
      question: "Que prophétise Zacharie au sujet de son fils Jean ?",
      options: ["Qu'il préparera le chemin du Seigneur", "Qu'il sera roi", "Qu'il sera soldat", "Qu'il reniera Dieu"],
      correctIndex: 0,
      explanation: "Jean est appelé à préparer le peuple pour le Messie.",
    }),
    q("gnj-jean-3", {
      question: "Pourquoi Élisabeth et Zacharie sont-ils surpris à la naissance de Jean ?",
      options: ["Ils étaient avancés en âge et sans enfant", "Ils ne voulaient pas d'enfant", "Ils vivaient à Rome", "Ils étaient prêtres païens"],
      correctIndex: 0,
      explanation: "Jéhovah leur accorde un fils malgré leur âge.",
    }),
  ],
  esclave: [
    q("gnj-esclave-1", {
      question: "Que signifie quand Jésus dit être « l'esclave de Jéhovah » ?",
      options: ["Il obéit humblement à son Père", "Il est esclave des hommes", "Il rejette Dieu", "Il veut le pouvoir politique"],
      correctIndex: 0,
      explanation: "Jésus montre l'humilité et l'obéissance parfaite à Jéhovah.",
    }),
    q("gnj-esclave-2", {
      question: "Quel exemple Jésus donne-t-il aux disciples dans cette vidéo ?",
      options: ["Servir les autres avec humilité", "Dominer les autres", "Éviter le service", "Chercher les honneurs"],
      correctIndex: 0,
      explanation: "Jésus lave les pieds de ses disciples pour leur enseigner l'humilité.",
    }),
    q("gnj-esclave-3", {
      question: "Qui est le maître de Jésus selon la Bible ?",
      options: ["Jéhovah, son Père", "Les Romains", "Pierre", "Personne"],
      correctIndex: 0,
      explanation: "Jésus obéit toujours à son Père Jéhovah.",
    }),
  ],
  ange: [
    q("gnj-ange-1", {
      question: "Dans cette vidéo, qui suit les instructions de l'ange de Jéhovah ?",
      options: ["Joseph, le père adoptif de Jésus", "Hérode", "Les mages seulement", "Pilate"],
      correctIndex: 0,
      explanation: "Joseph obéit aux instructions divines pour protéger Jésus.",
    }),
    q("gnj-ange-2", {
      question: "Pourquoi l'ange parle-t-il à Joseph en songe ?",
      options: ["Pour le protéger de Hérode et sauver Jésus", "Pour lui donner des richesses", "Pour le faire roi", "Sans raison"],
      correctIndex: 0,
      explanation: "Joseph fuit en Égypte pour protéger l'enfant Jésus.",
    }),
    q("gnj-ange-3", {
      question: "Que fait Joseph quand il se réveille ?",
      options: ["Il obéit immédiatement à l'ange", "Il ignore le songe", "Il retourne à Nazareth tout de suite", "Il va voir Hérode"],
      correctIndex: 0,
      explanation: "Joseph fait confiance aux instructions de Jéhovah.",
    }),
  ],
};

/** Thèmes des chansons pkon — détectés par mots-clés du titre */
export const SONG_THEME_QUIZZES: { keywords: string[]; questions: MiniVideoQuestion[] }[] = [
  {
    keywords: ["noé", "noe"],
    questions: [
      q("song-noe-1", {
        question: "Cette chanson parle de Noé — que fit-il selon la Bible ?",
        options: ["Il construisit une arche par obéissance", "Il devint pharaon", "Il combattit Goliath", "Il écrivit les Proverbes"],
        correctIndex: 0,
        explanation: "Noé obéit à Jéhovah et construisit l'arche.",
      }),
    ],
  },
  {
    keywords: ["esther"],
    questions: [
      q("song-esther-1", {
        question: "Pourquoi Esther est-elle un exemple de courage dans cette chanson ?",
        options: ["Elle risqua sa vie pour sauver son peuple", "Elle devint reine par hasard", "Elle refusa d'obéir", "Elle fuit le palais"],
        correctIndex: 0,
        explanation: "Esther intercéda courageusement auprès du roi.",
      }),
    ],
  },
  {
    keywords: ["bible", "livres de la bible"],
    questions: [
      q("song-bible-1", {
        question: "Que nous aide à faire cette chanson sur la Bible ?",
        options: ["Mémoriser les livres bibliques", "Oublier les Écritures", "Remplacer la lecture", "Ignorer Jéhovah"],
        correctIndex: 0,
        explanation: "Les chansons aident les enfants à retenir l'ordre des livres.",
      }),
    ],
  },
  {
    keywords: ["famille", "familial", "culte"],
    questions: [
      q("song-fam-1", {
        question: "Quel thème familial cette chanson met-elle en avant ?",
        options: ["Le culte et l'unité en famille", "La dispute", "L'isolement", "L'indifférence"],
        correctIndex: 0,
        explanation: "Les chansons encouragent le culte familial joyeux.",
      }),
    ],
  },
  {
    keywords: ["amour"],
    questions: [
      q("song-amour-1", {
        question: "Selon cette chanson, d'où vient le vrai amour ?",
        options: ["De Jéhovah", "De la célébrité", "De l'argent", "De la chance"],
        correctIndex: 0,
        explanation: "Jéhovah est la source de l'amour authentique.",
      }),
    ],
  },
  {
    keywords: ["fidèle", "fidélité"],
    questions: [
      q("song-fidele-1", {
        question: "Que signifie être fidèle selon cette chanson ?",
        options: ["Rester loyal envers Jéhovah", "Changer d'avis souvent", "Suivre la foule", "Abandonner la prière"],
        correctIndex: 0,
        explanation: "La fidélité est une qualité précieuse aux yeux de Dieu.",
      }),
    ],
  },
  {
    keywords: ["courage", "courageux"],
    questions: [
      q("song-courage-1", {
        question: "Comment cette chanson nous encourage-t-elle ?",
        options: ["À faire confiance à Jéhovah dans l'épreuve", "À avoir peur de tout", "À éviter les difficultés", "À dépendre des autres"],
        correctIndex: 0,
        explanation: "Le courage biblique vient de la confiance en Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["jésus", "jesus"],
    questions: [
      q("song-jesus-1", {
        question: "Que nous apprend cette chanson sur Jésus ?",
        options: ["Il est le Fils de Jéhovah qui nous enseigne", "Il était un simple philosophe", "Il n'a jamais existé", "Il était un roi terrestre"],
        correctIndex: 0,
        explanation: "Les chansons pour enfants mettent en avant Jésus comme le Fils de Dieu.",
      }),
    ],
  },
  {
    keywords: ["jéhovah", "jehovah", "je vois"],
    questions: [
      q("song-jw-1", {
        question: "Quel message cette chanson transmet-elle sur Jéhovah ?",
        options: ["On peut le « voir » par ses œuvres et sa création", "Jéhovah est absent", "Il ne faut pas parler de lui", "Il est loin de nous"],
        correctIndex: 0,
        explanation: "La chanson aide les enfants à reconnaître Jéhovah dans la vie quotidienne.",
      }),
    ],
  },
  {
    keywords: ["ami", "amitié"],
    questions: [
      q("song-ami-1", {
        question: "Que dit cette chanson sur l'amitié ?",
        options: ["Pour avoir des amis, il faut être un bon ami", "Les amis ne comptent pas", "Il faut être méchant", "Mieux vaut être seul"],
        correctIndex: 0,
        explanation: "La Bible enseigne qu'on récolte ce qu'on sème en amitié.",
      }),
    ],
  },
  {
    keywords: ["humble", "moïse", "moise"],
    questions: [
      q("song-humble-1", {
        question: "Pourquoi Moïse est-il un exemple d'humilité dans cette chanson ?",
        options: ["Il a servi Jéhovah avec modestie malgré sa position", "Il était orgueilleux", "Il refusait de parler", "Il fuyait toujours"],
        correctIndex: 0,
        explanation: "Moïse est décrit comme le plus humble sur la terre.",
      }),
    ],
  },
  {
    keywords: ["fruit de l'esprit", "fruit de l"],
    questions: [
      q("song-fruit-1", {
        question: "Que nous aide à mémoriser cette chanson ?",
        options: ["Les qualités du fruit de l'esprit", "Les noms des rois", "Les batailles bibliques", "Les lois romaines"],
        correctIndex: 0,
        explanation: "Galates 5:22-23 énumère l'amour, la joie, la paix, etc.",
      }),
    ],
  },
  {
    keywords: ["assemblée", "assemblee"],
    questions: [
      q("song-ass-1", {
        question: "Pourquoi les enfants sont-ils contents d'aller à l'assemblée dans cette chanson ?",
        options: ["Ils y apprennent et adorent Jéhovah ensemble", "C'est obligatoire sans intérêt", "Il n'y a rien à faire", "C'est ennuyeux"],
        correctIndex: 0,
        explanation: "L'assemblée est un lieu d'apprentissage et de joie spirituelle.",
      }),
    ],
  },
  {
    keywords: ["david"],
    questions: [
      q("song-david-1", {
        question: "Pourquoi David est-il un exemple pour les jeunes dans cette chanson ?",
        options: ["Il a fait confiance à Jéhovah dès son jeune âge", "Il était roi dès l'enfance", "Il ne connaissait pas Dieu", "Il était parfait"],
        correctIndex: 0,
        explanation: "David a combattu Goliath en comptant sur Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["ruth"],
    questions: [
      q("song-ruth-1", {
        question: "Quelle qualité de Ruth cette chanson met-elle en avant ?",
        options: ["Sa loyauté envers Naomi et Jéhovah", "Sa richesse", "Sa colère", "Son orgueil"],
        correctIndex: 0,
        explanation: "Ruth est un modèle de loyauté et d'amour.",
      }),
    ],
  },
  {
    keywords: ["marie"],
    questions: [
      q("song-marie-1", {
        question: "Comment Marie réagit-elle à la mission que Jéhovah lui confie ?",
        options: ["Elle accepte humblement avec foi", "Elle refuse", "Elle fuit", "Elle doute sans agir"],
        correctIndex: 0,
        explanation: "Marie dit : « Voici la servante de Jéhovah ».",
      }),
    ],
  },
  {
    keywords: ["douze apôtres", "apotres"],
    questions: [
      q("song-apotres-1", {
        question: "Que nous aide à apprendre cette chanson ?",
        options: ["Les noms des douze apôtres de Jésus", "Les livres de la Bible", "Les prophètes majeurs", "Les rois d'Israël"],
        correctIndex: 0,
        explanation: "Jésus choisit douze apôtres pour l'accompagner.",
      }),
    ],
  },
  {
    keywords: ["maman", "tout-petit"],
    questions: [
      q("song-fam2-1", {
        question: "Quel lien familial cette chanson célèbre-t-elle ?",
        options: ["L'amour entre parents et enfants avec Jéhovah", "La dispute", "L'isolement", "L'indifférence"],
        correctIndex: 0,
        explanation: "La famille qui sert Jéhovah ensemble est bénie.",
      }),
    ],
  },
  {
    keywords: ["hâte", "hate", "te voir"],
    questions: [
      q("song-voir-1", {
        question: "Quel sentiment cette chanson exprime-t-elle envers les autres ?",
        options: ["L'impatience joyeuse de les revoir", "La colère", "L'indifférence", "La peur"],
        correctIndex: 0,
        explanation: "La chanson montre l'affection entre amis du Royaume.",
      }),
    ],
  },
  {
    keywords: ["ranger", "laver"],
    questions: [
      q("song-ranger-1", {
        question: "Que nous apprend cette chanson sur les tâches ménagères ?",
        options: ["Aider à la maison peut être joyeux", "Il ne faut jamais ranger", "Seuls les adultes travaillent", "C'est une punition"],
        correctIndex: 0,
        explanation: "Les enfants peuvent servir leur famille avec joie.",
      }),
    ],
  },
];

/** Leçons BJF sans personnage — titre exact */
export const BJF_LESSON_QUIZZES: { match: string; questions: MiniVideoQuestion[] }[] = [
  {
    match: "jéhovah est une personne réelle",
    questions: [
      q("bjf59-1", {
        question: "Que veut dire Caleb quand il dit que Jéhovah est une « personne réelle » ?",
        options: ["Jéhovah est proche et on peut le connaître", "Dieu est invisible donc absent", "Jéhovah est une force", "Personne ne peut parler à Dieu"],
        correctIndex: 0,
        explanation: "Caleb partage son expérience personnelle avec Jéhovah.",
      }),
    ],
  },
  {
    match: "sois hospitalier",
    questions: [
      q("bjf57-1", {
        question: "Que montre cette vidéo sur l'hospitalité chrétienne ?",
        options: ["Accueillir les autres honore Jéhovah", "Il faut éviter les visiteurs", "Seuls les riches reçoivent", "L'hospitalité est dépassée"],
        correctIndex: 0,
        explanation: "L'hospitalité est une qualité que Jéhovah apprécie.",
      }),
    ],
  },
  {
    match: "pionnier",
    questions: [
      q("bjf-pion-1", {
        question: "Que suggère cette vidéo aux jeunes concernant le service de pionnier ?",
        options: ["C'est une belle façon de servir Jéhovah", "C'est impossible", "Ce n'est que pour les adultes", "Cela ne sert à rien"],
        correctIndex: 0,
        explanation: "La vidéo encourage les jeunes à envisager le pionnierat.",
      }),
    ],
  },
  {
    match: "baptême",
    questions: [
      q("bjf-bap-1", {
        question: "Que présente cette vidéo sur le baptême ?",
        options: ["Les étapes pour se préparer au baptême", "Comment éviter le baptême", "Le baptême n'est pas important", "Un baptême politique"],
        correctIndex: 0,
        explanation: "La vidéo explique le chemin vers le baptême.",
      }),
    ],
  },
  {
    match: "choisir comme ami",
    questions: [
      q("bjf-ami-1", {
        question: "Selon cette vidéo, pourquoi est-il important de bien choisir ses amis ?",
        options: ["Les amis influencent notre service à Jéhovah", "Les amis ne comptent pas", "Tous les amis sont pareils", "Il vaut mieux être seul"],
        correctIndex: 0,
        explanation: "De bons amis nous aident à rester fidèles.",
      }),
    ],
  },
  {
    match: "obéir",
    questions: [
      q("bjf-obeir-1", {
        question: "Pourquoi obéir à Jéhovah même sans le voir ?",
        options: ["Parce qu'on lui fait confiance", "Parce que c'est facile", "Parce que les autres le font", "Ce n'est pas nécessaire"],
        correctIndex: 0,
        explanation: "La foi nous pousse à obéir à Jéhovah.",
      }),
    ],
  },
  {
    match: "précieux",
    questions: [
      q("bjf-prec-1", {
        question: "Que signifie être « précieux pour Jéhovah » ?",
        options: ["Chaque serviteur a de la valeur aux yeux de Dieu", "Seuls les parfaits comptent", "Personne n'a de valeur", "La valeur vient de l'argent"],
        correctIndex: 0,
        explanation: "Jéhovah accorde une valeur unique à chacun.",
      }),
    ],
  },
  {
    match: "bel acte",
    questions: [
      q("bjf-amour-1", {
        question: "Quel « acte d'amour » cette leçon met-elle en avant ?",
        options: ["Le sacrifice de Jésus pour nous sauver", "Un cadeau matériel", "Une victoire militaire", "Une fête"],
        correctIndex: 0,
        explanation: "Jésus donna sa vie par amour pour l'humanité.",
      }),
    ],
  },
  {
    match: "acte d'amour",
    questions: [
      q("bjf-amour-1", {
        question: "Quel « acte d'amour » cette leçon met-elle en avant ?",
        options: ["Le sacrifice de Jésus pour nous sauver", "Un cadeau matériel", "Une victoire militaire", "Une fête"],
        correctIndex: 0,
        explanation: "Jésus donna sa vie par amour pour l'humanité.",
      }),
    ],
  },
  {
    match: "fait pousser",
    questions: [
      q("bjf-pousse-1", {
        question: "Que nous apprend cette vidéo sur la croissance des plantes ?",
        options: ["Jéhovah fait pousser ce dont nous avons besoin", "Les plantes poussent seules sans Dieu", "Il ne faut pas remercier Jéhovah", "Seuls les experts comprennent"],
        correctIndex: 0,
        explanation: "La vidéo montre la sagesse créative de Jéhovah.",
      }),
    ],
  },
  {
    match: "notre père",
    questions: [
      q("bjf-pere-1", {
        question: "Pourquoi Jéhovah est-il appelé « notre Père » ?",
        options: ["Il nous aime et prend soin de nous", "Il est lointain", "C'est seulement un titre", "Il ne nous connaît pas"],
        correctIndex: 0,
        explanation: "Jéhovah est un Père aimant pour ses serviteurs.",
      }),
    ],
  },
  {
    match: "proclamateur non baptis",
    questions: [
      q("bjf-pnb-1", {
        question: "Que peut faire un proclamateur non baptisé ?",
        options: ["Participer activement à la prédication", "Rien du tout", "Seulement assister aux réunions", "Diriger l'assemblée"],
        correctIndex: 0,
        explanation: "Les jeunes peuvent servir Jéhovah avant le baptême.",
      }),
    ],
  },
  {
    match: "ne baisse pas les bras",
    questions: [
      q("bjf-bras-1", {
        question: "Que nous encourage cette vidéo à faire face aux difficultés ?",
        options: ["Persévérer et ne pas abandonner", "Baisser les bras", "Ignorer Jéhovah", "Tout arrêter"],
        correctIndex: 0,
        explanation: "Jéhovah nous aide à tenir bon dans l'épreuve.",
      }),
    ],
  },
];

export const FILM_QUIZZES: Record<string, MiniVideoQuestion[]> = {
  david: [
    q("film-david-1", {
      question: "Dans ce film, en qui David met-il sa confiance face à Goliath ?",
      options: ["Jéhovah", "Son épée seule", "L'armée philistine", "Sa famille"],
      correctIndex: 0,
      explanation: "David déclare que Jéhovah ne dépend pas de l'épée.",
    }),
    q("film-david-2", {
      question: "Quelle qualité de David ce film met-il en avant ?",
      options: ["La confiance en Jéhovah", "La vengeance", "La peur", "L'orgueil"],
      correctIndex: 0,
      explanation: "David fait confiance à Jéhovah plutôt qu'à la force humaine.",
    }),
  ],
  noé: [
    q("film-noe-1", {
      question: "Comment la Bible décrit-elle Noé dans ce film ?",
      options: ["Il marchait avec Dieu", "Il était un roi", "Il était soldat", "Il était méchant"],
      correctIndex: 0,
      explanation: "Noé était un homme juste qui marchait avec Dieu.",
    }),
    q("film-noe-2", {
      question: "Que construit Noé par obéissance à Jéhovah ?",
      options: ["Une arche", "Un palais", "Un temple à Baal", "Une muraille"],
      correctIndex: 0,
      explanation: "Noé construisit l'arche selon les instructions divines.",
    }),
  ],
};

/** Vidéos jeunes — correspondance par mots-clés du titre */
export const TEEN_TITLE_QUIZZES: { keywords: string[]; questions: MiniVideoQuestion[] }[] = [
  {
    keywords: ["bible peut", "t'aider"],
    questions: [
      q("teen-bible-1", {
        question: "Cette vidéo pour adolescents : en quoi la Bible peut-elle t'aider ?",
        options: ["Elle donne des principes pour les décisions de la vie", "Elle garantit la popularité", "Elle remplace les parents", "Elle n'aide pas"],
        correctIndex: 0,
        explanation: "La Bible offre des conseils pratiques pour les jeunes.",
      }),
    ],
  },
  {
    keywords: ["réseaux sociaux", "internet", "ligne"],
    questions: [
      q("teen-net-1", {
        question: "Quel conseil cette vidéo donne-t-elle sur Internet ?",
        options: ["Utiliser la technologie avec sagesse", "Tout partager en ligne", "Ignorer les principes bibliques", "Passer tout son temps en ligne"],
        correctIndex: 0,
        explanation: "Les jeunes sont encouragés à faire des choix sages en ligne.",
      }),
    ],
  },
  {
    keywords: ["ami", "amitié", "camarade"],
    questions: [
      q("teen-ami-1", {
        question: "Que dit cette vidéo sur le choix des amis ?",
        options: ["De bonnes amitiés renforcent notre foi", "Les amis ne changent rien", "Il faut suivre tout le monde", "Mieux vaut être seul"],
        correctIndex: 0,
        explanation: "Les amitiés influencent notre relation avec Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["prière", "prier"],
    questions: [
      q("teen-priere-1", {
        question: "Quel rôle la prière joue-t-elle dans cette vidéo ?",
        options: ["Maintenir une relation proche avec Jéhovah", "Remplacer l'étude", "Être une formalité", "Ne servir à rien"],
        correctIndex: 0,
        explanation: "La prière aide les jeunes à parler à Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["honnête", "honnete"],
    questions: [
      q("teen-honnete-1", {
        question: "Pourquoi cette vidéo encourage-t-elle l'honnêteté ?",
        options: ["Jéhovah valorise l'intégrité", "Mentir est plus facile", "Personne ne remarque", "C'est sans importance"],
        correctIndex: 0,
        explanation: "L'honnêteté plaît à Jéhovah et protège nos relations.",
      }),
    ],
  },
  {
    keywords: ["richesse", "argent"],
    questions: [
      q("teen-argent-1", {
        question: "Quel conseil cette vidéo donne-t-elle sur l'argent ?",
        options: ["Ne pas mettre sa confiance dans les richesses", "L'argent est le plus important", "Dépenser sans réfléchir", "Ignorer le budget"],
        correctIndex: 0,
        explanation: "Les richesses sont temporaires ; Jéhovah mérite notre confiance.",
      }),
    ],
  },
  {
    keywords: ["jeux vidéo", "gagnant"],
    questions: [
      q("teen-jeux-1", {
        question: "Que dit cette vidéo sur les jeux vidéo ?",
        options: ["Il faut garder des priorités saines", "Jouer sans limite", "Abandonner le service", "Négliger le sommeil sans souci"],
        correctIndex: 0,
        explanation: "Les loisirs doivent rester équilibrés avec le service à Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["réseaux sociaux", "internet", "ligne", "électroniques", "electroniques"],
    questions: [
      q("teen-net-1", {
        question: "Quel conseil cette vidéo donne-t-elle sur Internet ?",
        options: ["Utiliser la technologie avec sagesse", "Tout partager en ligne", "Ignorer les principes bibliques", "Passer tout son temps en ligne"],
        correctIndex: 0,
        explanation: "Les jeunes sont encouragés à faire des choix sages en ligne.",
      }),
    ],
  },
  {
    keywords: ["courage", "courageux", "lâches", "laches", "jael"],
    questions: [
      q("teen-courage-1", {
        question: "Qui cette vidéo nous encourage-t-elle à imiter ?",
        options: ["Les personnages courageux de la Bible", "Les lâches", "Ceux qui abandonnent", "Les indifférents"],
        correctIndex: 0,
        explanation: "Des exemples comme Jael montrent le courage avec l'aide de Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["parents", "communiquer"],
    questions: [
      q("teen-parents-1", {
        question: "Que recommande cette vidéo pour parler avec ses parents ?",
        options: ["Communiquer avec respect et honnêteté", "Ne jamais parler", "Crier pour se faire entendre", "Ignorer leurs conseils"],
        correctIndex: 0,
        explanation: "Une bonne communication renforce la famille.",
      }),
    ],
  },
  {
    keywords: ["pression du groupe", "préjugé", "prejuge"],
    questions: [
      q("teen-pression-1", {
        question: "Comment cette vidéo nous aide-t-elle face à la pression des autres ?",
        options: ["Rester fidèle à ses convictions bibliques", "Suivre tout le monde", "Renier ses valeurs", "Avoir honte de servir Jéhovah"],
        correctIndex: 0,
        explanation: "Jéhovah récompense ceux qui lui restent fidèles.",
      }),
    ],
  },
  {
    keywords: ["vrai amour", "béguin", "beguin"],
    questions: [
      q("teen-amour-1", {
        question: "Que distingue cette vidéo entre amour véritable et simple attirance ?",
        options: ["L'amour véritable respecte les principes de Dieu", "C'est la même chose", "L'attirance suffit", "Les sentiments ne comptent pas"],
        correctIndex: 0,
        explanation: "Le vrai amour honore Jéhovah et l'autre personne.",
      }),
    ],
  },
  {
    keywords: ["parole de dieu", "étude", "etude", "bible"],
    questions: [
      q("teen-etude-1", {
        question: "Pourquoi cette vidéo encourage-t-elle l'étude de la Bible ?",
        options: ["La Parole de Dieu guide nos décisions", "L'étude est inutile", "Seuls les anciens étudient", "La Bible est dépassée"],
        correctIndex: 0,
        explanation: "La Bible est une lampe pour nos pas.",
      }),
    ],
  },
  {
    keywords: ["mariage", "sport", "boire", "fumée", "fumee", "harceleur"],
    questions: [
      q("teen-vie-1", {
        question: "Quel principe biblique cette vidéo applique-t-elle à la vie quotidienne ?",
        options: ["Faire des choix qui honorent Jéhovah", "Suivre ses envies sans limite", "Ignorer les conséquences", "Copier tout le monde"],
        correctIndex: 0,
        explanation: "Chaque sujet est abordé à la lumière des Écritures.",
      }),
    ],
  },
  {
    keywords: ["attentes raisonnables", "optimiste", "triste"],
    questions: [
      q("teen-attitude-1", {
        question: "Que nous apprend cette vidéo sur notre façon de voir la vie ?",
        options: ["Avoir une perspective équilibrée et biblique", "Être toujours négatif", "Ignorer ses émotions", "Tout contrôler soi-même"],
        correctIndex: 0,
        explanation: "Jéhovah nous aide à garder une attitude saine.",
      }),
    ],
  },
  {
    keywords: ["disparaître", "disparaitre", "confiance dans ce qui"],
    questions: [
      q("teen-temp-1", {
        question: "Pourquoi ne pas mettre sa confiance dans ce qui disparaît ?",
        options: ["Seules les choses spirituelles durent", "Tout est éternel", "L'argent suffit", "Rien n'a d'importance"],
        correctIndex: 0,
        explanation: "Jéhovah et son Royaume sont permanents.",
      }),
    ],
  },
  {
    keywords: ["conduite sexuelle", "immoral"],
    questions: [
      q("teen-moral-1", {
        question: "Pourquoi cette vidéo conseille-t-elle de fuir l'immoralité sexuelle ?",
        options: ["Pour protéger notre relation avec Jéhovah", "Parce que c'est à la mode", "Sans raison particulière", "Pour plaire aux autres"],
        correctIndex: 0,
        explanation: "La pureté morale honore Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["endurance", "alimentons"],
    questions: [
      q("teen-endur-1", {
        question: "Comment « courir avec endurance » selon cette vidéo ?",
        options: ["En nous nourrissant spirituellement", "En abandonnant la course", "Sans effort", "Seul, sans aide"],
        correctIndex: 0,
        explanation: "L'étude et la méditation nous fortifient.",
      }),
    ],
  },
  {
    keywords: ["secrets du coeur", "secrets du cœur"],
    questions: [
      q("teen-coeur-1", {
        question: "Que signifie que Jéhovah « connaît les secrets du cœur » ?",
        options: ["Il voit nos pensées et nos motivations", "Il ne nous connaît pas", "Seuls les autres nous jugent", "Rien n'est important"],
        correctIndex: 0,
        explanation: "Jéhovah comprend ce que nous ressentons vraiment.",
      }),
    ],
  },
  {
    keywords: ["stephen lett", "jeunes gens"],
    questions: [
      q("teen-lett-1", {
        question: "Quel message cette vidéo adresse-t-elle aux jeunes ?",
        options: ["Jéhovah les aime personnellement", "Ils sont seuls", "Le service n'est pas pour eux", "Ils ne comptent pas"],
        correctIndex: 0,
        explanation: "Les jeunes occupent une place importante dans le cœur de Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["retour d'un fils", "retour dun fils"],
    questions: [
      q("teen-fils-1", {
        question: "Quelle leçon tire-t-on de l'histoire du fils prodigue dans cette vidéo ?",
        options: ["Jéhovah accueille avec joie celui qui revient", "Il est trop tard pour revenir", "Le Père rejette", "La famille n'a pas d'importance"],
        correctIndex: 0,
        explanation: "Jéhovah pardonne et réjouit du repentir sincère.",
      }),
    ],
  },
  {
    keywords: ["personnes âgées", "personnes agees", "âgées", "agees"],
    questions: [
      q("teen-ages-1", {
        question: "Comment devrions-nous traiter les personnes âgées ?",
        options: ["Avec respect et considération", "En les ignorant", "Avec moquerie", "Comme un fardeau"],
        correctIndex: 0,
        explanation: "La Bible demande d'honorer ceux qui ont de l'expérience.",
      }),
    ],
  },
  {
    keywords: ["sois malin", "reste propre"],
    questions: [
      q("teen-propre-1", {
        question: "Que signifie « sois malin : reste propre » ?",
        options: ["Garder sa pensée et sa conduite pures", "Ne jamais se laver", "Suivre la foule", "Ignorer la morale"],
        correctIndex: 0,
        explanation: "La propreté morale protège notre amitié avec Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["bruits qui courent", "rumeur"],
    questions: [
      q("teen-rumeur-1", {
        question: "Comment arrêter les « bruits qui courent » selon cette vidéo ?",
        options: ["Ne pas répandre ni écouter les ragots", "Les amplifier", "Les inventer", "Les ignorer toujours sans agir"],
        correctIndex: 0,
        explanation: "L'amour ne cherche pas le mal mais la paix.",
      }),
    ],
  },
  {
    keywords: ["objectifs qui honorent", "que vais-je faire"],
    questions: [
      q("teen-objectif-1", {
        question: "Quel conseil cette vidéo donne-t-elle pour l'avenir ?",
        options: ["Fixer des objectifs qui honorent Jéhovah", "Vivre sans but", "Copier le monde", "Ignorer le service"],
        correctIndex: 0,
        explanation: "Planifier avec Jéhovah donne un sens à la vie.",
      }),
    ],
  },
];

/** Vidéos famille / enseignement */
export const FAMILY_TITLE_QUIZZES: { keywords: string[]; questions: MiniVideoQuestion[] }[] = [
  {
    keywords: ["mariage heureux", "mariage"],
    questions: [
      q("fam-mariage-1", {
        question: "Quel secret d'un mariage heureux cette vidéo met-elle en avant ?",
        options: ["Appliquer les principes bibliques ensemble", "Éviter toute discussion", "Chacun pour soi", "Ignorer la Bible"],
        correctIndex: 0,
        explanation: "La Parole de Dieu guide le couple chrétien.",
      }),
    ],
  },
  {
    keywords: ["nos enfants", "enfants"],
    questions: [
      q("fam-enfants-1", {
        question: "Comment cette vidéo encourage-t-elle les parents ?",
        options: ["À élever les enfants avec patience et amour", "À les négliger", "À les laisser sans guide", "À éviter le culte familial"],
        correctIndex: 0,
        explanation: "L'amour et la patience sont essentiels dans la famille.",
      }),
    ],
  },
  {
    keywords: ["patience", "jacob", "esaü", "esau"],
    questions: [
      q("fam-patience-1", {
        question: "Qui cette vidéo nous encourage-t-elle d'imiter pour la patience ?",
        options: ["Jacob plutôt qu'Ésaü", "Ésaü seulement", "Pharaon", "Personne"],
        correctIndex: 0,
        explanation: "Jacob a fait preuve de patience en attendant la bénédiction de Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["jonas", "courage et misericorde", "miséricorde"],
    questions: [
      q("hist-jonas-1", {
        question: "Quelle leçon tire-t-on de l'histoire de Jonas ?",
        options: ["Obéir à Jéhovah et montrer de la miséricorde", "Fuir toujours", "Refuser de prêcher", "Se venger"],
        correctIndex: 0,
        explanation: "Jonas apprit que Jéhovah est miséricordieux.",
      }),
    ],
  },
  {
    keywords: ["femme de lot", "lot"],
    questions: [
      q("hist-lot-1", {
        question: "Pourquoi la femme de Lot est-elle un avertissement ?",
        options: ["Elle a regardé en arrière vers Sodome", "Elle était trop généreuse", "Elle priait trop", "Elle était fidèle"],
        correctIndex: 0,
        explanation: "Elle illustre l'attachement au monde détruit.",
      }),
    ],
  },
  {
    keywords: ["moïse", "moise", "pharaon", "hommes de foi"],
    questions: [
      q("hist-foi-1", {
        question: "Qui cette vidéo nous encourage-t-elle d'imiter ?",
        options: ["Les hommes de foi comme Moïse et Noé", "Pharaon et les incrédules", "Personne", "Seulement les anges"],
        correctIndex: 0,
        explanation: "Les exemples de foi nous fortifient.",
      }),
    ],
  },
  {
    keywords: ["autorité de jéhovah", "autorite"],
    questions: [
      q("ens-autorite-1", {
        question: "Pourquoi respecter l'autorité de Jéhovah ?",
        options: ["Parce qu'il sait ce qui est bon pour nous", "Par obligation seulement", "Sans raison", "Pour plaire aux hommes"],
        correctIndex: 0,
        explanation: "L'obéissance à Jéhovah nous protège.",
      }),
    ],
  },
  {
    keywords: ["avertissement", "exemples qui"],
    questions: [
      q("ens-avert-1", {
        question: "Pourquoi étudier les exemples qui servent d'avertissement ?",
        options: ["Pour éviter les mêmes erreurs", "Pour les imiter", "Sans utilité", "Par curiosité seulement"],
        correctIndex: 0,
        explanation: "1 Corinthiens 10:11 nous met en garde par ces récits.",
      }),
    ],
  },
  {
    keywords: ["pas une seule parole", "parole n'a failli"],
    questions: [
      q("ens-parole-1", {
        question: "Que prouve que « pas une seule parole n'a failli » ?",
        options: ["Les promesses de Jéhovah sont fiables", "La Bible est fausse", "Rien ne s'accomplit", "Dieu change d'avis"],
        correctIndex: 0,
        explanation: "Chaque promesse divine s'accomplit en son temps.",
      }),
    ],
  },
  {
    keywords: ["aime toutes sortes", "respecte les personnes", "reconnaissant", "prie pour", "merci d'être"],
    questions: [
      q("ens-valeur-1", {
        question: "Quelle qualité chrétienne cette vidéo met-elle en avant ?",
        options: ["L'amour, le respect et la gratitude envers les autres", "L'égoïsme", "L'indifférence", "La critique"],
        correctIndex: 0,
        explanation: "Ces qualités reflètent l'amour de Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["paix illusoire", "tromper"],
    questions: [
      q("ens-paix-1", {
        question: "Qu'est-ce qu'une « paix illusoire » selon cette vidéo ?",
        options: ["Une fausse sécurité sans obéissance à Jéhovah", "La vraie paix de Dieu", "La prière", "L'étude biblique"],
        correctIndex: 0,
        explanation: "La vraie paix vient de l'obéissance à Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["langue du coeur", "langue du cœur"],
    questions: [
      q("ens-langue-1", {
        question: "Que signifie parler la « langue du cœur » ?",
        options: ["Communiquer avec sincérité et amour", "Mentir poliment", "Se taire toujours", "Critiquer les autres"],
        correctIndex: 0,
        explanation: "Une communication sincère renforce l'unité.",
      }),
    ],
  },
  {
    keywords: ["espérons ce que nous ne voyons", "esperons"],
    questions: [
      q("ens-espoir-1", {
        question: "Pourquoi « espérer ce que nous ne voyons pas » ?",
        options: ["La foi en les promesses de Jéhovah", "L'imagination seule", "Le hasard", "Rien n'est sûr"],
        correctIndex: 0,
        explanation: "Romains 8:25 lie l'espérance à la patience.",
      }),
    ],
  },
  {
    keywords: ["laisse jéhovah tracer", "trace ton chemin"],
    questions: [
      q("ens-chemin-1", {
        question: "Que signifie laisser Jéhovah tracer ton chemin ?",
        options: ["Lui faire confiance pour guider nos décisions", "Agir sans réfléchir", "Ignorer la prière", "Suivre le monde"],
        correctIndex: 0,
        explanation: "Proverbes 3:5, 6 invite à faire confiance à Jéhovah.",
      }),
    ],
  },
  {
    keywords: ["vrai amour"],
    questions: [
      q("ens-amour2-1", {
        question: "Qu'est-ce que le vrai amour selon cette vidéo ?",
        options: ["Un amour guidé par les principes de Jéhovah", "Un simple sentiment", "L'égoïsme", "L'indifférence"],
        correctIndex: 0,
        explanation: "Le vrai amour est désintéressé et obéit à Dieu.",
      }),
    ],
  },
  {
    keywords: ["confiance", "sauve-nous", "nouveaux projets"],
    questions: [
      q("ens-confiance-1", {
        question: "En qui cette vidéo nous encourage-t-elle à placer notre confiance ?",
        options: ["Jéhovah", "Nous-mêmes seuls", "Les hommes", "La chance"],
        correctIndex: 0,
        explanation: "Jéhovah soutient ceux qui lui font confiance.",
      }),
    ],
  },
];

/** Courtes leçons de valeurs pour enfants */
export const KIDS_VALUE_QUIZZES: { keywords: string[]; questions: MiniVideoQuestion[] }[] = [
  {
    keywords: ["aime toutes sortes"],
    questions: [
      q("kids-amour-1", {
        question: "Que nous apprend cette leçon sur l'amour ?",
        options: ["Aimer les gens de toutes sortes comme Jéhovah le fait", "N'aimer que ses amis", "Éviter les étrangers", "Juger sur l'apparence"],
        correctIndex: 0,
        explanation: "Jéhovah nous invite à aimer sans partialité.",
      }),
    ],
  },
  {
    keywords: ["respecte les personnes"],
    questions: [
      q("kids-respect-1", {
        question: "Pourquoi respecter les personnes âgées ?",
        options: ["Ils ont de l'expérience et méritent notre considération", "Ils sont moins importants", "Ce n'est pas nécessaire", "Pour les éviter"],
        correctIndex: 0,
        explanation: "Les Écritures demandent d'honorer ceux qui ont de l'âge.",
      }),
    ],
  },
  {
    keywords: ["sois reconnaissant"],
    questions: [
      q("kids-gratitude-1", {
        question: "Envers qui cette leçon nous encourage-t-elle d'être reconnaissants ?",
        options: ["Jéhovah et ceux qui nous aident", "Personne", "Seulement nous-mêmes", "Les inconnus seulement"],
        correctIndex: 0,
        explanation: "La gratitude est une belle qualité chrétienne.",
      }),
    ],
  },
  {
    keywords: ["prie pour les autres"],
    questions: [
      q("kids-priere-1", {
        question: "Pourquoi prier pour les autres ?",
        options: ["Cela montre notre amour et aide vraiment", "C'est inutile", "Seuls les anciens prient", "Pour impressionner"],
        correctIndex: 0,
        explanation: "Prier pour les autres est un acte d'amour.",
      }),
    ],
  },
  {
    keywords: ["mes nouveaux projets"],
    questions: [
      q("kids-projets-1", {
        question: "Que nous apprend cette leçon sur les projets ?",
        options: ["Inviter Jéhovah dans nos projets", "Ne rien planifier", "Faire tout seul", "Ignorer Dieu"],
        correctIndex: 0,
        explanation: "Jéhovah bénit ceux qui le consultent.",
      }),
    ],
  },
  {
    keywords: ["merci d'être toi", "merci detre toi"],
    questions: [
      q("kids-merci-1", {
        question: "Quel message cette leçon transmet-elle ?",
        options: ["Chaque enfant est précieux aux yeux de Jéhovah", "Tu n'as pas de valeur", "Sois comme les autres", "Cache tes qualités"],
        correctIndex: 0,
        explanation: "Jéhovah t'aime tel que tu es.",
      }),
    ],
  },
];
