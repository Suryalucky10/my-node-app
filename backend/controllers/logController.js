// controllers/logController.js
const logger = require("../logger"); // Import our custom logger

// Handle incoming logs from frontend
const logEvent = (req, res) => {
  const { level, message } = req.body;

  if (!level || !message) {
    logger.error("Invalid log request: missing 'level' or 'message'");
    return res.status(400).json({ error: "Both 'level' and 'message' are required" });
  }

  // Route the log to correct logger method
  switch (level.toLowerCase()) {
    case "info":
      logger.info(message);
      break;
    case "warn":
      logger.warn(message);
      break;
    case "error":
      logger.error(message);
      break;
    case "debug":
      logger.debug(message);
      break;
    default:
      logger.info(`(UNKNOWN LEVEL) ${message}`);
  }

  res.status(200).json({ status: "Log recorded successfully" });
};

// Optional: Fetch server logs (example placeholder, can be expanded later)
const getLogs = (req, res) => {
  // In real-world we’d query logs from file/DB, here just demo
  logger.info("Frontend requested logs");
  res.json({ message: "Logs fetching not implemented yet" });
};

module.exports = { logEvent, getLogs };

