const db = require('../config/dbConfig');

class Producto {
    getProductos(callback) {
        const sql = 'SELECT * FROM productos';
        db.query(sql, callback);
    }

    getProductoById(id, callback) {
        const sql = 'SELECT * FROM productos WHERE id_producto = ?';
        db.query(sql, [id], callback);
    }

    postProducto(nombre_producto, precio, id_categoria, callback) {
        const sql = 'INSERT INTO productos (nombre_producto, precio, id_categoria) VALUES (?, ?, ?)';
        db.query(sql, [nombre_producto, precio, id_categoria], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putProducto(id, nombre_producto, precio, id_categoria, callback) {
        const sql = 'UPDATE productos SET nombre_producto = ?, precio = ?, id_categoria = ? WHERE id_producto = ?';
        db.query(sql, [nombre_producto, precio, id_categoria, id], callback);
    }

    deleteProducto(id, callback) {
        const sql = 'DELETE FROM productos WHERE id_producto = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Producto();
