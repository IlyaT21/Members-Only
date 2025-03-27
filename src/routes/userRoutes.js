const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// API Routes
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
