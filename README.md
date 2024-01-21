# Authentification dans l'API de Gestion des cours

Description du projet.
L'objectif de ce projet est d'ajouter une couche d'authentification à l'API de gestion des cours existante, développée avec Express.js et MongoDB. Cette extension permettra la création d'utilisateurs, l'authentification sécurisée via des mécanismes tels que JWT, et la protection des routes sensibles. Les utilisateurs authentifiés seront les seuls autorisés à accéder et à effectuer des opérations comme la création, la mise à jour ou la suppression de recettes. La documentation sera mise à jour pour inclure des instructions claires sur la manière de s'authentifier, d'obtenir un jeton, et sur l'utilisation de ce jeton pour accéder aux fonctionnalités protégées. L'objectif est de renforcer la sécurité de l'API tout en offrant un contrôle d'accès aux fonctionnalités sensibles.
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

# Dépendances Principales
Les dépendances principales du projet sont spécifiées dans le fichier package.json sous la clé "dependencies". Elles comprennent les bibliothèques et modules suivants avec leurs versions respectives :
```json 
{
  "dependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.4",
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "joi": "^17.11.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.4",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "swagger-ui-express": "^5.0.0",
    "ts-node": "^10.9.2",
    "tsoa": "^6.0.1",
    "typescript": "^5.3.3"
  }
}
```

# Dépendances de Développement
Les dépendances de développement, spécifiées sous la clé "devDependencies", incluent des modules nécessaires uniquement lors du développement du projet. Voici la liste de ces dépendances avec leurs versions respectives :

```json 
{
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/dotenv": "^8.2.0",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/morgan": "^1.9.9",
    "@types/multer": "^1.4.11",
    "@types/swagger-ui-express": "^4.1.6",
    "concurrently": "^8.2.2"
  }
}

```
# Documentation 

Le projet utilise Swagger pour générer une documentation interactive de l'API. Swagger UI Express, spécifié dans les dépendances principales, est utilisé pour présenter visuellement les points de terminaison de l'API. Pour accéder à la documentation Swagger, suivez ces étapes :

Assurez-vous que le serveur est en cours d'exécution.
Accédez à l'URL suivante dans votre navigateur : http://localhost:${PORT]/documentation.

![image](https://github.com/mibanas/jwt-auth/assets/32291412/ace2c057-7114-46b0-9645-1a32afb8f96e)


# Licence

Ce projet est sous licence ISC.
