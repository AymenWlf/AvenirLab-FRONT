# 📋 Tâches pour Compléter le Dossier d'Orientation

## Vue d'ensemble

La section **"Tâches pour Compléter le Dossier"** dans le Dossier d'Orientation Complet permet de visualiser toutes les tâches AvenirLab qui contribuent à enrichir chaque section du dossier. Elle distingue les tâches disponibles, celles à rattraper et celles verrouillées pour les années futures.

---

## 🎯 Objectifs

### Pour l'élève
- **Visualiser** toutes les tâches qui enrichissent son dossier
- **Comprendre** quelles sections sont incomplètes
- **Prioriser** les tâches à faire cette année
- **Rattraper** les tâches des années précédentes
- **Anticiper** les tâches des années futures

### Pour l'orientateur
- **Identifier** les lacunes du dossier
- **Guider** l'élève vers les tâches prioritaires
- **Suivre** la progression de complétion
- **Planifier** les actions à venir

---

## 📊 Organisation des Tâches

### 1. Tâches de l'Année Actuelle ✅

**Statut** : Disponibles et à compléter

**Caractéristiques** :
- Tâches du niveau actuel de l'élève
- Affichées avec un style bleu (disponible)
- Bouton "Compléter" avec lien vers la section correspondante
- Badge "Étape clé" pour les milestones
- Indication de la section du dossier qu'elles enrichissent

**Exemple** (élève en 2AC) :
- Découvrir 5 métiers → Enrichit "Parcours Scolaire"
- Test d'intérêts enrichi → Enrichit "Tests d'Orientation"
- Projet personnel → Enrichit "Activités Extra-scolaires"

### 2. Tâches des Années Précédentes ⚠️

