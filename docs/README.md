# AvenirLab Frontend

Application frontend simplifiée avec uniquement les pages de connexion et d'inscription.

## Installation

```bash
npm install
```

## Configuration

L'endpoint API est configuré pour pointer vers `http://localhost:8002` en développement.

## Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000` (ou le port disponible).

## Build

```bash
npm run build
```

## Structure

- `/src/pages` - Pages Login et Register
- `/src/components` - Composants réutilisables
- `/src/contexts` - Contextes React (Auth, Toast)
- `/src/services` - Services API
- `/src/config` - Configuration (API, etc.)

## Fonctionnalités

- Page de connexion avec numéro de téléphone
- Page d'inscription avec validation de mot de passe
- Gestion de l'authentification via JWT
- Notifications toast pour les messages d'erreur/succès
- Interface responsive avec Tailwind CSS
