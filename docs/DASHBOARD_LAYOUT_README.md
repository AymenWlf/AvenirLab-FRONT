# Dashboard Layout AvenirLab - Documentation

## 🎨 Vue d'ensemble

Le dashboard layout d'AvenirLab est un système complet de navigation et d'interface utilisateur adapté à tous les profils utilisateurs (élèves, parents, orientateurs, direction, surveillance).

## 📁 Structure des fichiers

```
src/
├── layouts/
│   ├── DashboardLayout.tsx      # Layout principal
│   ├── Sidebar.tsx              # Menu de navigation
│   ├── TopBar.tsx               # Header du dashboard
│   └── UserProfileMenu.tsx      # Menu profil utilisateur
├── components/
│   └── dashboard/
│       ├── NotificationDropdown.tsx
│       └── MessageDropdown.tsx
├── contexts/
│   └── DashboardContext.tsx     # Gestion de l'état du layout
├── config/
│   └── navigation.ts            # Configuration des menus par rôle
├── types/
│   └── user.ts                  # Types utilisateurs et rôles
└── pages/
    ├── DashboardPage.tsx        # Page dashboard exemple
    ├── LoginPage.tsx            # Page de connexion
    └── RegisterPage.tsx         # Page d'inscription
```

## 🎯 Fonctionnalités principales

### 1. Sidebar (Menu latéral)
- **Desktop** : Fixe à gauche, collapsible (280px → 80px)
- **Tablet** : Collapsible par défaut avec overlay
- **Mobile** : Drawer qui slide depuis la gauche
- Navigation groupée par sections
- Icônes dynamiques avec badges
- Indicateur visuel de page active
- Scroll personnalisé

### 2. TopBar (Barre supérieure)
- Bouton hamburger (mobile)
- Barre de recherche globale avec raccourci clavier (Ctrl+K)
- Compteur de notifications avec dropdown
- Compteur de messages avec dropdown
- Menu profil utilisateur
- Responsive : search bar collapse sur mobile

### 3. Navigation par rôle
- **Élève** : Dashboard, Orientation, Tests, Découverte, Projet, Agenda, Messages, Profil
- **Parent** : Dashboard, Enfants, Suivi, Rendez-vous, Communication, Documents, Ressources
- **Orientateur** : Dashboard, Élèves, Dossiers, Analytics, Tests, Base de connaissances, Agenda, Communication, Outils, Profil
- **Direction** : Dashboard exécutif, Analytics institutionnels, Équipe, Élèves, Rapports, Stratégie, Événements, Administration, Profil
- **Surveillance** : Dashboard, Élèves, Suivi comportemental, Coordination, Planning, Profil

### 4. DashboardContext
- Gestion de l'état du sidebar (collapsed/mobile open)
- Données utilisateur
- Notifications avec compteur
- Messages avec compteur
- Fonctions pour marquer comme lu

## 📱 Responsive Design

### Breakpoints Tailwind CSS
- **Mobile** : < 768px
- **Tablet** : 768px - 1023px
- **Desktop** : >= 1024px

### Comportement par taille d'écran

#### Mobile (< 768px)
- Sidebar en drawer (slide from left)
- Menu hamburger visible dans TopBar
- Search bar collapsible
- User info minimal dans le menu
- Padding réduit

#### Tablet (768px - 1023px)
- Sidebar collapsible avec overlay
- Search bar visible
- Layout adaptatif

#### Desktop (>= 1024px)
- Sidebar fixe, collapsible
- Toutes les fonctionnalités visibles
- Optimisation de l'espace

### Classes Responsive utilisées

**Sidebar.tsx**
```tsx
// Desktop sidebar
className="hidden lg:flex flex-col ... w-72"

// Mobile sidebar
className="lg:hidden flex flex-col ... w-72"

// Overlay mobile
className="lg:hidden fixed inset-0 bg-black/50"
```

**TopBar.tsx**
```tsx
// Mobile menu button
className="lg:hidden p-2 ..."

// Desktop search bar
className="hidden md:flex items-center flex-1 max-w-2xl"

// Mobile search button
className="md:hidden p-2 ..."

// User info in profile menu
className="hidden lg:block text-left"
```

**DashboardLayout.tsx**
```tsx
// Dynamic margin based on sidebar state
className={`transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}

// Responsive padding
className="p-4 lg:p-6"
```

**DashboardPage.tsx**
```tsx
// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

## 🎨 Design System

### Couleurs

**Sidebar**
- Background: `from-gray-900 to-gray-800`
- Hover: `bg-white/10`
- Active: `bg-gradient-to-r from-blue-600 to-emerald-600`
- Text: `text-gray-300` (normal), `text-white` (active)

**TopBar**
- Background: `bg-white`
- Border: `border-b border-gray-200`
- Shadow: `shadow-sm`

**Main Content**
- Background: `bg-gray-50`

### Icônes (lucide-react)
Toutes les icônes sont importées depuis `lucide-react` et mappées dans `Sidebar.tsx` via `iconMap`.

### Animations
- Transitions : `transition-all duration-300 ease-in-out`
- Hover effects sur tous les éléments interactifs
- Scale animations sur les boutons
- Smooth scroll dans les dropdowns

## 🔐 Routes et authentification

### Routes publiques
- `/` - Landing page
- `/login` - Connexion
- `/register` - Inscription

### Routes protégées (nécessitent authentification)
- `/dashboard` - Page principale du dashboard
- `/dashboard/*` - Toutes les sous-routes du dashboard

### Protection
Le composant `ProtectedRoute` vérifie l'authentification avant d'afficher les routes protégées.

## 🚀 Utilisation

### Lancer le projet
```bash
cd /Users/aymenouallaf/Dev2/AVENIRLAB-FRONT
npm install
npm run dev
```

### Tester avec différents rôles
Modifiez le rôle de l'utilisateur dans `AuthContext` pour tester différentes navigations.

### Ajouter une nouvelle page
1. Créer la page dans `src/pages/`
2. Ajouter la route dans `navigation.ts` avec l'icône appropriée
3. Créer la route dans `App.tsx` sous `/dashboard/*`

## 📊 État actuel

✅ Tous les composants créés
✅ Navigation par rôle configurée
✅ Responsive design implémenté
✅ Context API configuré
✅ Routes protégées fonctionnelles
✅ Pages de test créées (Login, Register, Dashboard)

## 🎯 Prochaines étapes

1. Implémenter les pages spécifiques pour chaque section du menu
2. Connecter les API pour les données réelles
3. Ajouter la recherche globale fonctionnelle
4. Implémenter les WebSockets pour les notifications en temps réel
5. Ajouter le dark mode
6. Optimiser les performances avec React.memo et useMemo

## 🐛 Notes de débogage

- Tous les composants utilisent TypeScript strict
- Aucune erreur de linting
- Les icônes sont dynamiquement mappées via `iconMap` dans Sidebar
- Les badges de notifications sont gérés via le DashboardContext
- Le responsive est testé sur les breakpoints standard de Tailwind

---

**Version** : 1.0.0  
**Dernière mise à jour** : Janvier 2026  
**Auteur** : AvenirLab Team
