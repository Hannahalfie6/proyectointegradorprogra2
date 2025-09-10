var express = require('express');
var router = express.Router();

let productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/detalle', productsController.detalle);
router.get('/agregar', productsController.agregar);
router.get('/editar', productsController.editar);

module.exports = router;