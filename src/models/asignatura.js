const mongoose = require ('mongoose')

const nuevaAsignatura = mongoose.Schema({
    nombre:String,
    creditos: String,
    

},{versionKey:false})


module.exports = mongoose.model('Asignatura',nuevaAsignatura)