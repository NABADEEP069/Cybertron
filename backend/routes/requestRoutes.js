const express = require('express');
const { submitRequest } = require('../controllers/requestController');
const router = express.Router();

router.post('/', submitRequest);

module.exports = router;
