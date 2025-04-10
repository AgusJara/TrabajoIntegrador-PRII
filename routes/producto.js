const express = require('express');
let router = express.Router();
const productoController = require ('../controllers/productoController')

router.get('/', productoController.index)

router.get('/agregar', productoController.agregar)

router.get('/detalle', productoController.detalle)

router.get('/resultadosBusqueda', productoController.resultadosBusqueda)

module.exports = router;