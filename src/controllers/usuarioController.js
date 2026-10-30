const usuarioModel = require('../models/usuarioModel');

module.exports = {

    getUsuarios: (req, res) => {
        usuarioModel.getUsuarios((err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getUsuarioById: (req, res) => {
        const {id} = req.params;
        usuarioModel.getUsuarioById(id, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postUsuario: (req, res) => {
        const {nombre, apellido, documento, correo, id_rol} = req.body;

        usuarioModel.postUsuario(nombre, apellido, documento, correo, id_rol, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Usuario creado correctamente', data: {idInsertado: result}});
        })
    },

    putUsuario: (req, res) => {
        const {id} = req.params;
        const {nombre, apellido, documento, correo, id_rol} = req.body;

        usuarioModel.putUsuario(id, nombre, apellido, documento, correo, id_rol, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).json({message: 'Usuario no encontrado'});
                return;
            }
            res.status(200).json({message: 'Usuario actualizado correctamente'});
        })
    },

    deletePersona: (req, res) => {
        const {id} = req.params;

        usuarioModel.deletePersona(id, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({message: 'Usuario eliminado correctamente'});
        })
    }

}