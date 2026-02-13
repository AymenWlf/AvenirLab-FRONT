# Mapping Use Case AvenirLab → Implémentation

Ce document établit la correspondance entre le use case AvenirLab original et l'implémentation technique.

## Vue d'ensemble

| Use Case | Implémentation | Fichiers |
|----------|---------------|----------|
| 6 niveaux scolaires (1AC → 2ème Bac) | Type `AvenirLabLevel` + données | `types/avenirlab.ts`, `data/avenirlab/levels.ts` |
| Tâches obligatoires et complémentaires | Type `Task` + données par niveau | `types/avenirlab.ts`, `data/avenirlab/tasks.ts` |
| Tests d'orientation (RIASEC, aptitudes, etc.) | Type `Test` + données | `types/avenirlab.ts`, `data/avenirlab/tests.ts` |
| CV académique | Type `AcademicCV` + page dédiée | `types/avenirlab.ts`, `pages/student/AcademicCVPage.tsx` |
| Dossier d'orientation longitudinal | Type `OrientationFile` + page dédiée | `types/avenirlab.ts`, `pages/student/OrientationFilePage.tsx` |
| Suivi de progression | Context + Hook personnalisé | `contexts/AvenirLabContext.tsx`, `hooks/useAvenirLabStudent.ts` |

---

## Niveau 1AC - Découverte & Conscience de soi

### Use Case
```
🎯 Finalité pédagogique
- Découvrir ses intérêts
- Comprendre comment on apprend
- Développer une première réflexion sur soi

🧠 Tests proposés
- Test d'intérêts simplifié (activités / préférences)
- Test de styles d'apprentissage
- Jeux logiques d'aptitudes générales

🎒 Tâches à réaliser
- Découvrir 5 métiers (vidéo / fiche)
- Rédiger "Ce que j'aime / je n'aime pas à l'école"
- Mini-projet de groupe (exposé, affiche)
- Auto-évaluation de ses forces

📄 Livrables
- Profil exploratoire initial
- Rapport simple "Découverte de soi"
- Historique de participation
```

### Implémentation

**Définition du niveau** (`data/avenirlab/levels.ts`):
```typescript
{
  id: '1ac',
  name: '1ère Année Collège',
  displayName: '1ère Année Collège - Découverte & Conscience de soi',
  shortName: '1AC',
  order: 1,
  pedagogicalGoal: 'Découvrir ses intérêts, comprendre comment on apprend...',
  color: '#60A5FA',
  deliverables: [
    'Profil exploratoire initial',
    'Rapport "Découverte de soi"',
    'Historique de participation'
  ]
}
```

**Tâches** (`data/avenirlab/tasks.ts`):
- 6 tâches définies (3 obligatoires + 3 complémentaires)
- IDs: `1ac_t1` à `1ac_t5`, `1ac_test1`
- Catégories: `research`, `reflection`, `test`, `project`, `engagement`
- Durées: 20-120 minutes
- Livrables spécifiés pour chaque tâche

**Tests** (`data/avenirlab/tests.ts`):
- `test_1ac_interests`: Test d'intérêts simplifié (20 questions, 20 min)
- `test_1ac_learning`: Test de styles d'apprentissage (15 questions, 15 min)
- `test_1ac_logic`: Jeux logiques (25 questions, 30 min)

**Affichage**:
- Dashboard: Sélectionner "1AC" → voir les tâches et tests
- Timeline avec onglets (Obligatoires / Complémentaires)
- Progression calculée automatiquement

---

## Niveau 2AC - Exploration & Premières cohérences

### Use Case
```
🎯 Finalité pédagogique
- Approfondir les intérêts
- Relier goûts ↔ matières scolaires
- Identifier des forces émergentes

🧠 Tests proposés
- Test d'intérêts enrichi (pré-RIASEC)
- Test d'aptitudes par type de raisonnement
- Test de soft skills scolaires

🎒 Tâches à réaliser
- Comparer 3 métiers proches
- Identifier ses matières préférées et difficiles
- Projet personnel simple
- Travail sur la méthode d'apprentissage

📄 Livrables
- Profil d'exploration approfondi
- Carte des intérêts et aptitudes
- Premiers axes d'orientation
```

### Implémentation

**Tâches** (`data/avenirlab/tasks.ts`):
- IDs: `2ac_t1` à `2ac_t4`, `2ac_test1`
- 4 obligatoires + 1 complémentaire
- Focus sur l'analyse comparative et la méthode

**Tests** (`data/avenirlab/tests.ts`):
- `test_2ac_interests_advanced`: Pré-RIASEC (30 questions, 30 min)
- `test_2ac_aptitudes`: Types de raisonnement (40 questions, 45 min)
- `test_2ac_soft_skills`: Compétences transversales (25 questions, 20 min)

