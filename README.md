# Recette API

## Description

Ce projet backend a été développé en Express.js pour gérer des recettes via une API RESTful consommée par un frontend Vue.js. Le backend permet la gestion des recettes avec des fonctionnalités CRUD (Create, Read, Update, Delete) et est connecté à une base de données MySQL.

## Diagramme de Classes

![Diagramme de Classes](./src/assets/D-class.png)


## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- npm

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. Clonez le dépôt :

```bash
   git clone https://github.com/Zoubeir7/recette-API.git
```

2.Installez les dépendances :

```bash
   cd recette-API npm install
```

3.Démarrez le serveur Express.js :

```bash
   npm start
```

## Configuration de la Base de Données

1. Connectez-vous en tant qu'administrateur :

```bash
   mysql -u root -p
```

2. Dans le fichier `/assets/script.sql`, toutes les commandes pour créer la base de données, son utilisation et la création des tables sont incluses.

3. Dans le fichier `/config/db.js`, remplacez vos informations d'identification dans la section suivante pour connecter l'application à votre base de données :

```javascript
const dbConfig = {
  user: "votre_nom_utilisateur",
  password: "votre_mot_de_passe",
  database: "votre_nom_de_base_de_données",
};
```

4.Redémarrez le serveur :

```bash
   npm start
```

## Tests avec Postman
 Dans le fichier `/assets/Recipe API.postman_collection`, une collection qui contient les quatre verbe Http pour testé les API


## Endpoints de l'API

1. **Récupérer une Recette par ID**

   - **Point de terminaison :** `GET /recipes/:id`
   - **Description :** Récupérer une seule recette par son ID.
   - **Réponse :** Objet recette ou une erreur 404 si non trouvé.

2. **Récupérer Toutes les Recettes**

   - **Point de terminaison :** `GET /recipes`
   - **Description :** Récupérer toutes les recettes de la base de données.
   - **Réponse :** Tableau d'objets recette.

3. **Créer une Nouvelle Recette**

   - **Point de terminaison :** `POST /recipes`
   - **Description :** Créer une nouvelle recette.
   - **Corps de la requête :**

     ```json
     {
       "title": "Titre de la Recette",
       "ingredient": "Liste des Ingrédients",
       "type": "Type de Recette"
     }
     ```

   - **Réponse :** Retourne l'ID de la recette nouvellement créée.

4. **Mettre à Jour une Recette par ID**

   - **Point de terminaison :** `PUT /recipes/:id`
   - **Description :** Mettre à jour une recette existante par son ID.
   - **Corps de la requête :**

     ```json
     {
       "title": "Titre Mis à Jour",
       "ingredient": "Liste des Ingrédients Mise à Jour",
       "type": "Type de Recette Mis à Jour"
     }
     ```

   - **Réponse :** Confirmation de la mise à jour réussie ou une erreur 404 si non trouvé.

5. **Supprimer une Recette par ID**

   - **Point de terminaison :** `DELETE /recipes/:id`
   - **Description :** Supprimer une recette par son ID.
   - **Réponse :** Confirmation de la suppression réussie ou une erreur 404 si non trouvé.

## Tests Unitaires

  - tests unitaires pour notre modèle afin de vérifier que les actions CRUD fonctionnent correctement.
 

 la commande pour exécuter les tests :

```bash
  npm test
```

## Analyse de Code et Formatage

- **Intégration d'ESLint et Prettier :**
- Executer ESLint pour l'analyse statique du code

```bash
  npm run lint
```

- Executer Prettier pour le formatage automatique du code.

```bash
  npn run format
```


## Auteur

[Zoubeir Ba](https://github.com/Zoubeir7)

## Contributeur

[Assa baradji](https://github.com/AssaBaradji)
