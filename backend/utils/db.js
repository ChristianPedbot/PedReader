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
        console.error('Erro ao conectar ao banco de dados:');
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});


module.exports = connection;
