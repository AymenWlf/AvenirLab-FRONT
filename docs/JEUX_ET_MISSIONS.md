# 🎮 Jeux et Missions - Section Interactive

## Vue d'ensemble

La section **"Jeux et autres missions pour votre niveau"** remplace l'ancienne section des tests pour proposer une expérience plus ludique et engageante aux élèves. Cette section met en avant les **tâches complémentaires** disponibles, particulièrement les jeux interactifs.

## Changements effectués

### ❌ Avant
- Section "Tests disponibles pour ce niveau"
- Liste de tests avec format académique standard
- Icône Beaker (éprouvette)
- Fond blanc classique
- Focus sur l'évaluation

### ✅ Après
- Section "🎮 Jeux et autres missions pour votre niveau"
- Cartes colorées et interactives
- Fond dégradé violet/rose
- Badges colorés par catégorie
- Focus sur l'engagement et la découverte

---

## Nouvelle catégorie : "game"

### Type ajouté

```typescript
// src/types/avenirlab.ts
export type TaskCategory = 
  | 'test' 
  | 'project' 
  | 'research' 
  | 'certification' 
  | 'engagement' 
  | 'cv_building' 
  | 'reflection' 
  | 'game'; // ✨ NOUVEAU
```

### Jeux ajoutés par niveau

#### 1AC (1ère année collège)

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Jeu des métiers mystères** | Devine des métiers à partir d'indices | 30 min |
| **Quiz "Quelle matière es-tu ?"** | Découvre quelle matière correspond à ta personnalité | 15 min |

#### 2AC (2ème année collège)

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Escape Game des compétences** | Résous des énigmes pour tester différentes compétences | 45 min |

#### 3AC (3ème année collège)

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Simulateur de choix de filière** | Vis une journée type dans différentes filières du lycée | 40 min |

#### TC (Tronc commun)

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Défi "Construis ton parcours"** | Planifie ton parcours jusqu'au supérieur avec contraintes | 50 min |

#### 1ère Bac

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Challenge "Profil compétitif"** | Optimise ton profil pour les grandes écoles | 60 min |

#### 2ème Bac

| Jeu | Description | Durée |
|-----|-------------|-------|
| **Simulateur de candidatures** | Gère tes candidatures, stress et dossiers | 70 min |

---

## Design de la section

### 🎨 Apparence visuelle

```
┌────────────────────────────────────────────────────┐
│ 🎮 Jeux et autres missions pour votre niveau      │
│ Découvrez des activités ludiques et enrichissantes│
│                                                    │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│ │   🎮    │  │   🔍    │  │   📁    │           │
│ │ Jeu des │  │Recherche│  │ Projet  │           │
│ │ métiers │  │ métiers │  │personnel│           │
│ │ mystère │  │   ...   │  │   ...   │           │
│ │[Commencer]│  │[Commencer]│  │[Commencer]│       │
│ └─────────┘  └─────────┘  └─────────┘           │
│                                                    │
│         → Voir toutes les missions ←              │
└────────────────────────────────────────────────────┘
```

### 🎯 Caractéristiques des cartes

Chaque carte de mission affiche :
- **Badge circulaire coloré** avec icône de catégorie (en haut à droite)
- **Titre** en gras
- **Description** courte (2 lignes max)
- **Durée estimée** avec icône horloge
- **Statut** (en cours si applicable)
- **Bouton d'action** avec dégradé de couleur

### 🌈 Couleurs par catégorie

| Catégorie | Badge | Couleur dégradé |
|-----------|-------|-----------------|
| 🎮 **Jeu** | Violet | from-violet-500 to-purple-500 |
| 🧪 **Test** | Purple/Pink | from-purple-500 to-pink-500 |
| 📁 **Projet** | Bleu/Cyan | from-blue-500 to-cyan-500 |
| 🔍 **Recherche** | Vert | from-emerald-500 to-teal-500 |
| 🎓 **Certification** | Jaune/Orange | from-yellow-500 to-orange-500 |
| 🤝 **Engagement** | Rose | from-pink-500 to-rose-500 |
| 📄 **CV** | Orange/Rouge | from-orange-500 to-red-500 |
| 💭 **Réflexion** | Cyan/Bleu | from-cyan-500 to-blue-500 |

---

## Comportement de la section

