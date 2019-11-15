var connectionPool = require('../shared/utils').createConnection();
var queryObj = require('../shared/querys');

var api = {};

api.createTables = (req, res) => {

    connectionPool.connect((err) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao criar conexão' });
        } else {

            let querys = queryObj.querysDb();
            connectionPool.query(querys, (err, results) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Falha ao executar as querys' });
                } else {
                    console.log(results);
                    res.status(200).json({ message: 'Tabelas criadas com sucessos' });
                }
            });

        }
    });

}



module.exports = api;