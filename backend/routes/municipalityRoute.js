const express = require("express");
const router = express.Router();
const municipalityController = require('../controllers/municipalityController');

// Get all municipalities
router.get('/', municipalityController.getAllMunicipalities);

module.exports = router;