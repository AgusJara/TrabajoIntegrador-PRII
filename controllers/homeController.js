let datos = require('../db/datos');
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
        //res.send (produ)
        res.render('index', {productos: produ})

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