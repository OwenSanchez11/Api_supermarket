const db = require('../config/dbConfig');



class Usuario {
    
    getUsuarios(callback) {
        const sql = "select * from usuario";
        db.query(sql,callback);
    }


    getUsuarioById(id, callback) {
        const sql = "SELECT * FROM usuario WHERE id_usuario = ?";
        db.query(sql, [id], callback);
    }


    postUsuario(nombre, apellido, documento, correo, id_rol, callback) {
        const sql = 'insert into usuario(nombre, apellido, documento, correo, id_rol) values (?,?,?,?,?)';

        db.query(sql, [nombre, apellido, documento, correo, id_rol], (err, result) => {
            if(err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });

    }


    putUsuario(id, nombre, apellido, documento, correo, id_rol,callback) {
        const sql = 'update usuario set nombre = ?, apellido = ?, documento = ?, correo = ?, id_rol = ? where id_usuario = ? ';

        db.query(sql, [nombre, apellido, documento, correo, id_rol, id], callback)
    }


    deleteUsuario(id, callback) {
        const sql = 'delete from usuario where id_usuario = ?';
        db.query(sql, [id], callback);
    }


}

module.exports = new Usuario();