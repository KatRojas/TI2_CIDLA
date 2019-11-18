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

//codigo
router.get('/codigo', isAuthenticated, async (req, res) => {
  res.render('arq/codigo');
});
//codigo2
router.get('/codigo2', isAuthenticated, async (req, res) => {
  res.render('arq/codigo2');
});
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
router.get('/arquetipo/nuevo_paciente', isAuthenticated,(req, res)=>{
  res.render('arq/new-paciente');
});


//crea al nuevo paciente mediante la estructura Schema
router.post('/arquetipo/nuevo_paciente',isAuthenticated, async(req,res)=>{
  paciente.create(req.body).then(function(npaciente){
    //res.send(npaciente);
    res.render('arq/paciente');
  });
});

//Se obtienen todos los archivos de pacientes
router.get('/arquetipo/fichas', isAuthenticated, async (req, res) => {
  const patients = await paciente.find().sort({firstname:-1});
  res.render('arq/all-paciente', { patients });
});

//Update de datos
router.get('/arquetipo/edit/:id', async (req, res)=>{
  const editpatient = await paciente.findById(req.params.id);
  res.render('arq/edit-paciente', {editpatient});
});

/*
const updatepatient = {firstname , lastname,age,birthday,run,adress,number,city,commune,email,gender,civilstatus,healthsystem,mobilephone,
  landline, namedoctor,lastnamedoctor,specialty,mobildoctor,bloodtype,antibioname,medicine,foods,animals,bites,
   surgicalbackground,diseasename,medicationname,dosage};
*/

router.put('/arquetipo/edit-paciente/:id', async (req, res)=>{

  const {firstname, lastname,age,birthday,run,adress,number,city,commune,email,gender,civilstatus,healthsystem,mobilephone,
        landline, namedoctor,lastnamedoctor,specialty,mobildoctor,bloodtype,antibioname,medicine,foods,animals,bites,
        surgicalbackground,diseasename,medicationname,dosage} = req.body;
  
  await paciente.findByIdAndUpdate(req.params.id , {firstname,lastname,age,birthday,run,adress,number,city,commune,email,gender,civilstatus,healthsystem,mobilephone,
                                                    landline, namedoctor,lastnamedoctor,specialty,mobildoctor,bloodtype,antibioname,medicine,foods,animals,bites,
                                                    surgicalbackground,diseasename,medicationname,dosage});
  req.flash('success_msg', 'Datos del paciente actualizados');
  //res.redirect('/arquetipo/fichas');
  res.render('arq/edit-paciente');
});



module.exports = router;
