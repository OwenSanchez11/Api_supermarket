const categoriasModel = require('../models/categoriasModel');

module.exports = {
    getCategorias: (req, res) => {
        categoriasModel.getCategorias((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getCategoriaById: (req, res) => {
        const {id} = req.params;
        categoriasModel.getCategoriaById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Categoría no encontrada'});
            res.status(200).json({data: result[0]});
        });
    },

    postCategoria: (req, res) => {
        const {nombre, descripcion} = req.body;
        if (!nombre || typeof nombre !== 'string') {
            return res.status(400).json({message: 'El campo nombre es obligatorio'});
        }

        categoriasModel.postCategoria(nombre, descripcion ?? null, (err, idInsertado) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Categoría creada correctamente', data: {id_categoria: idInsertado}});
        });
    },

    putCategoria: (req, res) => {
        const {id} = req.params;
        const {nombre, descripcion} = req.body;
        if (!nombre || typeof nombre !== 'string') {
            return res.status(400).json({message: 'El campo nombre es obligatorio'});
        }

        categoriasModel.putCategoria(id, nombre, descripcion ?? null, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Categoría no encontrada'});
            res.status(200).json({message: 'Categoría actualizada correctamente'});
        });
    },

    deleteCategoria: (req, res) => {
        const {id} = req.params;
        categoriasModel.deleteCategoria(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Categoría no encontrada'});
            res.status(200).json({message: 'Categoría eliminada correctamente'});
        });
    }
};
