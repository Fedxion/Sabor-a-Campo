const User = require ('../models/User')
const bcrypt = require('bycryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) = {
    bcrypt.hash(req.body.contraseña, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
    })

    let user = new User ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contraseña: req.body.contraseña
    })

    user.save()
    .then(user => {
        res.json({
            message : 'User Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })

}

const login = (req, res, next) => {
    var usernombre = req.body.usernombre
    // var userapellido = req.body.userapellido
    // var useremail = req.body.email
    var usercontraseña = req.body.contraseña

    User.findOne({$or: [{email : usernombre}, {apellido: usernombre}] })
    .then(user => {
        if(user{
            if(user){
                bycript.compare(contraseña, user.contraseña, function(err, result){
                    if(err){
                        res.json({
                            error : error
                        })
                    }
                    if(result){
                        let token = jwt.sign({nombre: user.nombre}, 'verySecretValue', {expiresIn: '1h'})
                        res.json({
                            message: 'Login Successful!',
                            token 
                        })
                    }else{
                        res.json({
                            message: 'Password does not matched'
                        })
                    }
                })
            }else{
                res.json({
                    message:'No user found'
                })
            }
        })
    });
}

module.exports = {
    register, login
}