let datos = require('../db/datos');

let homeController = {
    index: function(req, res) {
        res.render('index', { profile: datos.usuario[0],
                              productos: datos.productos,
         });
      }, 

      resultadosBusqueda: function (req,res){
        res.render('search-results', {productos: datos.productos, profile: datos.usuario[0]})
      }

}

module.exports = homeController;