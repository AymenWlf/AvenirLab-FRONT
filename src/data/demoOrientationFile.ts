// Données de démonstration pour le dossier d'orientation complet

import { CompleteOrientationFile } from '../types/orientationFile';

export const demoOrientationFile: CompleteOrientationFile = {
  studentId: 'STU-2024-001',
  createdAt: '2021-09-01T00:00:00Z',
  lastUpdated: new Date().toISOString(),
  currentLevel: '3ac',
  startLevel: '1ac',
  
  personalInfo: {
    photo: 'https://i.pravatar.cc/300?img=12',
    cne: 'N123456789',
    masaar: 'M987654321',
    firstName: 'Youssef',
    lastName: 'El Amrani',
    arabicFirstName: 'يوسف',
    arabicLastName: 'العمراني',
    dateOfBirth: '2008-03-15',
    placeOfBirth: 'Casablanca',
    gender: 'male',
    nationality: 'Marocaine',
    address: 'Rue 12, Quartier Maarif',
    city: 'Casablanca',
    phone: '+212 6 12 34 56 78',
    parentPhone: '+212 6 98 76 54 32',
    email: 'youssef.elamrani@gmail.com'
  },
  
  academicYears: [
    {
      year: '2021-2022',
      level: '1ac',
      establishment: 'Collège Al Massira',
      class: '1AC-2',
      semesters: [
        {
          semester: 1,
          subjects: [
            { subject: 'Mathématiques', grade: 15.5, coefficient: 3, weightedGrade: 46.5, appreciation: 'Très bien' },
            { subject: 'Physique-Chimie', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'SVT', grade: 13.5, coefficient: 2, weightedGrade: 27, appreciation: 'Bien' },
            { subject: 'Français', grade: 12, coefficient: 3, weightedGrade: 36, appreciation: 'Assez bien' },
            { subject: 'Arabe', grade: 14.5, coefficient: 3, weightedGrade: 43.5, appreciation: 'Bien' },
            { subject: 'Anglais', grade: 13, coefficient: 2, weightedGrade: 26, appreciation: 'Bien' },
            { subject: 'Histoire-Géo', grade: 12.5, coefficient: 2, weightedGrade: 25, appreciation: 'Assez bien' },
            { subject: 'Éducation Islamique', grade: 15, coefficient: 2, weightedGrade: 30, appreciation: 'Bien' },
            { subject: 'Informatique', grade: 16, coefficient: 1, weightedGrade: 16, appreciation: 'Très bien' },
            { subject: 'EPS', grade: 14, coefficient: 1, weightedGrade: 14, appreciation: 'Bien' }
          ],
          average: 13.82,
          rank: 8,
          totalStudents: 35,
          appreciation: 'Bon élève avec un bon potentiel en sciences'
        },
        {
          semester: 2,
          subjects: [
            { subject: 'Mathématiques', grade: 16, coefficient: 3, weightedGrade: 48, appreciation: 'Très bien' },
            { subject: 'Physique-Chimie', grade: 14.5, coefficient: 2, weightedGrade: 29, appreciation: 'Bien' },
            { subject: 'SVT', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'Français', grade: 12.5, coefficient: 3, weightedGrade: 37.5, appreciation: 'Assez bien' },
            { subject: 'Arabe', grade: 15, coefficient: 3, weightedGrade: 45, appreciation: 'Bien' },
            { subject: 'Anglais', grade: 13.5, coefficient: 2, weightedGrade: 27, appreciation: 'Bien' },
            { subject: 'Histoire-Géo', grade: 13, coefficient: 2, weightedGrade: 26, appreciation: 'Bien' },
            { subject: 'Éducation Islamique', grade: 15.5, coefficient: 2, weightedGrade: 31, appreciation: 'Très bien' },
            { subject: 'Informatique', grade: 17, coefficient: 1, weightedGrade: 17, appreciation: 'Excellent' },
            { subject: 'EPS', grade: 14.5, coefficient: 1, weightedGrade: 14.5, appreciation: 'Bien' }
          ],
          average: 14.27,
          rank: 6,
          totalStudents: 35,
          appreciation: 'Excellente progression, continue ainsi'
        }
      ],
      yearAverage: 14.05,
      yearRank: 7,
      decision: 'admitted',
      absences: 2,
      lateArrivals: 1,
      counselorComments: 'Élève sérieux avec une nette préférence pour les matières scientifiques. Participe activement en classe.'
    },
    {
      year: '2022-2023',
      level: '2ac',
      establishment: 'Collège Al Massira',
      class: '2AC-1',
      semesters: [
        {
          semester: 1,
          subjects: [
            { subject: 'Mathématiques', grade: 16.5, coefficient: 4, weightedGrade: 66, appreciation: 'Excellent' },
            { subject: 'Physique-Chimie', grade: 15, coefficient: 3, weightedGrade: 45, appreciation: 'Très bien' },
            { subject: 'SVT', grade: 14.5, coefficient: 2, weightedGrade: 29, appreciation: 'Bien' },
            { subject: 'Français', grade: 13, coefficient: 3, weightedGrade: 39, appreciation: 'Bien' },
            { subject: 'Arabe', grade: 15, coefficient: 3, weightedGrade: 45, appreciation: 'Très bien' },
            { subject: 'Anglais', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'Histoire-Géo', grade: 13.5, coefficient: 2, weightedGrade: 27, appreciation: 'Bien' },
            { subject: 'Éducation Islamique', grade: 15.5, coefficient: 2, weightedGrade: 31, appreciation: 'Très bien' },
            { subject: 'Informatique', grade: 17.5, coefficient: 2, weightedGrade: 35, appreciation: 'Excellent' },
            { subject: 'EPS', grade: 15, coefficient: 1, weightedGrade: 15, appreciation: 'Très bien' }
          ],
          average: 14.81,
          rank: 4,
          totalStudents: 38,
          appreciation: 'Excellent travail, des capacités remarquables en sciences'
        },
        {
          semester: 2,
          subjects: [
            { subject: 'Mathématiques', grade: 17, coefficient: 4, weightedGrade: 68, appreciation: 'Excellent' },
            { subject: 'Physique-Chimie', grade: 15.5, coefficient: 3, weightedGrade: 46.5, appreciation: 'Très bien' },
            { subject: 'SVT', grade: 15, coefficient: 2, weightedGrade: 30, appreciation: 'Très bien' },
            { subject: 'Français', grade: 13.5, coefficient: 3, weightedGrade: 40.5, appreciation: 'Bien' },
            { subject: 'Arabe', grade: 15.5, coefficient: 3, weightedGrade: 46.5, appreciation: 'Très bien' },
            { subject: 'Anglais', grade: 14.5, coefficient: 2, weightedGrade: 29, appreciation: 'Bien' },
            { subject: 'Histoire-Géo', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'Éducation Islamique', grade: 16, coefficient: 2, weightedGrade: 32, appreciation: 'Très bien' },
            { subject: 'Informatique', grade: 18, coefficient: 2, weightedGrade: 36, appreciation: 'Excellent' },
            { subject: 'EPS', grade: 15.5, coefficient: 1, weightedGrade: 15.5, appreciation: 'Très bien' }
          ],
          average: 15.32,
          rank: 3,
          totalStudents: 38,
          appreciation: 'Parcours exemplaire, élève brillant'
        }
      ],
      yearAverage: 15.07,
      yearRank: 3,
      decision: 'admitted',
      absences: 0,
      lateArrivals: 0,
      counselorComments: 'Élève exemplaire, très motivé. Profil scientifique confirmé. Recommandation pour une filière scientifique.'
    },
    {
      year: '2023-2024',
      level: '3ac',
      establishment: 'Collège Al Massira',
      class: '3AC-1',
      semesters: [
        {
          semester: 1,
          subjects: [
            { subject: 'Mathématiques', grade: 17.5, coefficient: 4, weightedGrade: 70, appreciation: 'Excellent' },
            { subject: 'Physique-Chimie', grade: 16, coefficient: 3, weightedGrade: 48, appreciation: 'Excellent' },
            { subject: 'SVT', grade: 15.5, coefficient: 3, weightedGrade: 46.5, appreciation: 'Très bien' },
            { subject: 'Français', grade: 14, coefficient: 3, weightedGrade: 42, appreciation: 'Bien' },
            { subject: 'Arabe', grade: 16, coefficient: 3, weightedGrade: 48, appreciation: 'Excellent' },
            { subject: 'Anglais', grade: 15, coefficient: 2, weightedGrade: 30, appreciation: 'Très bien' },
            { subject: 'Histoire-Géo', grade: 14.5, coefficient: 2, weightedGrade: 29, appreciation: 'Bien' },
            { subject: 'Éducation Islamique', grade: 16.5, coefficient: 2, weightedGrade: 33, appreciation: 'Excellent' },
            { subject: 'Informatique', grade: 18.5, coefficient: 2, weightedGrade: 37, appreciation: 'Excellent' },
            { subject: 'EPS', grade: 16, coefficient: 1, weightedGrade: 16, appreciation: 'Très bien' }
          ],
          average: 15.92,
          rank: 2,
          totalStudents: 40,
          appreciation: 'Parcours remarquable, élève d\'excellence'
        }
      ],
      yearAverage: 15.92,
      yearRank: 2,
      decision: 'admitted',
      absences: 0,
      lateArrivals: 0,
      counselorComments: 'Élève brillant avec un excellent profil scientifique. Fortement recommandé pour Sciences Maths ou Sciences Expérimentales.'
    }
  ],
  
  pathDecisions: [
    {
      date: '2024-02-15',
      level: '3ac',
      decisionType: 'lycee_filiere',
      title: 'Choix de filière lycée',
      choice: 'Sciences Expérimentales',
      alternatives: ['Sciences Mathématiques', 'Sciences et Technologies Électriques'],
      justification: 'Mes excellents résultats en sciences (mathématiques, physique et SVT) me permettent d\'envisager une filière scientifique. Je suis particulièrement intéressé par la biologie et la médecine, ce qui fait de Sciences Expérimentales le meilleur choix pour mon projet professionnel.',
      counselorValidation: true,
      counselorNotes: 'Choix cohérent avec le profil et les résultats de l\'élève. Sciences Expérimentales permettra de développer son intérêt pour les sciences de la vie tout en gardant des options ouvertes.'
    }
  ],
  
  orientationTests: [
    {
      id: 'test-1ac-interests',
      name: 'Test d\'intérêts professionn els (1AC)',
      type: 'interests',
      date: '2021-11-10',
      level: '1ac',
      score: 85,
      results: {
        topInterests: ['Sciences', 'Technologie', 'Santé'],
        lowInterests: ['Commerce', 'Arts', 'Administration']
      },
      interpretation: 'Forte orientation vers les domaines scientifiques et technologiques, avec un intérêt marqué pour les métiers liés à la santé.',
      recommendations: [
        'Explorer les métiers de la santé (médecin, pharmacien, biologiste)',
        'Participer à des ateliers scientifiques',
        'Développer des compétences en informatique'
      ]
    },
    {
      id: 'test-2ac-riasec',
      name: 'Test RIASEC simplifié (2AC)',
      type: 'riasec',
      date: '2022-12-05',
      level: '2ac',
      score: 82,
      results: {
        scores: {
          realistic: 12,
          investigative: 18,
          artistic: 8,
          social: 14,
          enterprising: 10,
          conventional: 11
        }
      },
      interpretation: 'Profil dominant Investigateur (I) avec composante Sociale (S). Personne analytique, curieuse, qui aime résoudre des problèmes complexes et aider les autres.',
      recommendations: [
        'Métiers recommandés : médecin, chercheur, ingénieur biomédical',
        'Développer les compétences en recherche scientifique',
        'S\'engager dans des activités de tutorat ou d\'aide aux autres'
      ]
    },
    {
      id: 'test-3ac-aptitudes',
      name: 'Test d\'aptitudes académiques (3AC)',
      type: 'aptitudes',
      date: '2023-10-20',
      level: '3ac',
      score: 88,
      results: {
        logique: 90,
        verbal: 82,
        numerique: 92,
        spatial: 85,
        memoire: 87
      },
      interpretation: 'Excellentes aptitudes logiques et numériques. Très bonnes capacités de raisonnement abstrait. Profil idéal pour les études scientifiques supérieures.',
      recommendations: [
        'Envisager des études supérieures en sciences exactes',
        'Préparer des concours de grandes écoles',
        'Développer les compétences en résolution de problèmes complexes'
      ]
    }
  ],
  
  riasecProfile: {
    date: '2024-01-15',
    level: '3ac',
    scores: {
      realistic: 13,
      investigative: 19,
      artistic: 9,
      social: 15,
      enterprising: 11,
      conventional: 12
    },
    dominantTypes: ['Investigative', 'Social', 'Realistic'],
    compatibleCareers: [
      'Médecin',
      'Chercheur en biologie',
      'Pharmacien',
      'Ingénieur biomédical',
      'Vétérinaire',
      'Professeur de sciences',
      'Psychologue'
    ],
    compatibleFields: [
      'Médecine et Santé',
      'Sciences de la Vie',
      'Biotechnologie',
      'Recherche Scientifique',
      'Ingénierie Biomédicale'
    ]
  },
  
  extracurricularActivities: [
    {
      id: 'act-1',
      title: 'Club de Robotique',
      type: 'club',
      startDate: '2022-09-01',
      description: 'Membre actif du club de robotique du collège. Participation à des projets de construction et programmation de robots.',
      achievements: [
        '2ème place au concours régional de robotique 2023',
        'Projet de robot suiveur de ligne réussi'
      ],
      skillsDeveloped: ['Programmation', 'Travail en équipe', 'Résolution de problèmes', 'Créativité']
    },
    {
      id: 'act-2',
      title: 'Tutorat en Mathématiques',
      type: 'volunteer',
      startDate: '2023-01-15',
      description: 'Tutorat bénévole pour aider des élèves de 1AC en difficulté en mathématiques.',
      skillsDeveloped: ['Pédagogie', 'Communication', 'Patience', 'Leadership']
    },
    {
      id: 'act-3',
      title: 'Équipe de Football',
      type: 'sport',
      startDate: '2021-09-01',
      description: 'Joueur dans l\'équipe de football du collège, poste de milieu de terrain.',
      achievements: [
        'Champion inter-collèges 2023'
      ],
      skillsDeveloped: ['Esprit d\'équipe', 'Discipline', 'Persévérance', 'Gestion du stress']
    }
  ],
  
  certifications: [
    {
      id: 'cert-1',
      name: 'Certificat en Programmation Python',
      issuer: 'Codecademy',
      date: '2023-06-15',
      level: 'Débutant',
      skills: ['Python', 'Programmation', 'Algorithmes']
    },
    {
      id: 'cert-2',
      name: 'Cambridge English: Preliminary (PET)',
      issuer: 'Cambridge Assessment English',
      date: '2023-05-20',
      level: 'B1',
      skills: ['Anglais', 'Communication']
    }
  ],
  
  projects: [
    {
      id: 'proj-1',
      title: 'Étude sur la qualité de l\'eau',
      description: 'Projet de recherche sur l\'analyse de la qualité de l\'eau dans différentes sources de la région.',
      date: '2023-04-10',
      level: '2ac',
      subject: 'SVT',
      type: 'research',
      grade: 17,
      skills: ['Méthodologie scientifique', 'Analyse', 'Présentation'],
      documents: []
    },
    {
      id: 'proj-2',
      title: 'Application de calcul scientifique',
      description: 'Développement d\'une application simple de calcul pour résoudre des équations mathématiques.',
      date: '2023-12-05',
      level: '3ac',
      subject: 'Informatique',
      type: 'practical',
      grade: 18,
      skills: ['Programmation', 'Interface utilisateur', 'Logique'],
      documents: []
    }
  ],
  
  languages: [
    { language: 'Arabe', level: 'native' },
    { language: 'Français', level: 'B2', certifications: [] },
    { language: 'Anglais', level: 'B1', certifications: ['Cambridge PET'] },
    { language: 'Espagnol', level: 'A2', certifications: [] }
  ],
  
  softSkills: [
    { name: 'Travail en équipe', level: 4, evidence: ['Club robotique', 'Football', 'Projets de groupe'] },
    { name: 'Communication', level: 4, evidence: ['Tutorat', 'Présentations en classe'] },
    { name: 'Résolution de problèmes', level: 5, evidence: ['Excellents résultats en maths', 'Club robotique'] },
    { name: 'Autonomie', level: 4, evidence: ['Apprentissage auto-dirigé en programmation'] },
    { name: 'Créativité', level: 3, evidence: ['Projets scientifiques innovants'] },
    { name: 'Leadership', level: 3, evidence: ['Tutorat', 'Capitaine d\'équipe sportive'] },
    { name: 'Persévérance', level: 5, evidence: ['Progression constante des résultats', 'Pratique sportive régulière'] },
    { name: 'Gestion du temps', level: 4, evidence: ['Équilibre entre études, activités et sport'] }
  ],
  
  counselingSessions: [
    {
      id: 'session-1',
      date: '2022-02-20',
      counselorName: 'Mme. Fatima Zahra',
      duration: 45,
      topics: ['Découverte des intérêts', 'Premières orientations'],
      notes: 'Premier entretien d\'orientation. Élève motivé avec un intérêt marqué pour les sciences. Encourager la participation aux activités scientifiques.',
      decisions: ['S\'inscrire au club de robotique'],
      nextSteps: ['Passer le test d\'intérêts professionnel'],
      parentPresent: true
    },
    {
      id: 'session-2',
      date: '2023-01-15',
      counselorName: 'Mme. Fatima Zahra',
      duration: 60,
      topics: ['Profil RIASEC', 'Exploration des métiers scientifiques'],
      notes: 'Profil Investigateur confirmé. Discussion sur les différents métiers scientifiques, en particulier dans le domaine de la santé.',
      decisions: ['Explorer les métiers de la médecine et de la recherche'],
      nextSteps: ['Organiser une visite à la faculté de médecine', 'Rencontrer un médecin'],
      parentPresent: true
    },
    {
      id: 'session-3',
      date: '2024-02-01',
      counselorName: 'Mme. Fatima Zahra',
      duration: 90,
      topics: ['Choix de filière lycée', 'Planification post-bac'],
      notes: 'Entretien approfondi sur le choix de filière. Discussion entre Sciences Maths et Sciences Expérimentales. Recommandation pour Sciences Expérimentales compte tenu de l\'intérêt pour la médecine.',
      decisions: ['Choisir Sciences Expérimentales', 'Préparer le dossier pour le lycée'],
      nextSteps: ['Passer le test de recommandation de filière', 'Visiter le lycée'],
      parentPresent: true
    }
  ],
  
  attachments: [
    {
      id: 'att-1',
      name: 'Bulletin S1 - 2021-2022',
      type: 'pdf',
      url: '/documents/bulletin-1ac-s1.pdf',
      uploadedAt: '2022-02-01T00:00:00Z'
    },
    {
      id: 'att-2',
      name: 'Certificat Robotique',
      type: 'pdf',
      url: '/documents/cert-robotique.pdf',
      uploadedAt: '2023-06-15T00:00:00Z'
    },
    {
      id: 'att-3',
      name: 'Rapport de stage d\'observation',
      type: 'pdf',
      url: '/documents/rapport-stage.pdf',
      uploadedAt: '2023-07-10T00:00:00Z'
    }
  ],
  
  completion: {
    overall: 85,
    sections: {
      personalInfo: 100,
      academicRecords: 90,
      pathDecisions: 70,
      orientationTests: 85,
      extracurricular: 75,
      skills: 80,
      counseling: 90
    }
  },
  
  status: 'in_progress',
  
  counselorValidation: {
    validated: false,
    date: '2024-03-01',
    counselorName: 'Mme. Fatima Zahra',
    comments: 'Dossier très complet et bien documenté. Élève sérieux avec un excellent potentiel. Continuer sur cette voie.'
  }
};
