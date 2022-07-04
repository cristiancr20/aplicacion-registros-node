const mongoose = require ('mongoose')

const nuevoEstudiante = mongoose.Schema({
    id: String,
    nombre: String,
    apellido: String,
    cedula: Number,

})


module.exports = mongoose.model('estudiante',nuevoEstudiante);
