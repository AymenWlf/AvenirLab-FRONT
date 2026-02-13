// Configuration de navigation pour tous les rôles utilisateurs AvenirLab
import { NavGroup, UserRole } from '../types/user';

// Navigation pour les ÉLÈVES
const studentNavigation: NavGroup[] = [
  {
    id: 'main',
    label: 'Principal',
    items: [
      {
        id: 'dashboard',
        label: 'Tableau de bord',
        icon: 'LayoutDashboard',
        path: '/dashboard',
        roles: ['student'],
        description: 'Vue d\'ensemble et progression'
      }
    ]
  },
  {
    id: 'orientation',
    label: 'Mon Orientation',
    items: [
      {
        id: 'my-progression',
        label: 'Mon Parcours',
        icon: 'TrendingUp',
        path: '/dashboard/student',
        roles: ['student'],
        description: 'Parcours d\'orientation structuré du collège au bac'
      },
      {
        id: 'my-complete-file',
        label: 'Dossier d\'Orientation Complet',
        icon: 'FolderOpen',
        path: '/dashboard/orientation/complete-file',
        roles: ['student'],
        description: 'Dossier d\'orientation longitudinal détaillé'
      },
      {
        id: 'my-file',
        label: 'Mon dossier simplifié',
        icon: 'FileText',
        path: '/orientation/file',
        roles: ['student']
      },
      {
        id: 'test-results',
        label: 'Résultats de tests',
        icon: 'ClipboardCheck',
        path: '/orientation/results',
        roles: ['student']
      },
      {
        id: 'riasec-profile',
        label: 'Profil RIASEC',
        icon: 'Target',
        path: '/orientation/riasec',
        roles: ['student']
      },
      {
        id: 'recommendations',
        label: 'Recommandations',
        icon: 'Lightbulb',
        path: '/orientation/recommendations',
        roles: ['student'],
        badge: 3
      }
    ]
  },
  {
    id: 'tests-activities',
    label: 'Tests & Activités',
    items: [
      {
        id: 'interest-tests',
        label: 'Tests d\'intérêts',
        icon: 'Heart',
        path: '/tests/interests',
        roles: ['student']
      },
      {
        id: 'personality-tests',
        label: 'Tests de personnalité',
        icon: 'User',
        path: '/tests/personality',
        roles: ['student']
      },
      {
        id: 'skill-tests',
        label: 'Tests de compétences',
        icon: 'Award',
        path: '/tests/skills',
        roles: ['student']
      },
      {
        id: 'games',
        label: 'Jeux et activités',
        icon: 'Gamepad2',
        path: '/activities/games',
        roles: ['student']
      },
      {
        id: 'missions',
        label: 'Missions en cours',
        icon: 'CheckSquare',
        path: '/activities/missions',
        roles: ['student'],
        badge: 2
      }
    ]
  },
  {
    id: 'discovery',
    label: 'Découverte',
    items: [
      {
        id: 'careers',
        label: 'Base des métiers',
        icon: 'Briefcase',
        path: '/discovery/careers',
        roles: ['student']
      },
      {
        id: 'programs',
        label: 'Filières et formations',
        icon: 'GraduationCap',
        path: '/discovery/programs',
        roles: ['student']
      },
      {
        id: 'institutions',
        label: 'Établissements',
        icon: 'Building2',
        path: '/discovery/institutions',
        roles: ['student']
      },
      {
        id: 'testimonials',
        label: 'Témoignages métiers',
        icon: 'Quote',
        path: '/discovery/testimonials',
        roles: ['student']
      }
    ]
  },
  {
    id: 'my-project',
    label: 'Mon Projet',
    items: [
      {
        id: 'favorite-careers',
        label: 'Métiers favoris',
        icon: 'Star',
        path: '/project/careers',
        roles: ['student']
      },
      {
        id: 'favorite-programs',
        label: 'Formations favorites',
        icon: 'BookmarkPlus',
        path: '/project/programs',
        roles: ['student']
      },
      {
        id: 'action-plan',
        label: 'Plan d\'action',
        icon: 'ListChecks',
        path: '/project/plan',
        roles: ['student']
      },
      {
        id: 'timeline',
        label: 'Échéancier',
        icon: 'CalendarDays',
        path: '/project/timeline',
        roles: ['student']
      }
    ]
  },
  {
    id: 'communication',
    label: 'Communication',
    items: [
      {
        id: 'calendar',
        label: 'Agenda',
        icon: 'Calendar',
        path: '/calendar',
        roles: ['student']
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: 'MessageSquare',
        path: '/messages',
        roles: ['student'],
        badge: 5
      }
    ]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    items: [
      {
        id: 'profile',
        label: 'Mon profil',
        icon: 'UserCircle',
        path: '/profile',
        roles: ['student']
      },
      {
        id: 'help',
        label: 'Aide',
        icon: 'HelpCircle',
        path: '/help',
        roles: ['student']
      }
    ]
  }
];

