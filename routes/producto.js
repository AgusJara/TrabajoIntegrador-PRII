const express = require('express');
const router = express.Router();
const productoController = require ('../controllers/productoController')

router.get('/', productoController)

router.get('/agregar', productoController.agregar)

module.exports = router;