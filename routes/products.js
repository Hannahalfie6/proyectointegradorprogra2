var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/detalle/:id', productsController.detalle);
router.get('/agregar', productsController.agregar);
router.get('/editar', productsController.editar);
router.get('/search-results', productsController.busqueda);

module.exports = router;