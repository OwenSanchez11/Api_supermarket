const db = require('../config/dbConfig');

class Producto {
    getProductos(callback) {
        const sql = 'SELECT * FROM productos';
        db.query(sql, callback);
    }

    getProductosDetalle(callback) {
        const sql = `
            SELECT
                p.id_producto,
                p.nombre_producto,
                c.nombre AS categoria,
                d.marca,
                CONCAT(d.peso, ' ', d.unidad_medida) AS presentacion,
                p.precio,
                i.stock,
                DATE_FORMAT(d.fecha_vencimiento, '%d/%m/%Y') AS vencimiento
            FROM productos p
            LEFT JOIN categorias c ON p.id_categoria = c.id_categoria
            LEFT JOIN detalles_producto d ON p.id_producto = d.id_producto
            LEFT JOIN inventario i ON p.id_producto = i.id_producto
            ORDER BY p.id_producto
        `;
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
