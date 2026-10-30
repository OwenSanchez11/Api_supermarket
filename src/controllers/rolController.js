const rolModel = require('../models/rolModel');

module.exports = {

    getRol: (req, res) => {
        rolModel.getRol((err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getRolById: (req, res) => {
        const {id} = req.params;
        rolModel.getRolById(id, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postRol: (req, res) => {
        const {nombre_rol, descripcion} = req.body;

        rolModel.postRol(nombre_rol, descripcion, (err, result) => {
            if(err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Rol creado correctamente', data: {idInsertado: result}});

        })
    },

    putRol: (req, res) => {
        const {id} = req.params;
        const {nombre_rol, descripcion} = req.body;

        rolModel.putRol(id, nombre_rol, descripcion, (err, result) => {
            if (err) {
                res.status(500).json({error: err.message});
                return;
            }

            if(result.affectedRows === 0) {
                res.status(404).json({message: 'Rol no encontrado'});
                return;
            }
            res.status(200).json({message: 'Rol actualizado correctamente'});

        });
    },

    deleteRol: (req, res) => {
        const {id} = req.params;

        rolModel.deleteRol(id, (err, result) => {
            if (err) {
                res.status(500).json({error: err.message});
                return;
            }
             res.status(200).json({message: 'Usuario eliminado correctamente'});
        })
    }

}