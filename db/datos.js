const datos ={
    usuario: [
      {
            email: 'martingomez@gmail.com',
            usuario: 'Martin',
            contraseña: 'mar1234',
            fechaDeNacimiento: '24/11/2003',
            nroDeDocumento: '43234567',
            fotoDePerfil: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fes%2Fs%2Ffotos%2Fperfil&psig=AOvVaw2mIWz_eigJYg08ST31wrKU&ust=1743896809125000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD0k4TIv4wDFQAAAAAdAAAAABAE'
        }

  ],

    productos: [
        {
            nombre: "Cafetera",
            descripcion: "Cafetera linda para el invierno.",
            imagen: "img-cafetera-moulinex.jpg",
            id: 1,  
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'Buenisima!! Me viene durando barbaro', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Esta en mas colores!????', 
                imagen: 'fotoMujerDos.jpg',   
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Mega estetica!', 
                imagen: 'fotoHombreDpos.jpg',   
              } 
            ]
          },
          {
            nombre: "Macbook",
            descripcion: "Macbook para que disfrutes programar.",
            imagen: "img-macbook-pro-2019.jpg",
            id: 2, 
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'cuantas gb tiene?', 
                imagen: 'fotoMujerUno.jpg',    
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Es un aviooooon!!!!!', 
                imagen: 'fotoMujerDos.jpg',  
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Viene en negro?', 
                imagen: 'fotoHombreDpos.jpg'  
              } , 
            ]
          },
          {
            nombre: "Samsung",
            descripcion: "Telefono samsung negro de buena calidad.",
            imagen: "img-samsung-galaxy-s10.jpg",
            id: 3,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'Me gusta que no tengo boton!! Comodisimo', 
                imagen: 'fotoMujerUno.jpg',   
              } , 
            ]
          },
          {
            nombre: "Television samsung",
            descripcion: "Television grande de samsung buenisimo para ver peliculas.",
            imagen: "img-tv-samsung-smart.jpg",
            id: 4, 
            comentarios: [
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Tremendo como se ve, muy HD', 
                imagen: 'fotoMujerDos.jpg',  
              } ,  
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Realmente de locos el tamaño', 
                imagen: 'fotoHombreDpos.jpg'   
              }  
            ]
          },
          {
            nombre: "Apple pencil",
            descripcion: "Lapiz tecnologico para usar con tu ipad.",
            imagen: "apple-pencil.webp", 
            id: 5,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'Que modelo es?', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Sirve para el ipad pro?', 
                imagen: 'fotoMujerDos.jpg',   
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Hay cuotas sin interes?', 
                imagen: 'fotoHombreDpos.jpg',   
              } 
            ]
          },
          {
            nombre: "Headphones",
            descripcion: "Auriculares para disfrutar la musica que te gusta.",
            imagen: "headphones.png",
            id: 6,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'Se escucha bien?', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Que colores hay?', 
                imagen: 'fotoMujerDos.jpg',   
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Muy duraderos! Chocho con mi compra', 
                imagen: 'fotoHombreDpos.jpg',   
              } 
            ]
          },
          {
            nombre: "Lavarropas",
            descripcion: "Lava tu ropa de forma sencilla y rapida.",
            imagen: "lavarropas.png",
            id: 7,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'jajaja! hace mucho ruido...', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Tienen medidas exactas?', 
                imagen: 'fotoMujerDos.jpg',   
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Cuanto pesa?', 
                imagen: 'fotoHombreDpos.jpg',   
              } 
            ]
          },
          {
            nombre: "Mat de yoga",
            descripcion: "Util y comodo para estirar tu cuerpo.",
            imagen: "mat-yoga.jpg",
            id: 8,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'En que que colores estan?', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Muy buena calidad! Lo recomiendo', 
                imagen: 'fotoMujerDos.jpg',   
              } , 
              {
                usuario: "agusjara@gmail.com" ,
                texto: 'Muy comoda', 
                imagen: 'fotoHombreDpos.jpg',   
              } 
            ]
          },
          {
            nombre: "Pesas",
            descripcion: "Pesas para formar tu cuerpo.",
            imagen: "pesas.webp",
            id: 9,
            comentarios: [
              {
                usuario: "jbernstein@udesa.edu.ar" ,
                texto: 'Las tienen en negro?', 
                imagen: 'fotoMujerUno.jpg',  
              } , 
              
            ]
          },
          {
            nombre: "Plancha",
            descripcion: "Para que tu ropa quede en perfecto estado.",
            imagen: "plancha.webp",
            id: 10,
            comentarios: [
              {
                usuario: "delfina@yahoo.com" ,
                texto: 'Cuanto mide el cable? Maso', 
                imagen: 'fotoMujerDos.jpg',   
              } 
            ]
          }
    ],
    
};


module.exports = datos;