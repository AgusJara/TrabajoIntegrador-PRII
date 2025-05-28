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
        descripcion:req.body.descripcion,
        id_users:req.session.userLogueado.id
      })
      .then(function () {
        res.redirect('/users/profile/' + req.session.userLogueado.id)
      })
      .catch(function (error) {
        return res.send("Error al crear producto" + error)
      })
    },
    
    detalle: function(req,res){
      db.Product.findByPk(req.params.id,{
        include: [{association:'producto_usuario'},{association:'producto_comentario',include:['comentario_usuario']}]
      })
      .then(function (productos) {
        return res.render('product',{producto:productos,comentario:productos.producto_comentario})
      })
  },
   
}

module.exports = productoController;

