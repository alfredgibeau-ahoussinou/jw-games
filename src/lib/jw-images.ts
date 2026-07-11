/**
 * Images officielles JW.org — URLs vérifiées (HTTP 200) uniquement.
 * Regénérer : node scripts/verify-jw-images.mjs && node scripts/generate-jw-images.mjs
 */
export interface JwImage {
  url: string;
  alt: string;
  credit: string;
  href: string;
}

const JW_ORG = "https://www.jw.org/fr/";

const JW_IMAGE_CATALOG = {
  "hero_etude": { url: "https://cms-imgp.jw-cdn.org/img/p/501800154/univ/art/501800154_univ_pnr_lg.jpg", alt: "Jéhovah, je cours vers toi", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "hero_quotidien": { url: "https://cms-imgp.jw-cdn.org/img/p/501800103/univ/art/501800103_univ_pnr_lg.jpg", alt: "David, un exemple pour les jeunes", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "hero_langues": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb-095/univ/art/jwb-095_univ_pnr_05_lg.jpg", alt: "La langue du cœur", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "hero_jeux": { url: "https://cms-imgp.jw-cdn.org/img/p/501800168/univ/art/501800168_univ_pnr_lg.jpg", alt: "Chansons pour enfants", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "hero_profil": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb-128/univ/art/jwb-128_univ_pnr_07_lg.jpg", alt: "Défis pour les familles", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "hero_discover": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023101/univ/art/1112023101_univ_pnr_lg.jpg", alt: "La bonne nouvelle selon Jésus", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_text": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023104/univ/art/1112023104_univ_pnr_lg.jpg", alt: "Épisode 2 : « Voici mon Fils »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_progress": { url: "https://cms-imgp.jw-cdn.org/img/p/ivyf/univ/art/ivyf_univ_pnr_4_lg.jpg", alt: "Les jeunes s’interrogent… Que vais-je faire de ma vie ? - La valeur de l'étude individuelle", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "home_nav_mediatheque": { url: "https://cms-imgp.jw-cdn.org/img/p/502100002/univ/art/502100002_univ_pnr_lg.jpg", alt: "Les jeux vidéo : C’est qui le vrai gagnant ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "home_nav_etude": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023107/univ/art/1112023107_univ_pnr_lg.jpg", alt: "Épisode 3 : « Je suis celui-ci »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "home_nav_jeux": { url: "https://cms-imgp.jw-cdn.org/img/p/503000127/univ/art/503000127_univ_pnr_lg.jpg", alt: "Deviens l'ami de Jéhovah", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "home_nav_langues": { url: "https://cms-imgp.jw-cdn.org/img/p/501600136/univ/art/501600136_univ_pnr_lg.jpg", alt: "Deviens proclamateur non baptisé", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_hero": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023108/univ/art/1112023108_univ_pnr_lg.jpg", alt: "Épisode 4 : « C’est pour cela que je suis venu »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_mediatheque": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023111/univ/art/1112023111_univ_pnr_lg.jpg", alt: "Épisode 5 : « Ébahis par sa manière d’enseigner »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_jeux": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivdd/univ/art/ivdd_univ_pnr_lg.jpg", alt: "Films pour enfants", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_etude": { url: "https://cms-imgp.jw-cdn.org/img/p/1112023112/univ/art/1112023112_univ_pnr_lg.jpg", alt: "Épisode 6 : « Es-tu celui qui devait venir ? »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_langues": { url: "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_10_lg.jpg", alt: "« Son nom est Jean »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_quotidien": { url: "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_11_lg.jpg", alt: "« Je suis l'esclave de Jéhovah ! »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_enfants": { url: "https://cms-imgp.jw-cdn.org/img/p/503000123/univ/art/503000123_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Mefibosheth", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_ados": { url: "https://cms-imgp.jw-cdn.org/img/p/502100022/univ/art/502100022_univ_pnr_lg.jpg", alt: "Jeunes — Spiritualité", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_familles": { url: "https://cms-imgp.jw-cdn.org/img/p/501800114/univ/art/501800114_univ_pnr_lg.jpg", alt: "Jéhovah, maman et moi", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_bible": { url: "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_12_lg.jpg", alt: "Il « suivit les instructions de l'ange de Jéhovah »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_cours": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivru/univ/art/ivru_univ_pnr_lg.jpg", alt: "Films — Époque biblique", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_histoire": { url: "https://cms-imgp.jw-cdn.org/img/p/1102018270/univ/art/1102018270_univ_pnr_lg.jpg", alt: "L'histoire de Jonas : une leçon de courage et de miséricorde", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_gnj": { url: "https://cfp2.jw-cdn.org/a/fd2fea4/1/ir/gnj_univ_01_lg.jpg", alt: "gnj_univ_01_lg.jpg", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_videos": { url: "https://cms-imgp.jw-cdn.org/img/p/1102012819/univ/art/1102012819_univ_pnr_lg.jpg", alt: "Films pour jeunes", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "discover_magazines": { url: "https://cms-imgp.jw-cdn.org/img/p/501600168/univ/art/501600168_univ_pnr_lg.jpg", alt: "Jéhovah est une personne réelle", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_priere": { url: "https://cms-imgp.jw-cdn.org/img/p/501600169/univ/art/501600169_univ_pnr_lg.jpg", alt: "Bande-annonce — Deviens l’ami de Jéhovah : Jéhovah est une personne réelle", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_confiance": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/202405/univ/art/mwbv_univ_202405_pnr_01_lg.jpg", alt: "Attention, ne mettez pas votre confiance dans ce qui va disparaître : La richesse", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_qualites": { url: "https://cms-imgp.jw-cdn.org/img/p/501800125/univ/art/501800125_univ_pnr_lg.jpg", alt: "« Le fruit de l’esprit » : Apprends par cœur ses qualités", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_jesus": { url: "https://cms-imgp.jw-cdn.org/img/p/1102012718/univ/art/1102012718_univ_pnr_lg.jpg", alt: "Le retour d'un fils", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_famille": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/202507/univ/art/mwbv_univ_202507_pnr_01_lg.jpg", alt: "« Avec patience, supportons-nous les uns les autres dans l’amour » : Nos enfants", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_service": { url: "https://cms-imgp.jw-cdn.org/img/p/503000120/univ/art/503000120_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Joseph", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_royaume": { url: "https://cfp2.jw-cdn.org/a/b31dd6b/2/ir/gnj_univ_2_lg.jpg", alt: "gnj_univ_2_lg.jpg", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_resurrection": { url: "https://cms-imgp.jw-cdn.org/img/p/501600165/univ/art/501600165_univ_pnr_lg.jpg", alt: "Sois hospitalier", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_adoration": { url: "https://cms-imgp.jw-cdn.org/img/p/501800136/univ/art/501800136_univ_pnr_lg.jpg", alt: "Enfin l'assemblée !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_bible": { url: "https://cms-imgp.jw-cdn.org/img/p/503000119/univ/art/503000119_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Josué et Caleb", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_sagesse": { url: "https://cms-imgp.jw-cdn.org/img/p/501600131/univ/art/501600131_univ_pnr_lg.jpg", alt: "Qui choisir comme ami ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_endurance": { url: "https://cms-imgp.jw-cdn.org/img/p/501600124/univ/art/501600124_univ_pnr_lg.jpg", alt: "Ne baisse pas les bras !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_amour": { url: "https://cms-imgp.jw-cdn.org/img/p/501600157/univ/art/501600157_univ_pnr_lg.jpg", alt: "Le plus bel acte d’amour", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_creation": { url: "https://cms-imgp.jw-cdn.org/img/p/501600149/univ/art/501600149_univ_pnr_lg.jpg", alt: "C’est Dieu qui fait pousser", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_jeunesse": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb/201804/univ/art/jwb_univ_201804_pnr_05_lg.jpg", alt: "Des jeunes qui apprennent à aimer la Parole de Dieu", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_paix": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_09_lg.jpg", alt: "Ne vous laissez pas tromper par une paix illusoire ! (Darrel et Deborah Freisinger)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_integrite": { url: "https://cms-imgp.jw-cdn.org/img/p/501800121/univ/art/501800121_univ_pnr_lg.jpg", alt: "Je veux être humble comme Moïse", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_propheties": { url: "https://cms-imgp.jw-cdn.org/img/p/1102014226/univ/art/1102014226_univ_pnr_lg.jpg", alt: "« Pas une seule parole n’a failli »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_decouvrir_bible": { url: "https://cms-imgp.jw-cdn.org/img/p/501600162/univ/art/501600162_univ_pnr_lg.jpg", alt: "Tu pourras être pionnier !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_predication": { url: "https://cms-imgp.jw-cdn.org/img/p/503000116/univ/art/503000116_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Abigaïl", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_pionnier": { url: "https://cms-imgp.jw-cdn.org/img/p/503000111/univ/art/503000111_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Déborah", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_ecole_biblique": { url: "https://cms-imgp.jw-cdn.org/img/p/501600140/univ/art/501600140_univ_pnr_lg.jpg", alt: "Bande-annonce — Deviens l’ami de Jéhovah : Tu es précieux pour Jéhovah", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_theme_vie_chretienne": { url: "https://cms-imgp.jw-cdn.org/img/p/501600137/univ/art/501600137_univ_pnr_lg.jpg", alt: "Les étapes qui mènent au baptême", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_videoquiz": { url: "https://cfp2.jw-cdn.org/a/0c1d42b/2/ir/gnj_univ_lg.jpg", alt: "gnj_univ_lg.jpg", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_vraifaux": { url: "https://cms-imgp.jw-cdn.org/img/p/501800020/univ/art/501800020_univ_pnr_lg.jpg", alt: "Ruth, une vraie amie", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_ordre": { url: "https://cms-imgp.jw-cdn.org/img/p/503000110/univ/art/503000110_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Abel", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_mots": { url: "https://cms-imgp.jw-cdn.org/img/p/503000104/univ/art/503000104_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Jérémie", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_versets": { url: "https://cms-imgp.jw-cdn.org/img/p/501600146/univ/art/501600146_univ_pnr_lg.jpg", alt: "Jéhovah est notre Père", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_cartes": { url: "https://cms-imgp.jw-cdn.org/img/p/503000100/univ/art/503000100_univ_pnr_lg.jpg", alt: "Apprends avec les amis de Jéhovah : Hanania, Mishael et Azarias", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_undercover": { url: "https://cms-imgp.jw-cdn.org/img/p/501600141/univ/art/501600141_univ_pnr_lg.jpg", alt: "Tu es précieux pour Jéhovah", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_quiz": { url: "https://cms-imgp.jw-cdn.org/img/p/501800015/univ/art/501800015_univ_pnr_lg.jpg", alt: "Connais-tu les douze apôtres ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_rapidite": { url: "https://cms-imgp.jw-cdn.org/img/p/501600130/univ/art/501600130_univ_pnr_lg.jpg", alt: "Bande-annonce — Deviens l'ami de Jéhovah : Qui choisir comme ami ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_memoire": { url: "https://cms-imgp.jw-cdn.org/img/p/501600127/univ/art/501600127_univ_pnr_lg.jpg", alt: "Pourquoi obéir à Dieu alors qu’on ne le voit pas ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_thematique": { url: "https://cms-imgp.jw-cdn.org/img/p/502100025/univ/art/502100025_univ_pnr_lg.jpg", alt: "Jeunes — Vie sociale", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_equipe": { url: "https://cms-imgp.jw-cdn.org/img/p/502015143/univ/art/502015143_univ_pnr_lg.jpg", alt: "Résiste à la pression du groupe !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_devinettes": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivno/univ/art/ivno_univ_pnr_lg.jpg", alt: "Noé : il marchait avec Dieu", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "game_biblio": { url: "https://cms-imgp.jw-cdn.org/img/p/501800163/univ/art/501800163_univ_pnr_lg.jpg", alt: "Pour te faire des amis, toi-même sois un ami", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_quiz": { url: "https://cms-imgp.jw-cdn.org/img/p/501800160/univ/art/501800160_univ_pnr_lg.jpg", alt: "Jéhovah est fier de toi", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_speed": { url: "https://cms-imgp.jw-cdn.org/img/p/501800145/univ/art/501800145_univ_pnr_lg.jpg", alt: "Ranger, laver, j'aime ça !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_memory": { url: "https://cms-imgp.jw-cdn.org/img/p/501800111/univ/art/501800111_univ_pnr_lg.jpg", alt: "On a hâte de te voir !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_video": { url: "https://cms-imgp.jw-cdn.org/img/p/1102023057/univ/art/1102023057_univ_pnr_lg.jpg", alt: "Films — Époque moderne", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "daily_vraifaux": { url: "https://cms-imgp.jw-cdn.org/img/p/502013393/univ/art/502013393_univ_pnr_lg.jpg", alt: "Qu'est-ce qu'un vrai ami ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_en": { url: "https://cms-imgp.jw-cdn.org/img/p/501800106/univ/art/501800106_univ_pnr_lg.jpg", alt: "Mon tout-petit", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_es": { url: "https://cms-imgp.jw-cdn.org/img/p/501800016/univ/art/501800016_univ_pnr_lg.jpg", alt: "Marie, humble et volontaire", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_ko": { url: "https://cms-imgp.jw-cdn.org/img/p/501800009/univ/art/501800009_univ_pnr_lg.jpg", alt: "L’amour, c’est la vie", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_fr": { url: "https://cms-imgp.jw-cdn.org/img/p/502100016/univ/art/502100016_univ_pnr_lg.jpg", alt: "Pourquoi être honnête ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_ar": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb-092/univ/art/jwb-092_univ_pnr_05_lg.jpg", alt: "On peut faire plus en ayant des attentes raisonnables", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_zh": { url: "https://cms-imgp.jw-cdn.org/img/p/502100006/univ/art/502100006_univ_pnr_lg.jpg", alt: "Comment bien gérer ton argent ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_pt": { url: "https://cms-imgp.jw-cdn.org/img/p/502100005/univ/art/502100005_univ_pnr_lg.jpg", alt: "Ne laisse pas ta vie partir en fumée", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "lang_tr": { url: "https://cms-imgp.jw-cdn.org/img/p/502019627/univ/art/502019627_univ_pnr_lg.jpg", alt: "Triste ou optimiste ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_priere_wt_ecoute": { url: "https://cms-imgp.jw-cdn.org/img/p/502017178/univ/art/502017178_univ_pnr_lg.jpg", alt: "Comment communiquer avec mes parents ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_priere_awake_efficace": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov/201905/univ/art/jwbcov_univ_201905_pnr_03_lg.jpg", alt: "Attention, ne mettez pas votre confiance dans ce qui va disparaître !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_confiance_wt_renforcer": { url: "https://cms-imgp.jw-cdn.org/img/p/1102016443/univ/art/1102016443_univ_pnr_lg.jpg", alt: "« Ô Jéhovah, en toi j’ai placé ma confiance ! »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_confiance_awake_forces": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/201701/univ/art/mwbv_univ_201701_pnr_04_lg.jpg", alt: "« Ô Jéhovah, en toi j’ai placé ma confiance ! » (extrait)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_qualites_wt_imiter": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb/201907/univ/art/jwb_univ_201907_pnr_03_lg.jpg", alt: "Fuyez toute conduite sexuelle immorale", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_qualites_awake_personne": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov/201805/univ/art/jwbcov_univ_201805_pnr_18_lg.jpg", alt: "N’imitons pas les lâches, mais les courageux !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_jesus_wt_qui": { url: "https://cms-imgp.jw-cdn.org/img/p/502016296/univ/art/502016296_univ_pnr_lg.jpg", alt: "Les appareils électroniques, qui contrôle qui ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_jesus_awake_chef": { url: "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_01_lg.jpg", alt: "N'imitons pas les lâches, mais les courageux ! Pas les habitants de Méroz mais Jael", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_famille_wt_renforcer": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_06_lg.jpg", alt: "Suivez le guide essentiel à la paix dans la famille", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_famille_awake_enfants": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/jwbcov/univ/201705/art/jwbcov_univ_201705_pnr_15_lg.jpg", alt: "Nous devons « courir avec endurance »—Alimentons-nous sainement", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_service_wt_pourquoi": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbai/201607/univ/art/jwbai_univ_201607_pnr_01_lg.jpg", alt: "Dieu « connaît les secrets du cœur »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_service_awake_mondiale": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/jwban/univ/201410/art/jwban_univ_201410_pnr_01_lg.jpg", alt: "Stephen Lett : Jeunes gens, Jéhovah vous aime", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_royaume_wt_quoi": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivpro/univ/art/ivpro_univ_pnr_2_lg.jpg", alt: "Le retour d'un fils—Interviews", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_royaume_awake_changer": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/202507/univ/art/mwbv_univ_202507_pnr_02_lg.jpg", alt: "« Il y a un temps fixé pour tout » : Nouer des amitiés demande du temps", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_royaume_livre_attendez": { url: "https://cms-imgp.jw-cdn.org/img/p/502100015/univ/art/502100015_univ_pnr_lg.jpg", alt: "Sois malin : reste propre !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_resurrection_wt_promesse": { url: "https://cms-imgp.jw-cdn.org/img/p/502100012/univ/wpub/502100012_univ_pnr_lg.jpg", alt: "Qu'est-ce qu'un préjugé ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_resurrection_awake_morts": { url: "https://cms-imgp.jw-cdn.org/img/p/502018215/univ/art/502018215_univ_pnr_lg.jpg", alt: "Ce que tu dois savoir sur le sport", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_adoration_wt_coeur": { url: "https://cms-imgp.jw-cdn.org/img/p/502017872/univ/art/502017872_univ_pnr_lg.jpg", alt: "Boire ou pas : dans tous les cas, pense aux dégâts !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_adoration_awake_verite": { url: "https://cms-imgp.jw-cdn.org/img/p/502016241/univ/art/502016241_univ_pnr_lg.jpg", alt: "Comment arrêter les bruits qui courent ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_bible_awake_etudier": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbai/201610/univ/art/jwbai_univ_201610_pnr_01_lg.jpg", alt: "Se préparer au mariage : « Calculer la dépense » (3e partie)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_bible_wt_profit": { url: "https://cms-imgp.jw-cdn.org/img/p/502016211/univ/art/502016211_univ_pnr_lg.jpg", alt: "Est-ce de l'amour ou du béguin ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_bible_livre_enseigner": { url: "https://cms-imgp.jw-cdn.org/img/p/502014276/univ/art/502014276_univ_pnr_lg.jpg", alt: "Réseaux sociaux : ne te laisse pas avoir !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_sagesse_wt_acquerir": { url: "https://cms-imgp.jw-cdn.org/img/p/502013189/univ/art/502013189_univ_pnr_lg.jpg", alt: "Mets un harceleur K.-O. sans utiliser les poings !", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_sagesse_awake_numerique": { url: "https://cms-imgp.jw-cdn.org/img/p/1102006483/univ/art/1102006483_univ_pnr_lg.jpg", alt: "Les jeunes s’interrogent… Comment se faire de vrais amis ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_endurance_wt_garder": { url: "https://cms-imgp.jw-cdn.org/img/p/ivfe/univ/art/ivfe_univ_pnr_2_lg.jpg", alt: "Les jeunes s’interrogent… Comment se faire de vrais amis ? - Interviews", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_endurance_awake_vie": { url: "https://cms-imgp.jw-cdn.org/img/p/1102004392/univ/art/1102004392_univ_pnr_lg.jpg", alt: "Les jeunes s’interrogent… Que vais-je faire de ma vie ?", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_amour_wt_imiter": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/202509/univ/art/mwbv_univ_202509_pnr_02_lg.jpg", alt: "Qu’est-ce que le vrai amour ? (extrait)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_amour_awake_quotidien": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivpsg/univ/art/ivpsg_univ_pnr_lg.jpg", alt: "Poursuivez des objectifs qui honorent Dieu", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_creation_awake_miracle": { url: "https://cms-imgp.jw-cdn.org/img/p/jwb-126/univ/art/jwb-126_univ_pnr_05_lg.jpg", alt: "Les secrets d'un mariage heureux : Quand on n'est pas d'accord", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_creation_wt_createur": { url: "https://cms-imgp.jw-cdn.org/img/p/mwbv/202409/univ/art/mwbv_univ_202409_pnr_01_lg.jpg", alt: "« Nous nous recommandons comme ministres de Dieu par la patience »... Quand nous prêchons", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_jeunesse_awake_defis": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov23/univ/art/jwbcov23_univ_pnr_17_lg.jpg", alt: "« Mieux vaut être patient qu’avoir l’esprit hautain » : Imitons Jacob, pas Ésaü", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_jeunesse_wt_force": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov23/univ/art/jwbcov23_univ_pnr_13_lg.jpg", alt: "« Nous nous recommandons comme ministres de Dieu par la patience »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_paix_wt_interieure": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov22/univ/art/jwbcov22_univ_pnr_08_lg.jpg", alt: "Ne vous laissez pas tromper par une paix illusoire ! (Chibisa Selemani))", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_paix_awake_anxiete": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov21/univ/art/jwbcov21_univ_pnr_11_lg.jpg", alt: "Imitez les hommes de foi, et non les hommes sans foi : Moïse, et non Pharaon", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_integrite_wt_developper": { url: "https://cms-imgp.jw-cdn.org/img/p/jwbcov21/univ/art/jwbcov21_univ_pnr_10_lg.jpg", alt: "Imitez les hommes de foi, et non les hommes sans foi : Noé, et non ses contemporains", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_integrite_awake_honnetete": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/ivwx/univ/art/ivwx_univ_pnr_lg.jpg", alt: "Des exemples qui nous servent d’avertissement", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_propheties_wt_fil": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/mwbv/univ/202109/art/mwbv_univ_202109_pnr_05_lg.jpg", alt: "« Pas une seule parole n’a failli » (extrait)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_propheties_livre_apocalypse": { url: "https://cms-imgp.jw-cdn.org/img/p/wcgv/univ/art/wcgv_univ_pnr_06_lg.jpg", alt: "« Sauve-nous, s'il te plaît »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_decouverte_wt_premiers_pas": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102016358/univ/art/1102016358_univ_pnr_lg.jpg", alt: "« Espérons ce que nous ne voyons pas »", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_decouverte_brochure_bible": { url: "https://cms-imgp.jw-cdn.org/img/p/1102023058/univ/art/1102023058_univ_pnr_lg.jpg", alt: "« Laisse Jéhovah tracer ton chemin » (partie 2)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_predication_wt_courage": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017513/univ/art/1102017513_univ_pnr_lg.jpg", alt: "Souvenez-vous de la femme de Lot (1re partie)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_predication_awake_conversations": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017516/univ/art/1102017516_univ_pnr_lg.jpg", alt: "Souvenez-vous de la femme de Lot (2e partie)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_pionnier_wt_joie": { url: "https://assetsnffrgf-a.akamaihd.net/assets/m/1102017519/univ/art/1102017519_univ_pnr_lg.jpg", alt: "Souvenez-vous de la femme de Lot (3e partie)", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_pionnier_brochure_organisation": { url: "https://cfp2.jw-cdn.org/a/323480/2/ir/pkon_univ_lg.jpg", alt: "Aime toutes sortes de gens", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_ecole_wt_enfants": { url: "https://cms-imgp.jw-cdn.org/img/p/pkon/univ/pt/pkon_univ_lg.jpg", alt: "pkon", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_ecole_awake_famille": { url: "https://cms-imgp.jw-cdn.org/img/p/1001070103/univ/art/1001070103_univ_sqr_xl.jpg", alt: "1001070103", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_vie_wt_quotidien": { url: "https://cms-imgp.jw-cdn.org/img/p/1011722/univ/art/1011722_univ_sqr_xl.jpg", alt: "1011722", credit: "jw.org", href: "https://www.jw.org/fr/" },
  "study_article_vie_awake_adolescents": { url: "https://cms-imgp.jw-cdn.org/img/p/1011205/univ/art/1011205_univ_sqr_xl.jpg", alt: "1011205", credit: "jw.org", href: "https://www.jw.org/fr/" },
} as const satisfies Record<string, JwImage>;

const JW_SLOT_KEYS = {
  "hero.etude": "hero_etude",
  "hero.quotidien": "hero_quotidien",
  "hero.langues": "hero_langues",
  "hero.jeux": "hero_jeux",
  "hero.profil": "hero_profil",
  "hero.discover": "hero_discover",
  "daily.text": "daily_text",
  "study.progress": "study_progress",
  "home.nav.mediatheque": "home_nav_mediatheque",
  "home.nav.etude": "home_nav_etude",
  "home.nav.jeux": "home_nav_jeux",
  "home.nav.langues": "home_nav_langues",
  "discover.hero": "discover_hero",
  "discover.mediatheque": "discover_mediatheque",
  "discover.jeux": "discover_jeux",
  "discover.etude": "discover_etude",
  "discover.langues": "discover_langues",
  "discover.quotidien": "discover_quotidien",
  "discover.enfants": "discover_enfants",
  "discover.ados": "discover_ados",
  "discover.familles": "discover_familles",
  "discover.bible": "discover_bible",
  "discover.cours": "discover_cours",
  "discover.histoire": "discover_histoire",
  "discover.gnj": "discover_gnj",
  "discover.videos": "discover_videos",
  "discover.magazines": "discover_magazines",
  "study.theme.priere": "study_theme_priere",
  "study.theme.confiance": "study_theme_confiance",
  "study.theme.qualites": "study_theme_qualites",
  "study.theme.jesus": "study_theme_jesus",
  "study.theme.famille": "study_theme_famille",
  "study.theme.service": "study_theme_service",
  "study.theme.royaume": "study_theme_royaume",
  "study.theme.resurrection": "study_theme_resurrection",
  "study.theme.adoration": "study_theme_adoration",
  "study.theme.bible": "study_theme_bible",
  "study.theme.sagesse": "study_theme_sagesse",
  "study.theme.endurance": "study_theme_endurance",
  "study.theme.amour": "study_theme_amour",
  "study.theme.creation": "study_theme_creation",
  "study.theme.jeunesse": "study_theme_jeunesse",
  "study.theme.paix": "study_theme_paix",
  "study.theme.integrite": "study_theme_integrite",
  "study.theme.propheties": "study_theme_propheties",
  "study.theme.decouvrir-bible": "study_theme_decouvrir_bible",
  "study.theme.predication": "study_theme_predication",
  "study.theme.pionnier": "study_theme_pionnier",
  "study.theme.ecole-biblique": "study_theme_ecole_biblique",
  "study.theme.vie-chretienne": "study_theme_vie_chretienne",
  "game.videoquiz": "game_videoquiz",
  "game.vraifaux": "game_vraifaux",
  "game.ordre": "game_ordre",
  "game.mots": "game_mots",
  "game.versets": "game_versets",
  "game.cartes": "game_cartes",
  "game.undercover": "game_undercover",
  "game.quiz": "game_quiz",
  "game.rapidite": "game_rapidite",
  "game.memoire": "game_memoire",
  "game.thematique": "game_thematique",
  "game.equipe": "game_equipe",
  "game.devinettes": "game_devinettes",
  "game.biblio": "game_biblio",
  "daily.quiz": "daily_quiz",
  "daily.speed": "daily_speed",
  "daily.memory": "daily_memory",
  "daily.video": "daily_video",
  "daily.vraifaux": "daily_vraifaux",
  "lang.en": "lang_en",
  "lang.es": "lang_es",
  "lang.ko": "lang_ko",
  "lang.fr": "lang_fr",
  "lang.ar": "lang_ar",
  "lang.zh": "lang_zh",
  "lang.pt": "lang_pt",
  "lang.tr": "lang_tr",
  "study.article.priere-wt-ecoute": "study_article_priere_wt_ecoute",
  "study.article.priere-awake-efficace": "study_article_priere_awake_efficace",
  "study.article.confiance-wt-renforcer": "study_article_confiance_wt_renforcer",
  "study.article.confiance-awake-forces": "study_article_confiance_awake_forces",
  "study.article.qualites-wt-imiter": "study_article_qualites_wt_imiter",
  "study.article.qualites-awake-personne": "study_article_qualites_awake_personne",
  "study.article.jesus-wt-qui": "study_article_jesus_wt_qui",
  "study.article.jesus-awake-chef": "study_article_jesus_awake_chef",
  "study.article.famille-wt-renforcer": "study_article_famille_wt_renforcer",
  "study.article.famille-awake-enfants": "study_article_famille_awake_enfants",
  "study.article.service-wt-pourquoi": "study_article_service_wt_pourquoi",
  "study.article.service-awake-mondiale": "study_article_service_awake_mondiale",
  "study.article.royaume-wt-quoi": "study_article_royaume_wt_quoi",
  "study.article.royaume-awake-changer": "study_article_royaume_awake_changer",
  "study.article.royaume-livre-attendez": "study_article_royaume_livre_attendez",
  "study.article.resurrection-wt-promesse": "study_article_resurrection_wt_promesse",
  "study.article.resurrection-awake-morts": "study_article_resurrection_awake_morts",
  "study.article.adoration-wt-coeur": "study_article_adoration_wt_coeur",
  "study.article.adoration-awake-verite": "study_article_adoration_awake_verite",
  "study.article.bible-awake-etudier": "study_article_bible_awake_etudier",
  "study.article.bible-wt-profit": "study_article_bible_wt_profit",
  "study.article.bible-livre-enseigner": "study_article_bible_livre_enseigner",
  "study.article.sagesse-wt-acquerir": "study_article_sagesse_wt_acquerir",
  "study.article.sagesse-awake-numerique": "study_article_sagesse_awake_numerique",
  "study.article.endurance-wt-garder": "study_article_endurance_wt_garder",
  "study.article.endurance-awake-vie": "study_article_endurance_awake_vie",
  "study.article.amour-wt-imiter": "study_article_amour_wt_imiter",
  "study.article.amour-awake-quotidien": "study_article_amour_awake_quotidien",
  "study.article.creation-awake-miracle": "study_article_creation_awake_miracle",
  "study.article.creation-wt-createur": "study_article_creation_wt_createur",
  "study.article.jeunesse-awake-defis": "study_article_jeunesse_awake_defis",
  "study.article.jeunesse-wt-force": "study_article_jeunesse_wt_force",
  "study.article.paix-wt-interieure": "study_article_paix_wt_interieure",
  "study.article.paix-awake-anxiete": "study_article_paix_awake_anxiete",
  "study.article.integrite-wt-developper": "study_article_integrite_wt_developper",
  "study.article.integrite-awake-honnetete": "study_article_integrite_awake_honnetete",
  "study.article.propheties-wt-fil": "study_article_propheties_wt_fil",
  "study.article.propheties-livre-apocalypse": "study_article_propheties_livre_apocalypse",
  "study.article.decouverte-wt-premiers-pas": "study_article_decouverte_wt_premiers_pas",
  "study.article.decouverte-brochure-bible": "study_article_decouverte_brochure_bible",
  "study.article.predication-wt-courage": "study_article_predication_wt_courage",
  "study.article.predication-awake-conversations": "study_article_predication_awake_conversations",
  "study.article.pionnier-wt-joie": "study_article_pionnier_wt_joie",
  "study.article.pionnier-brochure-organisation": "study_article_pionnier_brochure_organisation",
  "study.article.ecole-wt-enfants": "study_article_ecole_wt_enfants",
  "study.article.ecole-awake-famille": "study_article_ecole_awake_famille",
  "study.article.vie-wt-quotidien": "study_article_vie_wt_quotidien",
  "study.article.vie-awake-adolescents": "study_article_vie_awake_adolescents",
} as const;

export const JW_IMAGE_ASSIGNMENTS = Object.fromEntries(
  Object.entries(JW_SLOT_KEYS).map(([slot, key]) => [slot, JW_IMAGE_CATALOG[key as keyof typeof JW_IMAGE_CATALOG].url]),
) as Record<keyof typeof JW_SLOT_KEYS, string>;

function imageFromSlot(slot: keyof typeof JW_SLOT_KEYS): JwImage {
  return JW_IMAGE_CATALOG[JW_SLOT_KEYS[slot]];
}

export function jwImageForSlot(slot: keyof typeof JW_SLOT_KEYS): JwImage {
  return imageFromSlot(slot);
}

export function jwImageForStudyTheme(themeId: string): JwImage {
  const slot = `study.theme.${themeId}` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.etude");
}

export function jwImageForArticle(articleId: string): JwImage {
  const slot = `study.article.${articleId}` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.etude");
}

export function jwImageForGame(mode: string): JwImage {
  const slot = `game.${mode}` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.jeux");
}

export function jwImageForDailyTask(taskId: string): JwImage {
  const slot = `daily.${taskId}` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.quotidien");
}

export function jwImageForLanguage(langId: string): JwImage {
  const slot = `lang.${langId}` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.langues");
}

/** @deprecated Préférez jwImageForLanguage(langId) */
export function jwImageByIndex(index: number): JwImage {
  const langs = ["en","es","ko","fr","ar","zh","pt","tr"] as const;
  return jwImageForLanguage(langs[index % langs.length] ?? "en");
}

export const JW_IMAGES = {
  bibleEtude: JW_IMAGE_CATALOG.hero_etude,
  bonneNouvelleJesus: JW_IMAGE_CATALOG.discover_gnj,
  coursBiblique: JW_IMAGE_CATALOG.discover_cours,
  enfants: JW_IMAGE_CATALOG.hero_jeux,
  enfantsLecons: JW_IMAGE_CATALOG.study_theme_ecole_biblique,
  filmEnfant: JW_IMAGE_CATALOG.home_nav_jeux,
  adolescents: JW_IMAGE_CATALOG.hero_quotidien,
  famille: JW_IMAGE_CATALOG.study_theme_famille,
  histoire: JW_IMAGE_CATALOG.discover_histoire,
  ministere: JW_IMAGE_CATALOG.study_theme_service,
  memoire: JW_IMAGE_CATALOG.game_memoire,
  rapidite: JW_IMAGE_CATALOG.game_rapidite,
  undercover: JW_IMAGE_CATALOG.game_undercover,
  versets: JW_IMAGE_CATALOG.game_versets,
  mots: JW_IMAGE_CATALOG.game_mots,
  vraifaux: JW_IMAGE_CATALOG.game_vraifaux,
  ordre: JW_IMAGE_CATALOG.game_ordre,
  equipe: JW_IMAGE_CATALOG.game_equipe,
  thematique: JW_IMAGE_CATALOG.game_thematique,
  videoquiz: JW_IMAGE_CATALOG.game_videoquiz,
  quotidien: JW_IMAGE_CATALOG.hero_quotidien,
  etude: JW_IMAGE_CATALOG.hero_etude,
  langues: JW_IMAGE_CATALOG.hero_langues,
  mediatheque: JW_IMAGE_CATALOG.home_nav_mediatheque,
  priere: JW_IMAGE_CATALOG.study_theme_priere,
  royaume: JW_IMAGE_CATALOG.study_theme_royaume,
  confiance: JW_IMAGE_CATALOG.study_theme_confiance,
  integrite: JW_IMAGE_CATALOG.study_theme_integrite,
  jeunesse: JW_IMAGE_CATALOG.study_theme_jeunesse,
  creation: JW_IMAGE_CATALOG.study_theme_creation,
} as const satisfies Record<string, JwImage>;

export const JW_IMAGE_LIST = Object.values(JW_IMAGES);

export const JW_ORG_LINK = JW_ORG;
export const JW_LIBRARY_LINK = "https://www.jw.org/fr/bibliothèque/";

export const BRAND_TEAL = "#00a3a3";
export const NETFLIX_RED = "#e50914";

export function assertUniqueJwImages(): void {
  const urls = Object.values(JW_IMAGE_ASSIGNMENTS);
  const seen = new Set<string>();
  for (const url of urls) {
    if (seen.has(url)) throw new Error(`URL JW dupliquée dans les slots : ${url}`);
    seen.add(url);
  }
}
assertUniqueJwImages();
