const express = require("express");
const router = express.Router();
const messageController = require("../controllers/MessageController");

// API Routes
router.post("/", messageController.createMessage);
router.get("/", messageController.getAllMessages);
router.get("/:id", messageController.getMessageById);
router.post("/:id/delete", messageController.deleteMessage);

module.exports = router;
