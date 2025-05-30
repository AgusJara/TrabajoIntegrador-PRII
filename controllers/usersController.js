let datos = require('../db/datos') // borrar 
let bcrypt = require('bcryptjs')

const db = require('../database/models')
const { where } = require('sequelize') 
let users = db.User

let usersController = {
    index: function (req, res) {
        users.findByPk(req.params.id,{
            include:[{association:'usuario_producto'}]
        })
            .then (function (user){
                res.render ('profile', {usuario: user, productos: user.usuario_producto})
        })
    },
    
    profile: function (req,res) { 
        users.findByPk(req.session.userLogueado.id,{
            include: [{association:'usuario_producto'},{association:'usuario_comentario'}]
        })
        .then(function (usuario) {
            return res.render('profile',{usuario:usuario, productos: usuario.usuario_producto})
        })
    

    },
    login: function (req, res,) {
        if(req.session.userLogueado != undefined ){
            return res.redirect('/')
        } else {
            return res.render('login');
        }   

    },

    procesandoLogin: function (req, res,) {
        
        db.User.findOne({
            where: [{ email: req.body.usuario }], 

        })
            .then(function (user) {
                console.log('usuario')
                if (user) {
                    let comparacion = bcrypt.compareSync(req.body.constrasenia, user.constrasenia); 
                    let recordarme = req.body.tyc
                    
                    if (comparacion) {
                        req.session.userLogueado = user
                        
                        

                        if (recordarme == 'on') {
                            

                            res.cookie('datosusuario', req.session.userLogueado, { maxAge: 1000 * 60 * 5 });
                            
                        }

                        

                        return res.redirect('/')
                        
                    } else {
                        return res.send('La contrasena ingresada esta mal')
                    }

                } else {
                    res.send('El usuario no tiene una cuenta')
                }


            })
            .catch(function (error) {
                return res.send(error)
            })


    },

    register: function (req, res) {
        res.render('register', { profile: datos.usuario[0], productos: datos.usuario[0] })
    },
    show: function (req, res) {
        if (req.body.email == '') {
            return res.send('El email no puede estar vacio.')
        }

        if (req.body.constrasenia.length < 3) {
            return res.send('La contraseña debe tener al menos 3 caracteres.');
        }

        db.User.findOne({ where: [{ email: req.body.email }] })
            .then(function (userExistente) {
                if (userExistente) {
                    return res.send('El email ya esta registrado.')
                }

                return db.User.create({
                    usuario: req.body.usuario,
                    email: req.body.email,
                    constrasenia: bcrypt.hashSync(req.body.constrasenia, 10),
                    fechaDeNacimiento: req.body.fechaNacimiento,
                    nroDeDocumento: req.body.documento,
                    fotoDePerfil: req.body.fotoPerfil
                });
            })
            .then(function (nuevoUsuario) {
                if (nuevoUsuario) {
                    res.redirect('/users/login')
                }
            })
            .catch(function (error) {
                return res.send(error)
            })
    },
    logout: function (req,res) {
        res.clearCookie('datosusuario');
        req.session.destroy(function () {
            res.redirect('/')
        })

    }
}

module.exports = usersController;


