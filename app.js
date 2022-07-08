const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

//para poder hacer peticiones al servidor
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//conection bd
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true
}).then(()=>{
  console.log('connect')
})



const port = process.env.PORT;

app.listen(port, () => {
  console.log('aplicacion ejucatandose');
});

//seteamos el motor para la plantilla EJS
app.set('view engine', 'ejs')

//para la carpeta public que sera estatica para archivos css, img, js
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const estudiante= require('./src/routes/routeEstudiante')
app.use(estudiante)
const profesor= require('./src/routes/routeProfesor')
app.use(profesor)
const asignatura= require('./src/routes/routeAsignatura')
app.use(asignatura)
const inicio = require('./src/routes/index')
app.use(inicio)
