# Authentification dans l'API de Gestion des cours

Description du projet.
L'objectif de ce projet est d'ajouter une couche d'authentification à l'API de gestion de recettes existante, développée avec Express.js et MongoDB. Cette extension permettra la création d'utilisateurs, l'authentification sécurisée via des mécanismes tels que JWT, et la protection des routes sensibles. Les utilisateurs authentifiés seront les seuls autorisés à accéder et à effectuer des opérations comme la création, la mise à jour ou la suppression de recettes. La documentation sera mise à jour pour inclure des instructions claires sur la manière de s'authentifier, d'obtenir un jeton, et sur l'utilisation de ce jeton pour accéder aux fonctionnalités protégées. L'objectif est de renforcer la sécurité de l'API tout en offrant un contrôle d'accès aux fonctionnalités sensibles.
## Installation

1. Clonez le projet depuis le référentiel.
2. Installez les dépendances avec la commande : `npm install`

## Configuration

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez les variables d'environnement nécessaires, par exemple :

```plaintext
PORT=3010
DB_NAME=nom_de_votre_base_de_données
PASSWORD=votre_mot_de_passe
SECRET_KEY=votre_clé_secrète_pour_les_tokens
```

# Scripts

- `npm start`: Démarre le serveur en utilisant nodemon pour le rechargement automatique.
- `npm run build`: Compile le projet TypeScript.

# Structure des Dossiers

- `src/`: Contient le code source de l'application.
- `config/`: Configuration du serveur et de la base de données.
- `controllers/`: Contrôleurs pour la logique métier.
- `docs/`: Documentation de l'API.
- `middlewares/`: Middlewares, tels que la validation des données et l'authentification.
- `models/`: Modèles de données MongoDB.
- `routes/`: Définition des routes de l'API.
- `app.ts`: Fichier principal de l'application.
- `public/`: Dossier pour les fichiers statiques, tels que les images.

# Technologies Utilisées

- Express.js: Framework web pour Node.js.
- MongoDB: Base de données NoSQL.
- Mongoose: Bibliothèque pour l'accès à MongoDB.
- jsonwebtoken: Génération et vérification des JWT.
- Joi: Bibliothèque de validation des données.

# Licence

Ce projet est sous licence ISC.
