import { Task, Test } from '../../types/avenirlab';

// ============================================================================
// TÂCHES 1AC - DÉCOUVERTE & CONSCIENCE DE SOI
// ============================================================================

export const tasks1AC: Task[] = [
  // Tâches obligatoires
  {
    id: '1ac_t1',
    levelId: '1ac',
    title: 'Découvrir 5 métiers',
    description: 'Explorer 5 métiers différents à travers des vidéos et fiches métiers. Identifier ce qui attire et ce qui rebute dans chaque métier.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 60,
    order: 1,
    deliverable: 'Fiche de découverte des 5 métiers avec notes personnelles',
    counselorRole: 'Observer les métiers qui retiennent l\'attention de l\'élève'
  },
  {
    id: '1ac_t2',
    levelId: '1ac',
    title: 'Rédiger "Ce que j\'aime / je n\'aime pas à l\'école"',
    description: 'Réflexion écrite sur les matières, activités et aspects de la vie scolaire qui plaisent ou déplaisent.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 30,
    order: 2,
    deliverable: 'Document de réflexion personnelle',
    counselorRole: 'Identifier les premières tendances et blocages'
  },
  {
    id: '1ac_t3',
    levelId: '1ac',
    title: 'Auto-évaluation de ses forces',
    description: 'Exercice d\'auto-évaluation guidée pour identifier ses points forts académiques et personnels.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 45,
    order: 3,
    deliverable: 'Grille d\'auto-évaluation complétée',
    counselorRole: 'Valider et ajuster la perception de l\'élève'
  },
  {
    id: '1ac_test1',
    levelId: '1ac',
    title: 'Test d\'intérêts simplifié',
    description: 'Questionnaire sur les activités et préférences pour identifier les centres d\'intérêt principaux.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 20,
    order: 4,
    deliverable: 'Profil d\'intérêts initial',
    counselorRole: 'Analyser les résultats et orienter les explorations futures'
  },
  // Tâches complémentaires
  {
    id: '1ac_t4',
    levelId: '1ac',
    title: 'Mini-projet de groupe',
    description: 'Réaliser un exposé ou une affiche en groupe sur un sujet choisi.',
    type: 'complementary',
    category: 'project',
    estimatedTime: 120,
    order: 5,
    deliverable: 'Exposé ou affiche de groupe',
    counselorRole: 'Observer le comportement dans le travail collaboratif'
  },
  {
    id: '1ac_t5',
    levelId: '1ac',
    title: 'Jeu des métiers mystères',
    description: 'Jeu interactif où tu devines des métiers à partir d\'indices. Découvre des professions que tu ne connaissais pas !',
    type: 'complementary',
    category: 'game',
    estimatedTime: 30,
    order: 6,
    deliverable: 'Score et métiers découverts',
    counselorRole: 'Observer les métiers qui intéressent l\'élève'
  },
  {
    id: '1ac_t6',
    levelId: '1ac',
    title: 'Quiz "Quelle matière es-tu ?"',
    description: 'Quiz amusant pour découvrir quelle matière scolaire correspond le mieux à ta personnalité.',
    type: 'complementary',
    category: 'game',
    estimatedTime: 15,
    order: 7,
    deliverable: 'Résultat du quiz',
    counselorRole: 'Identifier les préférences émergentes'
  }
];

// ============================================================================
// TÂCHES 2AC - EXPLORATION & PREMIÈRES COHÉRENCES
// ============================================================================

export const tasks2AC: Task[] = [
  // Tâches obligatoires
  {
    id: '2ac_t1',
    levelId: '2ac',
    title: 'Comparer 3 métiers proches',
    description: 'Choisir 3 métiers dans un même domaine et les comparer en détail : formation, quotidien, débouchés.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 90,
    order: 1,
    deliverable: 'Tableau comparatif des 3 métiers',
    counselorRole: 'Relier les métiers aux matières scolaires'
  },
  {
    id: '2ac_t2',
    levelId: '2ac',
    title: 'Identifier ses matières préférées et difficiles',
    description: 'Analyse des résultats scolaires et réflexion sur les matières où l\'on excelle et celles qui posent problème.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 45,
    order: 2,
    deliverable: 'Bilan scolaire personnalisé',
    counselorRole: 'Détecter déséquilibres ou risques académiques'
  },
  {
    id: '2ac_t3',
    levelId: '2ac',
    title: 'Travail sur la méthode d\'apprentissage',
    description: 'Expérimenter différentes méthodes d\'apprentissage et identifier celles qui fonctionnent le mieux.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 60,
    order: 3,
    deliverable: 'Guide personnel de méthodes efficaces',
    counselorRole: 'Orienter vers les meilleures pratiques'
  },
  {
    id: '2ac_test1',
    levelId: '2ac',
    title: 'Test d\'intérêts enrichi (pré-RIASEC)',
    description: 'Version approfondie du test d\'intérêts avec introduction aux types professionnels.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 30,
    order: 4,
    deliverable: 'Profil d\'intérêts approfondi',
    counselorRole: 'Commencer à orienter le discours'
  },
  // Tâches complémentaires
  {
    id: '2ac_t4',
    levelId: '2ac',
    title: 'Projet personnel simple',
    description: 'Réaliser un petit projet créatif, scientifique ou culturel de son choix.',
    type: 'complementary',
    category: 'project',
    estimatedTime: 180,
    order: 5,
    deliverable: 'Projet finalisé avec documentation',
    counselorRole: 'Valoriser l\'initiative et la créativité'
  },
  {
    id: '2ac_t5',
    levelId: '2ac',
    title: 'Escape Game des compétences',
    description: 'Résous des énigmes pour t\'échapper ! Chaque énigme teste une compétence différente (logique, créativité, organisation).',
    type: 'complementary',
    category: 'game',
    estimatedTime: 45,
    order: 6,
    deliverable: 'Temps de résolution et compétences identifiées',
    counselorRole: 'Détecter les aptitudes naturelles'
  }
];

