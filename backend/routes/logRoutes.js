// routes/logRoutes.js
const express = require("express");
const router = express.Router();
const { logEvent, getLogs } = require("../controllers/logController");

// Route for frontend to send logs
router.post("/", logEvent);

// Route to fetch logs (optional for later)
router.get("/", getLogs);

module.exports = router;
