const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController")

// Login
router.post("/login", authenticationController.login)
// Register
router.post("/register", authenticationController.register)

module.exports = router;