const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");
const { auth } = require("../middleware/auth");

// Routes for team management

// Get all teams
router.get("/", auth, teamController.getAllTeams);

// Get all teams with only id and name
router.get("/no-secrets", teamController.getAllTeamsWithoutSecrets);

// Get single team details
router.get("/:id", auth, teamController.getTeam);

// Join a team
router.post("/join", auth, teamController.joinTeam);

module.exports = router;