// ============================================================================
// TÂCHES 3AC - DÉCISION STRUCTURANTE : CHOIX DE FILIÈRE
// ============================================================================

export const tasks3AC: Task[] = [
  // Tâches obligatoires
  {
    id: '3ac_t1',
    levelId: '3ac',
    title: 'Analyse comparée des filières du lycée',
    description: 'Étude détaillée des différentes filières disponibles au lycée : contenu, débouchés, exigences.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 120,
    order: 1,
    deliverable: 'Dossier comparatif des filières',
    counselorRole: 'Analyser cohérence intérêts / aptitudes'
  },
  {
    id: '3ac_t2',
    levelId: '3ac',
    title: 'Étude de cas "Un parcours après chaque filière"',
    description: 'Explorer des parcours concrets d\'anciens élèves pour chaque filière possible.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 90,
    order: 2,
    deliverable: 'Rapport de parcours analysés',
    counselorRole: 'Proposer 2 filières recommandées + 1 alternative'
  },
  {
    id: '3ac_t3',
    levelId: '3ac',
    title: 'Test final de recommandation de filière lycée',
    description: 'Test complet d\'analyse de vos intérêts, aptitudes et résultats scolaires pour recommander la filière lycée la plus adaptée à votre profil.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 45,
    order: 3,
    prerequisites: ['3ac_t1', '3ac_t2', '3ac_test1'],
    deliverable: 'Rapport de recommandation de filière avec justification détaillée',
    counselorRole: 'Valider la recommandation et orienter la décision finale',
    isMilestone: true
  },
  {
    id: '3ac_test1',
    levelId: '3ac',
    title: 'Test RIASEC simplifié',
    description: 'Test d\'orientation professionnelle basé sur le modèle RIASEC adapté au niveau collège.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 40,
    order: 4,
    deliverable: 'Profil RIASEC de base',
    counselorRole: 'Valider la cohérence avec le choix de filière'
  },
  // Tâches complémentaires
  {
    id: '3ac_t4',
    levelId: '3ac',
    title: 'Plan de préparation estivale',
    description: 'Élaborer un plan d\'amélioration académique pour les vacances avant l\'entrée au lycée.',
    type: 'complementary',
    category: 'reflection',
    estimatedTime: 45,
    order: 5,
    deliverable: 'Programme de révisions estivales',
    counselorRole: 'Valider la faisabilité du plan'
  },
  {
    id: '3ac_t5',
    levelId: '3ac',
    title: 'Simulateur de choix de filière',
    description: 'Jeu de simulation où tu vis une journée type dans différentes filières du lycée. Découvre ce qui t\'attend vraiment !',
    type: 'complementary',
    category: 'game',
    estimatedTime: 40,
    order: 6,
    deliverable: 'Filières explorées et préférences',
    counselorRole: 'Valider les impressions de l\'élève'
  }
];

// ============================================================================
// TÂCHES TC - STRATÉGIE DE BAC
// ============================================================================

