# ⭐ Fonctionnalité : Étapes Décisionnelles (Milestones)

## Vue d'ensemble

Les **étapes décisionnelles** sont des tâches particulièrement importantes dans le parcours d'orientation de l'élève. Elles représentent des moments clés où l'élève doit faire un choix structurant pour son avenir.

## Identification des Milestones

### Tâches marquées comme milestones

| Niveau | Tâche | Description |
|--------|-------|-------------|
| **3AC** | Test final de recommandation de filière lycée | Choix de la filière lycée |
| **TC** | Test final de recommandation de type de bac | Choix du type de baccalauréat |
| **1ère Bac** | Test final de recommandation de filières d'études supérieures | Choix des filières du supérieur |
| **2ème Bac** | Scénarios post-bac (plan A/B/C) | Choix final de l'orientation post-bac |

### Caractéristiques

- ✅ Marquées avec `isMilestone: true` dans les données
- ✅ Ont généralement des prérequis (tâches préalables à compléter)
- ✅ Représentent des décisions importantes dans le parcours
- ✅ Produisent des livrables décisionnels

## Style Visuel Spécial

### Quand la milestone est verrouillée

**Différences visuelles par rapport aux tâches verrouillées normales :**

1. **Bordure et fond**
   - Bordure ambre épaisse (2px) au lieu de grise
   - Fond dégradé ambre/orange au lieu de gris uni
   - Opacité normale (pas réduite comme les tâches verrouillées classiques)

2. **Badge "ÉTAPE DÉCISIONNELLE"**
   - Badge doré en haut à droite
   - Dégradé ambre → orange
   - Icône étoile ⭐
   - Texte : "ÉTAPE DÉCISIONNELLE"

3. **Icône de statut**
   - Cadenas ambre avec animation pulse
   - Au lieu du cadenas gris statique

4. **Titre**
   - Couleur ambre foncé (`text-amber-900`)
   - Au lieu de gris

5. **Description**
   - Texte ambre foncé en gras
   - Au lieu de gris normal

6. **Message explicatif**
   - Encadré blanc avec bordure ambre
   - Icône cible 🎯
   - Texte expliquant l'importance de l'étape
   - Message : "Cette étape décisionnelle importante sera déverrouillée une fois que vous aurez complété les tâches préalables. Elle représente un moment clé dans votre parcours d'orientation."

7. **Label de statut**
   - "⭐ Étape décisionnelle - Verrouillée"
   - Couleur ambre
   - Au lieu de "🔒 Verrouillée" en gris

### Quand la milestone est disponible/en cours/complétée

Le style redevient normal (pas de style spécial), car l'accent est mis sur le fait qu'elle est **verrouillée mais importante**.

## Implémentation Technique

### 1. Type mis à jour

```typescript
// src/types/avenirlab.ts
export interface Task {
  // ... autres champs
  isMilestone?: boolean; // Nouveau champ
}
```

### 2. Données mises à jour

```typescript
// src/data/avenirlab/tasks.ts
// 3AC - Test de recommandation de filière lycée
{
  id: '3ac_t3',
  title: 'Test final de recommandation de filière lycée',
  category: 'test',
  prerequisites: ['3ac_t1', '3ac_t2', '3ac_test1'],
  isMilestone: true
}

// TC - Test de recommandation de type de bac
{
  id: 'tc_t6',
  title: 'Test final de recommandation de type de bac',
  category: 'test',
  prerequisites: ['tc_t1', 'tc_t2', 'tc_t3', 'tc_test1'],
  isMilestone: true
}

// 1ère Bac - Test de recommandation de filières supérieures
{
  id: '1bac_t6',
  title: 'Test final de recommandation de filières d\'études supérieures',
  category: 'test',
  prerequisites: ['1bac_t1', '1bac_t2', '1bac_t3', '1bac_t4'],
  isMilestone: true
}

// 2ème Bac - Scénarios post-bac
{
  id: '2bac_t2',
  title: 'Scénarios post-bac (plan A / B / C)',
  category: 'reflection',
  isMilestone: true
}
```

### 3. Composant TaskCard modifié

```typescript
// src/components/avenirlab/TaskCard.tsx
const isMilestoneLocked = task.status === 'locked' && task.isMilestone;

// Style conditionnel
const statusStyle = getStatusStyle(task.status, task.isMilestone);

// Badge affiché uniquement si milestone verrouillée
{isMilestoneLocked && (
  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500...">
    ⭐ ÉTAPE DÉCISIONNELLE
  </div>
)}
```

## Palette de Couleurs Milestone

| Élément | Couleur | Hex |
|---------|---------|-----|
| Bordure | Ambre | `border-amber-400` |
| Fond | Dégradé Ambre → Orange | `from-amber-50 to-orange-50` |
| Badge | Dégradé Ambre → Orange | `from-amber-500 to-orange-500` |
| Texte titre | Ambre foncé | `text-amber-900` |
| Icône cadenas | Ambre | `text-amber-600` |
| Label statut | Ambre foncé | `text-amber-700` |

## Comportement

