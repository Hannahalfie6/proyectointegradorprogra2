var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/profile', usersController.profile);
router.get('/login', usersController.login);
router.post('/login', usersController.loginprocess);
router.get('/register', usersController.register);
router.post('/register', usersController.procesoregistro);
router.get('/logout', usersController.logout);


module.exports = router;
