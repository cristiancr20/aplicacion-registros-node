const Profesor = require('../models/profesor');


//Listar
exports.listar = (req, res) => {
    Profesor.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('profesor.ejs', {data: data})

    })
}

//registro
exports.registrar = (req, res) => {
    console.log('req.body', req.body); // { "name": "Arturo Filio", "email": "test@test.com", "password":"test123" }

    const {id,nombre, apellido, cedula}=req.body
    const nuevoRegistro = new Profesor({
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
        res.redirect('/listarprofesor');
    })
}