const { Sequelize } = require("sequelize");
const path = require("path");
const { Team } = require("../models");

// Database Configuration
const {
  DB_NAME = "bug_tracker",
  DB_HOST = "localhost",
  NODE_ENV = "development",
} = process.env;

// Determine database path
const dbPath = path.join(__dirname, "../../database.sqlite");

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: NODE_ENV === "development" ? console.log : false,
  define: {
    timestamps: true, // Adds createdAt and updatedAt timestamps to models
    underscored: true, // Use snake_case rather than camelCase for fields
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
  },
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released
  },
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    // Sync models in development
    if (NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      console.log("Database models synchronized successfully.");
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

// Seeding Teams Functionality
const teams = [
  {
    name: "Web Development Team",
    description: "Frontend and Backend development team",
    repository: "https://github.com/org/web-project",
  },
  {
    name: "Mobile Development Team",
    description: "iOS and Android development team",
    repository: "https://github.com/org/mobile-project",
  },
  {
    name: "DevOps Team",
    description: "Infrastructure and deployment team",
    repository: "https://github.com/org/devops-project",
  },
  {
    name: "QA Team",
    description: "Quality Assurance and Testing team",
    repository: "https://github.com/org/qa-project",
  },
];

const seedTeams = async () => {
  try {
    for (const team of teams) {
      await Team.findOrCreate({
        where: { name: team.name },
        defaults: team,
      });
    }
    console.log("Teams seeded successfully");
  } catch (error) {
    console.error("Error seeding teams:", error);
  }
};

// Export modules
module.exports = {
  sequelize,
  testConnection,
  seedTeams,
};
