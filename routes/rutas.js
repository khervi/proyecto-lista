const express = require('express');
const router = express.Router();
const indexController = require('../controller/controlador.js');

router.get('/',indexController.index);
router.get('/login',indexController.login);
router.get('/registrar',indexController.registro);
router.post('/crear/', indexController.newuser);

module.exports = router;