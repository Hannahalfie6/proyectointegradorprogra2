let data = require('../localData/index');
let productosController = {
    detalle: function(req, res){
        return res.render('product', {data: data.productos[0], usuario:{ }}) // es estatico por eso 0
    },
    agregar: function(req, res) {
        return res.render('product-add', {usuario:{ }})
    },
    editar: function(req, res) {
        return res.render('product-edit', {usuario:{ }})
    }
};

module.exports = productosController;