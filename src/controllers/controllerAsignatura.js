const Asignatura = require('../models/asignatura');


//Listar
exports.listar = (req, res) => {
    Asignatura.find({},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('asignatura.ejs', {data: data})
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

