const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306
})


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Conexión MYSQL exitosa ")
});

module.exports = db;