### Logique de verrouillage

Les milestones suivent la même logique de verrouillage que les tâches normales :
- Vérification des prérequis
- Statut calculé par `useAvenirLabStudent.ts`

**Exemple pour 3AC :**
```typescript
{
  id: '3ac_t3',
  prerequisites: ['3ac_t1', '3ac_t2'], // Doit compléter les 2 tâches avant
  isMilestone: true
}
```

### Déverrouillage

Une fois les prérequis complétés :
1. Le statut passe de `locked` à `available`
2. Le style spécial disparaît
3. La tâche devient accessible normalement
4. Le bouton "Commencer" apparaît

## Cas d'usage

### Exemple : Élève en 3AC

**Situation initiale :**
- L'élève voit la tâche "Test final de recommandation de filière lycée"
- Elle est verrouillée avec le style spécial doré
- Message : "Étape décisionnelle importante"
- Badge "⭐ ÉTAPE DÉCISIONNELLE" visible

**Après avoir complété les prérequis :**
- Les tâches `3ac_t1`, `3ac_t2` et le test RIASEC (`3ac_test1`) sont terminés
- La milestone se déverrouille automatiquement
- Le style redevient normal (blanc/bleu)
- Bouton "Commencer le test" disponible

**Passage du test :**
- Test de 50 questions (45 minutes)
- Analyse des intérêts, aptitudes et résultats scolaires
- Génération d'un rapport de recommandation
- L'orientateur valide et accompagne la décision finale

**Importance pédagogique :**
- L'élève comprend visuellement que c'est une étape cruciale
- L'attente crée de l'anticipation
- Le style spécial valorise l'importance de la décision
- Le test final synthétise toutes les données collectées

## Avantages

✅ **Visibilité** : Les étapes importantes sont immédiatement identifiables  
✅ **Motivation** : Le style spécial crée de l'anticipation  
✅ **Pédagogie** : Renforce l'importance des décisions d'orientation  
✅ **Guidage** : L'élève comprend qu'il doit d'abord compléter les prérequis  
✅ **Cohérence** : Les 4 grandes décisions (filière lycée, type bac, filières sup, post-bac) sont mises en avant  
✅ **Tests basés sur les données** : Recommandations algorithmiques basées sur tout le parcours  
✅ **Traçabilité** : Les tests génèrent des rapports justifiés pour le dossier d'orientation  

## Extensions possibles

- [ ] Animation spéciale lors du déverrouillage d'une milestone
- [ ] Notification push quand une milestone devient disponible
- [ ] Célébration visuelle après complétion d'une milestone
- [ ] Badge spécial dans le profil pour les milestones complétées
- [ ] Timeline avec mise en avant des milestones
- [ ] Statistiques : "X milestones complétées sur Y"

## Testez la fonctionnalité

1. **Accéder au système :**
   ```
   http://localhost:5173/dashboard/student
   ```

2. **Sélectionner le niveau 3AC :**
   - Utiliser le sélecteur de niveau en haut

3. **Observer la milestone :**
   - Onglet "Tâches Obligatoires"
   - Chercher "Test final de recommandation de filière lycée"
   - Vérifier le style doré et le badge

4. **Tester avec d'autres niveaux :**
   - **TC** : "Test final de recommandation de type de bac"
   - **1ère Bac** : "Test final de recommandation de filières d'études supérieures"
   - **2ème Bac** : "Scénarios post-bac (plan A/B/C)"

5. **Tester le déverrouillage :**
   - Compléter les prérequis de la milestone
   - Observer le changement de style

## Captures d'écran attendues

### Milestone verrouillée
```
┌─────────────────────────────────────────────────────┐
│ ⭐ ÉTAPE DÉCISIONNELLE                              │
├─────────────────────────────────────────────────────┤
│ [🧪] Test final de recommandation de filière 🔒    │
│                                                     │
│ Test complet d'analyse de vos intérêts, aptitudes  │
│ et résultats scolaires pour recommander la filière │
│ lycée la plus adaptée à votre profil.              │
│                                                     │
│ 🎯 Cette étape décisionnelle importante sera       │
│    déverrouillée une fois que vous aurez complété  │
│    les tâches préalables...                        │
│                                                     │
│ ⏱️ 45 min  📝 50 questions                         │
│ 📄 Rapport de recommandation avec justification    │
│ ⚠️ Prérequis : 3 tâche(s) à compléter d'abord     │
│                                                     │
│ ⭐ Étape décisionnelle - Verrouillée               │
└─────────────────────────────────────────────────────┘
```

### Milestone disponible
```
┌─────────────────────────────────────────────────────┐
│ [🧪] Test final de recommandation de filière ▶️    │
│                                                     │
│ Test complet d'analyse de vos intérêts, aptitudes  │
│ et résultats scolaires...                          │
│                                                     │
│ ⏱️ 45 min  📝 50 questions                         │
│ 📄 Rapport de recommandation avec justification    │
│                                                     │
│ 📌 Disponible                [Commencer le test]   │
└─────────────────────────────────────────────────────┘
```
