var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/detalle/:id', productsController.producto);
router.get('/agregar', productsController.agregar);

module.exports = router;