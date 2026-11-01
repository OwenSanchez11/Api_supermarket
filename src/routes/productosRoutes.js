const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/getProductos', productosController.getProductos);
router.get('/getProductosDetalle', productosController.getProductosDetalle);
router.get('/getProductoById/:id', productosController.getProductoById);
router.post('/postProducto', productosController.postProducto);
router.put('/putProducto/:id', productosController.putProducto);
router.delete('/deleteProducto/:id', productosController.deleteProducto);

module.exports = router;
