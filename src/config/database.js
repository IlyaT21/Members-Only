const { Sequelize } = require("sequelize");

// Initialize Sequelize with PostgreSQL database connection
const sequelize = new Sequelize("members_only", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Set to true if you want to see SQL queries in the console
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Unable to connect to the database:", err));

module.exports = sequelize;
