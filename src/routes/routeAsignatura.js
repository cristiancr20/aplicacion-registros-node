const express = require('express');

const router = express.Router();

const { registrar, listarasig, editar, borrar } = require('../controllers/controllerAsignatura')

router.post('/crearasignatura', registrar);
router.get('/listarasignatura', listarasig);
router.post('/editarasignatura', editar);
router.get('/borrarasignatura/:_id', borrar);


module.exports = router;