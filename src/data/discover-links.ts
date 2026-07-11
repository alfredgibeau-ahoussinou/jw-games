import {
  JW_LIBRARY_LINK,
  JW_ORG_LINK,
  jwImageForSlot,
} from "@/lib/jw-images";

export interface DiscoverItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  external?: boolean;
  badge?: string;
}

export interface DiscoverSection {
  id: string;
  title: string;
  subtitle: string;
  items: DiscoverItem[];
}

export const DISCOVER_HERO = {
  image: jwImageForSlot("discover.hero").url,
  alt: jwImageForSlot("discover.hero").alt,
};

export const DISCOVER_APP_LINKS: DiscoverItem[] = [
  {
    id: "mediatheque",
    title: "Médiathèque",
    description: "Vidéos officielles intégrées, avec sous-titres et mini-quiz.",
    href: "/mediatheque",
    image: jwImageForSlot("discover.mediatheque").url,
    badge: "Vidéos",
  },
  {
    id: "jeux",
    title: "Jeux bibliques",
    description: "Quiz, mémoire, devinettes et plus — seul ou en groupe.",
    href: "/jeux",
    image: jwImageForSlot("discover.jeux").url,
    badge: "15 modes",
  },
  {
    id: "etude",
    title: "Étude personnelle",
    description: "Thèmes guidés pour approfondir un sujet à votre rythme.",
    href: "/etude",
    image: jwImageForSlot("discover.etude").url,
    badge: "Thèmes",
  },
  {
    id: "langues",
    title: "Langues pour la prédication",
    description: "Anglais, espagnol, arabe, chinois… Phrases et mots pour le ministère.",
    href: "/langues",
    image: jwImageForSlot("discover.langues").url,
    badge: "8 langues",
  },
  {
    id: "quotidien",
    title: "Défi du jour",
    description: "Quatre missions quotidiennes pour garder une routine.",
    href: "/quotidien",
    image: jwImageForSlot("discover.quotidien").url,
    badge: "XP bonus",
  },
];

export const DISCOVER_SECTIONS: DiscoverSection[] = [
  {
    id: "audience",
    title: "Par public",
    subtitle: "Contenus JW.org adaptés à chaque âge et à chaque situation.",
    items: [
      {
        id: "enfants",
        title: "Enfants",
        description: "Chansons, leçons animées et histoires bibliques pour les plus jeunes.",
        href: "https://www.jw.org/fr/la-bible-et-vous/enfants/",
        image: jwImageForSlot("discover.enfants").url,
        external: true,
      },
      {
        id: "ados",
        title: "Adolescents",
        description: "Vidéos et articles sur la foi, les amitiés et les choix du quotidien.",
        href: "https://www.jw.org/fr/la-bible-et-vous/adolescents/",
        image: jwImageForSlot("discover.ados").url,
        external: true,
      },
      {
        id: "familles",
        title: "Couples et familles",
        description: "Conseils bibliques pour renforcer l'harmonie à la maison.",
        href: "https://www.jw.org/fr/la-bible-et-vous/familles/",
        image: jwImageForSlot("discover.familles").url,
        external: true,
      },
    ],
  },
  {
    id: "study",
    title: "Étudier la Bible",
    subtitle: "Outils officiels pour lire, comprendre et appliquer la Parole de Dieu.",
    items: [
      {
        id: "bible",
        title: "Bible en ligne",
        description: "Traduction du monde nouveau, notes et outils de recherche.",
        href: "https://www.jw.org/fr/bibliothèque/bible/",
        image: jwImageForSlot("discover.bible").url,
        external: true,
      },
      {
        id: "cours",
        title: "Cours biblique",
        description: "Étude gratuite à domicile, à votre rythme, avec un instructeur.",
        href: "https://www.jw.org/fr/la-bible-et-vous/cours-biblique-particulier/",
        image: jwImageForSlot("discover.cours").url,
        external: true,
      },
      {
        id: "histoire",
        title: "La Bible et l'histoire",
        description: "Découvrir comment l'histoire confirme les récits bibliques.",
        href: "https://www.jw.org/fr/la-bible-et-vous/histoire/",
        image: jwImageForSlot("discover.histoire").url,
        external: true,
      },
    ],
  },
  {
    id: "media",
    title: "Vidéos et publications",
    subtitle: "Films, séries et magazines disponibles gratuitement sur JW.org.",
    items: [
      {
        id: "gnj",
        title: "La bonne nouvelle selon Jésus",
        description: "Série animée retraçant la vie et le ministère de Jésus-Christ.",
        href: "https://www.jw.org/fr/bibliothèque/videos/bonne-nouvelle-selon-jesus/",
        image: jwImageForSlot("discover.gnj").url,
        external: true,
      },
      {
        id: "videos",
        title: "Bibliothèque vidéo",
        description: "Des centaines de vidéos classées par thème et par public.",
        href: "https://www.jw.org/fr/bibliothèque/videos/",
        image: jwImageForSlot("discover.videos").url,
        external: true,
      },
      {
        id: "magazines",
        title: "Magazines et brochures",
        description: "Publications périodiques et ouvrages à lire en ligne ou à télécharger.",
        href: JW_LIBRARY_LINK,
        image: jwImageForSlot("discover.magazines").url,
        external: true,
      },
    ],
  },
];

export const DISCOVER_OFFICIAL_LINKS = [
  { label: "Site officiel JW.org", href: JW_ORG_LINK },
  { label: "JW Library", href: JW_LIBRARY_LINK },
  { label: "Texte du jour", href: "https://www.jw.org/fr/bibliothèque/jw-texte-du-jour/" },
] as const;