export const tasksTC: Task[] = [
  // Tâches obligatoires
  {
    id: 'tc_t1',
    levelId: 'tc',
    title: 'Comparaison des types de bac',
    description: 'Analyse approfondie des différents types de baccalauréat et leurs spécificités.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 120,
    order: 1,
    deliverable: 'Guide comparatif des bacs',
    counselorRole: 'Affiner l\'orientation'
  },
  {
    id: 'tc_t2',
    levelId: 'tc',
    title: 'Analyse des débouchés post-bac',
    description: 'Explorer les formations et carrières accessibles après chaque type de bac.',
    type: 'mandatory',
    category: 'research',
    estimatedTime: 90,
    order: 2,
    deliverable: 'Carte des débouchés post-bac',
    counselorRole: 'Anticiper les exigences post-bac'
  },
  {
    id: 'tc_t3',
    levelId: 'tc',
    title: 'Diagnostic forces / faiblesses',
    description: 'Évaluation détaillée de son profil académique et personnel.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 60,
    order: 3,
    deliverable: 'Bilan de compétences personnel',
    counselorRole: 'Identifier les profils à fort potentiel'
  },
  {
    id: 'tc_t4',
    levelId: 'tc',
    title: 'Début du plan de valorisation du profil',
    description: 'Commencer à structurer son parcours pour se démarquer (projets, certifications, engagements).',
    type: 'mandatory',
    category: 'cv_building',
    estimatedTime: 90,
    order: 4,
    deliverable: 'Plan de valorisation personnalisé',
    counselorRole: 'Guider la stratégie de différenciation'
  },
  {
    id: 'tc_test1',
    levelId: 'tc',
    title: 'Test RIASEC complet',
    description: 'Version complète et détaillée du test d\'orientation RIASEC.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 45,
    order: 5,
    deliverable: 'Profil RIASEC complet',
    counselorRole: 'Valider les choix d\'orientation'
  },
  {
    id: 'tc_t6',
    levelId: 'tc',
    title: 'Test final de recommandation de type de bac',
    description: 'Test d\'analyse complète de votre profil RIASEC, vos aptitudes académiques et vos objectifs pour recommander le type de baccalauréat le plus adapté.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 50,
    order: 6,
    prerequisites: ['tc_t1', 'tc_t2', 'tc_t3', 'tc_test1'],
    deliverable: 'Rapport de recommandation de type de bac avec argumentation',
    counselorRole: 'Valider la recommandation et accompagner la décision',
    isMilestone: true
  },
  // Tâches complémentaires
  {
    id: 'tc_t5',
    levelId: 'tc',
    title: 'Démarrage du CV académique',
    description: 'Créer la première version de son CV académique.',
    type: 'complementary',
    category: 'cv_building',
    estimatedTime: 60,
    order: 6,
    deliverable: 'CV académique V1',
    counselorRole: 'Orienter la structure et le contenu'
  },
  {
    id: 'tc_t7',
    levelId: 'tc',
    title: 'Défi "Construis ton parcours"',
    description: 'Jeu stratégique où tu planifies ton parcours jusqu\'au supérieur en faisant des choix et en gérant les contraintes.',
    type: 'complementary',
    category: 'game',
    estimatedTime: 50,
    order: 7,
    deliverable: 'Parcours créé et score de cohérence',
    counselorRole: 'Analyser les priorités de l\'élève'
  }
];

// ============================================================================
// TÂCHES 1BAC - CONSOLIDATION & VALORISATION DU PROFIL
// ============================================================================

export const tasks1BAC: Task[] = [
  // Tâches obligatoires
  {
    id: '1bac_t1',
    levelId: '1bac',
    title: 'Projets académiques ciblés',
    description: 'Réaliser des projets académiques alignés avec son orientation future.',
    type: 'mandatory',
    category: 'project',
    estimatedTime: 240,
    order: 1,
    deliverable: 'Portfolio de projets',
    counselorRole: 'Coaching individualisé sur les projets'
  },
  {
    id: '1bac_t2',
    levelId: '1bac',
    title: 'Engagements parascolaires stratégiques',
    description: 'S\'impliquer dans des activités parascolaires qui renforcent son profil.',
    type: 'mandatory',
    category: 'engagement',
    estimatedTime: 180,
    order: 2,
    deliverable: 'Attestations d\'engagement',
    counselorRole: 'Prioriser les actions à fort impact'
  },
  {
    id: '1bac_t3',
    levelId: '1bac',
    title: 'Construction du CV académique',
    description: 'Développer un CV académique complet et professionnel.',
    type: 'mandatory',
    category: 'cv_building',
    estimatedTime: 120,
    order: 3,
    deliverable: 'CV académique structuré',
    counselorRole: 'Ajuster le plan de valorisation'
  },
  {
    id: '1bac_t4',
    levelId: '1bac',
    title: 'Simulation de dossier de bourse / grande école',
    description: 'Préparer un dossier complet comme pour une candidature réelle.',
    type: 'mandatory',
    category: 'project',
    estimatedTime: 150,
    order: 4,
    deliverable: 'Dossier de candidature simulé',
    counselorRole: 'Réviser et améliorer le dossier'
  },
  {
    id: '1bac_t6',
    levelId: '1bac',
    title: 'Test final de recommandation de filières d\'études supérieures',
    description: 'Test d\'analyse approfondie de votre profil complet (RIASEC validé, aptitudes avancées, projets, engagements) pour recommander les filières d\'études supérieures les plus cohérentes avec votre parcours.',
    type: 'mandatory',
    category: 'test',
    estimatedTime: 60,
    order: 6,
    prerequisites: ['1bac_t1', '1bac_t2', '1bac_t3', '1bac_t4'],
    deliverable: 'Rapport de recommandation de filières supérieures avec plan d\'action',
    counselorRole: 'Affiner les recommandations et prioriser les choix',
    isMilestone: true
  },
  // Tâches complémentaires
  {
    id: '1bac_t5',
    levelId: '1bac',
    title: 'Certifications (langues, digital)',
    description: 'Obtenir des certifications reconnues pour renforcer son profil.',
    type: 'complementary',
    category: 'certification',
    estimatedTime: 300,
    order: 5,
    deliverable: 'Certifications officielles',
    counselorRole: 'Recommander les certifications pertinentes'
  },
  {
    id: '1bac_t7',
    levelId: '1bac',
    title: 'Challenge "Profil compétitif"',
    description: 'Jeu de gestion où tu optimises ton profil pour maximiser tes chances d\'admission dans les grandes écoles.',
    type: 'complementary',
    category: 'game',
    estimatedTime: 60,
    order: 7,
    deliverable: 'Stratégie optimisée et score',
    counselorRole: 'Valider les priorités choisies'
  }
];

