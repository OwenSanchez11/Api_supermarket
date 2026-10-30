const db = require('../config/dbConfig');


class Ventas {

    getVentas(callback) {
        const sql = 'SELECT * FROM ventas';
        db.query(sql, callback);
    }

    getVentaById(id, callback) {
        const sql = 'SELECT * FROM ventas WHERE id_venta = ?';
        db.query(sql, [id], callback);
    }

    postVenta(fecha, total, id_cliente, id_empleado, callback) {
        const sql = 'INSERT INTO ventas(fecha, total, id_cliente, id_empleado) VALUES (?, ?, ?, ?)';
        db.query(sql, [fecha, total, id_cliente, id_empleado], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putVenta(id, fecha, total, id_cliente, id_empleado, callback) {
        const sql = 'UPDATE ventas SET fecha = ?, total = ?, id_cliente = ?, id_empleado = ? WHERE id_venta = ?';
        db.query(sql, [fecha, total, id_cliente, id_empleado, id], callback);
    }

    deleteVenta(id, callback) {
        const sql = 'DELETE FROM ventas WHERE id_venta = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Ventas();
