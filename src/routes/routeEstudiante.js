const express = require('express');

const router = express.Router();

const controladorEstudiante= require('../controllers/controllerEstudiante')

router.post('/crearestudiante', controladorEstudiante.registrar);
router.get('/listarestudiante', controladorEstudiante.listar);
router.post('/editarestudiante', controladorEstudiante.editar);
router.get('/borrarestudiante/:_id', controladorEstudiante.borrar);


module.exports = router;