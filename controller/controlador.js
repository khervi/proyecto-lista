const conn = require("../conexion.js");

const index = (req,res,next)=> {
    res.render('index')
}
const login = (req,res,next)=> { 
    res.render('logeo') }

const registro=(req,res,next)=>{
    res.render('registrar')
}

const newuser = (req, res,next) => {
	const db = conn.get();

	const user = req.body.user;
	const email = req.body.email;
	const pass = req.body.pass;
	
	db.collection("usuarios").insertOne({user:user,email:email,pass:pass});
	res.redirect('/');
};

module.exports = {
    index,
    login,
    registro,
    newuser
}