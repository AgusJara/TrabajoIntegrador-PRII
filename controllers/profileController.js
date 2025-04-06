const profile = require('../db/usuario');
const profileController = {
    info: function (req,res) {
        res.render('profile',{profile:profile.lista})
    }
};

module.exports = profileController;
    
