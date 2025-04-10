const express = require('express');
let router = express.Router();
let loginController = require ('../controllers/loginController')

router.get('/', loginController.login) // chequear  una vez que importe la info

module.exports = router;
