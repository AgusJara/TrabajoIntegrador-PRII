//Agregar db info. 

const productoController= {
    index: function(req,res) {
        res.render('product')
    },
    agregar: function(req,res){
        res.render('product-add') //Ver bien como es la ruta al nombre del archivo y agregar segundo parametro. 
    }, 
}

module.exports = productoController;

