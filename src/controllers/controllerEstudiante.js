 const Estudiante= require('../models/estudiante');

//Listar
module.exports.listar = (req, res) => {
    Estudiante.find({},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('estudiante.ejs', {data: data})
        /* res.render('Home'); */

    })
}

//registro
module.exports.registrar = (req, res) => {
    console.log('req.body', req.body); // { "name": "Arturo Filio", "email": "test@test.com", "password":"test123" }

    const {id,nombre, apellido, cedula}=req.body
    const nuevoRegistro = new Estudiante({
        id,
        nombre, 
        apellido,
        cedula
    })
    nuevoRegistro.save((error, user) => {
        console.log("Registro Exitoso")
        if (error) {
            return res.status(400).json({
                error: "Porfavor revisa los datos"
            })
        }
        res.redirect('/listarestudiante');
    })
}

//editar
exports.editar = (req,res)=>{
    
    const id=req.body.id_editar;
    const nombre=req.body.nombre_editar;
    const apellido = req.body.apellido_editar;
    const cedula=req.body.cedula_editar;

    console.log(id,nombre,apellido,cedula);
    Estudiante.findByIdAndUpdate(id, {nombre,apellido,cedula},(error,data)=>{
        if (error){
            return res.status(500).json({
                message:'Error updating',error
            })
        }
        res.redirect('/listarestudiante')
    }) 
}

//borrar
exports.borrar = (req, res)=>{
    const id = req.params._id
    Estudiante.findByIdAndRemove(id, (error, data)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Estudiante'
            })
        }
        res.redirect('/listarestudiante')
    })
}