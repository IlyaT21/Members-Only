const express = require("express");
const router = express.Router();

// Render Home Page
router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

// Render Auth Pages
router.get("/login", (req, res) => {
  res.render("pages/auth/login", { title: "Login" });
});

router.get("/register", (req, res) => {
  res.render("pages/auth/register", { title: "Register" });
});

router.get("/passcode", (req, res) => {
  res.render("pages/auth/passcode", { title: "Enter a Passcode" });
});

module.exports = router;
