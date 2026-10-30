const detallesVentasModel = require('../models/detallesVentasModel');

const camposValidos = ({id_venta, id_producto, cantidad, precio_unitario, subtotal}) =>
    id_venta !== undefined && id_venta !== null && id_venta !== '' && Number.isInteger(Number(id_venta)) &&
    id_producto !== undefined && id_producto !== null && id_producto !== '' && Number.isInteger(Number(id_producto)) &&
    cantidad !== undefined && cantidad !== null && cantidad !== '' && Number.isInteger(Number(cantidad)) && Number(cantidad) > 0 &&
    precio_unitario !== undefined && precio_unitario !== null && precio_unitario !== '' && Number.isFinite(Number(precio_unitario)) && Number(precio_unitario) >= 0 &&
    subtotal !== undefined && subtotal !== null && subtotal !== '' && Number.isFinite(Number(subtotal)) && Number(subtotal) >= 0;

module.exports = {
    getDetallesVentas: (req, res) => {
        detallesVentasModel.getDetallesVentas((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getDetalleVentaById: (req, res) => {
        const {id} = req.params;
        detallesVentasModel.getDetalleVentaById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Detalle de venta no encontrado'});
            res.status(200).json({data: result[0]});
        });
    },

    postDetalleVenta: (req, res) => {
        const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = req.body;
        if (!camposValidos({id_venta, id_producto, cantidad, precio_unitario, subtotal})) {
            return res.status(400).json({message: 'id_venta, id_producto, cantidad, precio_unitario y subtotal son obligatorios; cantidad debe ser un entero positivo y los valores monetarios no negativos'});
        }

        detallesVentasModel.postDetalleVenta(Number(id_venta), Number(id_producto), Number(cantidad), Number(precio_unitario), Number(subtotal), (err, idInsertado) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Detalle de venta creado correctamente', data: {id_detalle_venta: idInsertado}});
        });
    },

    putDetalleVenta: (req, res) => {
        const {id} = req.params;
        const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = req.body;
        if (!camposValidos({id_venta, id_producto, cantidad, precio_unitario, subtotal})) {
            return res.status(400).json({message: 'id_venta, id_producto, cantidad, precio_unitario y subtotal son obligatorios; cantidad debe ser un entero positivo y los valores monetarios no negativos'});
        }

        detallesVentasModel.putDetalleVenta(id, Number(id_venta), Number(id_producto), Number(cantidad), Number(precio_unitario), Number(subtotal), (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Detalle de venta no encontrado'});
            res.status(200).json({message: 'Detalle de venta actualizado correctamente'});
        });
    },

    deleteDetalleVenta: (req, res) => {
        const {id} = req.params;
        detallesVentasModel.deleteDetalleVenta(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Detalle de venta no encontrado'});
            res.status(200).json({message: 'Detalle de venta eliminado correctamente'});
        });
    }
};