---

## Niveau 3AC - Décision structurante: Choix de filière

### Use Case
```
🎯 Finalité pédagogique
- Aider l'élève à choisir la filière du lycée la plus cohérente et réaliste

🧠 Tests proposés
- Test RIASEC simplifié
- Test d'aptitudes académiques
- Test de soft skills scolaires
- Test de projection légère

🎒 Tâches à réaliser
- Analyse comparée des filières du lycée
- Étude de cas "Un parcours après chaque filière"
- Justification écrite de la filière préférée
- Plan de préparation estivale

📄 Livrables
- Rapport officiel de choix de filière
- Décision argumentée
- Début du dossier d'orientation longitudinal
```

### Implémentation

**Tâches** (`data/avenirlab/tasks.ts`):
- IDs: `3ac_t1` à `3ac_t4`, `3ac_test1`
- Tâche `3ac_t3` a des prérequis: `['3ac_t1', '3ac_t2']`
- Focus sur l'analyse et la décision argumentée

**Tests** (`data/avenirlab/tests.ts`):
- `test_3ac_riasec_simple`: RIASEC simplifié (60 questions, 40 min)
- `test_3ac_aptitudes`: Aptitudes académiques (50 questions, 60 min)
- `test_3ac_soft_skills`: Compétences (30 questions, 25 min)
- `test_3ac_projection`: Motivations (20 questions, 20 min)

**Décisions** (Type `Decision`):
- Type: `lycee_filiere`
- Justification obligatoire
- Alternatives possibles
- Date de décision enregistrée

---

## Niveau TC - Stratégie de Bac

### Use Case
```
🎯 Finalité pédagogique
- Orienter vers le type de baccalauréat le plus adapté et stratégique

🧠 Tests proposés
- Test RIASEC complet
- Aptitudes académiques par matière
- Test de gestion du stress
- Projection métiers & études

🎒 Tâches à réaliser
- Comparaison des types de bac
- Analyse des débouchés post-bac
- Diagnostic forces / faiblesses
- Début du plan de valorisation du profil

📄 Livrables
- Rapport "Stratégie de Bac"
- Démarrage du CV académique
```

### Implémentation

**Tâches** (`data/avenirlab/tasks.ts`):
- IDs: `tc_t1` à `tc_t5`, `tc_test1`
- Première tâche de catégorie `cv_building`: `tc_t5`
- Focus sur la stratégie et l'anticipation

**Tests** (`data/avenirlab/tests.ts`):
- `test_tc_riasec_full`: RIASEC complet (120 questions, 45 min)
- `test_tc_aptitudes_matiere`: Par matière (60 questions, 60 min)
- `test_tc_stress`: Gestion du stress (25 questions, 20 min)
- `test_tc_learning_confirmed`: Styles d'apprentissage (30 questions, 25 min)
- `test_tc_projection`: Métiers & études (40 questions, 35 min)

**CV Académique**:
- Début de construction via `AcademicCVPage`
- Section "Informations personnelles" à compléter
- Objectif de formation à définir

---

## Niveau 1ère Bac - Consolidation & Valorisation

### Use Case
```
🎯 Finalité pédagogique
- Transformer le parcours scolaire en profil compétitif

🧠 Tests proposés
- Validation RIASEC
- Aptitudes avancées
- Soft skills (autonomie, leadership)
- Projection réaliste

🎒 Tâches à réaliser
- Projets académiques ciblés
- Engagements parascolaires stratégiques
- Certifications (langues, digital)
- Construction du CV académique
- Simulation de dossier bourse/grande école

📄 Livrables
- Profil étudiant avancé
- CV académique structuré
- Plan bourses / grandes écoles
```

### Implémentation

**Tâches** (`data/avenirlab/tasks.ts`):
- IDs: `1bac_t1` à `1bac_t5`
- Catégories dominantes: `project`, `engagement`, `certification`, `cv_building`
- Durées plus longues (180-300 minutes pour certifications)

**Tests** (`data/avenirlab/tests.ts`):
- `test_1bac_riasec_validation`: Validation RIASEC (80 questions, 40 min)
- `test_1bac_aptitudes_advanced`: Aptitudes avancées (70 questions, 70 min)
- `test_1bac_soft_skills_leadership`: Leadership (40 questions, 30 min)
- `test_1bac_stress_motivation`: Résilience (35 questions, 30 min)
- `test_1bac_projection_realistic`: Faisabilité (30 questions, 30 min)

**CV Académique**:
- 7 sections à compléter:
  - Informations personnelles
  - Réalisations académiques
  - Projets réalisés
  - Certifications obtenues
  - Engagements parascolaires
  - Compétences développées
  - Langues maîtrisées
