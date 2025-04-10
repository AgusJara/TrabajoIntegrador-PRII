// le cambie el nombre a info
const info = require('../db/datos');
const profileController = {
    info: function (req,res) {
        res.render('profile',{ profile: info.usuario})
    }
};

module.exports = profileController;

