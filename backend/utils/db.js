const mysql = require('mysql');
require('dotenv');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:');
        return;
    }
    return console.log('Successful connection to MySQL database');
});


module.exports = connection;
