const mongoose = require('mongoose'); //es un modulo que nos facilita la conexion con  mongo

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/ti2', { //le decimos que la db sera local y se llamara ti2
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('La base de datos esta conectada'))
  .catch(err => console.error(err));
