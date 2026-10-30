const db = require('../config/dbConfig');

class Categorias {
    getCategorias(callback) {
        const sql = 'SELECT * FROM categorias';
        db.query(sql, callback);
    }

    getCategoriaById(id, callback) {
        const sql = 'SELECT * FROM categorias WHERE id_categoria = ?';
        db.query(sql, [id], callback);
    }

    postCategoria(nombre, descripcion, callback) {
        const sql = 'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)';
        db.query(sql, [nombre, descripcion], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result.insertId);
        });
    }

    putCategoria(id, nombre, descripcion, callback) {
        const sql = 'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?';
        db.query(sql, [nombre, descripcion, id], callback);
    }

    deleteCategoria(id, callback) {
        const sql = 'DELETE FROM categorias WHERE id_categoria = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new Categorias();
