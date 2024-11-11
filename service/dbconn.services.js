const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: 'teaching'
});

module.exports = connection;