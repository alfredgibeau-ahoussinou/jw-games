import type { AgeRange, BibleLevel, MinistryRole, UserGoal } from "@/types/user";

export interface StudyThemeAudience {
  /** Tranches d'âge auxquelles le thème parle particulièrement */
  ageRanges?: AgeRange[];
  /** Rôles au ministère concernés */
  ministryRoles?: MinistryRole[];
  /** Niveaux bibliques adaptés */
  bibleLevels?: BibleLevel[];
  /** Objectifs utilisateur alignés */
  goals?: UserGoal[];
  /** Priorité de base (0–5) */
  base?: number;
}

/** Profil d'audience par thématique — utilisé pour le tri personnalisé */
export const STUDY_THEME_AUDIENCE: Record<string, StudyThemeAudience> = {
  priere: { base: 2, goals: ["etude", "versets"] },
  confiance: { base: 2, ageRanges: ["30-49", "50+"], bibleLevels: ["intermediaire", "avance"] },
  qualites: { base: 2, goals: ["etude", "versets"], bibleLevels: ["debutant", "intermediaire"] },
  jesus: { base: 3, ministryRoles: ["visiteur", "etudiant-bible"], bibleLevels: ["debutant"] },
  famille: {
    base: 4,
    ageRanges: ["famille", "30-49"],
    ministryRoles: ["parent"],
    goals: ["famille"],
  },
  service: {
    base: 4,
    ministryRoles: ["publieur", "pionnier-auxiliaire", "pionnier-permanent"],
    goals: ["etude"],
  },
  royaume: { base: 3, ministryRoles: ["visiteur", "etudiant-bible", "publieur"], bibleLevels: ["debutant", "intermediaire"] },
  resurrection: { base: 2, ministryRoles: ["visiteur", "etudiant-bible"], ageRanges: ["30-49", "50+"] },
  adoration: { base: 2, goals: ["etude"], bibleLevels: ["intermediaire", "avance"] },
  bible: {
    base: 4,
    ministryRoles: ["visiteur", "etudiant-bible", "jeune"],
    bibleLevels: ["debutant"],
    goals: ["etude"],
  },
  sagesse: { base: 2, ageRanges: ["18-29", "30-49", "50+"], bibleLevels: ["intermediaire", "avance"] },
  endurance: {
    base: 3,
    ministryRoles: ["pionnier-auxiliaire", "pionnier-permanent", "publieur"],
    ageRanges: ["18-29", "30-49"],
  },
  amour: { base: 2, goals: ["famille", "etude"], ageRanges: ["famille", "13-17", "18-29"] },
  creation: {
    base: 3,
    ageRanges: ["7-12", "13-17", "famille"],
    ministryRoles: ["jeune", "parent", "visiteur"],
    bibleLevels: ["debutant"],
  },
  jeunesse: {
    base: 5,
    ageRanges: ["7-12", "13-17"],
    ministryRoles: ["jeune", "etudiant-bible"],
    goals: ["jeux", "videos"],
  },
  paix: { base: 3, ageRanges: ["13-17", "18-29", "30-49"], goals: ["etude"] },
  integrite: {
    base: 3,
    ageRanges: ["13-17", "18-29"],
    ministryRoles: ["jeune", "publieur", "etudiant-bible"],
  },
  propheties: {
    base: 4,
    bibleLevels: ["avance", "intermediaire"],
    ministryRoles: ["pionnier-permanent", "publieur", "pionnier-auxiliaire"],
    ageRanges: ["30-49", "50+", "18-29"],
  },
  predication: {
    base: 5,
    ministryRoles: ["publieur", "pionnier-auxiliaire", "pionnier-permanent"],
    goals: ["etude"],
  },
  pionnier: {
    base: 5,
    ministryRoles: ["pionnier-auxiliaire", "pionnier-permanent"],
  },
  "decouvrir-bible": {
    base: 5,
    ministryRoles: ["visiteur", "etudiant-bible"],
    bibleLevels: ["debutant"],
    goals: ["etude"],
  },
  "ecole-biblique": {
    base: 5,
    ageRanges: ["7-12"],
    ministryRoles: ["jeune", "parent"],
    goals: ["famille", "jeux"],
  },
  "vie-chretienne": {
    base: 3,
    ageRanges: ["18-29", "30-49"],
    ministryRoles: ["publieur", "jeune", "etudiant-bible"],
  },
};
