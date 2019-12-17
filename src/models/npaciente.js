const mongoose = require('mongoose');
const { Schema } = mongoose;

const npaciente = new mongoose.Schema({
        firstname: {type: String,min: 3, max:25},
        lastname:{type: String,min: 3, max:30},
        age:{type: Number,min: 1, max:99},
        birthday:{type: Date},
        run:{type: String},
        adress:{type: String},
        number:{type: Number},
        city:{type: String},
        commune:{type: String},
        email:{type:String},
        gender:{type: String},
        civilstatus:{type: String},
        healthsystem:{type: String},
        mobilephone:{type: Number},
        landline:{type: Number},
        namedoctor:{type: String},
        lastnamedoctor:{ type: String},
        specialty:{type: String},
        mobildoctor:{type: String},
        bloodtype: {type: String},
        antibioname: {type:String},
        medicine:{type:String},
        foods: {type:String},
        animals:{type:String},
        bites:{type:String},
        surgicalbackground:{type: String},
        diseasename:{type:String},
        medicationname:{type:String},
        dosage:{type:String},
        create:{ type: Date, default: Date.now}

});

const paciente = mongoose.model('npaciente', npaciente);
module.exports = paciente;

  