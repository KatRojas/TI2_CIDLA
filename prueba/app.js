var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/proyecto');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-pacientes', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('pacientes').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-pacientes',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('pacientes').find({}).toArray().then(function(pacientes) {
            res.status(200).json(pacientes);
        });
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );