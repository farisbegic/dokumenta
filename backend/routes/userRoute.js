const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

// Find user by email
router.post("/login/:email", userController.findUserByEmail)

module.exports = router;