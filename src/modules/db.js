const mysql = require('mysql2/promise'); //importa a dependência do mysql2 como a constante 'mysql'
const conexao = mysql.createPool({ // cria uma conexao com o banco de dados disponievl localmente no computador
    host: process.env.DB_HOST, // tipo de host utilizado, no caso o localhost
    user: process.env.DB_USER, // user do mysql workbench
    password: process.env.DB_USER, // senha do banco de dados
    database: process.env.DB_DATABASE //nome do banco de dados
}
);
module.exports=conexao
