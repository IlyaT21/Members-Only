const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Memebers Only" });
});

module.exports = router;
