require('dotenv').config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

// Charger les variables d'environnement
dotenv.config();

// Importation des routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const emailRoutes = require("./routes/emailRoutes");  // chemin selon ton projet
const adminRoutes = require("./routes/adminRoutes");

const app = express(); // ⚠️ Déclaration de app AVANT utilisation

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // l'URL où tourne ton frontend React
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pour accéder aux fichiers d'uploads (ex: images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Empêche de revenir en arrière avec le cache navigateur
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});


// Routes API
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/email", emailRoutes);  // ici après app créé
app.use("/api", adminRoutes);

// Route de test racine
app.get("/", (req, res) => {
  res.send("✅ API EasyShop en ligne !");
});

// Connexion à la base de données puis lancement du serveur
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion à la base de données :", err);
  });

