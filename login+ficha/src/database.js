const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/ti2', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('La base de datos esta conectada'))
  .catch(err => console.error(err));
