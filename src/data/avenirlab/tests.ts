import { Test } from '../../types/avenirlab';

// ============================================================================
// TESTS PAR NIVEAU
// ============================================================================

export const tests: Test[] = [
  // 1AC - DÉCOUVERTE & CONSCIENCE DE SOI
  {
    id: 'test_1ac_interests',
    levelId: '1ac',
    name: 'Test d\'intérêts simplifié',
    description: 'Questionnaire sur les activités et préférences pour identifier les centres d\'intérêt principaux.',
    type: 'interests',
    questionCount: 20,
    duration: 20,
    deliverable: 'Profil d\'intérêts initial avec recommandations de domaines à explorer'
  },
  {
    id: 'test_1ac_learning',
    levelId: '1ac',
    name: 'Test de styles d\'apprentissage',
    description: 'Identifier comment l\'élève apprend le mieux : visuel, auditif, kinesthésique.',
    type: 'learning_style',
    questionCount: 15,
    duration: 15,
    deliverable: 'Profil d\'apprentissage avec conseils personnalisés'
  },
  {
    id: 'test_1ac_logic',
    levelId: '1ac',
    name: 'Jeux logiques d\'aptitudes générales',
    description: 'Évaluation ludique des capacités de raisonnement de base.',
    type: 'aptitudes',
    questionCount: 25,
    duration: 30,
    deliverable: 'Rapport d\'aptitudes générales'
  },

  // 2AC - EXPLORATION & PREMIÈRES COHÉRENCES
  {
    id: 'test_2ac_interests_advanced',
    levelId: '2ac',
    name: 'Test d\'intérêts enrichi (pré-RIASEC)',
    description: 'Version approfondie du test d\'intérêts avec introduction aux types professionnels RIASEC.',
    type: 'interests',
    questionCount: 30,
    duration: 30,
    deliverable: 'Profil d\'intérêts approfondi avec pré-orientation RIASEC'
  },
  {
    id: 'test_2ac_aptitudes',
    levelId: '2ac',
    name: 'Test d\'aptitudes par type de raisonnement',
    description: 'Évaluation des aptitudes verbales, numériques, spatiales et logiques.',
    type: 'aptitudes',
    questionCount: 40,
    duration: 45,
    deliverable: 'Profil d\'aptitudes détaillé par domaine'
  },
  {
    id: 'test_2ac_soft_skills',
    levelId: '2ac',
    name: 'Test de soft skills scolaires',
    description: 'Évaluation de l\'organisation, de la persévérance et de l\'autonomie.',
    type: 'soft_skills',
    questionCount: 25,
    duration: 20,
    deliverable: 'Carte des compétences personnelles'
  },

  // 3AC - DÉCISION STRUCTURANTE : CHOIX DE FILIÈRE
  {
    id: 'test_3ac_riasec_simple',
    levelId: '3ac',
    name: 'Test RIASEC simplifié',
    description: 'Test d\'orientation professionnelle basé sur le modèle RIASEC adapté au niveau collège.',
    type: 'riasec',
    questionCount: 60,
    duration: 40,
    deliverable: 'Profil RIASEC avec recommandations de filières lycée'
  },
  {
    id: 'test_3ac_aptitudes',
    levelId: '3ac',
    name: 'Test d\'aptitudes académiques',
    description: 'Évaluation approfondie des aptitudes logiques, verbales et numériques.',
    type: 'aptitudes',
    questionCount: 50,
    duration: 60,
    deliverable: 'Profil d\'aptitudes académiques avec prédictions de réussite par filière'
  },
  {
    id: 'test_3ac_soft_skills',
    levelId: '3ac',
    name: 'Test de soft skills scolaires',
    description: 'Évaluation des compétences transversales nécessaires au lycée.',
    type: 'soft_skills',
    questionCount: 30,
    duration: 25,
    deliverable: 'Bilan de compétences transversales'
  },
  {
    id: 'test_3ac_projection',
    levelId: '3ac',
    name: 'Test de projection légère',
    description: 'Questionnaire sur les motivations et aspirations futures.',
    type: 'projection',
    questionCount: 20,
    duration: 20,
    deliverable: 'Profil de motivations et objectifs'
  },
  {
    id: 'test_3ac_recommendation',
    levelId: '3ac',
    name: 'Test final de recommandation de filière lycée',
    description: 'Test complet d\'analyse de vos intérêts, aptitudes et résultats scolaires pour recommander la filière lycée la plus adaptée à votre profil.',
    type: 'projection',
    questionCount: 50,
    duration: 45,
    deliverable: 'Rapport de recommandation de filière avec justification détaillée'
  },

  // TC - STRATÉGIE DE BAC
  {
    id: 'test_tc_riasec_full',
    levelId: 'tc',
    name: 'Test RIASEC complet',
    description: 'Version complète et détaillée du test d\'orientation RIASEC avec analyse approfondie.',
    type: 'riasec',
    questionCount: 120,
    duration: 45,
    deliverable: 'Profil RIASEC complet avec recommandations de métiers et formations'
  },
  {
    id: 'test_tc_aptitudes_matiere',
    levelId: 'tc',
    name: 'Aptitudes académiques par matière',
    description: 'Évaluation détaillée des aptitudes dans chaque grande matière.',
    type: 'aptitudes',
    questionCount: 60,
    duration: 60,
    deliverable: 'Profil d\'excellence académique par domaine'
  },
  {
    id: 'test_tc_stress',
    levelId: 'tc',
    name: 'Test de gestion du stress',
    description: 'Évaluation de la capacité à gérer la pression et le stress scolaire.',
    type: 'soft_skills',
    questionCount: 25,
    duration: 20,
    deliverable: 'Profil de gestion du stress avec recommandations'
  },
  {
    id: 'test_tc_learning_confirmed',
    levelId: 'tc',
    name: 'Test de styles d\'apprentissage confirmé',
    description: 'Réévaluation approfondie des styles d\'apprentissage pour optimiser les méthodes de travail.',
    type: 'learning_style',
    questionCount: 30,
    duration: 25,
    deliverable: 'Guide personnalisé de méthodes d\'apprentissage'
  },
  {
    id: 'test_tc_projection',
    levelId: 'tc',
    name: 'Projection métiers & études',
    description: 'Exploration approfondie des aspirations professionnelles et académiques.',
    type: 'projection',
    questionCount: 40,
    duration: 35,
    deliverable: 'Plan de carrière préliminaire'
  },
  {
    id: 'test_tc_recommendation',
    levelId: 'tc',
    name: 'Test final de recommandation de type de bac',
    description: 'Test d\'analyse complète de votre profil RIASEC, vos aptitudes académiques et vos objectifs pour recommander le type de baccalauréat le plus adapté.',
    type: 'projection',
    questionCount: 60,
    duration: 50,
    deliverable: 'Rapport de recommandation de type de bac avec argumentation'
  },

  // 1BAC - CONSOLIDATION & VALORISATION DU PROFIL
  {
    id: 'test_1bac_riasec_validation',
    levelId: '1bac',
    name: 'Validation RIASEC',
    description: 'Confirmation et affinement du profil RIASEC avec le recul de l\'expérience lycée.',
    type: 'riasec',
    questionCount: 80,
    duration: 40,
    deliverable: 'Profil RIASEC validé et affiné'
  },
  {
    id: 'test_1bac_aptitudes_advanced',
    levelId: '1bac',
    name: 'Aptitudes avancées',
    description: 'Évaluation poussée des aptitudes nécessaires pour l\'enseignement supérieur.',
    type: 'aptitudes',
    questionCount: 70,
    duration: 70,
    deliverable: 'Profil d\'aptitudes pour études supérieures'
  },
  {
    id: 'test_1bac_soft_skills_leadership',
    levelId: '1bac',
    name: 'Soft skills (autonomie, leadership)',
    description: 'Évaluation des compétences d\'autonomie, de leadership et de gestion de projet.',
    type: 'soft_skills',
    questionCount: 40,
    duration: 30,
    deliverable: 'Profil de compétences personnelles et leadership'
  },
  {
    id: 'test_1bac_stress_motivation',
    levelId: '1bac',
    name: 'Stress, motivation, persévérance',
    description: 'Évaluation de la résilience et de la motivation face aux défis académiques.',
    type: 'soft_skills',
    questionCount: 35,
    duration: 30,
    deliverable: 'Profil de résilience et motivation'
  },
  {
    id: 'test_1bac_projection_realistic',
    levelId: '1bac',
    name: 'Projection réaliste (écoles, bourses)',
    description: 'Évaluation du réalisme du projet d\'orientation et des chances d\'admission.',
    type: 'projection',
    questionCount: 30,
    duration: 30,
    deliverable: 'Analyse de faisabilité du projet post-bac'
  },
  {
    id: 'test_1bac_recommendation',
    levelId: '1bac',
    name: 'Test final de recommandation de filières d\'études supérieures',
    description: 'Test d\'analyse approfondie de votre profil complet pour recommander les filières d\'études supérieures les plus cohérentes avec votre parcours.',
    type: 'projection',
    questionCount: 70,
    duration: 60,
    deliverable: 'Rapport de recommandation de filières supérieures avec plan d\'action'
  },

  // 2BAC - DÉCISION FINALE & PROJECTION POST-BAC
  {
    id: 'test_2bac_validation_final',
    levelId: '2bac',
    name: 'Tests de validation finale',
    description: 'Batterie de tests pour confirmer le profil complet de l\'élève.',
    type: 'aptitudes',
    questionCount: 50,
    duration: 60,
    deliverable: 'Profil complet validé pour dossiers'
  },
  {
    id: 'test_2bac_stress_resilience',
    levelId: '2bac',
    name: 'Stress & résilience',
    description: 'Évaluation de la capacité à gérer la pression des examens et concours.',
    type: 'soft_skills',
    questionCount: 30,
    duration: 25,
    deliverable: 'Stratégies de gestion du stress pour concours'
  },
  {
    id: 'test_2bac_maturity',
    levelId: '2bac',
    name: 'Auto-positionnement de maturité',
    description: 'Réflexion sur sa maturité et préparation pour la vie universitaire.',
    type: 'projection',
    questionCount: 25,
    duration: 20,
    deliverable: 'Bilan de maturité et préparation au supérieur'
  }
];

// ============================================================================
// HELPERS
// ============================================================================

export const getTestsByLevel = (levelId: string): Test[] => {
  return tests.filter(test => test.levelId === levelId);
};

export const getTestById = (testId: string): Test | undefined => {
  return tests.find(test => test.id === testId);
};

export const getTestsByType = (type: string): Test[] => {
  return tests.filter(test => test.type === type);
};

export const getAllTests = (): Test[] => {
  return tests;
};
