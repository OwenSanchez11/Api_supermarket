const detallesProductosModel = require('../models/detallesProductosModel');

const camposValidos = ({id_producto, marca, peso, unidad_medida, fecha_vencimiento}) =>
    id_producto !== undefined && id_producto !== null && id_producto !== '' && Number.isInteger(Number(id_producto)) &&
    typeof marca === 'string' && marca.trim() !== '' &&
    peso !== undefined && peso !== null && peso !== '' && Number.isFinite(Number(peso)) && Number(peso) >= 0 &&
    typeof unidad_medida === 'string' && unidad_medida.trim() !== '' &&
    (fecha_vencimiento === null || fecha_vencimiento === undefined || typeof fecha_vencimiento === 'string');

module.exports = {
    getDetallesProductos: (req, res) => {
        detallesProductosModel.getDetallesProductos((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getDetalleProductoById: (req, res) => {
        const {id} = req.params;
        detallesProductosModel.getDetalleProductoById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Detalle de producto no encontrado'});
            res.status(200).json({data: result[0]});
        });
    },

    postDetalleProducto: (req, res) => {
        const {id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento} = req.body;
        if (!camposValidos({id_producto, marca, peso, unidad_medida, fecha_vencimiento})) {
            return res.status(400).json({message: 'id_producto, marca, peso y unidad_medida son obligatorios; peso debe ser no negativo y fecha_vencimiento debe ser una fecha en texto o null'});
        }

        detallesProductosModel.postDetalleProducto(
            Number(id_producto), marca.trim(), descripcion ?? null, Number(peso), unidad_medida.trim(), fecha_vencimiento ?? null,
            (err, idInsertado) => {
                if (err) return res.status(500).json({error: err.message});
                res.status(201).json({message: 'Detalle de producto creado correctamente', data: {id_detalle: idInsertado}});
            }
        );
    },

    putDetalleProducto: (req, res) => {
        const {id} = req.params;
        const {id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento} = req.body;
        if (!camposValidos({id_producto, marca, peso, unidad_medida, fecha_vencimiento})) {
            return res.status(400).json({message: 'id_producto, marca, peso y unidad_medida son obligatorios; peso debe ser no negativo y fecha_vencimiento debe ser una fecha en texto o null'});
        }

        detallesProductosModel.putDetalleProducto(
            id, Number(id_producto), marca.trim(), descripcion ?? null, Number(peso), unidad_medida.trim(), fecha_vencimiento ?? null,
            (err, result) => {
                if (err) return res.status(500).json({error: err.message});
                if (result.affectedRows === 0) return res.status(404).json({message: 'Detalle de producto no encontrado'});
                res.status(200).json({message: 'Detalle de producto actualizado correctamente'});
            }
        );
    },

    deleteDetalleProducto: (req, res) => {
        const {id} = req.params;
        detallesProductosModel.deleteDetalleProducto(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Detalle de producto no encontrado'});
            res.status(200).json({message: 'Detalle de producto eliminado correctamente'});
        });
    }
};
