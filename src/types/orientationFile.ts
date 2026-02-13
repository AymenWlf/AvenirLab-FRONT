// Types pour le dossier d'orientation complet de l'étudiant

import { AvenirLabLevel } from './avenirlab';

// Informations personnelles
export interface PersonalInfo {
  photo?: string;
  cne?: string; // Code National de l'Étudiant (Massar)
  masaar?: string; // Numéro Massar
  cin?: string;
  firstName: string;
  lastName: string;
  arabicFirstName?: string;
  arabicLastName?: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female';
  nationality: string;
  address: string;
  city: string;
  phone?: string;
  parentPhone: string;
  email?: string;
}

// Informations scolaires par année
export interface AcademicYear {
  year: string; // "2023-2024"
  level: AvenirLabLevel;
  establishment: string;
  class: string;
  
  // Notes et moyennes par semestre
  semesters: {
    semester: 1 | 2;
    subjects: SubjectGrade[];
    average: number;
    rank?: number;
    totalStudents?: number;
    appreciation?: string;
  }[];
  
  // Moyenne générale annuelle
  yearAverage: number;
  yearRank?: number;
  decision: 'admitted' | 'retake' | 'failed';
  
  // Comportement et assiduité
  absences?: number;
  lateArrivals?: number;
  disciplineNotes?: string;
  counselorComments?: string;
}

// Note par matière
export interface SubjectGrade {
  subject: string;
  grade: number;
  coefficient: number;
  weightedGrade: number;
  appreciation?: string;
}

// Évolution du choix de filière
export interface PathDecision {
  date: string;
  level: AvenirLabLevel;
  decisionType: 'lycee_filiere' | 'bac_type' | 'bac_specialization' | 'post_bac';
  title: string;
  choice: string;
  alternatives?: string[];
  justification: string;
  counselorValidation: boolean;
  counselorNotes?: string;
}

// Tests psychométriques et d'orientation
export interface OrientationTest {
  id: string;
  name: string;
  type: 'riasec' | 'aptitudes' | 'interests' | 'personality' | 'soft_skills' | 'projection';
  date: string;
  level: AvenirLabLevel;
  score?: number;
  results: any; // Résultats spécifiques au test
  interpretation: string;
  recommendations: string[];
}

// Profil RIASEC complet
export interface RIASECProfile {
  date: string;
  level: AvenirLabLevel;
  scores: {
    realistic: number;
    investigative: number;
    artistic: number;
    social: number;
    enterprising: number;
    conventional: number;
  };
  dominantTypes: string[]; // Top 3
  compatibleCareers: string[];
  compatibleFields: string[];
}

// Activités extra-scolaires
export interface ExtracurricularActivity {
  id: string;
  title: string;
  type: 'sport' | 'art' | 'volunteer' | 'club' | 'competition' | 'leadership' | 'other';
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  skillsDeveloped?: string[];
}

// Certifications et formations
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  level?: string;
  verificationUrl?: string;
  skills: string[];
}

// Projets académiques
export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  date: string;
  level: AvenirLabLevel;
  subject?: string;
  type: 'research' | 'practical' | 'presentation' | 'group' | 'individual';
  grade?: number;
  skills: string[];
  documents?: string[];
}

// Langues
export interface LanguageSkill {
  language: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'native';
  certifications?: string[];
}

// Compétences transversales
export interface SoftSkill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1=débutant, 5=expert
  evidence: string[]; // Preuves/exemples
}

// Entretiens avec l'orientateur
export interface CounselingSession {
  id: string;
  date: string;
  counselorName: string;
  duration: number; // minutes
  topics: string[];
  notes: string;
  decisions: string[];
  nextSteps: string[];
  parentPresent?: boolean;
}

// État de complétion du dossier
export interface FileCompletion {
  overall: number; // Pourcentage global
  sections: {
    personalInfo: number;
    academicRecords: number;
    pathDecisions: number;
    orientationTests: number;
    extracurricular: number;
    skills: number;
    counseling: number;
  };
}

// Dossier d'orientation complet
export interface CompleteOrientationFile {
  studentId: string;
  createdAt: string;
  lastUpdated: string;
  currentLevel: AvenirLabLevel;
  startLevel: AvenirLabLevel; // Niveau d'entrée dans le système
  
  // Informations personnelles
  personalInfo: PersonalInfo;
  
  // Parcours scolaire
  academicYears: AcademicYear[];
  
  // Décisions d'orientation
  pathDecisions: PathDecision[];
  
  // Tests et profils
  orientationTests: OrientationTest[];
  riasecProfile?: RIASECProfile;
  
  // Activités et engagements
  extracurricularActivities: ExtracurricularActivity[];
  
  // Certifications et formations
  certifications: Certification[];
  
  // Projets académiques
  projects: AcademicProject[];
  
  // Langues
  languages: LanguageSkill[];
  
  // Compétences transversales
  softSkills: SoftSkill[];
  
  // Entretiens d'orientation
  counselingSessions: CounselingSession[];
  
  // Documents joints
  attachments: {
    id: string;
    name: string;
    type: string;
    url: string;
    uploadedAt: string;
  }[];
  
  // Progression et complétion
  completion: FileCompletion;
  
  // Statut du dossier
  status: 'in_progress' | 'complete' | 'archived';
  
  // Validation par l'orientateur
  counselorValidation?: {
    validated: boolean;
    date: string;
    counselorName: string;
    comments: string;
  };
}

// Tâches suggérées pour compléter le dossier
export interface SuggestedTask {
  id: string;
  sectionId: string;
  sectionName: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number;
  taskId?: string; // Lien vers une tâche AvenirLab
}
