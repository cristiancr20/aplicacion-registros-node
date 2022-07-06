const Asignatura = require('../models/asignatura');


//Listar
exports.listarasig = (req, res) => {
    Asignatura.find({},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('asignatura.ejs',{data: data})
       
        /* res.render('Home'); */

    })
}

//registro
exports.registrar = (req, res) => {
    console.log('req.body', req.body); // { "name": "Arturo Filio", "email": "test@test.com", "password":"test123" }
    const {id,nombre, creditos}=req.body
    const nuevoRegistro = new Asignatura({
        id,
        nombre, 
        creditos,
    })
    nuevoRegistro.save((error, user) => {
        console.log("Registro Exitoso")
        if (error) {
            return res.status(400).json({
                error: "Porfavor revisa los datos"
            })
        }
        res.redirect('/listarasignatura');
    })
}


//editar
exports.editar = (req,res)=>{
    
    const id=req.body.id_editar;
    const nombre=req.body.nombre_editar;
    const creditos = req.body.creditos_editar;
    

    console.log(id,nombre,creditos);
    Asignatura.findByIdAndUpdate(id, {nombre,creditos,},(error,data)=>{
        if (error){
            return res.status(500).json({
                message:'Error updating',error
            })
        }
        res.redirect('/listarasignatura')
    }) 
}

//borrar
exports.borrar = (req, res)=>{
    const id = req.params._id
    Asignatura.findByIdAndRemove(id, (error, data)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Estudiante'
            })
        }
        res.redirect('/listarasignatura')
    })
}
