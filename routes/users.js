var express = require('express');
let router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.index);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/registro', usersController.show);

router.post('/procesandoLogin', usersController.procesandoLogin); 
router.get('/logout',usersController.logout);

module.exports = router;
