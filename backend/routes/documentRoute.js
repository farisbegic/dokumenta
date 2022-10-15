const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController")

// Get all documents for a user
router.get("/user/:user_id", documentController.getDocumentsByUserId);

module.exports = router;