// ============================================================================
// TÂCHES 2BAC - DÉCISION FINALE & PROJECTION POST-BAC
// ============================================================================

export const tasks2BAC: Task[] = [
  // Tâches obligatoires
  {
    id: '2bac_t1',
    levelId: '2bac',
    title: 'Justification du projet final',
    description: 'Rédiger une justification complète et argumentée de son projet d\'orientation post-bac.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 120,
    order: 1,
    deliverable: 'Document de justification finale',
    counselorRole: 'Validation finale du parcours'
  },
  {
    id: '2bac_t2',
    levelId: '2bac',
    title: 'Scénarios post-bac (plan A / B / C)',
    description: 'Élaborer 3 scénarios d\'orientation avec stratégies pour chacun.',
    type: 'mandatory',
    category: 'reflection',
    estimatedTime: 90,
    order: 2,
    deliverable: 'Document des 3 scénarios',
    counselorRole: 'Recommandations officielles',
    isMilestone: true
  },
  {
    id: '2bac_t3',
    levelId: '2bac',
    title: 'Préparation concours / dossiers',
    description: 'Préparer intensivement les concours et finaliser tous les dossiers de candidature.',
    type: 'mandatory',
    category: 'project',
    estimatedTime: 360,
    order: 3,
    deliverable: 'Dossiers de candidature finalisés',
    counselorRole: 'Accompagnement sur les candidatures'
  },
  {
    id: '2bac_t4',
    levelId: '2bac',
    title: 'Finalisation du dossier AvenirLab',
    description: 'Compiler et finaliser l\'ensemble du dossier d\'orientation multi-années.',
    type: 'mandatory',
    category: 'cv_building',
    estimatedTime: 120,
    order: 4,
    deliverable: 'Dossier d\'orientation complet',
    counselorRole: 'Transmission du dossier aux établissements'
  },
  // Tâches complémentaires
  {
    id: '2bac_t5',
    levelId: '2bac',
    title: 'Préparation aux entretiens',
    description: 'S\'entraîner aux entretiens d\'admission avec simulations.',
    type: 'complementary',
    category: 'project',
    estimatedTime: 90,
    order: 5,
    deliverable: 'Préparation entretiens',
    counselorRole: 'Coaching entretiens'
  },
  {
    id: '2bac_t6',
    levelId: '2bac',
    title: 'Simulateur de candidatures',
    description: 'Jeu réaliste où tu gères tes candidatures, ton stress et tes dossiers pour maximiser tes chances d\'admission.',
    type: 'complementary',
    category: 'game',
    estimatedTime: 70,
    order: 6,
    deliverable: 'Stratégie de candidature et résultats',
    counselorRole: 'Accompagner la stratégie finale'
  }
];

// ============================================================================
// EXPORT CONSOLIDÉ
// ============================================================================

export const allTasks: Task[] = [
  ...tasks1AC,
  ...tasks2AC,
  ...tasks3AC,
  ...tasksTC,
  ...tasks1BAC,
  ...tasks2BAC
];

export const getTasksByLevel = (levelId: string): Task[] => {
  return allTasks.filter(task => task.levelId === levelId);
};

export const getMandatoryTasks = (levelId: string): Task[] => {
  return getTasksByLevel(levelId).filter(task => task.type === 'mandatory');
};

export const getComplementaryTasks = (levelId: string): Task[] => {
  return getTasksByLevel(levelId).filter(task => task.type === 'complementary');
};

// Obtenir toutes les tâches de tous les niveaux
export const getAllTasks = (): Task[] => {
  return allTasks;
};
