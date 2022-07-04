const mongoose = require ('mongoose')

const nuevaAsignatura = mongoose.Schema({
    id: String,
    nombre: String,
    creditos: String,
})


module.exports = mongoose.model('Asignatura',nuevaAsignatura)