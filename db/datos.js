const datos ={
    usuario: [
      {
            email: 'martinagomez@gmail.com',
            usuario: 'Martina',
            contrasenia: 'mar1234',
            fechaDeNacimiento: '24/11/2003',
            nroDeDocumento: '43234567',
            fotoDePerfil: 'fotoMujerDos.jpg'
        }

  ],

    productos: [
        {
            nombre: "Set de beisbol",
            descripcion: "Un set buenisimo para jugar al beisbol.",
            imagen: "beisbol.jpg",
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
            nombre: "Pesas",
            descripcion: "Buenas para hacer gimnasia.",
            imagen: "fotoPesas.jpg",
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
            nombre: "Palo de hockey",
            descripcion: "Lindo palo y comodo para las delanteras.",
            imagen: "paloDeHockey.jpg",
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
            nombre: "Pelota de rugby",
            descripcion: "Para disfrutar el juego con tus amigos",
            imagen: "pelotaDeRugby.jpg",
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
            nombre: "Cinta de correr",
            descripcion: "Corre en tu casa de una forma comoda y segura!",
            imagen: "cinta.webp", 
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
            nombre: "Raqueta de tenis",
            descripcion: "Muy eficiente y profesional para el saque.",
            imagen: "raquetaTenis.jpg",
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
            nombre: "Auriculares",
            descripcion: "Auriculares buenisimos para escuchar la musica que quieras.",
            imagen: "headphones.png",
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
            nombre: "Pelota de futbol",
            descripcion: "Para jugar con tus amigos y pasar el rato.",
            imagen: "pelotaFutbol.jpg",
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
            nombre: "Termos",
            descripcion: "Para estar bien hidratado mientras hagas gimnasia.",
            imagen: "termos.webp",
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