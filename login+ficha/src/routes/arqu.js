const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// Models
const Note = require('../models/Note');
const paciente = require('../models/npaciente');
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

//muestra form para nuevo arquetipo
router.get('/nuevo_paciente', (req, res)=>{
  res.render('arq/paciente');
});

//crea al nuevo paciente mediante la estructura Schema
router.post('/nuevo_paciente',isAuthenticated, async(req,res)=>{
  paciente.create(req.body).then(function(npaciente){
    //res.send(npaciente);
    res.render('arq/paciente');
  });
});

module.exports = router;
