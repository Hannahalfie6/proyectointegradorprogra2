var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController')

/* GET home page. */
router.get('/', productsController.home);

module.exports = router;
