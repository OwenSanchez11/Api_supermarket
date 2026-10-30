const inventarioModel = require('../models/inventarioModel');

const camposValidos = ({id_producto, stock, stock_minimo, fecha_actualizacion}) =>
    id_producto !== undefined && id_producto !== null && id_producto !== '' && Number.isInteger(Number(id_producto)) &&
    Number.isInteger(Number(stock)) && Number(stock) >= 0 &&
    Number.isInteger(Number(stock_minimo)) && Number(stock_minimo) >= 0 &&
    typeof fecha_actualizacion === 'string' && fecha_actualizacion.trim() !== '';

module.exports = {
    getInventario: (req, res) => {
        inventarioModel.getInventario((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getInventarioById: (req, res) => {
        const {id} = req.params;
        inventarioModel.getInventarioById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Registro de inventario no encontrado'});
            res.status(200).json({data: result[0]});
        });
    },

    postInventario: (req, res) => {
        const {id_producto, stock, stock_minimo, fecha_actualizacion} = req.body;
        if (!camposValidos({id_producto, stock, stock_minimo, fecha_actualizacion})) {
            return res.status(400).json({message: 'id_producto, stock, stock_minimo y fecha_actualizacion son obligatorios; los stocks deben ser enteros no negativos'});
        }

        inventarioModel.postInventario(Number(id_producto), Number(stock), Number(stock_minimo), fecha_actualizacion, (err, idInsertado) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Registro de inventario creado correctamente', data: {id_inventario: idInsertado}});
        });
    },

    putInventario: (req, res) => {
        const {id} = req.params;
        const {id_producto, stock, stock_minimo, fecha_actualizacion} = req.body;
        if (!camposValidos({id_producto, stock, stock_minimo, fecha_actualizacion})) {
            return res.status(400).json({message: 'id_producto, stock, stock_minimo y fecha_actualizacion son obligatorios; los stocks deben ser enteros no negativos'});
        }

        inventarioModel.putInventario(id, Number(id_producto), Number(stock), Number(stock_minimo), fecha_actualizacion, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Registro de inventario no encontrado'});
            res.status(200).json({message: 'Inventario actualizado correctamente'});
        });
    },

    deleteInventario: (req, res) => {
        const {id} = req.params;
        inventarioModel.deleteInventario(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Registro de inventario no encontrado'});
            res.status(200).json({message: 'Registro de inventario eliminado correctamente'});
        });
    }
};
