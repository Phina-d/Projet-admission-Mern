EasyShop - Application e-commerce MERN
Description
EasyShop est une application e-commerce réalisée avec la stack MERN (MongoDB, Express, React, Node.js). Elle permet de gérer des produits avec une interface d’administration simple pour ajouter, modifier, supprimer et afficher des produits.

Fonctionnalités principales
Affichage de la liste des produits

Ajout de nouveaux produits via un formulaire

Modification des produits existants

Suppression de produits avec confirmation

Backend RESTful API avec Express et MongoDB

Frontend React avec gestion des états et appels API

Validation basique des données

Design responsive simple

Installation
Prérequis
Node.js et npm installés

MongoDB (local ou Atlas)

Backend
Cloner le dépôt backend ou copier les fichiers dans un dossier easyshop-backend

Installer les dépendances :


npm install
Créer un fichier .env avec :


PORT=5000
MONGO_URI=<ton_uri_mongodb>
JWT_SECRET=<ton_secret_jwt>
Lancer le serveur :


npm run dev
Le backend tourne alors sur http://localhost:5000.

Frontend
Cloner ou copier les fichiers dans easyshop-client

Installer les dépendances :


npm install
Lancer le client React :


npm start
L’application est accessible sur http://localhost:3000.

Structure du projet

easyshop-backend/
  ├── controllers/
  │    └── productController.js
  ├── models/
  │    └── product.js
  ├── routes/
  │    └── productRoutes.js
  ├── middleware/
  │    └── authMiddleware.js (optionnel)
  ├── server.js
  └── .env

easyshop-client/
  ├── src/
  │    └── components/
  │         └── AdminProduits.jsx
  ├── package.json
  └── ...
Points techniques
Le backend utilise Express.js et Mongoose pour gérer la base de données MongoDB.

Les routes RESTful permettent les opérations CRUD sur les produits.

Le frontend React utilise fetch pour communiquer avec l’API backend.

Les composants React gèrent les états pour les formulaires, listes et interactions utilisateur.

Les erreurs sont gérées côté client et serveur avec messages simples.

Limitations & améliorations possibles
Authentification et autorisation à ajouter (JWT, middleware)

Validation des formulaires plus robuste

Gestion des erreurs plus détaillée

Ajout de pages et navigation (React Router)

Style et UX améliorés avec TailwindCSS ou autre framework CSS

Fonctionnalités avancées : recherche, filtres, pagination, panier, etc.

Conclusion
Ce projet EasyShop est une base fonctionnelle d’application e-commerce MERN. Il illustre les concepts fondamentaux de la stack et la communication front-back via une API REST. C’est un bon point de départ pour construire une application complète et évolutive.

