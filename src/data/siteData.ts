// Données du site AvenirLab - Modifiables facilement

export const siteData = {
  // Statistiques principales
  stats: {
    students: "5 000+",
    studentsDesc: "Élèves accompagnés",
    schools: "50+",
    schoolsDesc: "Écoles partenaires",
    satisfaction: "95%",
    satisfactionDesc: "Taux de satisfaction"
  },

  // Problèmes de l'orientation actuelle
  problems: [
    {
      id: 1,
      title: "Orientation tardive",
      description: "Les décisions d'orientation sont souvent prises trop tard, limitant les possibilités d'ajustement du parcours scolaire."
    },
    {
      id: 2,
      title: "Manque d'outils",
      description: "Les orientateurs disposent de peu d'outils structurés pour accompagner efficacement les élèves dans leur réflexion."
    },
    {
      id: 3,
      title: "Décisions sans données",
      description: "Les choix d'orientation se font souvent sans méthode ni données objectives, au risque d'erreurs coûteuses."
    },
    {
      id: 4,
      title: "Absence de suivi",
      description: "Pas de suivi longitudinal du collège au bac, chaque année est une nouvelle découverte sans continuité."
    }
  ],

  // Piliers de la solution AvenirLab
  pillars: [
    {
      id: 1,
      title: "Suivi progressif",
      description: "Accompagnement structuré du collège jusqu'au baccalauréat avec continuité pédagogique."
    },
    {
      id: 2,
      title: "Tests & évaluations",
      description: "Batterie de tests adaptés par niveau : intérêts, compétences, personnalité, préférences."
    },
    {
      id: 3,
      title: "Outils orientateurs",
      description: "Dashboard complet avec data, analytics et historique pour personnaliser le discours d'orientation."
    },
    {
      id: 4,
      title: "Dossier numérique",
      description: "Dossier d'orientation centralisé, évolutif et accessible par tous les acteurs autorisés."
    },
    {
      id: 5,
      title: "Implication parentale",
      description: "Accès encadré pour les parents avec suivi des résultats et meilleure communication école-famille."
    },
    {
      id: 6,
      title: "Analytics institutionnels",
      description: "Statistiques et rapports pour la direction, permettant un pilotage stratégique de l'orientation."
    }
  ],

  // Publics cibles
  publics: [
    {
      id: 1,
      title: "Établissements scolaires",
      description: "Public et privé",
      benefits: [
        "Structuration de l'orientation",
        "Vision globale par classe et niveau",
        "Suivi pédagogique institutionnel",
        "Reporting et analytics"
      ]
    },
    {
      id: 2,
      title: "Orientateurs",
      description: "Conseillers d'orientation",
      benefits: [
        "Dossier élève centralisé",
        "Outils concrets d'analyse",
        "Historique et évolution",
        "Appui au discours personnalisé"
      ]
    },
    {
      id: 3,
      title: "Élèves",
      description: "Du collège au bac",
      benefits: [
        "Tests et activités ludiques",
        "Compréhension du parcours",
        "Accès aux ressources métiers",
        "Suivi de progression"
      ]
    },
    {
      id: 4,
      title: "Parents & tuteurs",
      description: "Familles",
      benefits: [
        "Accès au parcours de l'enfant",
        "Lecture des résultats de tests",
        "Communication école-famille",
        "Décisions éclairées"
      ]
    },
    {
      id: 5,
      title: "Direction pédagogique",
      description: "Pilotage stratégique",
      benefits: [
        "Vue d'ensemble établissement",
        "Statistiques par niveau/classe",
        "Évaluation de l'efficacité",
        "Pilotage de l'orientation"
      ]
    },
    {
      id: 6,
      title: "Surveillance générale",
      description: "Coordination",
      benefits: [
        "Suivi comportemental",
        "Notes et observations",
        "Coordination avec orientation",
        "Vue transversale élèves"
      ]
    }
  ],

  // Phases du parcours
  phases: [
    {
      id: 1,
      level: "Collège",
      subtitle: "Phase d'exploration",
      objectives: "Découverte des intérêts, talents et métiers",
      tools: [
        "Tests ludiques et gamifiés",
        "Activités d'exploration",
        "Jeux de découverte des métiers",
        "Construction du dossier initial"
      ],
      role: "L'orientateur initie le dialogue et éveille la curiosité",
      deliverables: "Dossier d'orientation créé, premiers profils identifiés"
    },
    {
      id: 2,
      level: "Lycée",
      subtitle: "Phase de structuration",
      objectives: "Approfondissement et choix de filières éclairés",
      tools: [
        "Tests d'orientation approfondis",
        "Projets et missions pédagogiques",
        "Simulations professionnelles",
        "Suivi régulier personnalisé"
      ],
      role: "L'orientateur guide et ajuste la trajectoire en continu",
      deliverables: "Choix de filière validé, plan d'action défini"
    },
    {
      id: 3,
      level: "Baccalauréat",
      subtitle: "Phase de décision",
      objectives: "Finalisation du projet et préparation concrète",
      tools: [
        "Recommandations d'établissements",
        "Préparation aux concours",
        "Formations ciblées",
        "Plan d'action détaillé"
      ],
      role: "L'orientateur valide et sécurise le projet final",
      deliverables: "Projet d'orientation finalisé, candidatures prêtes"
    }
  ],

  // Modules du système
  modules: [
    {
      id: 1,
      title: "Tests d'orientation",
      description: "RIASEC, intérêts, compétences, personnalité adaptés par niveau",
      aiPowered: true
    },
    {
      id: 2,
      title: "Jeux & activités",
      description: "Activités gamifiées pour découvrir les métiers de manière ludique",
      aiPowered: false
    },
    {
      id: 3,
      title: "Dossier élève",
      description: "Dossier d'orientation numérique centralisé et évolutif",
      aiPowered: false
    },
    {
      id: 4,
      title: "Dashboard orientateur",
      description: "Vue complète avec data, analytics et outils de personnalisation",
      aiPowered: true
    },
    {
      id: 5,
      title: "Espace parents",
      description: "Accès sécurisé au parcours et résultats de l'enfant",
      aiPowered: false
    },
    {
      id: 6,
      title: "Base métiers",
      description: "Répertoire complet des métiers et formations au Maroc",
      aiPowered: false
    },
    {
      id: 7,
      title: "Analytics",
      description: "Statistiques institutionnelles régionales et nationales",
      aiPowered: true
    },
    {
      id: 8,
      title: "Application mobile",
      description: "Accès nomade iOS et Android pour tous les profils",
      aiPowered: false
    },
    {
      id: 9,
      title: "Notifications",
      description: "Alertes et rappels personnalisés en temps réel",
      aiPowered: false
    },
    {
      id: 10,
      title: "Rapports",
      description: "Génération automatique de rapports d'orientation personnalisés",
      aiPowered: true
    }
  ],

  // Fonctionnalités de l'app mobile
  mobileFeatures: [
    {
      title: "Notifications en temps réel",
      description: "Alertes d'événements et rappels importants"
    },
    {
      title: "Accès aux tests",
      description: "Passez les tests d'orientation n'importe où"
    },
    {
      title: "Suivi de progression",
      description: "Consultez votre parcours et vos résultats"
    },
    {
      title: "Communication école-famille",
      description: "Messages sécurisés avec l'orientateur"
    },
    {
      title: "Favoris et recommandations",
      description: "Sauvegardez métiers et formations qui vous intéressent"
    }
  ],

  // Technologies et sécurité
  technologies: [
    {
      title: "Analyse de données",
      description: "Recommandations personnalisées basées sur les résultats et préférences",
      icon: "brain"
    },
    {
      title: "Tableaux de bord intelligents",
      description: "Visualisation claire et synthétique des données élèves",
      icon: "chart"
    },
    {
      title: "Suivi longitudinal",
      description: "Historique automatisé du collège au bac avec détection d'évolutions",
      icon: "timeline"
    },
    {
      title: "Marché de l'emploi",
      description: "Mises à jour régulières des débouchés et opportunités professionnelles",
      icon: "briefcase"
    }
  ],

  security: [
    {
      title: "Conformité RGPD",
      description: "Respect strict des règles de protection des données personnelles"
    },
    {
      title: "Données sécurisées",
      description: "Chiffrement et hébergement sécurisé des données élèves"
    },
    {
      title: "Accès contrôlés",
      description: "Gestion fine des droits selon les profils utilisateurs"
    }
  ],

  // Écoles partenaires (exemples - à remplacer par vraies données)
  schools: [
    { id: 1, name: "Lycée Mohammed V", logo: "/uploads/schools/school1.png" },
    { id: 2, name: "Groupe Scolaire La Résidence", logo: "/uploads/schools/school2.png" },
    { id: 3, name: "École Al Madina", logo: "/uploads/schools/school3.png" },
    { id: 4, name: "Collège Ibn Khaldoun", logo: "/uploads/schools/school4.png" },
    { id: 5, name: "Lycée Descartes", logo: "/uploads/schools/school5.png" }
  ],

  // Partenaires stratégiques (exemples)
  partners: [
    { id: 1, name: "Ministère de l'Éducation Nationale", logo: "/uploads/partners/partner1.png" },
    { id: 2, name: "AREF Casablanca-Settat", logo: "/uploads/partners/partner2.png" },
    { id: 3, name: "Association des Orientateurs du Maroc", logo: "/uploads/partners/partner3.png" }
  ],

  // Médias et presse (exemples)
  media: [
    {
      id: 1,
      name: "2M",
      date: "2025",
      excerpt: "AvenirLab révolutionne l'orientation scolaire au Maroc",
      videoUrl: "#",
      logo: "/uploads/media/2m.png"
    },
    {
      id: 2,
      name: "L'Économiste",
      date: "2025",
      excerpt: "Un système innovant pour structurer l'orientation dès le collège",
      videoUrl: "#",
      logo: "/uploads/media/economiste.png"
    }
  ],

  // Événements (exemples)
  events: [
    {
      id: 1,
      title: "Forum de l'orientation AvenirLab",
      date: "2025-05-15",
      city: "Casablanca",
      description: "Rencontre avec les établissements scolaires pour découvrir le système AvenirLab",
      registrationUrl: "#",
      images: [
        "/uploads/events/event1-1.jpg",
        "/uploads/events/event1-2.jpg"
      ]
    },
    {
      id: 2,
      title: "Journée de formation orientateurs",
      date: "2025-03-20",
      city: "Rabat",
      description: "Formation intensive à l'utilisation d'AvenirLab pour les orientateurs",
      registrationUrl: "#",
      images: [
        "/uploads/events/event2-1.jpg"
      ]
    }
  ],

  // Témoignages
  testimonials: [
    {
      id: 1,
      name: "M. Ahmed Benali",
      role: "Directeur",
      school: "Lycée Al Khawarizmi",
      photo: "/uploads/testimonials/testimonial1.jpg",
      quote: "AvenirLab nous a permis de structurer complètement notre approche d'orientation. Les outils pour nos orientateurs sont exceptionnels."
    },
    {
      id: 2,
      name: "Mme Fatima Zahra",
      role: "Orientatrice",
      school: "Collège Ibn Sina",
      photo: "/uploads/testimonials/testimonial2.jpg",
      quote: "Grâce au dashboard et aux données centralisées, je peux enfin personnaliser mon accompagnement de chaque élève de manière efficace."
    },
    {
      id: 3,
      name: "M. Youssef Alami",
      role: "Parent d'élève",
      school: "Lycée Lyautey",
      photo: "/uploads/testimonials/testimonial3.jpg",
      quote: "Je peux suivre l'évolution de mon fils et comprendre ses choix d'orientation. La communication avec l'école est bien meilleure."
    },
    {
      id: 4,
      name: "Salma, 16 ans",
      role: "Élève de 1ère Bac",
      school: "Lycée Mohammed V",
      photo: "/uploads/testimonials/testimonial4.jpg",
      quote: "Les tests et activités m'ont aidée à découvrir des métiers que je ne connaissais pas. Maintenant j'ai un projet clair pour mon avenir."
    }
  ],

  // Avantages AvenirLab
  advantages: [
    {
      title: "Structuration précoce",
      description: "Orientation dès le collège pour un parcours cohérent"
    },
    {
      title: "Outils concrets",
      description: "Dashboard et analytics pour les orientateurs"
    },
    {
      title: "Implication des familles",
      description: "Parents acteurs du projet d'orientation"
    },
    {
      title: "Suivi longitudinal",
      description: "Historique complet et data exploitables"
    },
    {
      title: "Contexte marocain",
      description: "Adapté aux filières et établissements du Maroc"
    },
    {
      title: "Multi-plateforme",
      description: "Accessible web et mobile pour tous"
    }
  ],

  // Contact
  contact: {
    address: "Casablanca, Maroc",
    phone: "+212 6 XX XX XX XX",
    email: "contact@avenirlab.ma",
    whatsapp: "+212 6 XX XX XX XX",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-7.6!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sfr!2sma!4v1234567890"
  },

  // Réseaux sociaux
  social: {
    facebook: "https://facebook.com/avenirlab",
    instagram: "https://instagram.com/avenirlab",
    linkedin: "https://linkedin.com/company/avenirlab",
    youtube: "https://youtube.com/@avenirlab"
  }
};
