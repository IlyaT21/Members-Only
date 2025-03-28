const express = require("express");
const router = express.Router();

// Render Home Page
router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

module.exports = router;
