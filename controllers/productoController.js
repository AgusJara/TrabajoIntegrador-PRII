let datos = require('../db/datos')
// acordarse de hacer vairable de db
const db = require('../database/models')

let productoController= {
    agregar: function(req,res){
      res.render('product-add', {profile: datos.usuario[0]}) //
    },
    
    create: function (req,res) {
      db.Product.create({
        imagen:req.body.imagen,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion
      })
    },
    
    detalle: function(req,res){
      let resultado = {};
    
      for (let i = 0; i < datos.productos.length; i++) {
        let prod= datos.productos[i];
    
        if (prod.id == req.params.id) {
          resultado = prod;
        }
      }
      res.render('product', {producto: resultado});
  },
   
}

module.exports = productoController;

