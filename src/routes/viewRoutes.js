const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const Message = require("../models/Message");

// Render Home Page
router.get("/", async (req, res) => {
  try {
        const messages = await Message.findAll({
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
          order: [["createdAt", "DESC"]],
        });
    res.render("index", { title: "Home", messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading homepage");
  }
});

// Login Page
router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("pages/auth/login", { title: "Login" });
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// Register page
router.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("pages/auth/register", { title: "Register" });
  }
});

router.post("/register", async (req, res) => {
  const { fullname, username, password } = req.body;

  try {
    let user = await User.findOne({ where: { username } });
    if (user) {
      return res.send("Username already exists. Try another one.");
    }

    await User.create({ fullname, username, password });
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// Passocde Page
router.get("/passcode", (req, res) => {
  if (!req.isAuthenticated()) {
    res.render("pages/auth/passcode", { title: "Enter a Passcode" });
  } else {
    res.redirect("/");
  }
});

//Add Messages
router.get("/add-message", (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("pages/addMessage", { title: "Add a Message" });
  }
});

module.exports = router;
