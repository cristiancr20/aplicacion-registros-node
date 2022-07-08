const mongoose = require('mongoose')

const nuevoProfesor = mongoose.Schema({
    
    nombre: String,
    apellido:String,
    cedula: String,
    
    
},{versionKey:false})


module.exports = mongoose.model('profesor', nuevoProfesor)