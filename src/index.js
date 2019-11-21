const express = require('express');//nos permite crear la estructura necesaria para comenzar a trabajar
const exphbs = require('express-handlebars');
const path = require('path'); //mas facil el trabajo de directorios o ficheros
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');//
const passport = require('passport');//modulo express para la autenticacion

// init, aqui son las cosas que tenemos que inicializar 
const app = express();
require('./database');
require('./config/passport');

// configuracion
app.set('port', process.env.PORT || 3000) // si existe un puerto, que lo tome, si no, que use el 3000
app.set('views', path.join(__dirname, 'views')); //con path indicamos donde esta la carpeta views
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs' //extension de archivos hbs, pero puede ser html
}));
app.set('view engine', '.hbs'); 

// middlewares
app.use(express.urlencoded({extended: false})); //recibir formulario para poder entenderlo
app.use(methodOverride('_method'));//mandar formularios con todos los metodos, put, delete, entre otros
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Variables globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// routes, con esto hacemos saber al servidor cuales son las rutas que usaremos para los archivos
app.use(require('./routes'));
app.use(require('./routes/users'));
app.use(require('./routes/arqu'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
