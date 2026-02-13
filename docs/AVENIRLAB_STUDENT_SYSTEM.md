# AvenirLab - Système d'Orientation Étudiant

## Vue d'ensemble

Le système AvenirLab est une plateforme complète d'accompagnement à l'orientation scolaire pour les élèves marocains du collège (1AC) jusqu'à la terminale (2ème Bac). Il permet un suivi longitudinal, la construction d'un dossier d'orientation structuré et la valorisation du profil académique.

## Architecture du Système

### 1. Structure des Données

#### Types principaux (`src/types/avenirlab.ts`)

- **AvenirLabLevel**: 6 niveaux scolaires (`1ac`, `2ac`, `3ac`, `tc`, `1bac`, `2bac`)
- **Task**: Tâches obligatoires et complémentaires par niveau
- **Test**: Évaluations (RIASEC, aptitudes, soft skills, etc.)
- **AcademicCV**: CV académique complet
- **OrientationFile**: Dossier d'orientation longitudinal

#### Données statiques (`src/data/avenirlab/`)

- `levels.ts`: Définition des 6 niveaux avec objectifs pédagogiques
- `tasks.ts`: Toutes les tâches (obligatoires et complémentaires) par niveau
- `tests.ts`: Tous les tests disponibles par niveau

### 2. Contexte et État Global

#### AvenirLabContext (`src/contexts/AvenirLabContext.tsx`)

Gère l'état global de l'étudiant:
- Niveau scolaire actuel
- Tâches complétées
- Tests passés
- CV académique
- Dossier d'orientation

**Fonctionnalités:**
- Sauvegarde automatique dans localStorage
- Actions pour compléter tâches et tests
- Mise à jour du CV et du dossier
- Timeline des événements

### 3. Hook Personnalisé

#### useAvenirLabStudent (`src/hooks/useAvenirLabStudent.ts`)

Interface haut niveau pour accéder au système:
- Récupère les tâches avec leur statut (locked/available/in_progress/completed)
- Calcule la progression par niveau
- Gère les prérequis entre tâches
- Fournit les actions simplifiées

**Statuts de tâche:**
- `locked`: Prérequis non satisfaits
- `available`: Prête à être démarrée
- `in_progress`: En cours de réalisation
- `completed`: Terminée

### 4. Composants

#### Composants de base (`src/components/avenirlab/`)

**LevelSelector**
- Sélecteur de niveau en mode développement
- Badge "MODE DEV" visible
- Sauvegarde dans localStorage

**TaskCard**
- Affichage d'une tâche avec toutes ses informations
- Icône et couleur par catégorie
- Statut visuel
- Durée estimée et livrable
- Rôle de l'orientateur (info)
- Boutons d'action contextuels

**TaskTimeline**
- Deux onglets: Obligatoires / Complémentaires
- Barres de progression par type
- Groupement par statut (en cours, disponibles, verrouillées, complétées)
- Vue timeline verticale

### 5. Pages

#### StudentDashboardPage (`src/pages/student/StudentDashboardPage.tsx`)

Page principale du système étudiant:
- Sélecteur de niveau (mode dev)
- Statistiques rapides (tâches, tests, CV)
- Timeline des tâches avec onglets
- Section tests disponibles
- Accès rapides au CV et au dossier

#### AcademicCVPage (`src/pages/student/AcademicCVPage.tsx`)

Gestion du CV académique:
- 7 sections éditables:
  - Informations personnelles
  - Réalisations académiques
  - Projets réalisés
  - Certifications obtenues
  - Engagements parascolaires
  - Compétences développées
  - Langues maîtrisées
- Mode édition / aperçu
- Export PDF (placeholder)
- Score de complétude

#### OrientationFilePage (`src/pages/student/OrientationFilePage.tsx`)

Dossier d'orientation complet:
- Statistiques globales
- Timeline longitudinale
- Décisions d'orientation majeures
- Livrables produits
- Notes de l'orientateur
- Export du dossier complet

## Pédagogie par Niveau

### 1AC - Découverte & Conscience de soi
**Objectif**: Découvrir ses intérêts, comprendre comment on apprend

**Tests:**
- Test d'intérêts simplifié
- Test de styles d'apprentissage
- Jeux logiques

**Tâches obligatoires:**
- Découvrir 5 métiers
- Rédiger "Ce que j'aime/je n'aime pas"
- Auto-évaluation des forces

**Livrables:**
- Profil exploratoire initial
- Rapport "Découverte de soi"

### 2AC - Exploration & Premières cohérences
**Objectif**: Approfondir les intérêts, relier goûts ↔ matières

**Tests:**
- Test d'intérêts enrichi (pré-RIASEC)
- Test d'aptitudes par type de raisonnement
- Test de soft skills scolaires

**Tâches obligatoires:**
- Comparer 3 métiers proches
- Identifier matières préférées/difficiles
- Travail sur méthode d'apprentissage

**Livrables:**
- Profil d'exploration approfondi
- Carte des intérêts et aptitudes

### 3AC - Décision structurante: Choix de filière
**Objectif**: Choisir la filière lycée la plus cohérente

**Tests:**
- Test RIASEC simplifié
- Test d'aptitudes académiques
- Test de projection légère

**Tâches obligatoires:**
- Analyse comparée des filières
- Étude de cas "Parcours par filière"
- Justification écrite du choix

**Livrables:**
- Rapport officiel de choix de filière
- Décision argumentée
- Début du dossier longitudinal

