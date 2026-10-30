const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

router.get('/getVentas', ventasController.getVentas);
router.get('/getVentaById/:id', ventasController.getVentaById);
router.post('/postVenta', ventasController.postVenta);
router.put('/putVenta/:id', ventasController.putVenta);
router.delete('/deleteVenta/:id', ventasController.deleteVenta);

module.exports = router;
