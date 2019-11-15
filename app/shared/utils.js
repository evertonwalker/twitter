var mysql = require('mysql');

var api = {};

api.createConnection = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'twitter',
        multipleStatements: true,
    });
}

module.exports = api;