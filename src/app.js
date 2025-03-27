const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Use routes
app.use("/", routes);

module.exports = app;