### TC - Stratégie de Bac
**Objectif**: Orienter vers le type de bac le plus adapté

**Tests:**
- Test RIASEC complet
- Aptitudes académiques par matière
- Gestion du stress
- Projection métiers & études

**Tâches obligatoires:**
- Comparaison des types de bac
- Analyse des débouchés post-bac
- Diagnostic forces/faiblesses
- Début du plan de valorisation

**Livrables:**
- Rapport "Stratégie de Bac"
- Choix prioritaire + alternative
- Démarrage du CV académique

### 1ère Bac - Consolidation & Valorisation
**Objectif**: Transformer le parcours en profil compétitif

**Tests:**
- Validation RIASEC
- Aptitudes avancées
- Soft skills (autonomie, leadership)
- Stress, motivation, persévérance

**Tâches obligatoires:**
- Projets académiques ciblés
- Engagements parascolaires stratégiques
- Construction du CV académique
- Simulation dossier bourse/grande école

**Livrables:**
- Profil étudiant avancé
- CV académique structuré
- Plan bourses/grandes écoles

### 2ème Bac - Décision finale & Projection post-bac
**Objectif**: Sécuriser l'orientation finale

**Tests:**
- Tests de validation finale
- Stress & résilience
- Auto-positionnement de maturité

**Tâches obligatoires:**
- Justification du projet final
- Scénarios post-bac (A/B/C)
- Préparation concours/dossiers
- Finalisation dossier AvenirLab

**Livrables:**
- Dossier d'orientation complet
- Choix post-bac justifié
- CV académique finalisé
- Historique multi-années

## Catégories de Tâches

| Catégorie | Description | Icône | Couleur |
|-----------|-------------|-------|---------|
| `test` | Tests d'évaluation | 🧪 | Violet |
| `project` | Projets à réaliser | 📁 | Bleu |
| `research` | Recherches et analyses | 🔍 | Émeraude |
| `certification` | Certifications à obtenir | 🎓 | Jaune |
| `engagement` | Engagements parascolaires | 🤝 | Rose |
| `cv_building` | Construction du CV | 📄 | Orange |
| `reflection` | Réflexions personnelles | 📖 | Cyan |

## Palette de Couleurs

| Niveau | Couleur | Hex |
|--------|---------|-----|
| 1AC | Bleu clair | #60A5FA |
| 2AC | Cyan | #06B6D4 |
| 3AC | Vert | #10B981 |
| TC | Émeraude | #14B8A6 |
| 1ère Bac | Orange | #F59E0B |
| 2ème Bac | Violet | #8B5CF6 |

## Routing

```
/dashboard/student              → Dashboard principal
/dashboard/student/cv           → Gestion du CV académique
/dashboard/student/dossier      → Dossier d'orientation complet
```

## Intégration dans l'Application

Le système AvenirLab est intégré dans l'application principale via:

1. **Provider**: `AvenirLabProvider` dans `App.tsx`
2. **Lien depuis dashboard**: Bouton "Accéder à mon parcours" dans `DashboardPage`
3. **Mode développement**: Sélecteur de niveau toujours visible en haut

## Données de Démonstration

Les données sont sauvegardées dans **localStorage** avec la clé `avenirlab_student_state`.

**Structure:**
```typescript
{
  studentId: string,
  currentLevel: AvenirLabLevel,
  orientationFile: {
    completedTasks: CompletedTask[],
    testResults: TestResult[],
    academicCV: AcademicCV,
    decisions: Decision[],
    timeline: TimelineEvent[]
  }
}
```

## Fonctionnalités Futures

- [ ] Interface complète d'édition du CV (formulaires)
- [ ] Système de tests réels (questions, scoring)
- [ ] Vue orientateur avec validation et notes
- [ ] Export PDF réel du CV et du dossier
- [ ] Recommandations basées sur les résultats
- [ ] Gestion des prérequis dynamiques
- [ ] Gamification (badges, points, niveaux)
- [ ] Comparaison avec d'autres élèves (anonyme)
- [ ] Intégration avec le backend
- [ ] Notifications et rappels

## Développement

### Ajouter un nouveau niveau

1. Ajouter le code dans le type `AvenirLabLevel`
2. Ajouter la définition dans `src/data/avenirlab/levels.ts`
3. Créer les tâches dans `src/data/avenirlab/tasks.ts`
4. Créer les tests dans `src/data/avenirlab/tests.ts`

### Ajouter une nouvelle tâche

1. Définir la tâche dans le fichier tasks du niveau approprié
2. Définir le `type` (mandatory/complementary)
3. Définir la `category` (test, project, research, etc.)
4. Spécifier les `prerequisites` si nécessaire
5. Ajouter le `deliverable` attendu
6. Documenter le `counselorRole`

### Tester le système

1. Ouvrir `/dashboard/student`
2. Sélectionner un niveau avec le sélecteur (mode dev)
3. Explorer les tâches obligatoires et complémentaires
4. Tester les actions (Commencer, Continuer, Revoir)
5. Vérifier la progression dans localStorage
6. Accéder au CV et au dossier d'orientation

## Support

Pour toute question ou problème, référez-vous à:
- [Types AvenirLab](src/types/avenirlab.ts)
- [Context](src/contexts/AvenirLabContext.tsx)
- [Hook](src/hooks/useAvenirLabStudent.ts)
- [Use Case Original](docs/USE_CASE_AVENIRLAB.md)
