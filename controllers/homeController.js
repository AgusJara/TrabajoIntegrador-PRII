let datos = require('../db/datos');
const db= require('../database/models')
let op = db.Sequelize.Op;

let homeController = {
    index: function(req, res) {
        res.render('index', { profile: datos.usuario[0],
                              productos: datos.productos,
         });
      }, 

      resultadosBusqueda: function (req,res){
        let busqueda= req.query.search
        db.Product.findAll({
          where: {nombre: {[op.like]: '%' + busqueda + '%'}}
        })
        .then(function(resultado){
          res.render('search-results', {productos: resultado})
        })
      }

};

module.exports = homeController;