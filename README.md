# 🛍️ EasyShop – Application e-commerce MERN

**EasyShop** est une application e-commerce complète construite avec le stack **MERN** (MongoDB, Express.js, React.js, Node.js), comprenant une interface utilisateur réactive, une gestion admin sécurisée, un panier, une authentification JWT et un système CRUD complet.

## 📌 Fonctionnalités principales

### 🎯 Côté client
- 🔍 Affichage des produits avec images
- 🛒 Panier interactif (ajout, suppression, modification quantité)
- 🔐 Authentification (inscription / connexion utilisateur)
- 💬 Confirmation visuelle à l’ajout d’un produit au panier
- 📱 Design responsive (mobile / desktop)

### 🛠️ Côté admin
- 📦 Gestion CRUD des produits
- 👤 Liste des utilisateurs
- 🧾 Suivi des commandes
- ⬇️ Export PDF/Excel
- 🔐 Connexion sécurisée (JWT + rôles)
- 🎨 Interface moderne et dynamique

## 🧰 Technologies utilisées

### Frontend
- React.js + Context API
- TailwindCSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## ☁️ Déploiement

- Frontend : [Netlify](https://easyshop-client.netlify.app/)
- Backend : [Render](https://easyshop-backend-y7lh.onrender.com/)

## 🚀 Démarrage local

### 1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/easyshop.git
cd easyshop
2. Lancer le backend

cd easyshop-backend
npm install
npm start
3. Lancer le frontend

cd easyshop-client
npm install
npm start
📁 Structure
markdown

easyshop/
│
├── easyshop-backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── easyshop-client/
    ├── components/
    ├── pages/
    ├── context/
    └── App.jsx
📈 Améliorations prévues
Intégration Stripe ou PayPal pour le paiement

Système de notifications (toast, mail)

Espace personnel pour les utilisateurs (commandes, profils)

Chat support client en temps réel

© 2025 Pina Diouf – Projet GOMYCODE MERN