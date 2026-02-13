// Données de démonstration pour un dossier d'orientation INCOMPLET

import { CompleteOrientationFile } from '../types/orientationFile';

export const incompleteOrientationFile: CompleteOrientationFile = {
  studentId: 'STU-2024-002',
  createdAt: '2023-09-01T00:00:00Z',
  lastUpdated: new Date().toISOString(),
  currentLevel: '2ac',
  startLevel: '2ac', // Élève qui a commencé en 2AC
  
  personalInfo: {
    photo: 'https://i.pravatar.cc/300?img=33',
    cne: 'N987654321',
    masaar: 'M123456789',
    firstName: 'Amina',
    lastName: 'Benali',
    arabicFirstName: 'أمينة',
    arabicLastName: 'بن علي',
    dateOfBirth: '2009-06-20',
    placeOfBirth: 'Rabat',
    gender: 'female',
    nationality: 'Marocaine',
    address: 'Avenue Hassan II, Agdal',
    city: 'Rabat',
    phone: '+212 6 11 22 33 44',
    parentPhone: '+212 6 99 88 77 66',
    email: 'amina.benali@gmail.com'
  },
  
  academicYears: [
    {
      year: '2023-2024',
      level: '2ac',
      establishment: 'Collège Ibn Battuta',
      class: '2AC-3',
      semesters: [
        {
          semester: 1,
          subjects: [
            { subject: 'Mathématiques', grade: 13, coefficient: 4, weightedGrade: 52, appreciation: 'Bien' },
            { subject: 'Physique-Chimie', grade: 12.5, coefficient: 3, weightedGrade: 37.5, appreciation: 'Assez bien' },
            { subject: 'SVT', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'Français', grade: 15, coefficient: 3, weightedGrade: 45, appreciation: 'Bien' },
            { subject: 'Arabe', grade: 14.5, coefficient: 3, weightedGrade: 43.5, appreciation: 'Bien' },
            { subject: 'Anglais', grade: 13.5, coefficient: 2, weightedGrade: 27, appreciation: 'Bien' },
            { subject: 'Histoire-Géo', grade: 12, coefficient: 2, weightedGrade: 24, appreciation: 'Assez bien' },
            { subject: 'Éducation Islamique', grade: 15, coefficient: 2, weightedGrade: 30, appreciation: 'Bien' },
            { subject: 'Informatique', grade: 14, coefficient: 2, weightedGrade: 28, appreciation: 'Bien' },
            { subject: 'EPS', grade: 13, coefficient: 1, weightedGrade: 13, appreciation: 'Bien' }
          ],
          average: 13.65,
          rank: 12,
          totalStudents: 36,
          appreciation: 'Bonne élève, peut progresser davantage'
        }
      ],
      yearAverage: 13.65,
      yearRank: 12,
      decision: 'admitted',
      absences: 3,
      lateArrivals: 2,
      counselorComments: 'Élève sérieuse mais qui a commencé le système en 2AC. Besoin de rattraper les éléments de 1AC.'
    }
  ],
  
  pathDecisions: [], // Aucune décision encore prise
  
  orientationTests: [
    {
      id: 'test-2ac-interests',
      name: 'Test d\'intérêts enrichi (2AC)',
      type: 'interests',
      date: '2023-11-15',
      level: '2ac',
      score: 72,
      results: {
        topInterests: ['Lettres', 'Langues', 'Communication'],
        lowInterests: ['Sciences exactes', 'Technique']
      },
      interpretation: 'Intérêt marqué pour les domaines littéraires et linguistiques. Bonne capacité de communication.',
      recommendations: [
        'Explorer les métiers de la communication et des langues',
        'Développer les compétences en expression écrite et orale'
      ]
    }
  ],
  
  riasecProfile: undefined, // Pas encore passé
  
  extracurricularActivities: [
    {
      id: 'act-1',
      title: 'Club de Théâtre',
      type: 'art',
      startDate: '2023-10-01',
      description: 'Participation au club de théâtre du collège.',
      skillsDeveloped: ['Expression orale', 'Confiance en soi', 'Créativité']
    }
  ],
  
  certifications: [], // Aucune certification encore
  
  projects: [], // Aucun projet encore documenté
  
  languages: [
    { language: 'Arabe', level: 'native' },
    { language: 'Français', level: 'B1', certifications: [] },
    { language: 'Anglais', level: 'A2', certifications: [] }
  ],
  
  softSkills: [
    { name: 'Communication', level: 3, evidence: ['Club théâtre'] },
    { name: 'Créativité', level: 3, evidence: ['Club théâtre'] }
  ],
  
  counselingSessions: [
    {
      id: 'session-1',
      date: '2023-10-10',
      counselorName: 'M. Ahmed Tazi',
      duration: 30,
      topics: ['Prise en main du système', 'Rattrapage 1AC'],
      notes: 'Premier entretien. Élève qui a rejoint le système en 2AC. Besoin de compléter les éléments manquants de 1AC.',
      decisions: ['Compléter les tests et tâches de 1AC'],
      nextSteps: ['Passer le test d\'intérêts 1AC', 'Découvrir les métiers'],
      parentPresent: true
    }
  ],
  
  attachments: [],
  
  completion: {
    overall: 42, // Dossier incomplet
    sections: {
      personalInfo: 100,
      academicRecords: 50, // Seulement 1 année
      pathDecisions: 0, // Aucune décision
      orientationTests: 30, // Seulement 1 test
      extracurricular: 40, // Peu d'activités
      skills: 25, // Peu de compétences documentées
      counseling: 50 // 1 seul entretien
    }
  },
  
  status: 'in_progress',
  
  counselorValidation: undefined // Pas encore validé
};
