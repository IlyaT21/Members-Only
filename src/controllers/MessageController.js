const Message = require("../models/Message");

// Create a new Message
exports.createMessage = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const newMessage = await Message.create({ content, userId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Messages
exports.getAllMessages = async (req, res) => {
  try {
    const Messages = await Message.findAll();
    res.json(Messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Message by ID
exports.getMessageById = async (req, res) => {
  try {
    const Message = await Message.findByPk(req.params.id);
    if (!Message) return res.status(404).json({ error: "Message not found" });
    res.json(Message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
