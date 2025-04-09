// le cambie el nombre a info
const info = require('../db/datos');
const profileController = {
    info: function (req,res) {
        res.render('profile',{ profile: datos.usuario})
    }
};

module.exports = profileController;

