const express = require('express');

const router = express.Router();

const controladorEstudiante= require('../controllers/controllerEstudiante')

router.post('/crearestudiante', controladorEstudiante.registrar);
router.get('/listarestudiante', controladorEstudiante.listar);


module.exports = router;