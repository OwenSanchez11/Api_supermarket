const express = require('express');
const router = express.Router();
const detallesProductosController = require('../controllers/detallesProductosController');

router.get('/getDetallesProductos', detallesProductosController.getDetallesProductos);
router.get('/getDetalleProductoById/:id', detallesProductosController.getDetalleProductoById);
router.post('/postDetalleProducto', detallesProductosController.postDetalleProducto);
router.put('/putDetalleProducto/:id', detallesProductosController.putDetalleProducto);
router.delete('/deleteDetalleProducto/:id', detallesProductosController.deleteDetalleProducto);

module.exports = router;
