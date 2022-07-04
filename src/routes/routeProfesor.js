const express = require('express');
const router = express.Router();
const {registrar, listar}= require('../controllers/controllerProfesor')

router.post('/registrarprofesor', registrar);
router.get('/listarprofesor', listar);


module.exports = router;


