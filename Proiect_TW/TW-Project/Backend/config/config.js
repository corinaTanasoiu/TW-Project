require("dotenv").config();

const config = {
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: "24h",
  },

  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },

  bugSeverity: Object.freeze({
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    CRITICAL: "critical",
  }),

  bugStatus: Object.freeze({
    OPEN: "open",
    IN_PROGRESS: "in_progress",
    RESOLVED: "resolved",
    CLOSED: "closed",
  }),

  userRoles: Object.freeze({
    PM: 1,
    TST: 0,
  }),

  validation: {
    password: {
      minLength: 6,
      maxLength: 100,
    },
    email: {
      maxLength: 255,
    },
    description: {
      maxLength: 1000,
    },
  },

  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
};

module.exports = config;
