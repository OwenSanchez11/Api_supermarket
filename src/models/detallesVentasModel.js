const db = require('../config/dbConfig');

class DetalleVenta {
    getDetallesVentas(callback) {
        const sql = 'SELECT * FROM detalles_ventas';
        db.query(sql, callback);
    }

    getDetalleVentaById(id, callback) {
        const sql = 'SELECT * FROM detalles_ventas WHERE id_detalle_venta = ?';
        db.query(sql, [id], callback);
    }

    postDetalleVenta(id_venta, id_producto, cantidad, precio_unitario, subtotal, callback) {
        const sql = 'INSERT INTO detalles_ventas (id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [id_venta, id_producto, cantidad, precio_unitario, subtotal], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putDetalleVenta(id, id_venta, id_producto, cantidad, precio_unitario, subtotal, callback) {
        const sql = 'UPDATE detalles_ventas SET id_venta = ?, id_producto = ?, cantidad = ?, precio_unitario = ?, subtotal = ? WHERE id_detalle_venta = ?';
        db.query(sql, [id_venta, id_producto, cantidad, precio_unitario, subtotal, id], callback);
    }

    deleteDetalleVenta(id, callback) {
        const sql = 'DELETE FROM detalles_ventas WHERE id_detalle_venta = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new DetalleVenta();
