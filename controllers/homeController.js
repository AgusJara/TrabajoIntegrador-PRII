let datos = require('../db/datos');

let homeController = {
    index: function(req, res) {
        res.render('index', { profile: datos.usuario[0],
                              productos: datos.productos
         });
      }

}

module.exports = homeController;