### Tâches affichées
- **Filtre** : Tâches complémentaires uniquement
- **Statut** : Disponibles ou en cours
- **Limite** : 6 tâches maximum affichées
- **Priorité** : Les jeux et missions actives en premier

### Interactivité

```typescript
// Quand une carte est survolée
hover:shadow-lg hover:-translate-y-1

// Carte en cours
border-blue-400 bg-blue-50 ring-2 ring-blue-200

// Carte disponible
border-purple-200 bg-white hover:border-purple-400
```

### Actions possibles

| État | Bouton | Couleur |
|------|--------|---------|
| **Disponible** | "Commencer" | Dégradé violet/rose |
| **En cours** | "Continuer" | Dégradé bleu/cyan avec pulse |

---

## Avantages de la gamification

### ✅ Pour les élèves
- **Motivation** : Les jeux rendent l'orientation plus attractive
- **Engagement** : Format ludique encourage la participation
- **Découverte** : Exploration sans pression d'évaluation
- **Variété** : Différents types d'activités pour différents profils

### ✅ Pour l'orientateur
- **Données qualitatives** : Observe les choix et comportements dans les jeux
- **Désinhibition** : Les élèves sont plus naturels dans un jeu
- **Participation** : Taux de complétion plus élevé
- **Différenciation** : Identifie les intérêts réels vs. les attentes sociales

### ✅ Pédagogiquement
- **Learning by doing** : Apprendre en jouant
- **Simulation** : Expérimenter sans conséquences
- **Feedback immédiat** : Résultats instantanés
- **Progression visible** : Scores et réalisations

---

## Exemples de mécaniques de jeu

### 🕵️ Jeu des métiers mystères (1AC)

**Concept** : Deviner des métiers à partir d'indices progressifs

**Mécanique** :
1. 20 métiers à découvrir
2. 3 indices par métier (facile, moyen, difficile)
3. Score selon la rapidité et le nombre d'indices utilisés
4. Découverte de métiers méconnus

**Données collectées** :
- Métiers devinés rapidement → intérêts naturels
- Métiers qui surprennent positivement
- Catégories de métiers ignorées

---

### 🚪 Escape Game des compétences (2AC)

**Concept** : Résoudre des énigmes qui testent différentes compétences

**Mécanique** :
1. 5 salles thématiques (logique, créativité, communication, organisation, technique)
2. Énigmes de difficulté progressive
3. Choix de stratégie pour s'échapper
4. Temps limité avec bonus

**Données collectées** :
- Compétences où l'élève excelle
- Stratégies préférées (solo vs. collaboration simulée)
- Persévérance face à la difficulté

---

### 🎬 Simulateur de choix de filière (3AC)

**Concept** : Vivre une journée type dans différentes filières

**Mécanique** :
1. Choisir une filière à explorer
2. Suivre un emploi du temps simulé
3. Mini-activités représentatives de chaque matière
4. Noter son ressenti à chaque étape
5. Comparer avec d'autres filières

**Données collectées** :
- Filières explorées en premier
- Activités appréciées/détestées
- Cohérence ressenti vs. choix déclaré

---

### 🎯 Défi "Construis ton parcours" (TC)

**Concept** : Jeu de stratégie pour planifier son parcours

**Mécanique** :
1. Budget de temps et d'énergie limité
2. Choix de bac, options, activités
3. Contraintes réalistes (notes, disponibilité)
4. Événements aléatoires (opportunités, difficultés)
5. Score de cohérence du parcours construit

**Données collectées** :
- Priorités réelles (études vs. loisirs)
- Prise de risque ou sécurité
- Capacité de planification long terme

---

### 🏆 Challenge "Profil compétitif" (1ère Bac)

**Concept** : Optimiser son profil pour grandes écoles

**Mécanique** :
1. État initial du profil (notes, activités, compétences)
2. Actions disponibles (projets, certifs, engagements)
3. Coût temps/effort de chaque action
4. Score de compétitivité en temps réel
5. Comparaison anonyme avec d'autres profils

**Données collectées** :
- Stratégies choisies (spécialisation vs. diversité)
- Compréhension des critères d'admission
- Réalisme des objectifs

---

### 🎓 Simulateur de candidatures (2ème Bac)

**Concept** : Gérer ses candidatures et le stress final

