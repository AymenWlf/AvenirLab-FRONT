import { LevelDefinition, AvenirLabLevel } from '../../types/avenirlab';

// Définition des 6 niveaux scolaires AvenirLab
export const levels: LevelDefinition[] = [
  {
    id: '1ac',
    name: '1ère Année Collège',
    displayName: '1ère Année Collège - Découverte & Conscience de soi',
    shortName: '1AC',
    order: 1,
    pedagogicalGoal: 'Découvrir ses intérêts, comprendre comment on apprend, développer une première réflexion sur soi',
    description: 'Phase de découverte où l\'élève explore ses intérêts, identifie ses préférences d\'apprentissage et commence à se connaître.',
    color: '#60A5FA', // Bleu clair
    deliverables: [
      'Profil exploratoire initial',
      'Rapport "Découverte de soi"',
      'Historique de participation'
    ]
  },
  {
    id: '2ac',
    name: '2ème Année Collège',
    displayName: '2ème Année Collège - Exploration & Premières cohérences',
    shortName: '2AC',
    order: 2,
    pedagogicalGoal: 'Approfondir les intérêts, relier goûts ↔ matières scolaires, identifier des forces émergentes',
    description: 'Phase d\'exploration approfondie où l\'élève établit des liens entre ses intérêts et ses résultats scolaires.',
    color: '#06B6D4', // Cyan
    deliverables: [
      'Profil d\'exploration approfondi',
      'Carte des intérêts et aptitudes',
      'Premiers axes d\'orientation (non décisionnels)'
    ]
  },
  {
    id: '3ac',
    name: '3ème Année Collège',
    displayName: '3ème Année Collège - Décision structurante : Choix de filière',
    shortName: '3AC',
    order: 3,
    pedagogicalGoal: 'Aider l\'élève à choisir la filière du lycée la plus cohérente et réaliste',
    description: 'Phase décisionnelle cruciale pour le choix de la filière lycée basé sur les intérêts, aptitudes et projet de l\'élève.',
    color: '#10B981', // Vert
    deliverables: [
      'Rapport officiel de choix de filière',
      'Décision argumentée',
      'Plan d\'amélioration académique (pré-lycée)',
      'Début du dossier d\'orientation longitudinal'
    ]
  },
  {
    id: 'tc',
    name: 'Tronc Commun',
    displayName: 'Tronc Commun - Stratégie de Bac',
    shortName: 'TC',
    order: 4,
    pedagogicalGoal: 'Orienter vers le type de baccalauréat le plus adapté et le plus stratégique',
    description: 'Phase stratégique pour affiner l\'orientation et choisir le type de bac en anticipant les exigences post-bac.',
    color: '#14B8A6', // Émeraude
    deliverables: [
      'Rapport "Stratégie de Bac"',
      'Choix prioritaire + alternative',
      'Plan d\'action académique & personnel',
      'Démarrage du CV académique'
    ]
  },
  {
    id: '1bac',
    name: '1ère Bac',
    displayName: '1ère Bac - Consolidation & Valorisation du profil',
    shortName: '1ère Bac',
    order: 5,
    pedagogicalGoal: 'Transformer le parcours scolaire en profil compétitif pour études supérieures',
    description: 'Phase de construction intensive du profil académique avec projets, certifications et engagements stratégiques.',
    color: '#F59E0B', // Orange
    deliverables: [
      'Profil étudiant avancé',
      'CV académique structuré',
      'Plan bourses / grandes écoles',
      'Liste des pistes post-bac'
    ]
  },
  {
    id: '2bac',
    name: '2ème Bac',
    displayName: '2ème Bac - Décision finale & Projection post-bac',
    shortName: '2ème Bac',
    order: 6,
    pedagogicalGoal: 'Sécuriser l\'orientation finale et préparer la transition vers le supérieur',
    description: 'Phase finale de concrétisation avec préparation des candidatures, concours et dossiers pour l\'accès aux études supérieures.',
    color: '#8B5CF6', // Violet
    deliverables: [
      'Dossier d\'orientation complet AvenirLab',
      'Choix post-bac justifié',
      'CV académique finalisé',
      'Historique multi-années',
      'Base solide pour études & bourses'
    ]
  }
];

// Helper: obtenir un niveau par ID
export const getLevelById = (id: AvenirLabLevel): LevelDefinition | undefined => {
  return levels.find(level => level.id === id);
};

// Helper: obtenir le niveau suivant
export const getNextLevel = (currentId: AvenirLabLevel): LevelDefinition | undefined => {
  const currentLevel = getLevelById(currentId);
  if (!currentLevel) return undefined;
  return levels.find(level => level.order === currentLevel.order + 1);
};

// Helper: obtenir le niveau précédent
export const getPreviousLevel = (currentId: AvenirLabLevel): LevelDefinition | undefined => {
  const currentLevel = getLevelById(currentId);
  if (!currentLevel) return undefined;
  return levels.find(level => level.order === currentLevel.order - 1);
};

// Helper: vérifier si un niveau existe
export const isValidLevel = (id: string): id is AvenirLabLevel => {
  return ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'].includes(id);
};

// Export du tableau de codes de niveaux pour faciliter l'itération
export const levelCodes: AvenirLabLevel[] = ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'];
