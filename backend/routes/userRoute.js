const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

// Find user by email
router.post("/login/:email", userController.findUserByEmail)
// Update user
router.put("/:user_id", userController.updateUser)
// Get user information
router.get("/information/:user_id", userController.getUserInformation)

module.exports = router;