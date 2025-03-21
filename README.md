# x-clone-next-app

**x-clone-next-app** est une reproduction de l'interface utilisateur de Twitter (actuellement X) construite avec **Next.js**. Ce projet a été réalisé dans un but d'apprentissage, me permettant de me familiariser avec Next.js et d'explorer ses fonctionnalités en pratiquant sur un cas concret.

## Objectifs du projet

- Découvrir et apprendre **Next.js** en profondeur
- Comprendre la structure d'une application Next.js et son écosystème
- Expérimenter avec les **API Routes**, le **rendering côté serveur (SSR)** et le **rendering statique (SSG)**
- Implémenter une UI moderne en utilisant **Tailwind CSS**
- Simuler les principales fonctionnalités de Twitter/X : publication de posts, affichage du fil d'actualité, interactions (likes, commentaires, partages)

## Technologies utilisées

- **Next.js** - Framework React pour le rendu hybride (SSR & SSG)
- **React** - Bibliothèque pour la construction d'interfaces utilisateur
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide et réactif
- **TypeScript** - Typage statique pour une meilleure robustesse du code

## Fonctionnalités principales

- **Publication de posts** avec texte et média (image/vidéo)
- **Expérience utilisateur fluide** avec gestion des états en temps réel
- **Mise en page responsive** inspirée de l'interface Twitter/X

## Installation et exécution

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/x-clone-next-app.git
   cd x-clone-next-app
   ```
2. Installer les dépendances :

Installer les dépendances :

```
npm install
```

3. Démarrez le serveur de développement :

```
npm run dev
```

## Prochaines améliorations

- Ajout de l'authentification utilisateur (via NextAuth.js ou Firebase)
- Gestion des likes, commentaires et partages
- Intégration d'une base de données pour stocker les posts
- Ajout d'un système de notifications en temps réel
