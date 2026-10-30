const db = require('../config/dbConfig');



class Rol {
    getRol(callback) {
        const sql = "select * from rol";
        db.query(sql,callback);
    }
    
    getRolById(id, callback) {
        const sql = "SELECT * FROM rol WHERE id_rol = ?";
        db.query(sql, [id], callback);
    }


    postRol(nombre_rol, descripcion, callback) {
        const sql = 'insert into rol(nombre_rol, descripcion) values (?,?)';

        db.query(sql, [nombre_rol, descripcion], (err, result) => {
            if(err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }


    putRol(id, nombre_rol, descripcion, callback) {
        const sql = 'update rol set nombre_rol = ?, descripcion = ? where id_rol = ?';

        db.query(sql, [nombre_rol, descripcion], callback)
    }

    deleteRol(id, callback) {
        const sql = 'delete from rol where id_rol = ?';
        db.query(sql, [id], callback)
    }

}

module.exports = new Rol();