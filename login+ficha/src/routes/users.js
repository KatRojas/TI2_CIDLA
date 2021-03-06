const router = require('express').Router();
const passport = require('passport');

// Models
const User = require('../models/User');

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if(password != confirm_password) {
    errors.push({text: 'Las contraseñas no coinciden.'});
  }
  if(password.length < 4) {
    errors.push({text: 'Las contraseñas deben tener al menos 4 caracteres..'})
  }
  if(errors.length > 0){
    res.render('users/signup', {errors, name, email, password, confirm_password});
  } else {
    // Busca si hay coincidencia de correo electrónico
    const emailUser = await User.findOne({email: email});
    if(emailUser) {
      req.flash('error_msg', 'El correo electrónico ya está en uso..');
      res.redirect('/users/signup');
    } else {
      // guardando el nuevo usuario
      const newUser = new User({name, email, password});
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Estas registrado.');
      res.redirect('/users/signin');
    }
  }
});

router.get('/users/signin', (req, res) => {
  res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/arquetipo',
  failureRedirect: '/users/signin',
  failureFlash: true
}));

router.get('/users/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Sesion finalizada.');
  res.redirect('/users/signin');
});

module.exports = router;
