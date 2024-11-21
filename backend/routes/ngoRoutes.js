const express = require('express');
const { registerNGO } = require('../controllers/ngoController');
const router = express.Router();

router.post('/register', registerNGO);

module.exports = router;
