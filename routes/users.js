var express = require('express');
let router = express.Router();
const usersController = require('../controllers/usersController');



/* GET users listing. */
router.get('/profile/:id', usersController.index); // cambie esta ruta. ahora es dinamica y depende del id. tener en cuenta pra las vistas!
router.get('/profile', usersController.profile) //agregue ruta profile para usuario logueado
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/registro', usersController.show);



router.post('/procesandoLogin', usersController.procesandoLogin); 
router.get('/logout',usersController.logout);

module.exports = router;
