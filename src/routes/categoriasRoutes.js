const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.get('/getCategorias', categoriasController.getCategorias);
router.get('/getCategoriaById/:id', categoriasController.getCategoriaById);
router.post('/postCategoria', categoriasController.postCategoria);
router.put('/putCategoria/:id', categoriasController.putCategoria);
router.delete('/deleteCategoria/:id', categoriasController.deleteCategoria);

module.exports = router;