**Statut** : À rattraper (si l'élève a commencé tard)

**Caractéristiques** :
- Tâches des niveaux antérieurs au niveau actuel
- Affichées avec un style orange (à rattraper)
- Badge "À rattraper" visible
- Message explicatif : "Vous avez commencé le système en [niveau]. Complétez les tâches des années précédentes pour enrichir votre dossier."

**Exemple** (élève qui a commencé en 2AC) :
- Tâches de 1AC à compléter :
  - Découvrir 5 métiers (1AC)
  - Test d'intérêts simplifié (1AC)
  - Auto-évaluation de ses forces (1AC)

**Pourquoi rattraper ?**
- Enrichir le dossier avec des données complètes
- Avoir un historique complet de l'orientation
- Comprendre l'évolution des intérêts
- Avoir un dossier solide pour le post-bac

### 3. Tâches des Années Futures 🔒

**Statut** : Verrouillées (pas encore accessibles)

**Caractéristiques** :
- Tâches des niveaux supérieurs au niveau actuel
- Affichées avec un style gris (verrouillées)
- Icône de cadenas visible
- Badge du niveau futur (ex: "3AC", "TC", "1ère Bac")
- Message explicatif : "Ces tâches seront disponibles lorsque vous atteindrez les niveaux correspondants."

**Exemple** (élève en 2AC) :
- Tâches de 3AC verrouillées :
  - Test final de recommandation de filière lycée
  - Justification écrite de la filière préférée
  - Plan de préparation estivale

**Pourquoi les afficher ?**
- **Anticipation** : L'élève voit ce qui l'attend
- **Motivation** : Comprendre l'importance de compléter les étapes actuelles
- **Planification** : Se préparer mentalement aux prochaines étapes
- **Transparence** : Comprendre le parcours complet

---

## 🎨 Design et Affichage

### Carte de Tâche Disponible

```
┌─────────────────────────────────────────┐
│ 🔍 Découvrir 5 métiers          [Compléter →] │
│                                         │
│ Explorer 5 métiers différents...       │
│                                         │
│ ⏱️ 60 min                              │
│ Enrichira la section: Parcours Scolaire│
└─────────────────────────────────────────┘
```

**Style** :
- Bordure bleue (`border-blue-300`)
- Fond bleu clair (`bg-blue-50`)
- Hover : élévation et ombre
- Badge "Étape clé" si milestone

### Carte de Tâche à Rattraper

```
┌─────────────────────────────────────────┐
│ 🔍 Découvrir 5 métiers    [À rattraper] │
│                                         │
│ Explorer 5 métiers différents...       │
│                                         │
│ ⏱️ 60 min                              │
│ Enrichira la section: Parcours Scolaire│
└─────────────────────────────────────────┘
```

**Style** :
- Bordure orange (`border-orange-300`)
- Fond orange clair (`bg-orange-50`)
- Badge orange "À rattraper"
- Message d'alerte en haut de la section

### Carte de Tâche Verrouillée

```
┌─────────────────────────────────────────┐
│ 🔒 Test final de recommandation    [🔒] │
│                                         │
│ Test complet d'analyse...               │
│                                         │
│ ⏱️ 45 min                              │
│ Verrouillée                             │
│ Complétera la section: Tests           │
│ [Badge: 3AC]                            │
└─────────────────────────────────────────┘
```

**Style** :
- Bordure grise (`border-gray-300`)
- Fond gris clair (`bg-gray-50`)
- Opacité réduite (`opacity-75`)
- Icône cadenas en haut à droite
- Badge du niveau futur

---

## 🔗 Lien avec les Sections du Dossier

Chaque tâche est liée à une section du dossier :

| Catégorie de Tâche | Section du Dossier |
|-------------------|-------------------|
| `test` | Tests d'Orientation |
| `project` | Activités Extra-scolaires |
| `research` | Parcours Scolaire |
| `certification` | Compétences |
| `engagement` | Activités Extra-scolaires |
| `cv_building` | Compétences |
| `reflection` | Choix d'Orientation |
| `game` | Activités Extra-scolaires |

**Action** : Cliquer sur une tâche déplie automatiquement la section correspondante du dossier.

---

## 📈 Exemples de Cas d'Usage

### Cas 1 : Élève en 2AC qui a commencé en 1AC

**Tâches affichées** :
- ✅ **Année actuelle (2AC)** : 6-8 tâches disponibles
- ⚠️ **Années précédentes (1AC)** : Tâches déjà complétées (non affichées)
- 🔒 **Années futures (3AC, TC, 1Bac, 2Bac)** : ~30 tâches verrouillées

**Complétude** : ~60-70%

### Cas 2 : Élève en 2AC qui a commencé en 2AC

**Tâches affichées** :
- ✅ **Année actuelle (2AC)** : 6-8 tâches disponibles
- ⚠️ **Années précédentes (1AC)** : 4-5 tâches à rattraper
- 🔒 **Années futures (3AC, TC, 1Bac, 2Bac)** : ~30 tâches verrouillées

**Complétude** : ~40-50%

**Message d'alerte** :
> "Vous avez commencé le système en 2AC. Complétez les tâches des années précédentes pour enrichir votre dossier."

### Cas 3 : Élève en 3AC avec dossier complet

**Tâches affichées** :
- ✅ **Année actuelle (3AC)** : Tâches disponibles
- ⚠️ **Années précédentes** : Toutes complétées (non affichées)
- 🔒 **Années futures (TC, 1Bac, 2Bac)** : ~20 tâches verrouillées

**Complétude** : ~80-90%

---

## 🎯 Fonctionnalités

### 1. Filtrage et Organisation

- **Par niveau** : Tâches groupées par année scolaire
- **Par statut** : Disponible / À rattraper / Verrouillée
- **Par section** : Lien vers la section du dossier enrichie

### 2. Navigation Intelligente

- **Clic sur tâche** → Déplie la section correspondante
- **Scroll automatique** vers la section
- **Lien vers parcours** : "Voir toutes les tâches de cette année"

### 3. Informations Contextuelles

- **Durée estimée** : Temps nécessaire pour chaque tâche
- **Type de tâche** : Icône et couleur par catégorie
- **Milestone** : Badge spécial pour les étapes clés
- **Section enrichie** : Indication claire de l'impact

### 4. Messages Explicatifs

- **Pour les tâches à rattraper** :
  > "Vous avez commencé le système en [niveau]. Complétez les tâches des années précédentes pour enrichir votre dossier."

- **Pour les tâches futures** :
  > "Ces tâches seront disponibles lorsque vous atteindrez les niveaux correspondants. Elles vous permettront de continuer à enrichir votre dossier d'orientation."

---

## 🔄 Intégration avec le Parcours AvenirLab

### Lien Bidirectionnel

1. **Depuis le Dossier** → **Vers le Parcours** :
   - Bouton "Voir toutes les tâches de cette année"
   - Lien direct vers `/dashboard/student`

2. **Depuis le Parcours** → **Vers le Dossier** :
   - Indication de la section enrichie
   - Lien vers le dossier complet après complétion

### Synchronisation

- **Complétion d'une tâche** → Mise à jour automatique de la complétude du dossier
- **Ajout d'une activité** → Enrichissement de la section "Activités"
- **Passage d'un test** → Ajout dans "Tests d'Orientation"
- **Décision d'orientation** → Ajout dans "Choix d'Orientation"

---

## 📊 Métriques et Indicateurs

### Complétude Globale

- **Calcul** : Moyenne pondérée des complétions par section
- **Affichage** : Barre de progression colorée
- **Couleurs** :
  - 🟢 Vert : ≥ 80% (Complet)
  - 🟠 Orange : 50-79% (En cours)
  - 🔴 Rouge : < 50% (À compléter)

### Complétude par Section

Chaque section affiche son propre taux :
- Informations personnelles
- Parcours scolaire
- Décisions d'orientation
- Tests et profils
- Activités extra-scolaires
- Compétences et langues
- Entretiens d'orientation

### Nombre de Tâches

- **Disponibles** : Tâches de l'année actuelle
- **À rattraper** : Tâches des années précédentes
- **Verrouillées** : Tâches des années futures
- **Total** : Toutes les tâches du parcours complet

---

## 🎨 Palette de Couleurs

| Élément | Couleur | Code |
|---------|---------|------|
| **Tâches disponibles** | Bleu | `border-blue-300 bg-blue-50` |
| **Tâches à rattraper** | Orange | `border-orange-300 bg-orange-50` |
| **Tâches verrouillées** | Gris | `border-gray-300 bg-gray-50` |
| **Milestone** | Ambre | `bg-amber-200 text-amber-700` |
| **Badge niveau** | Gris | `bg-gray-200 text-gray-600` |

---

## 🚀 Améliorations Futures

### Phase 2
- [ ] **Filtrage avancé** : Par catégorie, par priorité
- [ ] **Recherche** : Trouver une tâche spécifique
- [ ] **Tri** : Par date, par priorité, par section
- [ ] **Notifications** : Rappels pour les tâches importantes

### Phase 3
- [ ] **Planification** : Calendrier des tâches à faire
- [ ] **Objectifs** : Définir des objectifs de complétion
- [ ] **Statistiques** : Graphiques de progression
- [ ] **Comparaison** : Avec d'autres élèves (anonymisé)

---

## 📝 Fichiers Techniques

### Types
```typescript
// src/types/orientationFile.ts
interface SuggestedTask {
  id: string;
  sectionId: string;
  sectionName: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number;
  taskId?: string;
}
```

### Données
```typescript
// src/data/incompleteOrientationFile.ts
export const incompleteOrientationFile: CompleteOrientationFile
```

### Composants
```typescript
// src/pages/orientation/CompleteOrientationFilePage.tsx
<TaskCard /> // Carte individuelle de tâche
```

---

## ✅ Checklist de Validation

- [x] Affichage des tâches de l'année actuelle
- [x] Affichage des tâches à rattraper (si applicable)
- [x] Affichage des tâches futures verrouillées
- [x] Style distinct pour chaque type de tâche
- [x] Lien vers les sections du dossier
- [x] Messages explicatifs contextuels
- [x] Badges et indicateurs visuels
- [x] Responsive design
- [x] Navigation fluide
- [x] Intégration avec le parcours AvenirLab

---

## 🎓 Conclusion

La section **"Tâches pour Compléter le Dossier"** transforme le Dossier d'Orientation en un **outil dynamique et actionnable**. Elle guide l'élève vers les actions concrètes à entreprendre pour enrichir son dossier, tout en lui montrant le chemin à parcourir dans les années futures.

**C'est le pont entre le parcours AvenirLab et le dossier d'orientation ! 🌉**
