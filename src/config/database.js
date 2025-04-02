require("dotenv").config();

const { Sequelize } = require("sequelize");

// Initialize Sequelize with PostgreSQL database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false, // Set to true to see raw SQL queries in the console
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Unable to connect to the database:", err));

module.exports = sequelize;
