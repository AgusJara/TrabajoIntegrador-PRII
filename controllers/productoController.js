const datos= require('../db/datos');

const productoController= {
    index: function(req,res) {
        res.render('product')
    },
    agregar: function(req,res){
        res.render('product-add')
    }, 
   
}

module.exports = productoController;

