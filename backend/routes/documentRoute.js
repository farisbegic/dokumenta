const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController")
const isAuth = require("../middlewares/isAuth")

// Get all documents for a user
router.get("/user", isAuth, documentController.getRequestsByUserId);
// Save a document
router.post("/", isAuth, documentController.saveRequest);
// Get all documents
router.get("/", documentController.getAllDocuments);
// Get document by id
router.get("/:id", documentController.getDocumentById);

module.exports = router;