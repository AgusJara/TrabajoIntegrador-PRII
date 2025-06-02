const db= require('../database/models')
let op = db.Sequelize.Op;

let homeController = {
    index: function(req, res) {
      db.Product.findAll ({
        include: [
          {association: 'producto_usuario'}, 
          {association: 'producto_comentario'},
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
            {association: 'producto_comentario'},
          ]
        })
        .then(function(resultado){
          res.render('search-results', {productos: resultado, busqueda: busqueda})
        })
      }

};

module.exports = homeController;