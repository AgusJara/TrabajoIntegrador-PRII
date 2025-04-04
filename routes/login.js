const express = require('express');
const router = express.Router();
const loginController = require ('../controllers/loginController')

router.get('/', loginController.login) // chequear  una vez que importe la info

module.exports = router;