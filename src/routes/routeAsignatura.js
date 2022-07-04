const express = require('express');

const router = express.Router();

const { registrar, listar } = require('../controllers/controllerAsignatura')

router.post('/crearasignatura', registrar);
router.get('/listarasignatura', listar);


module.exports = router;