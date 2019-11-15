var User = require('../models/user');
var connectionPool = require('../shared/utils').createConnection();

var api = {};

api.getAllUsers = (req, res) => {
    const query = 'select * from user;';
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {
            const users = [];
            results.forEach(element => users.push(new User(element.id, element.name)));
            res.status(200).json({ message: 'Tabelas criadas com sucessos', result: users });
        }
    });
}


module.exports = api;
