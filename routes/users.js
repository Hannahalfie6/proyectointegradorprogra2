var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//form registro
router.get('/registro', function(req,res) {
  res.send("Formulario de registro enviado")
});

module.exports = router;
