CREATE SCHEMA trabajoIntegrador;
USE trabajoIntegrador;

CREATE TABLE users(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    usuario VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE , 
    constrasenia VARCHAR(255) NOT NULL , 
    fechaDeNacimiento DATE NOT NULL , 
    nroDeDocumento INT NOT NULL UNIQUE , 
    fotoDePerfil VARCHAR(255) , 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP , 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );
    
    CREATE TABLE products(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_users INT UNSIGNED NOT NULL,
    imagen VARCHAR(255),
    nombre VARCHAR (50) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP , 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (id_users) REFERENCES users(id)
);

CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_imagen INT UNSIGNED NOT NULL,
    id_users INT UNSIGNED NOT NULL,
    texto VARCHAR (100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP , 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY(id_imagen) REFERENCES products(id),
    FOREIGN KEY(id_users) REFERENCES users(id)
    
);

INSERT INTO users (id,usuario,email,constrasenia,fechaDeNacimiento,nroDeDocumento,fotoDePerfil)
VALUES
(DEFAULT,"Martu","martinagomez@gmail.com","mar1234","2003-11-24",43234567,"fotoMujerDos.jpg"),
(DEFAULT,"Juana","jbernstein@udesa.edu.ar","jbern1234","2004-10-15",45678987,"fotoMujerUno.jpg"),
(DEFAULT,"Delfi","delfina@yahoo.com","delfi1234","2005-09-08",47234569,"fotoUno.jpg"),
(DEFAULT,"Agus","agusjara@gmail.com","agus1234","2004-12-24",46279494,"fotoHombreDpos.jpg"),
(DEFAULT,"Maria","maria@gmail.com","maria1234","2006-03-24",49235568,"fotoMujerDos.jpg");

INSERT INTO products (id,id_users,imagen,nombre,descripcion)
VALUES
(DEFAULT,3,"beisbol.jpg","Set de beisbol","Un set buenisimo para jugar al beisbol."),
(DEFAULT,1,"fotoPesas.jpg","Pesas","Buenas para hacer gimnasia."),
(DEFAULT,5,"paloDeHockey.jpg","Palo de hockey","Lindo palo y comodo para las delanteras."),
(DEFAULT,4,"pelotaDeRugby.jpg","Pelota de rugby","Pelota de primer nivel, usada por los pros."),
(DEFAULT,2,"cinta.webp","Cinta de correr","Corre en tu casa de una forma comoda y segura!."),
(DEFAULT,1,"raquetaTenis.jpg","Rqueta de tenis","Muy eficiente y profesional para el saque."),
(DEFAULT,3,"headphones.png","Auriculares","Auriculares buenisimos para escuchar la musica que quieras."),
(DEFAULT,5,"mat-yoga.jpg","Mat de yoga","Util y comodo para estirar tu cuerpo."),
(DEFAULT,4,"pelotaFutbol.jpg","Pelota de futbol","Para jugar con tus amigos y pasar el rato."),
(DEFAULT,2,"termos.webp","Termos","Para estar bien hidratado mientras hagas gimnasia.");

INSERT INTO comentarios (id,id_imagen,id_users,texto)
VALUES
(DEFAULT,2,3,"Me encanta! Muy buena calidad!."),
(DEFAULT,1,4,"Recomiendo comprar!."),
(DEFAULT,9,2,"Muy buen precio! PRECIO-CALIDAD");









