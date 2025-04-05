const express = require('express');
const router = express.Router();
const profileController = require ('../controllers/profileController')

router.get('/', profileController.info)

module.exports = router;

