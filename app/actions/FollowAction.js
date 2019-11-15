var api = {};

var connectionPool = require('../shared/utils').createConnection();

api.followUser = (req, res) => {

    const obj = req.body;

    const query = `insert into follow (fk_user, fk_another_user) values (${+obj.userOne}, ${+obj.userTwo});`;
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {
            res.status(200).json({ message: 'Seguido com sucesso', result: true });
        }
    });
}

api.unFollowUser = (req, res) => {
    const obj = req.body;
    const query = `DELETE FROM follow WHERE fk_user = ${+obj.userOne} AND fk_another_user = ${+obj.userTwo};`;
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {
            res.status(200).json({ message: 'Parou de seguir com sucesso', result: true });
        }
    });
}

api.getFollowsUsers = (req, res) => {

    const id = req.params.id;

    const query = `select fk_another_user from follow where fk_user = ${+id};`;
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {
            res.status(200).json({ message: 'Seguido com sucesso', results });
        }
    });


}




module.exports = api;