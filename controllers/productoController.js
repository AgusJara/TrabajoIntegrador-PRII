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
                    {usuario: "Juan", texto: "Buena calidad."},
                    {usuario: "Ana", texto: "Muy rapida."},
                    {usuario: "Luis", texto: "Eficiente."}, 
                    {usuario: "Delfina", texto: "Linda"},
                  ] //Despues cambiar por los comentarios que ponga juana. 
    }; 
    res.render('product', {producto})
    },

    resultadosBusqueda: function(req, res){
        const productos= [
            {
              nombre: "Cafetera",
              descripcion: "Cafetera linda para el invierno.",
              imagen: "/images/products/img-cafetera-moulinex.jpg"
            },
            {
              nombre: "Macbook",
              descripcion: "Macbook para que disfrutes programar.",
              imagen: "/images/products/img-macbook-pro-2019.jpg"
            },
            {
              nombre: "Teléfono",
              descripcion: "Teléfono Samsung negro de buena calidad.",
              imagen: "/images/products/img-samsung-galaxy-s10.jpg"
            }
          ];
          res.render('search-results', {productos});

    }, 
}

module.exports = productoController;

