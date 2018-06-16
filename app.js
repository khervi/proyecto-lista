const express = require('express');
const app= express();
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport')
const routes=require('./routes/rutas.js');
const path=require('path');
const connect=require('./conexion.js').connect;
mongoose.connect('mongodb://localhost/listas')

app.set('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))

app.set('view engine', 'pug');
app.use(routes)

app.use(bodyParser.json());//con este module bp es para entender los json que nos manda el navegador
app.use(bodyParser.urlencoded({extended: false}));

connect(()=>{
    app.listen(3000, () => {console.log('Ejemplo abrir en el puerto 3000!');
    });
});