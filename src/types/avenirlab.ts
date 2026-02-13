// Types AvenirLab - Système d'accompagnement d'orientation scolaire

// Niveaux scolaires AvenirLab (1AC à 2ème Bac)
export type AvenirLabLevel = '1ac' | '2ac' | '3ac' | 'tc' | '1bac' | '2bac';

// Types de tâches
export type TaskType = 'mandatory' | 'complementary';
export type TaskCategory = 'test' | 'project' | 'research' | 'certification' | 'engagement' | 'cv_building' | 'reflection' | 'game';
export type TaskStatus = 'locked' | 'available' | 'in_progress' | 'completed';
export type TestType = 'riasec' | 'aptitudes' | 'soft_skills' | 'learning_style' | 'projection' | 'interests';

// Structure d'un niveau scolaire
export interface LevelDefinition {
  id: AvenirLabLevel;
  name: string;
  displayName: string;
  shortName: string; // "1AC", "2AC", etc.
  order: number;
  pedagogicalGoal: string;
  description: string;
  color: string;
  deliverables: string[];
}

// Structure d'une tâche
export interface Task {
  id: string;
  levelId: AvenirLabLevel;
  title: string;
  description: string;
  type: TaskType; // obligatoire ou complémentaire
  category: TaskCategory;
  estimatedTime: number; // minutes
  order: number;
  prerequisites?: string[];
  deliverable?: string; // Ce que l'élève produit
  counselorRole?: string; // Rôle de l'orientateur
  isMilestone?: boolean; // Tâche décisionnelle importante (choix de filière, bac, etc.)
}

// Structure d'un test
export interface Test {
  id: string;
  levelId: AvenirLabLevel;
  name: string;
  description: string;
  type: TestType;
  questionCount?: number;
  duration: number; // minutes
  deliverable: string;
}

// Résultat de test
export interface TestResult {
  testId: string;
  completedAt: string;
  score?: number;
  results: any;
  notes?: string;
}

// Tâche complétée
export interface CompletedTask {
  taskId: string;
  completedAt: string;
  deliverable?: string; // Lien ou ref vers le livrable produit
  notes?: string;
}

// ============================================================================
// CV ACADÉMIQUE
// ============================================================================

export interface PersonalInfo {
  studentId: string;
  firstName?: string;
  lastName?: string;
  level: AvenirLabLevel;
  targetField?: string;
  email?: string;
  phone?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'competition' | 'award';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'scientific' | 'creative' | 'cultural' | 'technical' | 'social';
  startDate: string;
  endDate?: string;
  role?: string;
  outcomes?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: 'language' | 'digital' | 'professional' | 'other';
  level?: string;
}

export interface Engagement {
  id: string;
  activity: string;
  organization?: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  category: 'volunteer' | 'club' | 'sport' | 'association' | 'leadership';
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'academic';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Language {
  id: string;
  name: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'native';
  certifications?: string[];
}

export interface AcademicCV {
  personalInfo: PersonalInfo;
  academicAchievements: Achievement[];
  projects: Project[];
  certifications: Certification[];
  engagements: Engagement[];
  skills: Skill[];
  languages: Language[];
  lastUpdated: string;
}

// ============================================================================
// DOSSIER D'ORIENTATION
// ============================================================================

export interface Decision {
  id: string;
  level: AvenirLabLevel;
  type: 'lycee_filiere' | 'bac_type' | 'post_bac';
  title: string;
  decision: string;
  alternatives?: string[];
  justification: string;
  counselorRecommendation?: string;
  decidedAt: string;
  confidence?: number; // 0-100%
}

export interface Note {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  category: 'observation' | 'recommendation' | 'alert' | 'validation';
  createdAt: string;
  linkedTo?: string; // ID de tâche, test, ou décision
}

export interface Deliverable {
  id: string;
  title: string;
  type: 'report' | 'cv' | 'justification' | 'plan' | 'analysis';
  level: AvenirLabLevel;
  createdAt: string;
  status: 'draft' | 'submitted' | 'validated' | 'finalized';
  fileUrl?: string;
  content?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'test' | 'task' | 'decision' | 'milestone' | 'note';
  title: string;
  description?: string;
  relatedId?: string;
}

export interface OrientationFile {
  studentId: string;
  currentLevel: AvenirLabLevel;
  startDate: string;
  testResults: TestResult[];
  completedTasks: CompletedTask[];
  orientationDecisions: Decision[];
  counselorNotes: Note[];
  academicCV: AcademicCV;
  deliverables: Deliverable[];
  timeline: TimelineEvent[];
  lastUpdated: string;
}

// ============================================================================
// ÉTAT ÉTUDIANT
// ============================================================================

export interface StudentState {
  studentId: string;
  currentLevel: AvenirLabLevel;
  orientationFile: OrientationFile;
  preferences?: {
    selectedLevel?: AvenirLabLevel; // Pour le mode dev
  };
}

// ============================================================================
// STATISTIQUES ET PROGRESSION
// ============================================================================

export interface LevelProgress {
  level: AvenirLabLevel;
  mandatoryTasks: {
    total: number;
    completed: number;
    inProgress: number;
  };
  complementaryTasks: {
    total: number;
    completed: number;
    inProgress: number;
  };
  testsCompleted: number;
  testsTotal: number;
  completionRate: number; // 0-100%
}

// ============================================================================
// HELPERS & UTILS
// ============================================================================

export interface TaskWithStatus extends Task {
  status: TaskStatus;
  completedAt?: string;
}

export interface TestWithStatus extends Test {
  completed: boolean;
  completedAt?: string;
  result?: TestResult;
}
