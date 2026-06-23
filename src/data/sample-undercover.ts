/** Paires de mots pour Undercover biblique — civils vs imposteur */

export interface UndercoverWordSide {
  word: string;
  hints: string[];
  reference: string;
}

export interface UndercoverPair {
  id: string;
  name: string;
  description: string;
  category: "personnages" | "lieux" | "evenements" | "objets" | "qualites";
  difficulty: "facile" | "moyen" | "difficile";
  emoji: string;
  civilian: UndercoverWordSide;
  impostor: UndercoverWordSide;
}

export const UNDERCOVER_PAIRS: UndercoverPair[] = [
  {
    id: "patriarches",
    name: "Les patriarches",
    description: "Trois pères fondateurs… et un prophète législateur.",
    category: "personnages",
    difficulty: "facile",
    emoji: "👴",
    civilian: {
      word: "Abraham",
      hints: ["Quitta Ur par obéissance", "Père d'une multitude de nations"],
      reference: "Genèse 12:1-3",
    },
    impostor: {
      word: "Moïse",
      hints: ["Reçut la Loi au Sinaï", "Fit sortir Israël d'Égypte"],
      reference: "Exode 3:10",
    },
  },
  {
    id: "apotres",
    name: "Les apôtres",
    description: "Un des douze… ou l'apôtre des nations ?",
    category: "personnages",
    difficulty: "facile",
    emoji: "🎣",
    civilian: {
      word: "Pierre",
      hints: ["Pêcheur de Galilée", "Clés du royaume"],
      reference: "Matthieu 16:18",
    },
    impostor: {
      word: "Paul",
      hints: ["Apôtre des nations", "Écrivit de nombreuses lettres"],
      reference: "Actes 9:15",
    },
  },
  {
    id: "fils-jacob",
    name: "Fils de Jacob",
    description: "Deux fils bien-aimés de Jacob.",
    category: "personnages",
    difficulty: "moyen",
    emoji: "🌈",
    civilian: {
      word: "Joseph",
      hints: ["Tunique de many colors", "Gouverneur en Égypte"],
      reference: "Genèse 37:3",
    },
    impostor: {
      word: "Benjamin",
      hints: ["Frère cadet de Joseph", "Fils de la vieillesse de Jacob"],
      reference: "Genèse 44:20",
    },
  },
  {
    id: "rois-israel",
    name: "Rois d'Israël",
    description: "Le roi selon le cœur de Jéhovah… ou le premier roi ?",
    category: "personnages",
    difficulty: "moyen",
    emoji: "👑",
    civilian: {
      word: "David",
      hints: ["Vainquit Goliath", "Auteur de nombreux psaumes"],
      reference: "1 Samuel 17:49",
    },
    impostor: {
      word: "Saül",
      hints: ["Premier roi d'Israël", "Rejeté par Jéhovah"],
      reference: "1 Samuel 10:1",
    },
  },
  {
    id: "prophetes-majeurs",
    name: "Grands prophètes",
    description: "Deux prophètes majeurs du royaume du sud.",
    category: "personnages",
    difficulty: "difficile",
    emoji: "📜",
    civilian: {
      word: "Ésaïe",
      hints: ["Prophétisa la venue du Messie", "Voyait des prophéties messianiques"],
      reference: "Ésaïe 9:6",
    },
    impostor: {
      word: "Jérémie",
      hints: ["Le prophète qui pleurait", "Prophétisa la chute de Jérusalem"],
      reference: "Jérémie 1:5",
    },
  },
  {
    id: "femmes-fideles",
    name: "Femmes fidèles",
    description: "Deux héroïnes de la fidélité.",
    category: "personnages",
    difficulty: "moyen",
    emoji: "💐",
    civilian: {
      word: "Ruth",
      hints: ["Moabite loyale", "« Là où tu iras j'irai »"],
      reference: "Ruth 1:16",
    },
    impostor: {
      word: "Esther",
      hints: ["Reine de Perse", "Sauva son peuple"],
      reference: "Esther 4:14",
    },
  },
  {
    id: "evangelistes",
    name: "Évangélistes",
    description: "Deux récits du ministère de Jésus.",
    category: "personnages",
    difficulty: "difficile",
    emoji: "📖",
    civilian: {
      word: "Matthieu",
      hints: ["Ancien publicain", "Sermon sur le montagne"],
      reference: "Matthieu 5:1-2",
    },
    impostor: {
      word: "Marc",
      hints: ["Évangile le plus court", "Associé à Pierre"],
      reference: "Marc 1:1",
    },
  },
  {
    id: "villes-saintes",
    name: "Villes saintes",
    description: "Deux cités au cœur de l'histoire biblique.",
    category: "lieux",
    difficulty: "facile",
    emoji: "🏛️",
    civilian: {
      word: "Jérusalem",
      hints: ["Ville sainte", "Temple de Jéhovah"],
      reference: "Psaume 122:1",
    },
    impostor: {
      word: "Bethléem",
      hints: ["Naissance de Jésus", "Cité de David"],
      reference: "Luc 2:4-7",
    },
  },
  {
    id: "mers",
    name: "Mers et eaux",
    description: "Deux étendues d'eau marquantes.",
    category: "lieux",
    difficulty: "moyen",
    emoji: "🌊",
    civilian: {
      word: "Mer de Galilée",
      hints: ["Jésus y marcha sur les eaux", "Pêcheurs sur ses rives"],
      reference: "Matthieu 14:25",
    },
    impostor: {
      word: "Mer Morte",
      hints: ["Très salée", "Aux environs de Sodome"],
      reference: "Genèse 14:3",
    },
  },
  {
    id: "montagnes",
    name: "Montagnes sacrées",
    description: "Deux sommets liés à des alliances.",
    category: "lieux",
    difficulty: "difficile",
    emoji: "⛰️",
    civilian: {
      word: "Sinaï",
      hints: ["Loi donnée à Moïse", "Buisson ardent"],
      reference: "Exode 19:20",
    },
    impostor: {
      word: "Morija",
      hints: ["Sacrifice d'Isaac", "Emplacement du temple"],
      reference: "Genèse 22:2",
    },
  },
  {
    id: "delivrances",
    name: "Grands sauvetages",
    description: "Deux délivrances miraculeuses d'Israël.",
    category: "evenements",
    difficulty: "facile",
    emoji: "🛡️",
    civilian: {
      word: "Mer Rouge",
      hints: ["Traversée à pied sec", "Fuite d'Égypte"],
      reference: "Exode 14:21",
    },
    impostor: {
      word: "Jourdain",
      hints: ["Entrée en Canaan", "Josué fit arrêter les eaux"],
      reference: "Josué 3:17",
    },
  },
  {
    id: "jugements",
    name: "Jugements mémorables",
    description: "Deux châtiments célèbres des temps anciens.",
    category: "evenements",
    difficulty: "moyen",
    emoji: "⚡",
    civilian: {
      word: "Déluge",
      hints: ["Arche de Noé", "Monde ancien détruit"],
      reference: "Genèse 7:17",
    },
    impostor: {
      word: "Sodome",
      hints: ["Lot en fut sauvé", "Ville détruite par le feu"],
      reference: "Genèse 19:24",
    },
  },
  {
    id: "miracles-jesus",
    name: "Miracles de Jésus",
    description: "Deux miracles qui ont marqué ses disciples.",
    category: "evenements",
    difficulty: "moyen",
    emoji: "✨",
    civilian: {
      word: "Résurrection de Lazare",
      hints: ["Quatre jours dans le tombeau", "« Lazare, sors ! »"],
      reference: "Jean 11:43",
    },
    impostor: {
      word: "Multiplication des pains",
      hints: ["Cinq pains et deux poissons", "Cinq mille hommes nourris"],
      reference: "Jean 6:11",
    },
  },
  {
    id: "armure-dieu",
    name: "Armure de Dieu",
    description: "Deux pièces de l'armure spirituelle.",
    category: "objets",
    difficulty: "moyen",
    emoji: "🛡️",
    civilian: {
      word: "Bouclier",
      hints: ["Bouclier de la foi", "Éteint les dards du mal"],
      reference: "Éphésiens 6:16",
    },
    impostor: {
      word: "Casque",
      hints: ["Casque du salut", "Protège la tête"],
      reference: "Éphésiens 6:17",
    },
  },
  {
    id: "sacrifices",
    name: "Offrandes sacrées",
    description: "Deux éléments du culte pur.",
    category: "objets",
    difficulty: "difficile",
    emoji: "🔥",
    civilian: {
      word: "Encens",
      hints: ["Montait comme prière", "Offert sur l'autel d'or"],
      reference: "Psaume 141:2",
    },
    impostor: {
      word: "Holocauste",
      hints: ["Entièrement consumé", "Offrande sur l'autel"],
      reference: "Lévitique 1:9",
    },
  },
  {
    id: "fruit-esprit",
    name: "Fruit de l'esprit",
    description: "Deux qualités produites par l'esprit saint.",
    category: "qualites",
    difficulty: "facile",
    emoji: "🍇",
    civilian: {
      word: "Amour",
      hints: ["Plus grand commandement", "Dieu est amour"],
      reference: "1 Jean 4:8",
    },
    impostor: {
      word: "Joie",
      hints: ["Fruit de l'esprit", "Joie du salut"],
      reference: "Galates 5:22",
    },
  },
  {
    id: "vertus-chretiennes",
    name: "Vertus chrétiennes",
    description: "Deux traits essentiels du chrétien.",
    category: "qualites",
    difficulty: "moyen",
    emoji: "💎",
    civilian: {
      word: "Foi",
      hints: ["Sans la foi il est impossible de plaire", "Marche par la foi"],
      reference: "Hébreux 11:6",
    },
    impostor: {
      word: "Espérance",
      hints: ["Ancre de l'âme", "Attente du royaume"],
      reference: "Hébreux 6:19",
    },
  },
  {
    id: "anges",
    name: "Anges puissants",
    description: "Deux anges nommés dans les Écritures.",
    category: "personnages",
    difficulty: "difficile",
    emoji: "👼",
    civilian: {
      word: "Gabriel",
      hints: ["Annonça la naissance de Jésus", "Messager de bonnes nouvelles"],
      reference: "Luc 1:26",
    },
    impostor: {
      word: "Michel",
      hints: ["Chef des anges", "Combat contre le dragon"],
      reference: "Apocalypse 12:7",
    },
  },
];

export function getUndercoverPair(id: string): UndercoverPair | undefined {
  return UNDERCOVER_PAIRS.find((p) => p.id === id);
}

export function getRandomPair(filter?: {
  category?: UndercoverPair["category"];
  difficulty?: UndercoverPair["difficulty"];
}): UndercoverPair {
  let pool = UNDERCOVER_PAIRS;
  if (filter?.category) pool = pool.filter((p) => p.category === filter.category);
  if (filter?.difficulty) pool = pool.filter((p) => p.difficulty === filter.difficulty);
  return pool[Math.floor(Math.random() * pool.length)] ?? UNDERCOVER_PAIRS[0];
}

/** @deprecated compatibilité */
export const UNDERCOVER_GROUPS = UNDERCOVER_PAIRS;
export function getGroupWords(group: UndercoverPair) {
  return { civilian: group.civilian, impostor: group.impostor };
}
