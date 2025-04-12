let datos = require('../db/datos')

const productoController= {
  index: function(req,res) {
    res.render('product', {producto: datos.productos, comentarios: datos.comentarios})
},
    agregar: function(req,res){
        res.render('product-add',{producto: datos.productos})
    }, 
    detalle: function(req,res){
      let resultado = {};
    
      for (let i = 0; i < datos.productos.length; i++) {
        let prod= datos.productos[i];
    
        if (prod.id == req.params.id) {
          resultado = prod;
        }
      }
    
      if (resultado) {
        res.render('product', {producto: resultado, comentarios: datos.comentarios });
      } else {
        res.send('Producto no encontrado');
      }
  },
   
}

module.exports = productoController;

