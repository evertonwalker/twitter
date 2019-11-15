var api = {};

api.querysDb = () => {


    const userQuery = `create table user(id INT primary key AUTO_INCREMENT, name varchar(255) NOT NULL);`

    const tweetQuery = `create table tweet(id INT primary key AUTO_INCREMENT, message varchar(500) NOT NULL, date timestamp , fk_user int,FOREIGN KEY (fk_user) REFERENCES user(id));`

    const followQuery = `create table follow( id int primary key AUTO_INCREMENT, fk_user int, fk_another_user int, FOREIGN KEY (fk_user) REFERENCES user(id), FOREIGN KEY (fk_another_user) REFERENCES user(id));`

    const querys = [userQuery, tweetQuery, followQuery];

    const insertUsers = `INSERT INTO user VALUES (1, 'Everton Walker'), (2, 'Sandro'), (3, 'Alvaro'), (4, 'Gabriel'), (5, 'Aziel'), (6, 'Gleibson');`

    return querys;
}



module.exports = api;