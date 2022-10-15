const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const isAuth = require("../middlewares/isAuth")

// Find user by email
router.post("/login/:email", userController.findUserByEmail)
// Update user
router.put("/", isAuth, userController.updateUser)
// Get user information
router.get("/information/", isAuth, userController.getUserInformation)

module.exports = router;