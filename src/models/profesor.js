const mongoose = require ('mongoose')

const nuevoProfesor = mongoose.Schema({
    id: String,
    nombre: String,
    apellido: String,
    cedula: String,
})


module.exports = mongoose.model('profesor',nuevoProfesor)