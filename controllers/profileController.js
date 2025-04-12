// le cambie el nombre a info
const datos = require('../db/datos');
const profileController = {
    info: function (req,res) {
        res.render('profile',{ profile: datos.usuario[0]})
    }
};

module.exports = profileController;