**Mécanique** :
1. Liste d'établissements cibles (plan A/B/C)
2. Gestion des deadlines multiples
3. Qualité du dossier vs. temps disponible
4. Événements (résultats, stress, opportunités)
5. Fin réaliste selon stratégie

**Données collectées** :
- Choix d'établissements (ambition vs. sécurité)
- Gestion du stress et des priorités
- Capacité à pivoter si nécessaire

---

## Implémentation technique

### Modifications des composants

```typescript
// StudentDashboardPage.tsx
- Section "Tests disponibles"
+ Section "Jeux et missions"
  - Fond dégradé purple/pink
  - Affichage des tâches complémentaires
  - Badges colorés par catégorie
  - Boutons interactifs
  - Limite de 6 cartes
  - Lien "Voir toutes les missions"
```

### Données ajoutées

- **6 nouveaux jeux** (1 par niveau)
- **Catégorie 'game'** dans TaskCategory
- **Icône 🎮** pour les jeux
- **Couleur violet** pour les jeux

### Fichiers modifiés

- `src/types/avenirlab.ts` : Ajout de 'game' dans TaskCategory
- `src/data/avenirlab/tasks.ts` : Ajout des 6 jeux
- `src/components/avenirlab/TaskCard.tsx` : Support de la catégorie 'game'
- `src/pages/student/StudentDashboardPage.tsx` : Nouvelle section

---

## Statistiques

| Élément | Avant | Après |
|---------|-------|-------|
| **Nom de la section** | "Tests disponibles" | "🎮 Jeux et missions" |
| **Type de contenu** | Tests uniquement | Tâches complémentaires (dont jeux) |
| **Nombre de jeux** | 0 | 6 (1 par niveau) |
| **Design** | Blanc classique | Dégradé coloré |
| **Interactivité** | Liste simple | Cartes avec hover effects |
| **Limite d'affichage** | Tous les tests | 6 missions max |

---

## Prochaines étapes

### Phase 1 (Actuel) ✅
- [x] Création de la section "Jeux et missions"
- [x] Ajout de la catégorie 'game'
- [x] Création de 6 jeux (1 par niveau)
- [x] Design coloré et engageant

### Phase 2 (À venir)
- [ ] Développement des interfaces de jeu
- [ ] Mécanique de scoring
- [ ] Système de récompenses (badges, points)
- [ ] Sauvegarde de la progression

### Phase 3 (Futur)
- [ ] Leaderboards anonymes
- [ ] Jeux multijoueurs en classe
- [ ] Personnalisation des avatars
- [ ] Mini-jeux quotidiens

---

## Testez la section

1. **Accéder au parcours étudiant** :
   ```
   http://localhost:5173/dashboard/student
   ```

2. **Sélectionner un niveau** :
   - Choisir n'importe quel niveau (1AC, 2AC, 3AC, TC, 1Bac, 2Bac)

3. **Observer la section** :
   - Descendre jusqu'à "🎮 Jeux et autres missions"
   - Voir les cartes colorées avec badges
   - Survoler les cartes pour l'effet de hover

4. **Interactions** :
   - Cliquer sur "Commencer" pour lancer une mission
   - Observer le style "En cours" pour les missions actives
   - Tester le lien "Voir toutes les missions"

---

## Recommandations pédagogiques

### Pour les orientateurs

1. **Encourager la participation** : Présenter les jeux comme bonus, pas comme obligation
2. **Observer sans juger** : Les choix dans les jeux révèlent les vrais intérêts
3. **Discuter des résultats** : Utiliser les jeux comme point de départ de conversation
4. **Valoriser l'exploration** : Récompenser la curiosité, pas la performance

### Pour les élèves

1. **Être authentique** : Jouer selon ses vrais goûts, pas ce qui est "attendu"
2. **Expérimenter** : Essayer tous les jeux, même ceux qui semblent moins intéressants
3. **Prendre son temps** : Pas de rush, la réflexion compte plus que la vitesse
4. **Partager** : Discuter des découvertes avec l'orientateur

---

## Conclusion

La transformation de la section "Tests" en "Jeux et missions" marque un tournant vers une **orientation ludique et engageante**. En gamifiant l'expérience, AvenirLab rend le processus d'orientation plus attractif tout en collectant des données comportementales précieuses pour l'accompagnement personnalisé.

🎮 **L'orientation devient un jeu... sérieux !**
