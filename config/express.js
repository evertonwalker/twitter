var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , routes = require('../app/routes/routes'),
    cors = require('cors'),
    path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

routes(app);

module.exports = app;