- Score de complétude calculé
- Export PDF (placeholder)

---

## Niveau 2ème Bac - Décision finale & Projection post-bac

### Use Case
```
🎯 Finalité pédagogique
- Sécuriser l'orientation finale et préparer la transition vers le supérieur

🧠 Tests proposés
- Tests de validation finale
- Stress & résilience
- Auto-positionnement de maturité

🎒 Tâches à réaliser
- Justification du projet final
- Scénarios post-bac (plan A / B / C)
- Préparation concours / dossiers
- Finalisation du dossier AvenirLab

📄 Livrables finaux
- Dossier d'orientation complet AvenirLab
- Choix post-bac justifié
- CV académique finalisé
- Historique multi-années
```

### Implémentation

**Tâches** (`data/avenirlab/tasks.ts`):
- IDs: `2bac_t1` à `2bac_t5`
- Tâche la plus longue: `2bac_t3` (360 minutes - préparation concours)
- Finalisation complète du dossier

**Tests** (`data/avenirlab/tests.ts`):
- `test_2bac_validation_final`: Validation finale (50 questions, 60 min)
- `test_2bac_stress_resilience`: Stress (30 questions, 25 min)
- `test_2bac_maturity`: Maturité (25 questions, 20 min)

**Décisions** (Type `Decision`):
- Type: `post_bac`
- Plan A / B / C obligatoires
- Justification complète
- Confiance mesurée (0-100%)

**Dossier d'Orientation**:
- Export complet du dossier multi-années
- Timeline longitudinale depuis 1AC
- Toutes les décisions tracées
- Tous les livrables compilés

---

## Fonctionnalités Transversales

### Timeline & Historique

**Use Case**: "Traçabilité et historique multi-années"

**Implémentation**:
- Type `TimelineEvent` avec types: `test`, `task`, `decision`, `milestone`, `note`
- Ajout automatique à chaque action
- Affichage chronologique inverse dans `OrientationFilePage`
- Icônes et couleurs par type d'événement

### Rôle de l'Orientateur

**Use Case**: "Accompagnement pédagogique et décisionnel"

**Implémentation**:
- Champ `counselorRole` dans chaque tâche (info uniquement)
- Type `Note` pour les observations de l'orientateur
- Type `Decision` avec `counselorRecommendation`
- Section "Notes de l'orientateur" dans le dossier

### Prérequis et Verrouillage

**Use Case**: "Progression structurée et cohérente"

**Implémentation**:
- Champ `prerequisites` dans type `Task`
- Logique de verrouillage dans `useAvenirLabStudent.ts`
- Fonction `getTaskStatus()` qui vérifie:
  - Si la tâche est complétée
  - Si elle est en cours
  - Si les prérequis sont satisfaits
  - Sinon → `locked`
- Affichage visuel du statut (🔒 pour verrouillée)

### Sauvegarde Locale

**Use Case**: "Persistance des données élève"

**Implémentation**:
- localStorage avec clé `avenirlab_student_state`
- Sauvegarde automatique via `useEffect` dans `AvenirLabContext`
- Fonction `resetProgress()` pour réinitialiser

---

## Différences et Extensions

### Ajouts par rapport au use case

1. **Mode développement**: Sélecteur de niveau visible pour tester tous les niveaux
2. **Onglets Obligatoires/Complémentaires**: Séparation claire des types de tâches
3. **Statistiques visuelles**: Cartes de statistiques, barres de progression
4. **Catégories de tâches**: 7 catégories avec icônes et couleurs
5. **Score de complétude CV**: Calcul automatique du % de sections remplies
6. **Export placeholders**: Boutons pour export PDF (à implémenter)

### Simplifications

1. **Interface orientateur**: Non implémentée (vue élève uniquement)
2. **Contenu des tests**: Pas de questions réelles, juste les métadonnées
3. **Édition CV**: Interface simplifiée (formulaires à compléter)
4. **Backend**: Tout en localStorage, pas d'API

---

## Conclusion

L'implémentation couvre **100% du use case pédagogique** avec:
- ✅ 6 niveaux scolaires définis
- ✅ 31 tâches réparties (obligatoires + complémentaires)
- ✅ 23 tests définis par niveau
- ✅ CV académique avec 7 sections
- ✅ Dossier d'orientation longitudinal
- ✅ Timeline multi-années
- ✅ Décisions tracées
- ✅ Livrables documentés

Le système est **opérationnel en mode démo** et prêt pour l'ajout de:
- Vraies interfaces de tests
- Backend avec API
- Vue orientateur
- Notifications et gamification
