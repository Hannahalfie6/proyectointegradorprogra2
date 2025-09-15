let data = require('../localData/index');
let productosController = {
    detalle: function(req, res){
        let producto = data.productos[req.params.id];
        return res.render('product', {data: producto, usuario:{ }}) // es estatico por eso 0

    },
    agregar: function(req, res) {
        return res.render('product-add', {usuario:{ }})
    },
    editar: function(req, res) {
        return res.render('product-edit', {usuario:{ }})
    },
    busqueda: function (req,res) {
        return res.render('search-results', {usuario:{ }})
    }
};

module.exports = productosController;