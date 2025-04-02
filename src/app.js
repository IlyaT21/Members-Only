const express = require("express");
const session = require("express-session");
const app = express();
const userRoutes = require("./routes/userRoutes");
const viewRoutes = require("./routes/viewRoutes");
const messageRoutes = require("./routes/messageRoutes");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
require("./config/passport")(passport);
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(expressLayouts);
app.set("layout", "layouts/app");
app.use((req, res, next) => {
  res.locals.user = req.user || null; // Make user available in all EJS views
  next();
});

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Use routes
app.use("/users", userRoutes);
app.use("/message", messageRoutes);
app.use("/", viewRoutes);

module.exports = app;
