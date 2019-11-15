var connectionPool = require('../shared/utils').createConnection();
var Tweet = require('../models/Tweet');
var api = {};


api.postTweet = (req, res) => {

    const obj = req.body;

    const query = `insert into tweet (message, date, fk_user) values ('${obj.message}', NOW(), ${+obj.id});`;
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {
            res.status(200).json({ message: 'Tweet publicado com sucesso', result: true });
        }
    });

}

api.recentsTweets = (req, res) => {

    const id = +req.params.id;

    const query  = `select tweet.id, message, date, user.name from tweet inner join user on tweet.fk_user = user.id where fk_user in (select fk_another_user from follow where fk_user = ${id}) order by date desc;`
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {

            const tweets = [];
            results.forEach(element => tweets.push(new Tweet(element.id, element.message, element.name, element.date)));

            res.status(200).json({ message: 'Tweets retornados com sucesso', results: tweets });
        }
    });


}

api.userTweet = (req, res) => {

    const id = +req.params.id;

    const query  = `select tweet.id, message, date, user.name from tweet inner join user on tweet.fk_user = user.id where tweet.id = ${id};`
    connectionPool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Falha ao executar as querys' });
        } else {

            let tweet = new Tweet(results[0].id, results[0].message, results[0].name, results[0].date);

            res.status(200).json({ message: 'Tweets retornados com sucesso', result: tweet });
        }
    });

}

module.exports = api;