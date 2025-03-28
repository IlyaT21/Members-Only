const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const viewRoutes = require("./routes/viewRoutes");
const messageRoutes = require("./routes/messageRoutes");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(expressLayouts);
app.set("layout", "layouts/app");

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Use routes
app.use("/users", userRoutes);
app.use("/message", messageRoutes);
app.use("/", viewRoutes);

module.exports = app;
