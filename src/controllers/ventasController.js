const ventasModel = require('../models/ventasModel');

module.exports = {
    getVentas: (req, res) => {
        ventasModel.getVentas((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getVentaById: (req, res) => {
        const {id} = req.params;
        ventasModel.getVentaById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Venta no encontrada'});
            res.status(200).json({data: result[0]});
        });
    },

    postVenta: (req, res) => {
        const {fecha, total, id_cliente, id_empleado} = req.body;
        ventasModel.postVenta(fecha, total, id_cliente, id_empleado, (err, idInsertado) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Venta creada correctamente', data: {idInsertado}});
        });
    },

    putVenta: (req, res) => {
        const {id} = req.params;
        const {fecha, total, id_cliente, id_empleado} = req.body;
        ventasModel.putVenta(id, fecha, total, id_cliente, id_empleado, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Venta no encontrada'});
            res.status(200).json({message: 'Venta actualizada correctamente'});
        });
    },

    deleteVenta: (req, res) => {
        const {id} = req.params;
        ventasModel.deleteVenta(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Venta no encontrada'});
            res.status(200).json({message: 'Venta eliminada correctamente'});
        });
    }
};
