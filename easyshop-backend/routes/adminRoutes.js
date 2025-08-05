const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/adminController");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");

// Route protégée pour stats admin uniquement
router.get(
  "/admin/stats",
  protect,                   // Vérifie le token JWT
  authorizeRoles("admin"),   // Vérifie que le rôle est bien "admin"
  getDashboardStats
);

module.exports = router;
