# MULTIRESAUX SARL - Site Web

Site web moderne pour l'entreprise d'ingénierie marocaine MULTIRESAUX SARL.

## Installation et Démarrage Local

### Prérequis
- Node.js 16+ et npm

### Étapes d'installation

1. **Cloner ou extraire le projet**
   ```bash
   cd "multiresaux-sarl (1)"
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration des variables d'environnement** (optionnel)
   ```bash
   # Copier le fichier d'exemple
   copy .env.example .env.local
   
   # Ajouter vos variables si nécessaire
   ```

4. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```
   
   Le site s'ouvrira automatiquement à `http://localhost:3000`

### Commandes disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire pour la production
- `npm run preview` - Prévisualiser la version compilée

## Structure du Projet

```
├── components/          # Composants React réutilisables
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée React
├── index.html          # HTML principal
├── package.json        # Dépendances du projet
├── tsconfig.json       # Configuration TypeScript
├── vite.config.ts      # Configuration Vite
└── types.ts            # Définitions de types
```

## Technologie

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Bundler rapide
- **Tailwind CSS** - Framework CSS via CDN
- **Lucide React** - Icônes

## Auteur

MULTIRESAUX SARL - Expertise en Électricité & Informatique
