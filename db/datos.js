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
          },
          {
            nombre: "Macbook",
            descripcion: "Macbook para que disfrutes programar.",
            imagen: "img-macbook-pro-2019.jpg",
            id: 2,
          },
          {
            nombre: "Samsung",
            descripcion: "Telefono samsung negro de buena calidad.",
            imagen: "img-samsung-galaxy-s10.jpg",
            id: 3,
          },
          {
            nombre: "Television samsung",
            descripcion: "Television grande de samsung buenisimo para ver peliculas.",
            imagen: "img-tc-samsung-smart.jpg",
            id: 4,
          },
          {
            nombre: "Apple pencil",
            descripcion: "Lapiz tecnologico para usar con tu ipad.",
            imagen: "apple-pencil.webp", 
            id: 5,
          },
          {
            nombre: "Headphones",
            descripcion: "Auriculares para disfrutar la musica que te gusta.",
            imagen: "headphones.png",
            id: 6,
          },
          {
            nombre: "Lavarropas",
            descripcion: "Lava tu ropa de forma sencilla y rapida.",
            imagen: "lavarropas.png",
            id: 7,
          },
          {
            nombre: "Mat de yoga",
            descripcion: "Util y comodo para estirar tu cuerpo.",
            imagen: "mat-yoga.jpg",
            id: 8,
          },
          {
            nombre: "Pesas",
            descripcion: "Pesas para formar tu cuerpo.",
            imagen: "pesas.webp",
            id: 9,
          },
          {
            nombre: "Plancha",
            descripcion: "Para que tu ropa quede en perfecto estado.",
            imagen: "plancha.webp",
            id: 10,
          }
    ],
    comentarios : [
      {
        usuario: "jbernstein@udesa.edu.ar" ,
        texto: 'Me encanto la plancha!', 
        foto: 'pendiente', // agregar fotos y linkearlas  
      } , 
      {
        usuario: 'martingomez@gmail.com' ,
        texto: 'Muy buenos precios', 
        foto: 'pendiente', // agregar fotos y linkearlas  
      } ,
      {
        usuario: 'dcamuglai@udesa.edu.ar',
        texto: 'Tremendos productos! ', 
        foto: 'pendiente', // agregar fotos y linkearlas   
      } ,
      {
        usuario: 'ajaralmbides@udesa.edu.ar',
        texto: 'Fascinada con todo!!!!!!', 
        foto: 'pendiente', // agregar fotos y linkearlas   
      } ,
      {
        usuario: 'mia@yahoo.com',
        texto: 'Lo super recomiendo, me copo todo!!!' , 
        foto: 'pendiente', // agregar fotos y linkearlas  
      } ,

    ]
};

module.exports = datos;