// Navigation pour les PARENTS
const parentNavigation: NavGroup[] = [
  {
    id: 'main',
    label: 'Principal',
    items: [
      {
        id: 'dashboard',
        label: 'Tableau de bord',
        icon: 'LayoutDashboard',
        path: '/dashboard',
        roles: ['parent']
      },
      {
        id: 'children',
        label: 'Mes enfants',
        icon: 'Users',
        path: '/children',
        roles: ['parent']
      }
    ]
  },
  {
    id: 'tracking',
    label: 'Suivi',
    items: [
      {
        id: 'orientation-file',
        label: 'Dossier d\'orientation',
        icon: 'FolderOpen',
        path: '/tracking/orientation',
        roles: ['parent']
      },
      {
        id: 'test-results',
        label: 'Résultats des tests',
        icon: 'ClipboardCheck',
        path: '/tracking/results',
        roles: ['parent']
      },
      {
        id: 'progress',
        label: 'Progression',
        icon: 'TrendingUp',
        path: '/tracking/progress',
        roles: ['parent']
      },
      {
        id: 'recommendations',
        label: 'Recommandations',
        icon: 'Lightbulb',
        path: '/tracking/recommendations',
        roles: ['parent']
      }
    ]
  },
  {
    id: 'appointments',
    label: 'Rendez-vous',
    items: [
      {
        id: 'calendar',
        label: 'Calendrier',
        icon: 'Calendar',
        path: '/appointments/calendar',
        roles: ['parent']
      },
      {
        id: 'history',
        label: 'Historique RDV',
        icon: 'History',
        path: '/appointments/history',
        roles: ['parent']
      },
      {
        id: 'book',
        label: 'Prendre RDV',
        icon: 'CalendarPlus',
        path: '/appointments/book',
        roles: ['parent']
      }
    ]
  },
  {
    id: 'communication',
    label: 'Communication',
    items: [
      {
        id: 'messages',
        label: 'Messages',
        icon: 'MessageSquare',
        path: '/messages',
        roles: ['parent'],
        badge: 3
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: 'Bell',
        path: '/notifications',
        roles: ['parent']
      }
    ]
  },
  {
    id: 'documents',
    label: 'Documents',
    items: [
      {
        id: 'reports',
        label: 'Rapports d\'orientation',
        icon: 'FileText',
        path: '/documents/reports',
        roles: ['parent']
      },
      {
        id: 'transcripts',
        label: 'Bulletins',
        icon: 'FileSpreadsheet',
        path: '/documents/transcripts',
        roles: ['parent']
      },
      {
        id: 'administrative',
        label: 'Documents administratifs',
        icon: 'Files',
        path: '/documents/administrative',
        roles: ['parent']
      }
    ]
  },
  {
    id: 'resources',
    label: 'Ressources',
    items: [
      {
        id: 'guide',
        label: 'Guide parents',
        icon: 'BookOpen',
        path: '/resources/guide',
        roles: ['parent']
      },
      {
        id: 'faq',
        label: 'FAQ',
        icon: 'HelpCircle',
        path: '/resources/faq',
        roles: ['parent']
      }
    ]
  }
];

