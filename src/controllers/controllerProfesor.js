const Profesor = require('../models/profesor');

//Listar
exports.listar = (req, res) => {
    Profesor.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('profesor.ejs',  {data: data})

    })
}

//registro
exports.registrar = (req, res) => {
    console.log('req.body', req.body); // { "name": "Arturo Filio", "email": "test@test.com", "password":"test123" }

    const {nombre, apellido, cedula}=req.body
    const nuevoRegistro = new Profesor({
        nombre, 
        apellido,
        cedula,
    })
    nuevoRegistro.save((error, user) => {
        console.log("Registro Exitoso")
        if (error) {
            return res.status(400).json({
                error: "Porfavor revisa los datos"
            })
        }
        res.redirect('/listarprofesor');
    })
    
}

//editar
exports.editar = (req,res)=>{
    
    const id=req.body.id_editar;
    const nombre=req.body.nombre_editar;
    const apellido = req.body.apellido_editar;
    const cedula=req.body.cedula_editar;

    console.log(id,nombre,apellido,cedula);
    Profesor.findByIdAndUpdate(id, {nombre,apellido,cedula},(error,data)=>{
        if (error){
            return res.status(500).json({
                message:'Error updating',error
            })
        }
        res.redirect('/listarprofesor')
    }) 
}

//borrar
exports.borrar = (req, res)=>{
    const id = req.params._id
    Profesor.findByIdAndRemove(id, (error, data)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Profesor'
            })
        }
        res.redirect('/listarprofesor')
    })
}
