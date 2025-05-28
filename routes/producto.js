const express = require('express');
let router = express.Router();
let productoController = require ('../controllers/productoController')

router.get('/agregar', productoController.agregar)
router.get('/detalle/:id', productoController.detalle)
router.post('/add/',productoController.create)


module.exports = router;