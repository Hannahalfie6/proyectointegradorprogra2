var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/profile', usersController.profile);
router.get('/login', usersController.login);
router.get('/register', usersController.register);


module.exports = router;
