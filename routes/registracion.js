const express = require('express');
const router = express.Router();
const registracionController = require ('../controllers/registracionController')

router.get('/', registracionController)

module.exports = router;