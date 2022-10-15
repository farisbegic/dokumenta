const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController")
const isAuth = require("../middlewares/isAuth")

// Get all documents for a user
router.get("/user", isAuth, documentController.getRequestsByUserId);
// Save a document
router.post("/", isAuth, documentController.saveRequest);

module.exports = router;