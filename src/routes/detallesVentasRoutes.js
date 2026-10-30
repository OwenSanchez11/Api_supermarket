const express = require('express');
const router = express.Router();
const detallesVentasController = require('../controllers/detallesVentasController');

router.get('/getDetallesVentas', detallesVentasController.getDetallesVentas);
router.get('/getDetalleVentaById/:id', detallesVentasController.getDetalleVentaById);
router.post('/postDetalleVenta', detallesVentasController.postDetalleVenta);
router.put('/putDetalleVenta/:id', detallesVentasController.putDetalleVenta);
router.delete('/deleteDetalleVenta/:id', detallesVentasController.deleteDetalleVenta);

module.exports = router;
