let datos= require('../db/datos')
let bcrypt= require('bcryptjs')

const db= require('../database/models')
let users= db.User

let usersController = {
    index: function(req, res) {
        users.findAll()
        .then(function(data){
            //return res.send(data)
            res.render('profile',{profile: data[0],
                producto: datos.productos});
        })
        
    },
   login: function (req,res,) {
    res.render ('login')

   },
    register: function (req,res) {
        res.render('register',{profile: datos.usuario[0], productos: datos.usuario[0]})
    },
    show: function (req, res){
       if (req.body.email == ''){
        return res.send('El email no puede estar vacio.')
       }

       if (req.body.constrasenia.length < 3) {
         return res.send('La contraseña debe tener al menos 3 caracteres.');
        }

       db.User.findOne ({ where: [{email: req.body.email}] })
            .then (function(userExistente){
                if (userExistente){
                    return res.send('El email ya esta registrado.')
                }
                
                return db.User.create({
                    nombre: req.body.usuario,
                    email: req.body.email,
                    constrasenia: bcrypt.hashSync(req.body.constrasenia, 10),
                    fechaDeNacimiento: req.body.fechaNacimiento, 
                    nroDeDocumento: req.body.documento,
                });
            })
        .then(function(nuevoUsuario){
            if (nuevoUsuario){
                res.redirect('/users')
            }
        })
        .catch(function(error){
            return res.send(error)
        })
    },
}

module.exports = usersController;


