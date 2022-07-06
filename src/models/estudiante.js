const mongoose = require ('mongoose')

const nuevoEstudiante = mongoose.Schema({
    
    nombre: String,
    apellido: String,
    cedula: String,

},{versionKey:false})


module.exports = mongoose.model('estudiante',nuevoEstudiante);
