const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id"
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
  }
);

// Establish the association
User.hasMany(Message, { foreignKey: "userId", onDelete: "CASCADE" });
Message.belongsTo(User, { foreignKey: "userId" });

// Sync model with database (create table if it doesn't exist)
sequelize
  .sync()
  .then(() => console.log("✅ Message table present"))
  .catch((err) => console.error("❌ Error creating table:", err));

module.exports = Message;
