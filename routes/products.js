var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/detalle/:id', productsController.producto);
router.get('/agregar', productsController.agregar);

router.post('/agregarproducto', productsController.guardar);
router.post('/agregarcomentario/:id', productsController.comentario);

module.exports = router;