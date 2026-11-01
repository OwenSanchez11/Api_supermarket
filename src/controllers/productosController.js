const productosModel = require('../models/productosModel');

const camposValidos = ({nombre_producto, precio, id_categoria}) =>
    typeof nombre_producto === 'string' && nombre_producto.trim() !== '' &&
    precio !== undefined && precio !== null && precio !== '' && Number.isFinite(Number(precio)) &&
    id_categoria !== undefined && id_categoria !== null && id_categoria !== '' && Number.isInteger(Number(id_categoria));

module.exports = {
    getProductos: (req, res) => {
        productosModel.getProductos((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getProductosDetalle: (req, res) => {
        productosModel.getProductosDetalle((err, result) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json({data: result});
        });
    },

    getProductoById: (req, res) => {
        const {id} = req.params;
        productosModel.getProductoById(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.length === 0) return res.status(404).json({message: 'Producto no encontrado'});
            res.status(200).json({data: result[0]});
        });
    },

    postProducto: (req, res) => {
        const {nombre_producto, precio, id_categoria} = req.body;
        if (!camposValidos({nombre_producto, precio, id_categoria})) {
            return res.status(400).json({message: 'nombre_producto, precio e id_categoria son obligatorios y deben tener un formato válido'});
        }

        productosModel.postProducto(nombre_producto.trim(), Number(precio), Number(id_categoria), (err, idInsertado) => {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Producto creado correctamente', data: {id_producto: idInsertado}});
        });
    },

    putProducto: (req, res) => {
        const {id} = req.params;
        const {nombre_producto, precio, id_categoria} = req.body;
        if (!camposValidos({nombre_producto, precio, id_categoria})) {
            return res.status(400).json({message: 'nombre_producto, precio e id_categoria son obligatorios y deben tener un formato válido'});
        }

        productosModel.putProducto(id, nombre_producto.trim(), Number(precio), Number(id_categoria), (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Producto no encontrado'});
            res.status(200).json({message: 'Producto actualizado correctamente'});
        });
    },

    deleteProducto: (req, res) => {
        const {id} = req.params;
        productosModel.deleteProducto(id, (err, result) => {
            if (err) return res.status(500).json({error: err.message});
            if (result.affectedRows === 0) return res.status(404).json({message: 'Producto no encontrado'});
            res.status(200).json({message: 'Producto eliminado correctamente'});
        });
    }
};
