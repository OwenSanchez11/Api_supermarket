const express = require('express');
const router = express.Router();


const usuarioController= require('../controllers/usuarioController');

router.get('/getUsuarios', usuarioController.getUsuarios)
router.get('/getUsuariosById/:id', usuarioController.getUsuarioById);
router.post('/postUsuario', usuarioController.postUsuario)
router.put('/putUsuario/:id', usuarioController.putUsuario)
router.delete('/deleteUsuario/:id', usuarioController.deletePersona)
module.exports = router;
