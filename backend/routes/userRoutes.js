const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/', userController.getUsers);

// Other routes (POST, PUT, DELETE) can be here
module.exports = router;


