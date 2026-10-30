const db = require('../config/dbConfig');

class DetalleProducto {
    getDetallesProductos(callback) {
        const sql = 'SELECT * FROM detalles_producto';
        db.query(sql, callback);
    }

    getDetalleProductoById(id, callback) {
        const sql = 'SELECT * FROM detalles_producto WHERE id_detalle = ?';
        db.query(sql, [id], callback);
    }

    postDetalleProducto(id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento, callback) {
        const sql = 'INSERT INTO detalles_producto (id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putDetalleProducto(id, id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento, callback) {
        const sql = 'UPDATE detalles_producto SET id_producto = ?, marca = ?, descripcion = ?, peso = ?, unidad_medida = ?, fecha_vencimiento = ? WHERE id_detalle = ?';
        db.query(sql, [id_producto, marca, descripcion, peso, unidad_medida, fecha_vencimiento, id], callback);
    }

    deleteDetalleProducto(id, callback) {
        const sql = 'DELETE FROM detalles_producto WHERE id_detalle = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new DetalleProducto();
