const express = require('express');
const router = express.Router();
const indexController = require('../controller/controlador.js');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.redirect('/');
}


router.get('/',indexController.index);
router.get('/login',indexController.login);
router.get('/registrar',indexController.registro);
router.post('/crear', indexController.newuser);
router.post('/login',indexController.logeado)



module.exports = router;
/*var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/')};
module.exports = function(passport){

	// GET login page. 
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	// Handle Login POST 
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	 //GET Registration Page 
	router.get('/login', function(req, res){
		res.render('registrar',{message: req.flash('message')});
	});

	 //Handle Registration POST 
	router.post('/registrar', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/crear',
		failureFlash : true  
	}));*/

	/* GET Home Page 
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	/* Handle Logout 
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}
*/