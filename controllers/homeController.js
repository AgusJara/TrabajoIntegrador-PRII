let datos = require('../db/datos'); // borrar
const db= require('../database/models')
let op = db.Sequelize.Op;

let homeController = {
    index: function(req, res) {
      db.Product.findAll ({
        include: [
          {association: 'producto_usuario'}, 
        ]
      })
      .then(function(produ){ 
        res.render('index', {productos: produ})

      })
      .catch(function (error) {
        return res.send("Error al cargar productos" + error)
      })
        
      }, 

      resultadosBusqueda: function (req,res){
        let busqueda= req.query.search
        db.Product.findAll({
          where: {nombre: {[op.like]: '%' + busqueda + '%'}},
          include: [
            {association: 'producto_usuario'},
          ]
        })
        .then(function(resultado){
          res.render('search-results', {productos: resultado})
        })
      }

};

module.exports = homeController;