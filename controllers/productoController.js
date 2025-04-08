//Agregar db info. 

const productoController= {
    index: function(req,res) {
        res.render('product')
    },
    agregar: function(req,res){
        res.render('product-add') //Agregar segundo parametro. 
    }, 
    detalle: function(req,res){
        const producto= {
                nombre: "Cafetera",
                descripcion: "Cafetera linda para el invierno.",
                imagen: "/images/products/img-cafetera-moulinex.jpg",
                comentarios: [
                    { usuario: "Juan", texto: "Buena calidad." },
                    { usuario: "Ana", texto: "Muy rapida." },
                    { usuario: "Luis", texto: "Eficiente." }, 
                    { usuario: "Delfina", texto: "Linda"},
                  ] //Despues cambiar por los comentarios que ponga juana. 
    }; 
    res.render('product', {producto})
    },
}

module.exports = productoController;

