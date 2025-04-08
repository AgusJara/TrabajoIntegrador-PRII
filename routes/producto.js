const express = require('express');
const router = express.Router();
const productoController = require ('../controllers/productoController')

router.get('/', productoController.index)

router.get('/agregar', productoController.agregar)

router.get('/detalle', productoController.detalle)

module.exports = router;