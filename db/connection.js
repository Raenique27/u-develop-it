const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // Your sql username,
        user: 'root',
        // Your mySQL password,
        password: 'rootroot',
        database: 'election'
    });

module.exports = db;