// Navigation pour les ORIENTATEURS
const counselorNavigation: NavGroup[] = [
  {
    id: 'main',
    label: 'Principal',
    items: [
      {
        id: 'dashboard',
        label: 'Tableau de bord',
        icon: 'LayoutDashboard',
        path: '/dashboard',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'students',
    label: 'Élèves',
    items: [
      {
        id: 'my-students',
        label: 'Mes élèves',
        icon: 'Users',
        path: '/students',
        roles: ['counselor']
      },
      {
        id: 'by-class',
        label: 'Par classe/niveau',
        icon: 'School',
        path: '/students/by-class',
        roles: ['counselor']
      },
      {
        id: 'pending-files',
        label: 'Dossiers en attente',
        icon: 'Clock',
        path: '/students/pending',
        roles: ['counselor'],
        badge: 8
      }
    ]
  },
  {
    id: 'files',
    label: 'Dossiers',
    items: [
      {
        id: 'view-files',
        label: 'Consulter dossier',
        icon: 'FolderOpen',
        path: '/files/view',
        roles: ['counselor']
      },
      {
        id: 'observations',
        label: 'Ajouter observations',
        icon: 'FileEdit',
        path: '/files/observations',
        roles: ['counselor']
      },
      {
        id: 'generate-reports',
        label: 'Générer rapports',
        icon: 'FileOutput',
        path: '/files/reports',
        roles: ['counselor']
      },
      {
        id: 'history',
        label: 'Historique',
        icon: 'History',
        path: '/files/history',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics & Data',
    items: [
      {
        id: 'student-stats',
        label: 'Statistiques élèves',
        icon: 'BarChart3',
        path: '/analytics/students',
        roles: ['counselor']
      },
      {
        id: 'trends',
        label: 'Tendances orientation',
        icon: 'TrendingUp',
        path: '/analytics/trends',
        roles: ['counselor']
      },
      {
        id: 'class-reports',
        label: 'Rapports par classe',
        icon: 'FileBarChart',
        path: '/analytics/classes',
        roles: ['counselor']
      },
      {
        id: 'dashboards',
        label: 'Tableaux de bord',
        icon: 'LayoutGrid',
        path: '/analytics/dashboards',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'tests',
    label: 'Tests & Évaluations',
    items: [
      {
        id: 'assign-tests',
        label: 'Assigner tests',
        icon: 'ClipboardList',
        path: '/tests/assign',
        roles: ['counselor']
      },
      {
        id: 'view-results',
        label: 'Consulter résultats',
        icon: 'ClipboardCheck',
        path: '/tests/results',
        roles: ['counselor']
      },
      {
        id: 'group-analysis',
        label: 'Analyse groupée',
        icon: 'GitCompare',
        path: '/tests/group-analysis',
        roles: ['counselor']
      },
      {
        id: 'ai-recommendations',
        label: 'Recommandations IA',
        icon: 'Brain',
        path: '/tests/ai-recommendations',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'knowledge-base',
    label: 'Base de connaissances',
    items: [
      {
        id: 'careers',
        label: 'Métiers',
        icon: 'Briefcase',
        path: '/knowledge/careers',
        roles: ['counselor']
      },
      {
        id: 'programs',
        label: 'Formations',
        icon: 'GraduationCap',
        path: '/knowledge/programs',
        roles: ['counselor']
      },
      {
        id: 'institutions',
        label: 'Établissements',
        icon: 'Building2',
        path: '/knowledge/institutions',
        roles: ['counselor']
      },
      {
        id: 'resources',
        label: 'Ressources pédagogiques',
        icon: 'BookOpen',
        path: '/knowledge/resources',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'scheduling',
    label: 'Agenda',
    items: [
      {
        id: 'calendar',
        label: 'Calendrier',
        icon: 'Calendar',
        path: '/calendar',
        roles: ['counselor']
      },
      {
        id: 'student-appointments',
        label: 'RDV élèves',
        icon: 'CalendarCheck',
        path: '/appointments/students',
        roles: ['counselor'],
        badge: 4
      },
      {
        id: 'parent-appointments',
        label: 'RDV parents',
        icon: 'CalendarClock',
        path: '/appointments/parents',
        roles: ['counselor']
      },
      {
        id: 'events',
        label: 'Événements',
        icon: 'CalendarDays',
        path: '/events',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'communication',
    label: 'Communication',
    items: [
      {
        id: 'messages',
        label: 'Messages',
        icon: 'MessageSquare',
        path: '/messages',
        roles: ['counselor'],
        badge: 12
      },
      {
        id: 'alerts',
        label: 'Alertes système',
        icon: 'AlertCircle',
        path: '/alerts',
        roles: ['counselor'],
        badge: 3
      }
    ]
  },
  {
    id: 'tools',
    label: 'Outils',
    items: [
      {
        id: 'report-generator',
        label: 'Générateur de rapports',
        icon: 'FileOutput',
        path: '/tools/report-generator',
        roles: ['counselor']
      },
      {
        id: 'templates',
        label: 'Modèles de documents',
        icon: 'FileType',
        path: '/tools/templates',
        roles: ['counselor']
      },
      {
        id: 'downloads',
        label: 'Ressources téléchargeables',
        icon: 'Download',
        path: '/tools/downloads',
        roles: ['counselor']
      }
    ]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    items: [
      {
        id: 'profile',
        label: 'Profil',
        icon: 'UserCircle',
        path: '/profile',
        roles: ['counselor']
      },
      {
        id: 'help',
        label: 'Aide',
        icon: 'HelpCircle',
        path: '/help',
        roles: ['counselor']
      }
    ]
  }
];

// Navigation pour la DIRECTION PÉDAGOGIQUE
const directionNavigation: NavGroup[] = [
  {
    id: 'main',
    label: 'Principal',
    items: [
      {
        id: 'executive-dashboard',
        label: 'Dashboard exécutif',
        icon: 'LayoutDashboard',
        path: '/dashboard',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics Institutionnels',
    items: [
      {
        id: 'global-stats',
        label: 'Statistiques globales',
        icon: 'BarChart3',
        path: '/analytics/global',
        roles: ['direction']
      },
      {
        id: 'level-reports',
        label: 'Rapports par niveau',
        icon: 'FileBarChart',
        path: '/analytics/levels',
        roles: ['direction']
      },
      {
        id: 'evolution',
        label: 'Évolution temporelle',
        icon: 'TrendingUp',
        path: '/analytics/evolution',
        roles: ['direction']
      },
      {
        id: 'comparisons',
        label: 'Comparaisons',
        icon: 'GitCompare',
        path: '/analytics/comparisons',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'team',
    label: 'Équipe Orientation',
    items: [
      {
        id: 'counselors',
        label: 'Orientateurs',
        icon: 'Users',
        path: '/team/counselors',
        roles: ['direction']
      },
      {
        id: 'workload',
        label: 'Charge de travail',
        icon: 'Activity',
        path: '/team/workload',
        roles: ['direction']
      },
      {
        id: 'performance',
        label: 'Performance',
        icon: 'Award',
        path: '/team/performance',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'students',
    label: 'Élèves',
    items: [
      {
        id: 'by-level',
        label: 'Vue par niveau/classe',
        icon: 'School',
        path: '/students/by-level',
        roles: ['direction']
      },
      {
        id: 'orientation-stats',
        label: 'Statistiques orientation',
        icon: 'Target',
        path: '/students/orientation-stats',
        roles: ['direction']
      },
      {
        id: 'at-risk',
        label: 'Élèves à risque',
        icon: 'AlertTriangle',
        path: '/students/at-risk',
        roles: ['direction'],
        badge: 15
      },
      {
        id: 'success-stories',
        label: 'Success stories',
        icon: 'Trophy',
        path: '/students/success-stories',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'reports',
    label: 'Rapports',
    items: [
      {
        id: 'monthly',
        label: 'Rapports mensuels',
        icon: 'FileText',
        path: '/reports/monthly',
        roles: ['direction']
      },
      {
        id: 'annual',
        label: 'Rapports annuels',
        icon: 'FileStack',
        path: '/reports/annual',
        roles: ['direction']
      },
      {
        id: 'custom-exports',
        label: 'Exports personnalisés',
        icon: 'FileOutput',
        path: '/reports/exports',
        roles: ['direction']
      },
      {
        id: 'custom-dashboards',
        label: 'Tableaux de bord custom',
        icon: 'LayoutGrid',
        path: '/reports/dashboards',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'strategy',
    label: 'Stratégie Orientation',
    items: [
      {
        id: 'objectives',
        label: 'Objectifs',
        icon: 'Target',
        path: '/strategy/objectives',
        roles: ['direction']
      },
      {
        id: 'indicators',
        label: 'Indicateurs',
        icon: 'Gauge',
        path: '/strategy/indicators',
        roles: ['direction']
      },
      {
        id: 'action-plans',
        label: 'Plans d\'action',
        icon: 'ListChecks',
        path: '/strategy/plans',
        roles: ['direction']
      },
      {
        id: 'tracking',
        label: 'Suivi',
        icon: 'Eye',
        path: '/strategy/tracking',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'events',
    label: 'Événements',
    items: [
      {
        id: 'orientation-forums',
        label: 'Forums orientation',
        icon: 'Users',
        path: '/events/forums',
        roles: ['direction']
      },
      {
        id: 'open-days',
        label: 'Portes ouvertes',
        icon: 'DoorOpen',
        path: '/events/open-days',
        roles: ['direction']
      },
      {
        id: 'interventions',
        label: 'Interventions',
        icon: 'Presentation',
        path: '/events/interventions',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'admin',
    label: 'Administration',
    items: [
      {
        id: 'system-config',
        label: 'Configuration système',
        icon: 'Settings',
        path: '/admin/config',
        roles: ['direction']
      },
      {
        id: 'user-management',
        label: 'Gestion utilisateurs',
        icon: 'UserCog',
        path: '/admin/users',
        roles: ['direction']
      },
      {
        id: 'establishment-settings',
        label: 'Paramètres établissement',
        icon: 'Building2',
        path: '/admin/establishment',
        roles: ['direction']
      }
    ]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    items: [
      {
        id: 'profile',
        label: 'Profil',
        icon: 'UserCircle',
        path: '/profile',
        roles: ['direction']
      },
      {
        id: 'help',
        label: 'Aide',
        icon: 'HelpCircle',
        path: '/help',
        roles: ['direction']
      }
    ]
  }
];

// Navigation pour la SURVEILLANCE GÉNÉRALE
const surveillanceNavigation: NavGroup[] = [
  {
    id: 'main',
    label: 'Principal',
    items: [
      {
        id: 'dashboard',
        label: 'Tableau de bord',
        icon: 'LayoutDashboard',
        path: '/dashboard',
        roles: ['surveillance']
      }
    ]
  },
  {
    id: 'students',
    label: 'Élèves',
    items: [
      {
        id: 'student-list',
        label: 'Liste élèves',
        icon: 'Users',
        path: '/students',
        roles: ['surveillance']
      },
      {
        id: 'behavior-files',
        label: 'Fiches comportement',
        icon: 'FileText',
        path: '/students/behavior',
        roles: ['surveillance']
      },
      {
        id: 'observations',
        label: 'Observations',
        icon: 'Eye',
        path: '/students/observations',
        roles: ['surveillance']
      }
    ]
  },
  {
    id: 'behavior-tracking',
    label: 'Suivi Comportemental',
    items: [
      {
        id: 'incidents',
        label: 'Incidents',
        icon: 'AlertTriangle',
        path: '/behavior/incidents',
        roles: ['surveillance'],
        badge: 5
      },
      {
        id: 'positive-observations',
        label: 'Observations positives',
        icon: 'ThumbsUp',
        path: '/behavior/positive',
        roles: ['surveillance']
      },
      {
        id: 'behavior-notes',
        label: 'Notes comportement',
        icon: 'StickyNote',
        path: '/behavior/notes',
        roles: ['surveillance']
      },
      {
        id: 'evolution',
        label: 'Évolution',
        icon: 'TrendingUp',
        path: '/behavior/evolution',
        roles: ['surveillance']
      }
    ]
  },
  {
    id: 'coordination',
    label: 'Coordination',
    items: [
      {
        id: 'with-orientation',
        label: 'Lien avec orientation',
        icon: 'Link',
        path: '/coordination/orientation',
        roles: ['surveillance']
      },
      {
        id: 'info-sharing',
        label: 'Partage d\'informations',
        icon: 'Share2',
        path: '/coordination/sharing',
        roles: ['surveillance']
      },
      {
        id: 'alerts',
        label: 'Alertes',
        icon: 'Bell',
        path: '/coordination/alerts',
        roles: ['surveillance'],
        badge: 2
      }
    ]
  },
  {
    id: 'planning',
    label: 'Planning',
    items: [
      {
        id: 'convocations',
        label: 'Convocations',
        icon: 'FileWarning',
        path: '/planning/convocations',
        roles: ['surveillance']
      },
      {
        id: 'meetings',
        label: 'Réunions',
        icon: 'Users',
        path: '/planning/meetings',
        roles: ['surveillance']
      },
      {
        id: 'events',
        label: 'Événements',
        icon: 'Calendar',
        path: '/planning/events',
        roles: ['surveillance']
      }
    ]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    items: [
      {
        id: 'profile',
        label: 'Profil',
        icon: 'UserCircle',
        path: '/profile',
        roles: ['surveillance']
      }
    ]
  }
];

// Export de la configuration complète
export const navigationConfig: Record<UserRole, NavGroup[]> = {
  student: studentNavigation,
  parent: parentNavigation,
  counselor: counselorNavigation,
  direction: directionNavigation,
  surveillance: surveillanceNavigation,
  admin: directionNavigation // Admin utilise la même navigation que direction pour l'instant
};

// Helper pour obtenir la navigation d'un rôle
export const getNavigationForRole = (role: UserRole): NavGroup[] => {
  return navigationConfig[role] || [];
};

// Helper pour trouver un item de navigation par path
export const findNavItemByPath = (role: UserRole, path: string): any => {
  const groups = getNavigationForRole(role);
  for (const group of groups) {
    const item = group.items.find(item => item.path === path);
    if (item) return item;
    
    // Chercher dans les children
    for (const item of group.items) {
      if (item.children) {
        const childItem = item.children.find(child => child.path === path);
        if (childItem) return childItem;
      }
    }
  }
  return null;
};
