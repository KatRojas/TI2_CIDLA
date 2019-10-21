const express = require('express');
const router = express.Router();

// Models
const Note = require('../models/Note');

// Helpers
const { isAuthenticated } = require('../helpers/auth');


//muestra arquetipo
router.get('/arquetipo', isAuthenticated, async (req, res) => {
  const notes = await Note.find({user: req.user.id}).sort({date: 'desc'});
  res.render('arq/arque', { notes });
});
//muestra perfil con datos
router.get('/perfil', isAuthenticated, async (req, res) => {
  const notes = await Note.find({user: req.user.id}).sort({date: 'desc'});
  res.render('arq/perfil', { notes });
});

module.exports = router;
