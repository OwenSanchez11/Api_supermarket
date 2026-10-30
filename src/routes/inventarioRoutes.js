const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

router.get('/getInventario', inventarioController.getInventario);
router.get('/getInventarioById/:id', inventarioController.getInventarioById);
router.post('/postInventario', inventarioController.postInventario);
router.put('/putInventario/:id', inventarioController.putInventario);
router.delete('/deleteInventario/:id', inventarioController.deleteInventario);

module.exports = router;
