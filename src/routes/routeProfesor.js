const express = require('express');
const router = express.Router();
const {registrar, listar, editar, borrar}= require('../controllers/controllerProfesor')


router.post('/registrarprofesor', registrar);
router.get('/listarprofesor', listar);
router.post('/editarprofesor', editar);
router.get('/borrarprofesor/:_id', borrar);

module.exports = router;


