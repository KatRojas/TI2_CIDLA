var express = require("express");
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require("mongoose");
/*
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");
*/

var promise = mongoose.connect('mongodb://localhost:27017/node-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  /* other options */
});


var nameSchema = new mongoose.Schema({
 nombre: String,
 apellido: String,
 edad: String,
 fecha_de_nacimiento: Date,
 email: String,
 genero: String,
 estado: String,
 direccion: String,
 sistema: String,
 medico:String,
 especialidad: String,
 diagnostico: String

});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});



app.post("/add_patient", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("datos guardados");
 })
 .catch(err => {
 res.status(400).send("imposible");
 });
});



app.listen(port, () => {
 console.log("Server listening on port " + port);
});