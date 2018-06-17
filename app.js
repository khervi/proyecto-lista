const express = require('express');
const app= express();
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
//const passport=require('passport')
const routes=require('./routes/rutas.js');
const path=require('path');
const cookieParser = require('cookie-parser');
const connect=require('./conexion.js').connect;
mongoose.connect('mongodb://localhost/listas')
const dbConfig = require('./db.js');
mongoose.connect(dbConfig.url);

app.set('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'pug');

app.use(bodyParser.json());//con este module bp es para entender los json que nos manda el navegador
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const passport = require('passport');
const expressSession = require('express-session');

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

const flash = require('connect-flash');
app.use(flash());
//inicializando Passport
var initPassport = require('./passport/init');
initPassport(passport);

  //RUTAS
app.use(routes)

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

connect(()=>{
    app.listen(3000, () => {console.log('Ejemplo abrir en el puerto 3000!');
    });
});