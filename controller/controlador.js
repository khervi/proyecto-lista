const conn = require("../conexion.js");
const bodyParser=require('body-parser');
const passport=require('passport');
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.redirect('/');
}
//get login page
const index = (req,res)=> {
    res.render('index',{ message: req.flash('message') })
}
const login = (req,res,next)=> { 
    res.render('logeo') }

const logeado = (req,res,next) => {passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true  
})}

const registro=(req,res,next) => {
    res.render('registrar',{message: req.flash('message')})
}
const home= (isAuthenticated, function(req, res){
    res.render('home', { user: req.user });
})

const newuser = (req,res,next) => {passport.authenticate('index', {
    successRedirect: '/home',
    failureRedirect: '/crear',
    failureFlash : true  
})
	const db = conn.get();

	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	//console.log(req.body)
	db.collection("usuarios").insertOne({username:username,email:email,password:password});
	res.redirect('/');
};

module.exports = {
    index,
    login,
    logeado,
    registro,
    newuser
}