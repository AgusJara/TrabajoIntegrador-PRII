let datos = require('../db/datos');
let usersController = {
    index: function(req, res) {
        res.render('profile',{profile: datos.usuario[0],
                              producto: datos.productos});
    },
    //login: function (req,res) {
       // res.render('login',{profile: datos.usuario[0],
                          //  productos: datos.productos});
    //},
   login: function (req,res,) {
    res.render ('login')

   },
    register: function (req,res) {
        res.render('register',{profile: datos.usuario[0]})
    }
}

module.exports = usersController;

