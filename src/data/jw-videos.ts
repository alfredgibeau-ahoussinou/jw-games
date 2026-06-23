/** Catalogue vidéos JW.org — CDN officiel */

export interface JwVideo {
  id: string; title: string; description: string;
  category: "jesus" | "enfants" | "jeunes" | "famille" | "histoire" | "enseignement" | "broadcast";
  streamUrl: string; posterUrl: string; jwPageUrl: string;
  durationSeconds?: number; pub: string; track?: number;
}
export interface JwVideoCollection {
  id: string; title: string; description: string; imageUrl: string;
  jwPageUrl: string; pub: string; videos: JwVideo[];
}
export const JW_VIDEO_COLLECTIONS: JwVideoCollection[] = 
[
  {
    "id": "gnj",
    "title": "La bonne nouvelle selon Jésus",
    "description": "Série sur la vie de Jésus.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023101/univ/art/1112023101_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "gnj",
    "videos": [
      {
        "id": "gnj-pisode-1-la-vraie-lumi-re-du-monde",
        "title": "Épisode 1 : La vraie lumière du monde",
        "description": "Épisode 1 : La vraie lumière du monde",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/183062f/7/o/gnj_F_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023101/univ/art/1112023101_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 4261,
        "pub": "gnj"
      },
      {
        "id": "gnj-pisode-2-voici-mon-fils",
        "title": "Épisode 2 : « Voici mon Fils »",
        "description": "Épisode 2 : « Voici mon Fils »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/9a761a0/7/o/gnj_F_02_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023104/univ/art/1112023104_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3166,
        "pub": "gnj"
      },
      {
        "id": "gnj-pisode-3-je-suis-celui-ci",
        "title": "Épisode 3 : « Je suis celui-ci »",
        "description": "Épisode 3 : « Je suis celui-ci »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/1eabf3/3/o/gnj_F_03_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023107/univ/art/1112023107_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2380,
        "pub": "gnj"
      },
      {
        "id": "gnj-pisode-4-c-est-pour-cela-que-je-suis-venu",
        "title": "Épisode 4 : « C’est pour cela que je suis venu »",
        "description": "Épisode 4 : « C’est pour cela que je suis venu »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/2916a5/1/o/gnj_F_04_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023108/univ/art/1112023108_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3296,
        "pub": "gnj"
      },
      {
        "id": "gnj-pisode-5-bahis-par-sa-mani-re-d-enseigner",
        "title": "Épisode 5 : « Ébahis par sa manière d’enseigner »",
        "description": "Épisode 5 : « Ébahis par sa manière d’enseigner »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/df2483e/2/o/gnj_F_05_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023111/univ/art/1112023111_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1847,
        "pub": "gnj"
      },
      {
        "id": "gnj-pisode-6-es-tu-celui-qui-devait-venir",
        "title": "Épisode 6 : « Es-tu celui qui devait venir ? »",
        "description": "Épisode 6 : « Es-tu celui qui devait venir ? »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0570f8/4/o/gnj_F_06_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1112023112/univ/art/1112023112_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3035,
        "pub": "gnj"
      },
      {
        "id": "gnj-son-nom-est-jean",
        "title": "« Son nom est Jean »",
        "description": "« Son nom est Jean »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/a49eac/2/o/wcgv_F_10_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_10_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 419,
        "pub": "wcgv"
      },
      {
        "id": "gnj-je-suis-l-esclave-de-j-hovah",
        "title": "« Je suis l'esclave de Jéhovah ! »",
        "description": "« Je suis l'esclave de Jéhovah ! »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/c85b881/2/o/wcgv_F_11_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_11_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 220,
        "pub": "wcgv"
      },
      {
        "id": "gnj-il-suivit-les-instructions-de-l-ange-de-j-hovah",
        "title": "Il « suivit les instructions de l'ange de Jéhovah »",
        "description": "Il « suivit les instructions de l'ange de Jéhovah »",
        "category": "jesus",
        "streamUrl": "https://cfp2.jw-cdn.org/a/5b57e24/1/o/wcgv_F_12_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_12_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 279,
        "pub": "wcgv"
      }
    ]
  },
  {
    "id": "bjf",
    "title": "Deviens l'ami de Jéhovah",
    "description": "Leçons animées pour enfants.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/503000127/univ/art/503000127_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "bjf",
    "videos": [
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-lie",
        "title": "Apprends avec les amis de Jéhovah : Élie",
        "description": "Apprends avec les amis de Jéhovah : Élie",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/002595/2/o/ljf_F_009_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000127/univ/art/503000127_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 187,
        "pub": "ljf"
      },
      {
        "id": "bjf-j-hovah-est-une-personne-r-elle",
        "title": "Jéhovah est une personne réelle",
        "description": "Jéhovah est une personne réelle",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/9a6ea41/2/o/pk_F_059_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600168/univ/art/501600168_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 635,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-mefibosheth",
        "title": "Apprends avec les amis de Jéhovah : Mefibosheth",
        "description": "Apprends avec les amis de Jéhovah : Mefibosheth",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/8d21a1/3/o/ljf_F_008_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000123/univ/art/503000123_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 175,
        "pub": "ljf"
      },
      {
        "id": "bjf-bande-annonce-deviens-l-ami-de-j-hovah-j-hovah-est-une-",
        "title": "Bande-annonce — Deviens l’ami de Jéhovah : Jéhovah est une personne réelle",
        "description": "Bande-annonce — Deviens l’ami de Jéhovah : Jéhovah est une personne réelle",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/89357b/3/o/pk_F_058_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600169/univ/art/501600169_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 51,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-joseph",
        "title": "Apprends avec les amis de Jéhovah : Joseph",
        "description": "Apprends avec les amis de Jéhovah : Joseph",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/549ce45/2/o/ljf_F_007_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000120/univ/art/503000120_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 156,
        "pub": "ljf"
      },
      {
        "id": "bjf-sois-hospitalier",
        "title": "Sois hospitalier",
        "description": "Sois hospitalier",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/cc5ef1d/2/o/pk_F_057_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600165/univ/art/501600165_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 127,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-josu-et-caleb",
        "title": "Apprends avec les amis de Jéhovah : Josué et Caleb",
        "description": "Apprends avec les amis de Jéhovah : Josué et Caleb",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/82b3693/2/o/ljf_F_006_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000119/univ/art/503000119_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 160,
        "pub": "ljf"
      },
      {
        "id": "bjf-tu-pourras-tre-pionnier",
        "title": "Tu pourras être pionnier !",
        "description": "Tu pourras être pionnier !",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/6109459/1/o/pk_F_056_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600162/univ/art/501600162_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 153,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-abiga-l",
        "title": "Apprends avec les amis de Jéhovah : Abigaïl",
        "description": "Apprends avec les amis de Jéhovah : Abigaïl",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/7fbc521/2/o/ljf_F_005_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000116/univ/art/503000116_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 168,
        "pub": "ljf"
      },
      {
        "id": "bjf-le-plus-bel-acte-d-amour",
        "title": "Le plus bel acte d’amour",
        "description": "Le plus bel acte d’amour",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0021a8d/2/o/pk_F_055_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600157/univ/art/501600157_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 742,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-d-borah",
        "title": "Apprends avec les amis de Jéhovah : Déborah",
        "description": "Apprends avec les amis de Jéhovah : Déborah",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/771c34c/2/o/ljf_F_004_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000111/univ/art/503000111_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 160,
        "pub": "ljf"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-abel",
        "title": "Apprends avec les amis de Jéhovah : Abel",
        "description": "Apprends avec les amis de Jéhovah : Abel",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/492e43/3/o/ljf_F_003_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000110/univ/art/503000110_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 147,
        "pub": "ljf"
      },
      {
        "id": "bjf-c-est-dieu-qui-fait-pousser",
        "title": "C’est Dieu qui fait pousser",
        "description": "C’est Dieu qui fait pousser",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/8ef53f/2/o/pk_F_053_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600149/univ/art/501600149_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 146,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-j-r-mie",
        "title": "Apprends avec les amis de Jéhovah : Jérémie",
        "description": "Apprends avec les amis de Jéhovah : Jérémie",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/247489/4/o/ljf_F_002_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000104/univ/art/503000104_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 144,
        "pub": "ljf"
      },
      {
        "id": "bjf-j-hovah-est-notre-p-re",
        "title": "Jéhovah est notre Père",
        "description": "Jéhovah est notre Père",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/304025/2/o/pk_F_052_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600146/univ/art/501600146_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 136,
        "pub": "pk"
      },
      {
        "id": "bjf-apprends-avec-les-amis-de-j-hovah-hanania-mishael-et-az",
        "title": "Apprends avec les amis de Jéhovah : Hanania, Mishael et Azarias",
        "description": "Apprends avec les amis de Jéhovah : Hanania, Mishael et Azarias",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/511584/4/o/ljf_F_001_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000100/univ/art/503000100_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 165,
        "pub": "ljf"
      },
      {
        "id": "bjf-tu-es-pr-cieux-pour-j-hovah",
        "title": "Tu es précieux pour Jéhovah",
        "description": "Tu es précieux pour Jéhovah",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/fa3b37/2/o/pk_F_051_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600141/univ/art/501600141_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 695,
        "pub": "pk"
      },
      {
        "id": "bjf-bande-annonce-deviens-l-ami-de-j-hovah-tu-es-pr-cieux-p",
        "title": "Bande-annonce — Deviens l’ami de Jéhovah : Tu es précieux pour Jéhovah",
        "description": "Bande-annonce — Deviens l’ami de Jéhovah : Tu es précieux pour Jéhovah",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/6903ce5/1/o/pk_F_050_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600140/univ/art/501600140_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 61,
        "pub": "pk"
      },
      {
        "id": "bjf-les-tapes-qui-m-nent-au-bapt-me",
        "title": "Les étapes qui mènent au baptême",
        "description": "Les étapes qui mènent au baptême",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/1d98a1/2/o/pk_F_049_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600137/univ/art/501600137_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 111,
        "pub": "pk"
      },
      {
        "id": "bjf-deviens-proclamateur-non-baptis",
        "title": "Deviens proclamateur non baptisé",
        "description": "Deviens proclamateur non baptisé",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/d0a702/1/o/pk_F_048_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600136/univ/art/501600136_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 110,
        "pub": "pk"
      },
      {
        "id": "bjf-qui-choisir-comme-ami",
        "title": "Qui choisir comme ami ?",
        "description": "Qui choisir comme ami ?",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/ef1f3d/3/o/pk_F_047_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600131/univ/art/501600131_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 794,
        "pub": "pk"
      },
      {
        "id": "bjf-bande-annonce-deviens-l-ami-de-j-hovah-qui-choisir-comm",
        "title": "Bande-annonce — Deviens l'ami de Jéhovah : Qui choisir comme ami ?",
        "description": "Bande-annonce — Deviens l'ami de Jéhovah : Qui choisir comme ami ?",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0ad839/2/o/pk_F_046_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600130/univ/art/501600130_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 69,
        "pub": "pk"
      },
      {
        "id": "bjf-pourquoi-ob-ir-dieu-alors-qu-on-ne-le-voit-pas",
        "title": "Pourquoi obéir à Dieu alors qu’on ne le voit pas ?",
        "description": "Pourquoi obéir à Dieu alors qu’on ne le voit pas ?",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/590d56/1/o/pk_F_045_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600127/univ/art/501600127_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 157,
        "pub": "pk"
      },
      {
        "id": "bjf-ne-baisse-pas-les-bras",
        "title": "Ne baisse pas les bras !",
        "description": "Ne baisse pas les bras !",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f887e18/1/o/pk_F_044_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600124/univ/art/501600124_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 95,
        "pub": "pk"
      }
    ]
  },
  {
    "id": "enfants-films",
    "title": "Films pour enfants",
    "description": "Histoires bibliques animées.",
    "imageUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivdd/univ/art/ivdd_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "enfants-films",
    "videos": [
      {
        "id": "enfants-films-david-il-mettait-sa-confiance-en-j-hovah",
        "title": "David : il mettait sa confiance en Jéhovah",
        "description": "David : il mettait sa confiance en Jéhovah",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/aa2ff0/1/o/ivdd_s-Sub_F_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivdd/univ/art/ivdd_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1725,
        "pub": "ivdd"
      },
      {
        "id": "enfants-films-no-il-marchait-avec-dieu",
        "title": "Noé : il marchait avec Dieu",
        "description": "Noé : il marchait avec Dieu",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/7d86be/1/o/ivno_s-Sub_F_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivno/univ/art/ivno_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1450,
        "pub": "ivno"
      }
    ]
  },
  {
    "id": "chansons-enfants",
    "title": "Chansons pour enfants",
    "description": "Chansons originales.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/501800168/univ/art/501800168_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "chansons-enfants",
    "videos": [
      {
        "id": "chansons-enfants-je-vois-j-hovah",
        "title": "Je vois Jéhovah",
        "description": "Je vois Jéhovah",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/91eb216/4/o/pkon_F_035_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800168/univ/art/501800168_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 185,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-pour-te-faire-des-amis-toi-m-me-sois-un-ami",
        "title": "Pour te faire des amis, toi-même sois un ami",
        "description": "Pour te faire des amis, toi-même sois un ami",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/7e63dd1/3/o/pkon_F_034_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800163/univ/art/501800163_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 143,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-j-hovah-est-fier-de-toi",
        "title": "Jéhovah est fier de toi",
        "description": "Jéhovah est fier de toi",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/5702fe3/2/o/pkon_F_033_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800160/univ/art/501800160_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 138,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-j-hovah-je-cours-vers-toi",
        "title": "Jéhovah, je cours vers toi",
        "description": "Jéhovah, je cours vers toi",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/60a928/3/o/pkon_F_032_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800154/univ/art/501800154_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 120,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-ranger-laver-j-aime-a",
        "title": "Ranger, laver, j'aime ça !",
        "description": "Ranger, laver, j'aime ça !",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/e300cf/5/o/pkon_F_031_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800145/univ/art/501800145_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 112,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-enfin-l-assembl-e",
        "title": "Enfin l'assemblée !",
        "description": "Enfin l'assemblée !",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/d04585/4/o/pkon_F_030_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800136/univ/art/501800136_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 134,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-le-fruit-de-l-esprit-apprends-par-c-ur-ses-qualit-s",
        "title": "« Le fruit de l’esprit » : Apprends par cœur ses qualités",
        "description": "« Le fruit de l’esprit » : Apprends par cœur ses qualités",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/4278a1/4/o/pkon_F_029_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800125/univ/art/501800125_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 146,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-je-veux-tre-humble-comme-mo-se",
        "title": "Je veux être humble comme Moïse",
        "description": "Je veux être humble comme Moïse",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/be3e08/2/o/pkon_F_028_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800121/univ/art/501800121_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 123,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-j-hovah-maman-et-moi",
        "title": "Jéhovah, maman et moi",
        "description": "Jéhovah, maman et moi",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/ee2852/8/o/pkon_F_027_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800114/univ/art/501800114_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 161,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-on-a-h-te-de-te-voir",
        "title": "On a hâte de te voir !",
        "description": "On a hâte de te voir !",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/e834cb/6/o/pkon_F_026_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800111/univ/art/501800111_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 125,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-mon-tout-petit",
        "title": "Mon tout-petit",
        "description": "Mon tout-petit",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/d53122/5/o/pkon_F_025_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800106/univ/art/501800106_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 143,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-david-un-exemple-pour-les-jeunes",
        "title": "David, un exemple pour les jeunes",
        "description": "David, un exemple pour les jeunes",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/5d46fd/6/o/pkon_F_024_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800103/univ/art/501800103_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 155,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-ruth-une-vraie-amie",
        "title": "Ruth, une vraie amie",
        "description": "Ruth, une vraie amie",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f7d2bf/6/o/pkon_F_023_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800020/univ/art/501800020_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 144,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-marie-humble-et-volontaire",
        "title": "Marie, humble et volontaire",
        "description": "Marie, humble et volontaire",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/6bc1a4/5/o/pkon_F_022_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800016/univ/art/501800016_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 151,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-connais-tu-les-douze-ap-tres",
        "title": "Connais-tu les douze apôtres ?",
        "description": "Connais-tu les douze apôtres ?",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3e0d30/11/o/pkon_F_021_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800015/univ/art/501800015_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 138,
        "pub": "pkon"
      },
      {
        "id": "chansons-enfants-l-amour-c-est-la-vie",
        "title": "L’amour, c’est la vie",
        "description": "L’amour, c’est la vie",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/5ef12f/6/o/pkon_F_020_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501800009/univ/art/501800009_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 115,
        "pub": "pkon"
      }
    ]
  },
  {
    "id": "ados-spiritualite",
    "title": "Jeunes — Spiritualité",
    "description": "Gagner en spiritualité.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/502100022/univ/art/502100022_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "ados-spiritualite",
    "videos": [
      {
        "id": "ados-spiritualite-la-bible-peut-elle-vraiment-t-aider",
        "title": "La Bible peut-elle vraiment t’aider ?",
        "description": "La Bible peut-elle vraiment t’aider ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/be10e5/2/o/502100022_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100022/univ/art/502100022_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 155,
        "pub": "docid-502100022"
      },
      {
        "id": "ados-spiritualite-pourquoi-tre-honn-te",
        "title": "Pourquoi être honnête ?",
        "description": "Pourquoi être honnête ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/6d3331/2/o/502100016_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100016/univ/art/502100016_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 200,
        "pub": "docid-502100016"
      },
      {
        "id": "ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-richesse",
        "title": "Attention, ne mettez pas votre confiance dans ce qui va disparaître : La richesse",
        "description": "Attention, ne mettez pas votre confiance dans ce qui va disparaître : La richesse",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/9476da/2/o/mwbv_F_202405_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/202405/univ/art/mwbv_univ_202405_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 199,
        "pub": "mwbv"
      },
      {
        "id": "ados-spiritualite-on-peut-faire-plus-en-ayant-des-attentes-raisonnables",
        "title": "On peut faire plus en ayant des attentes raisonnables",
        "description": "On peut faire plus en ayant des attentes raisonnables",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/2dee14/3/o/jwb-092_F_05_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb-092/univ/art/jwb-092_univ_pnr_05_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 321,
        "pub": "jwb-092"
      },
      {
        "id": "ados-spiritualite-comment-bien-g-rer-ton-argent",
        "title": "Comment bien gérer ton argent ?",
        "description": "Comment bien gérer ton argent ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/d2f50d/1/o/502100006_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100006/univ/art/502100006_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 202,
        "pub": "docid-502100006"
      },
      {
        "id": "ados-spiritualite-ne-laisse-pas-ta-vie-partir-en-fum-e",
        "title": "Ne laisse pas ta vie partir en fumée",
        "description": "Ne laisse pas ta vie partir en fumée",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f7bbd6/1/o/502100005_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100005/univ/art/502100005_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 201,
        "pub": "docid-502100005"
      },
      {
        "id": "ados-spiritualite-les-jeux-vid-o-c-est-qui-le-vrai-gagnant",
        "title": "Les jeux vidéo : C’est qui le vrai gagnant ?",
        "description": "Les jeux vidéo : C’est qui le vrai gagnant ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/b9e8fb/1/o/502100002_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100002/univ/art/502100002_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 200,
        "pub": "docid-502100002"
      },
      {
        "id": "ados-spiritualite-triste-ou-optimiste",
        "title": "Triste ou optimiste ?",
        "description": "Triste ou optimiste ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/14e5f72/1/o/502019627_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502019627/univ/art/502019627_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 221,
        "pub": "docid-502019627"
      },
      {
        "id": "ados-spiritualite-comment-communiquer-avec-mes-parents",
        "title": "Comment communiquer avec mes parents ?",
        "description": "Comment communiquer avec mes parents ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/12824e/1/o/502017178_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502017178/univ/art/502017178_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 139,
        "pub": "docid-502017178"
      },
      {
        "id": "ados-spiritualite-attention-ne-mettez-pas-votre-confiance-dans-ce-qui-va-disparaitre",
        "title": "Attention, ne mettez pas votre confiance dans ce qui va disparaître !",
        "description": "Attention, ne mettez pas votre confiance dans ce qui va disparaître !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3f83a3/2/o/jwbcov_F_201905_03_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov/201905/univ/art/jwbcov_univ_201905_pnr_03_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 765,
        "pub": "jwbcov"
      },
      {
        "id": "ados-spiritualite-fuyez-toute-conduite-sexuelle-immorale",
        "title": "Fuyez toute conduite sexuelle immorale",
        "description": "Fuyez toute conduite sexuelle immorale",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/062c98/1/o/jwb_F_201907_03_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb/201907/univ/art/jwb_univ_201907_pnr_03_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 306,
        "pub": "jwb"
      },
      {
        "id": "ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux",
        "title": "N’imitons pas les lâches, mais les courageux !",
        "description": "N’imitons pas les lâches, mais les courageux !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/4c6828e/1/o/jwbcov_F_201805_18_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov/201805/univ/art/jwbcov_univ_201805_pnr_18_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 488,
        "pub": "jwbcov"
      },
      {
        "id": "ados-spiritualite-n-imitons-pas-les-l-ches-mais-les-courageux-pas-les-hab",
        "title": "N'imitons pas les lâches, mais les courageux ! Pas les habitants de Méroz mais Jael",
        "description": "N'imitons pas les lâches, mais les courageux ! Pas les habitants de Méroz mais Jael",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/fb748e2/3/o/wcgv_F_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 100,
        "pub": "wcgv"
      },
      {
        "id": "ados-spiritualite-des-jeunes-qui-apprennent-aimer-la-parole-de-dieu",
        "title": "Des jeunes qui apprennent à aimer la Parole de Dieu",
        "description": "Des jeunes qui apprennent à aimer la Parole de Dieu",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/094609/2/o/jwb_F_201804_05_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb/201804/univ/art/jwb_univ_201804_pnr_05_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 333,
        "pub": "jwb"
      },
      {
        "id": "ados-spiritualite-nous-devons-courir-avec-endurance-alimentons-nous-saine",
        "title": "Nous devons « courir avec endurance »—Alimentons-nous sainement",
        "description": "Nous devons « courir avec endurance »—Alimentons-nous sainement",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/17fa31/1/o/jwbcov_F_201705_15_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/jwbcov/univ/201705/art/jwbcov_univ_201705_pnr_15_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 151,
        "pub": "jwbcov"
      },
      {
        "id": "ados-spiritualite-dieu-conna-t-les-secrets-du-c-ur",
        "title": "Dieu « connaît les secrets du cœur »",
        "description": "Dieu « connaît les secrets du cœur »",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/8583fb/2/o/jwbai_F_201607_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbai/201607/univ/art/jwbai_univ_201607_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 388,
        "pub": "jwbai"
      },
      {
        "id": "ados-spiritualite-stephen-lett-jeunes-gens-j-hovah-vous-aime",
        "title": "Stephen Lett : Jeunes gens, Jéhovah vous aime",
        "description": "Stephen Lett : Jeunes gens, Jéhovah vous aime",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/14c240/1/o/jwban_F_201410_01_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/jwban/univ/201410/art/jwban_univ_201410_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 601,
        "pub": "jwban"
      },
      {
        "id": "ados-spiritualite-le-retour-d-un-fils",
        "title": "Le retour d'un fils",
        "description": "Le retour d'un fils",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/d7b8e8/1/o/ivpro_s-Sub_F_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102012718/univ/art/1102012718_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 5685,
        "pub": "ivpro"
      },
      {
        "id": "ados-spiritualite-le-retour-d-un-fils-interviews",
        "title": "Le retour d'un fils—Interviews",
        "description": "Le retour d'un fils—Interviews",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/1570b1/1/o/ivpro_F_2_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivpro/univ/art/ivpro_univ_pnr_2_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 577,
        "pub": "ivpro"
      },
      {
        "id": "ados-spiritualite-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie-la",
        "title": "Les jeunes s’interrogent… Que vais-je faire de ma vie ? - La valeur de l'étude individuelle",
        "description": "Les jeunes s’interrogent… Que vais-je faire de ma vie ? - La valeur de l'étude individuelle",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3b5ad7/1/o/ivyf_s-Sub_F_4_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/ivyf/univ/art/ivyf_univ_pnr_4_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 177,
        "pub": "ivyf"
      }
    ]
  },
  {
    "id": "ados-social",
    "title": "Jeunes — Vie sociale",
    "description": "Vivre avec les autres.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/502100025/univ/art/502100025_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "ados-social",
    "videos": [
      {
        "id": "ados-social-comment-devrais-tu-consid-rer-les-personnes-g-es",
        "title": "Comment devrais-tu considérer les personnes âgées ?",
        "description": "Comment devrais-tu considérer les personnes âgées ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/5b1f883/2/o/502100025_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100025/univ/art/502100025_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 212,
        "pub": "docid-502100025"
      },
      {
        "id": "ados-social-il-y-a-un-temps-fix-pour-tout-nouer-des-amiti-s-demande",
        "title": "« Il y a un temps fixé pour tout » : Nouer des amitiés demande du temps",
        "description": "« Il y a un temps fixé pour tout » : Nouer des amitiés demande du temps",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/404167/1/o/mwbv_F_202507_02_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/202507/univ/art/mwbv_univ_202507_pnr_02_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 211,
        "pub": "mwbv"
      },
      {
        "id": "ados-social-sois-malin-reste-propre",
        "title": "Sois malin : reste propre !",
        "description": "Sois malin : reste propre !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/93e2a3/2/o/502100015_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100015/univ/art/502100015_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 134,
        "pub": "docid-502100015"
      },
      {
        "id": "ados-social-qu-est-ce-qu-un-pr-jug",
        "title": "Qu'est-ce qu'un préjugé ?",
        "description": "Qu'est-ce qu'un préjugé ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3a54ce/3/o/502100012_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502100012/univ/wpub/502100012_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 209,
        "pub": "docid-502100012"
      },
      {
        "id": "ados-social-ce-que-tu-dois-savoir-sur-le-sport",
        "title": "Ce que tu dois savoir sur le sport",
        "description": "Ce que tu dois savoir sur le sport",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/b7f867/1/o/502018215_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502018215/univ/art/502018215_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 146,
        "pub": "docid-502018215"
      },
      {
        "id": "ados-social-boire-ou-pas-dans-tous-les-cas-pense-aux-d-g-ts",
        "title": "Boire ou pas : dans tous les cas, pense aux dégâts !",
        "description": "Boire ou pas : dans tous les cas, pense aux dégâts !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/1a53636/1/o/502017872_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502017872/univ/art/502017872_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 151,
        "pub": "docid-502017872"
      },
      {
        "id": "ados-social-les-appareils-lectroniques-qui-contr-le-qui",
        "title": "Les appareils électroniques, qui contrôle qui ?",
        "description": "Les appareils électroniques, qui contrôle qui ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/461d2b6/1/o/502016296_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502016296/univ/art/502016296_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 132,
        "pub": "docid-502016296"
      },
      {
        "id": "ados-social-comment-arr-ter-les-bruits-qui-courent",
        "title": "Comment arrêter les bruits qui courent ?",
        "description": "Comment arrêter les bruits qui courent ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0fa4a2/1/o/502016241_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502016241/univ/art/502016241_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 156,
        "pub": "docid-502016241"
      },
      {
        "id": "ados-social-se-pr-parer-au-mariage-calculer-la-d-pense-3e-partie",
        "title": "Se préparer au mariage : « Calculer la dépense » (3e partie)",
        "description": "Se préparer au mariage : « Calculer la dépense » (3e partie)",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f2a74a/1/o/jwbai_F_201610_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbai/201610/univ/art/jwbai_univ_201610_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 373,
        "pub": "jwbai"
      },
      {
        "id": "ados-social-est-ce-de-l-amour-ou-du-b-guin",
        "title": "Est-ce de l'amour ou du béguin ?",
        "description": "Est-ce de l'amour ou du béguin ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/fc0285/1/o/502016211_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502016211/univ/art/502016211_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 186,
        "pub": "docid-502016211"
      },
      {
        "id": "ados-social-r-siste-la-pression-du-groupe",
        "title": "Résiste à la pression du groupe !",
        "description": "Résiste à la pression du groupe !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/c58df6/2/o/502015143_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502015143/univ/art/502015143_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 239,
        "pub": "docid-502015143"
      },
      {
        "id": "ados-social-r-seaux-sociaux-ne-te-laisse-pas-avoir",
        "title": "Réseaux sociaux : ne te laisse pas avoir !",
        "description": "Réseaux sociaux : ne te laisse pas avoir !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/522d57/1/o/502014276_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502014276/univ/art/502014276_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 252,
        "pub": "docid-502014276"
      },
      {
        "id": "ados-social-qu-est-ce-qu-un-vrai-ami",
        "title": "Qu'est-ce qu'un vrai ami ?",
        "description": "Qu'est-ce qu'un vrai ami ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/e8fdcf/1/o/502013393_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502013393/univ/art/502013393_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 254,
        "pub": "docid-502013393"
      },
      {
        "id": "ados-social-mets-un-harceleur-k-o-sans-utiliser-les-poings",
        "title": "Mets un harceleur K.-O. sans utiliser les poings !",
        "description": "Mets un harceleur K.-O. sans utiliser les poings !",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/523b57/2/o/502013189_F_cnt_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/502013189/univ/art/502013189_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 232,
        "pub": "docid-502013189"
      },
      {
        "id": "ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis",
        "title": "Les jeunes s’interrogent… Comment se faire de vrais amis ?",
        "description": "Les jeunes s’interrogent… Comment se faire de vrais amis ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/13a7b0/1/o/ivfe_F_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102006483/univ/art/1102006483_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2545,
        "pub": "ivfe"
      },
      {
        "id": "ados-social-les-jeunes-s-interrogent-comment-se-faire-de-vrais-amis-interviews",
        "title": "Les jeunes s’interrogent… Comment se faire de vrais amis ? - Interviews",
        "description": "Les jeunes s’interrogent… Comment se faire de vrais amis ? - Interviews",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/57a1dbef/1/o/ivfe_F_2_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/ivfe/univ/art/ivfe_univ_pnr_2_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1334,
        "pub": "ivfe"
      }
    ]
  },
  {
    "id": "ados-films",
    "title": "Films pour jeunes",
    "description": "Films et témoignages.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/1102012819/univ/art/1102012819_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "ados-films",
    "videos": [
      {
        "id": "ados-films-qu-est-ce-que-le-vrai-amour",
        "title": "Qu'est-ce que le vrai amour ?",
        "description": "Qu'est-ce que le vrai amour ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/467c2a/1/o/ivtru_F_2_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102012819/univ/art/1102012819_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 4450,
        "pub": "ivtru"
      },
      {
        "id": "ados-films-poursuivez-des-objectifs-qui-honorent-dieu",
        "title": "Poursuivez des objectifs qui honorent Dieu",
        "description": "Poursuivez des objectifs qui honorent Dieu",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/51d3df/1/o/ivpsg_F_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivpsg/univ/art/ivpsg_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3017,
        "pub": "ivpsg"
      },
      {
        "id": "ados-films-les-jeunes-s-interrogent-que-vais-je-faire-de-ma-vie",
        "title": "Les jeunes s’interrogent… Que vais-je faire de ma vie ?",
        "description": "Les jeunes s’interrogent… Que vais-je faire de ma vie ?",
        "category": "jeunes",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f028a9c/1/o/ivyf_F_1_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102004392/univ/art/1102004392_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3027,
        "pub": "ivyf"
      }
    ]
  },
  {
    "id": "famille",
    "title": "Défis pour les familles",
    "description": "Conseils famille.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb-128/univ/art/jwb-128_univ_pnr_07_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "famille",
    "videos": [
      {
        "id": "famille-les-secrets-d-un-mariage-heureux-lire-la-parole-de-dieu",
        "title": "Les secrets d’un mariage heureux : Lire la Parole de Dieu",
        "description": "Les secrets d’un mariage heureux : Lire la Parole de Dieu",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/789895/2/o/jwb-128_F_07_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb-128/univ/art/jwb-128_univ_pnr_07_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 354,
        "pub": "jwb-128"
      },
      {
        "id": "famille-avec-patience-supportons-nous-les-uns-les-autres-dans-l",
        "title": "« Avec patience, supportons-nous les uns les autres dans l’amour » : Nos enfants",
        "description": "« Avec patience, supportons-nous les uns les autres dans l’amour » : Nos enfants",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/134f143/1/o/mwbv_F_202507_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/202507/univ/art/mwbv_univ_202507_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 236,
        "pub": "mwbv"
      },
      {
        "id": "famille-les-secrets-d-un-mariage-heureux-quand-on-n-est-pas-d-a",
        "title": "Les secrets d'un mariage heureux : Quand on n'est pas d'accord",
        "description": "Les secrets d'un mariage heureux : Quand on n'est pas d'accord",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/4918060/4/o/jwb-126_F_05_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb-126/univ/art/jwb-126_univ_pnr_05_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 302,
        "pub": "jwb-126"
      },
      {
        "id": "famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p-predication",
        "title": "« Nous nous recommandons comme ministres de Dieu par la patience »... Quand nous prêchons",
        "description": "« Nous nous recommandons comme ministres de Dieu par la patience »... Quand nous prêchons",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3342744/1/o/mwbv_F_202409_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/202409/univ/art/mwbv_univ_202409_pnr_01_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 245,
        "pub": "mwbv"
      },
      {
        "id": "famille-mieux-vaut-tre-patient-qu-avoir-l-esprit-hautain-imiton",
        "title": "« Mieux vaut être patient qu’avoir l’esprit hautain » : Imitons Jacob, pas Ésaü",
        "description": "« Mieux vaut être patient qu’avoir l’esprit hautain » : Imitons Jacob, pas Ésaü",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0cca66/2/o/jwbcov23_F_17_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov23/univ/art/jwbcov23_univ_pnr_17_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 188,
        "pub": "jwbcov23"
      },
      {
        "id": "famille-nous-nous-recommandons-comme-ministres-de-dieu-par-la-p",
        "title": "« Nous nous recommandons comme ministres de Dieu par la patience »",
        "description": "« Nous nous recommandons comme ministres de Dieu par la patience »",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f8eb88/3/o/jwbcov23_F_13_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov23/univ/art/jwbcov23_univ_pnr_13_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 912,
        "pub": "jwbcov23"
      },
      {
        "id": "famille-la-langue-du-c-ur",
        "title": "La langue du cœur",
        "description": "La langue du cœur",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0b6741/1/o/jwb-095_F_05_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwb-095/univ/art/jwb-095_univ_pnr_05_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 304,
        "pub": "jwb-095"
      },
      {
        "id": "famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-darr",
        "title": "Ne vous laissez pas tromper par une paix illusoire ! (Darrel et Deborah Freisinger)",
        "description": "Ne vous laissez pas tromper par une paix illusoire ! (Darrel et Deborah Freisinger)",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0937ea/1/o/jwbcov22_F_09_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_09_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 215,
        "pub": "jwbcov22"
      },
      {
        "id": "famille-ne-vous-laissez-pas-tromper-par-une-paix-illusoire-chib",
        "title": "Ne vous laissez pas tromper par une paix illusoire ! (Chibisa Selemani))",
        "description": "Ne vous laissez pas tromper par une paix illusoire ! (Chibisa Selemani))",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3e14d9/1/o/jwbcov22_F_08_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_08_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 162,
        "pub": "jwbcov22"
      },
      {
        "id": "famille-suivez-le-guide-essentiel-la-paix-dans-la-famille",
        "title": "Suivez le guide essentiel à la paix dans la famille",
        "description": "Suivez le guide essentiel à la paix dans la famille",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/9f0c35/2/o/jwbcov22_F_06_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_06_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1276,
        "pub": "jwbcov22"
      },
      {
        "id": "famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-mo-",
        "title": "Imitez les hommes de foi, et non les hommes sans foi : Moïse, et non Pharaon",
        "description": "Imitez les hommes de foi, et non les hommes sans foi : Moïse, et non Pharaon",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/4b8483/2/o/jwbcov21_F_11_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov21/univ/art/jwbcov21_univ_pnr_11_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 147,
        "pub": "jwbcov21"
      },
      {
        "id": "famille-imitez-les-hommes-de-foi-et-non-les-hommes-sans-foi-no-",
        "title": "Imitez les hommes de foi, et non les hommes sans foi : Noé, et non ses contemporains",
        "description": "Imitez les hommes de foi, et non les hommes sans foi : Noé, et non ses contemporains",
        "category": "famille",
        "streamUrl": "https://cfp2.jw-cdn.org/a/4dbd8e/2/o/jwbcov21_F_10_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/jwbcov21/univ/art/jwbcov21_univ_pnr_10_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 176,
        "pub": "jwbcov21"
      }
    ]
  },
  {
    "id": "bible-epoque",
    "title": "Films — Époque biblique",
    "description": "Drames bibliques.",
    "imageUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivru/univ/art/ivru_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "bible-epoque",
    "videos": [
      {
        "id": "bible-epoque-respectons-l-autorit-de-j-hovah",
        "title": "Respectons l’autorité de Jéhovah",
        "description": "Respectons l’autorité de Jéhovah",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/bdc115f/1/o/ivru_F_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivru/univ/art/ivru_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3279,
        "pub": "ivru"
      },
      {
        "id": "bible-epoque-des-exemples-qui-nous-servent-d-avertissement",
        "title": "Des exemples qui nous servent d’avertissement",
        "description": "Des exemples qui nous servent d’avertissement",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/72e343/1/o/ivwx_s-Sub_F_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/ivwx/univ/art/ivwx_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2242,
        "pub": "ivwx"
      },
      {
        "id": "bible-epoque-pas-une-seule-parole-n-a-failli",
        "title": "« Pas une seule parole n’a failli »",
        "description": "« Pas une seule parole n’a failli »",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/183eee7/1/o/ivnwf_F_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102014226/univ/art/1102014226_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1689,
        "pub": "ivnwf"
      },
      {
        "id": "bible-epoque-pas-une-seule-parole-n-a-failli-extrait",
        "title": "« Pas une seule parole n’a failli » (extrait)",
        "description": "« Pas une seule parole n’a failli » (extrait)",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/aa0972/2/o/mwbv_F_202109_05_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/mwbv/univ/202109/art/mwbv_univ_202109_pnr_05_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 354,
        "pub": "mwbv"
      },
      {
        "id": "bible-epoque-l-histoire-de-jonas-une-le-on-de-courage-et-de-mis-rico",
        "title": "L'histoire de Jonas : une leçon de courage et de miséricorde",
        "description": "L'histoire de Jonas : une leçon de courage et de miséricorde",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/cccb43/1/o/jcm_F_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102018270/univ/art/1102018270_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2706,
        "pub": "jcm"
      },
      {
        "id": "bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance",
        "title": "« Ô Jéhovah, en toi j’ai placé ma confiance ! »",
        "description": "« Ô Jéhovah, en toi j’ai placé ma confiance ! »",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/497267a/1/o/tiy_F_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102016443/univ/art/1102016443_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 3102,
        "pub": "tiy"
      },
      {
        "id": "bible-epoque-j-hovah-en-toi-j-ai-plac-ma-confiance-extrait",
        "title": "« Ô Jéhovah, en toi j’ai placé ma confiance ! » (extrait)",
        "description": "« Ô Jéhovah, en toi j’ai placé ma confiance ! » (extrait)",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/6e22a4/1/o/mwbv_F_201701_04_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/201701/univ/art/mwbv_univ_201701_pnr_04_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 62,
        "pub": "mwbv"
      },
      {
        "id": "bible-epoque-sauve-nous-s-il-te-pla-t",
        "title": "« Sauve-nous, s'il te plaît »",
        "description": "« Sauve-nous, s'il te plaît »",
        "category": "histoire",
        "streamUrl": "https://cfp2.jw-cdn.org/a/591d26/3/o/wcgv_F_06_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_06_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 338,
        "pub": "wcgv"
      }
    ]
  },
  {
    "id": "bible-moderne",
    "title": "Films — Époque moderne",
    "description": "Témoignages et drames.",
    "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/1102023057/univ/art/1102023057_univ_pnr_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
    "pub": "bible-moderne",
    "videos": [
      {
        "id": "bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-1",
        "title": "« Laisse Jéhovah tracer ton chemin » (partie 1)",
        "description": "« Laisse Jéhovah tracer ton chemin » (partie 1)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f4ed0f/3/o/cyw_F_01_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102023057/univ/art/1102023057_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1880,
        "pub": "cyw"
      },
      {
        "id": "bible-moderne-laisse-j-hovah-tracer-ton-chemin-partie-2",
        "title": "« Laisse Jéhovah tracer ton chemin » (partie 2)",
        "description": "« Laisse Jéhovah tracer ton chemin » (partie 2)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f00ae7/3/o/cyw_F_02_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/1102023058/univ/art/1102023058_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2563,
        "pub": "cyw"
      },
      {
        "id": "bible-moderne-souvenez-vous-de-la-femme-de-lot-1re-partie",
        "title": "Souvenez-vous de la femme de Lot (1re partie)",
        "description": "Souvenez-vous de la femme de Lot (1re partie)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/50b5886/1/o/rwl_F_01_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017513/univ/art/1102017513_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1821,
        "pub": "rwl"
      },
      {
        "id": "bible-moderne-souvenez-vous-de-la-femme-de-lot-2e-partie",
        "title": "Souvenez-vous de la femme de Lot (2e partie)",
        "description": "Souvenez-vous de la femme de Lot (2e partie)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/44945d/1/o/rwl_F_02_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017516/univ/art/1102017516_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1666,
        "pub": "rwl"
      },
      {
        "id": "bible-moderne-souvenez-vous-de-la-femme-de-lot-3e-partie",
        "title": "Souvenez-vous de la femme de Lot (3e partie)",
        "description": "Souvenez-vous de la femme de Lot (3e partie)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/93fcb54/1/o/rwl_F_03_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017519/univ/art/1102017519_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 1923,
        "pub": "rwl"
      },
      {
        "id": "bible-moderne-esp-rons-ce-que-nous-ne-voyons-pas",
        "title": "« Espérons ce que nous ne voyons pas »",
        "description": "« Espérons ce que nous ne voyons pas »",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/2b0256/1/o/dns_F_2_r480P.mp4",
        "posterUrl": "https://assetsnffrgf-a.akamaihd.net/assets/m/1102016358/univ/art/1102016358_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 2781,
        "pub": "dns"
      },
      {
        "id": "bible-moderne-qu-est-ce-que-le-vrai-amour-extrait",
        "title": "Qu’est-ce que le vrai amour ? (extrait)",
        "description": "Qu’est-ce que le vrai amour ? (extrait)",
        "category": "enseignement",
        "streamUrl": "https://cfp2.jw-cdn.org/a/454f1c/4/o/mwbv_F_202509_02_r480P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/mwbv/202509/univ/art/mwbv_univ_202509_pnr_02_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/videos/",
        "durationSeconds": 243,
        "pub": "mwbv"
      }
    ]
  },
  {
    "id": "pkon-chansons",
    "title": "Chansons — Deviens l'ami de Jéhovah",
    "description": "Chansons pour apprendre en s'amusant.",
    "imageUrl": "https://cfp2.jw-cdn.org/a/323480/2/ir/pkon_univ_lg.jpg",
    "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
    "pub": "pkon",
    "videos": [
      {
        "id": "pkon-001",
        "title": "Aime toutes sortes de gens",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/85c67c/4/o/pkon_F_001_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000127/univ/art/503000127_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 1
      },
      {
        "id": "pkon-002",
        "title": "Respecte les personnes âgées",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/aaee6e/5/o/pkon_F_002_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600168/univ/art/501600168_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 2
      },
      {
        "id": "pkon-003",
        "title": "Apprends les livres de la Bible (partie 1)",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/819519/9/o/pkon_F_003_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000123/univ/art/503000123_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 3
      },
      {
        "id": "pkon-004",
        "title": "Apprends les livres de la Bible (partie 2)",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/2eae74/7/o/pkon_F_004_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600169/univ/art/501600169_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 4
      },
      {
        "id": "pkon-005",
        "title": "Sois reconnaissant",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f62277/6/o/pkon_F_005_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000120/univ/art/503000120_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 5
      },
      {
        "id": "pkon-006",
        "title": "Apprends les livres de la Bible (partie 3)",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0c3f9a/8/o/pkon_F_006_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600165/univ/art/501600165_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 6
      },
      {
        "id": "pkon-007",
        "title": "La vie de Jésus",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/b86717d/11/o/pkon_F_007_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000119/univ/art/503000119_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 7
      },
      {
        "id": "pkon-008",
        "title": "Mon voyage avec les amis de Jéhovah",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/3d6f831/9/o/pkon_F_008_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600162/univ/art/501600162_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 8
      },
      {
        "id": "pkon-009",
        "title": "Prie pour les autres",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/77e6e8/8/o/pkon_F_009_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000116/univ/art/503000116_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 9
      },
      {
        "id": "pkon-010",
        "title": "Mes nouveaux projets",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/8dd418/7/o/pkon_F_010_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600157/univ/art/501600157_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 10
      },
      {
        "id": "pkon-011",
        "title": "Jéhovah m'a fait d'une belle manière",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/877332/7/o/pkon_F_011_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000111/univ/art/503000111_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 11
      },
      {
        "id": "pkon-012",
        "title": "Jéhovah est mon meilleur Ami",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/237656/7/o/pkon_F_012_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000110/univ/art/503000110_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 12
      },
      {
        "id": "pkon-013",
        "title": "Deviens l’ami de Jéhovah : Chanson thème",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/fef241/7/o/pkon_F_013_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600149/univ/art/501600149_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 13
      },
      {
        "id": "pkon-014",
        "title": "Nous aimons le culte familial",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/40d6a6/10/o/pkon_F_014_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000104/univ/art/503000104_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 14
      },
      {
        "id": "pkon-015",
        "title": "C’est ma famille à moi",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/0c7b97/11/o/pkon_F_015_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600146/univ/art/501600146_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 15
      },
      {
        "id": "pkon-016",
        "title": "Merci d’être toi",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/ebfb9b/7/o/pkon_F_016_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/503000100/univ/art/503000100_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 16
      },
      {
        "id": "pkon-017",
        "title": "Sois fidèle",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/f49e94/6/o/pkon_F_017_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600141/univ/art/501600141_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 17
      },
      {
        "id": "pkon-018",
        "title": "Imite la foi de Noé",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/e2a5df/6/o/pkon_F_018_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600140/univ/art/501600140_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 18
      },
      {
        "id": "pkon-019",
        "title": "Esther avait du courage",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/79618f/6/o/pkon_F_019_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600137/univ/art/501600137_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 19
      },
      {
        "id": "pkon-020",
        "title": "L’amour, c’est la vie",
        "description": "Chanson originale Deviens l'ami de Jéhovah.",
        "category": "enfants",
        "streamUrl": "https://cfp2.jw-cdn.org/a/9b8fe2/6/o/pkon_F_020_r240P.mp4",
        "posterUrl": "https://cms-imgp.jw-cdn.org/img/p/501600136/univ/art/501600136_univ_pnr_lg.jpg",
        "jwPageUrl": "https://www.jw.org/fr/bibliothèque/musique-chansons/deviens-l-ami-de-jehovah-chansons/",
        "durationSeconds": 0,
        "pub": "pkon",
        "track": 20
      }
    ]
  }
]
;
export const JW_VIDEOS: JwVideo[] = JW_VIDEO_COLLECTIONS.flatMap((c) => c.videos);
export function getVideoById(id: string) { return JW_VIDEOS.find((v) => v.id === id); }
export function formatDuration(seconds?: number) {
  if (!seconds) return ""; const m = Math.floor(seconds / 60);
  const h = Math.floor(m / 60); const mins = m % 60;
  return h > 0 ? `${h}h ${mins}min` : mins > 0 ? `${mins} min` : ""; }
export const VIDEO_CATEGORY_LABELS: Record<JwVideo["category"], string> = {
  jesus: "Jésus", enfants: "Enfants", jeunes: "Jeunes", famille: "Famille",
  histoire: "Histoire", enseignement: "Enseignement", broadcast: "JW Broadcasting", };