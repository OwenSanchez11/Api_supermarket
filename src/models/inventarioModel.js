const db = require('../config/dbConfig');

class Inventario {
    getInventario(callback) {
        const sql = 'SELECT * FROM inventario';
        db.query(sql, callback);
    }

    getInventarioById(id, callback) {
        const sql = 'SELECT * FROM inventario WHERE id_inventario = ?';
        db.query(sql, [id], callback);
    }

    postInventario(id_producto, stock, stock_minimo, fecha_actualizacion, callback) {
        const sql = 'INSERT INTO inventario (id_producto, stock, stock_minimo, fecha_actualizacion) VALUES (?, ?, ?, ?)';
        db.query(sql, [id_producto, stock, stock_minimo, fecha_actualizacion], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putInventario(id, id_producto, stock, stock_minimo, fecha_actualizacion, callback) {
        const sql = 'UPDATE inventario SET id_producto = ?, stock = ?, stock_minimo = ?, fecha_actualizacion = ? WHERE id_inventario = ?';
        db.query(sql, [id_producto, stock, stock_minimo, fecha_actualizacion, id], callback);
    }

    deleteInventario(id, callback) {
        const sql = 'DELETE FROM inventario WHERE id_inventario = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Inventario();
