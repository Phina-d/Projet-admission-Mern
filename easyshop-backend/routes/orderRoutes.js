const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  confirmOrder,
  rejectOrder,
  getConfirmedClients,
  getProspectOrders,
  getOrdersToConfirm,
  getOrdersByClient,
  getAllOrders,
  sendOrderEmail,
} = require("../controllers/orderController");

const { protect, authorizeRoles } = require("../middlewares/authMiddleware");

// ✅ Closer ou Admin : confirmer ou rejeter
router.patch("/confirm/:id", protect, authorizeRoles("closer", "admin"), confirmOrder);
router.delete("/delete/:id", protect, authorizeRoles("closer", "admin"), rejectOrder);

// ✅ Closer ou Admin : voir commandes à confirmer
router.get("/to-confirm", protect, authorizeRoles("admin", "closer"), getOrdersToConfirm);

// ✅ Voir commandes du client connecté
router.get("/my-orders", protect, getOrdersByClient);

// ✅ Voir les clients confirmés et les prospects
router.get("/clients", protect, authorizeRoles("admin", "closer", "chef"), getConfirmedClients);
router.get("/prospects", protect, authorizeRoles("admin", "closer", "chef"), getProspectOrders);

// ✅ Admin ou Closer : toutes les commandes
router.get("/", protect, authorizeRoles("admin", "closer"), getAllOrders);

// ✅ Créer une commande
router.post("/", protect, createOrder);

// ✅ Mettre à jour le statut
router.put("/:id/status", protect, authorizeRoles("admin", "closer"), updateOrderStatus);

// ✅ Détails d'une commande par ID (à mettre en dernier pour ne pas écraser les autres routes)
router.get("/:id", protect, authorizeRoles("admin", "closer"), getOrderById);

router.post("/:id/send-email", protect, authorizeRoles("admin", "closer"), sendOrderEmail);

router.patch("/reject/:id", protect, authorizeRoles("closer", "admin"), rejectOrder);

module.exports = router;
