let data = require('../localData/index');
let productosController = {
    detalle: function(req, res){
        return res.render('product', {data: data.productos[0]}) // es estatico por eso 0
    },
    agregar: function(req, res) {
        return res.render('product-add')
    },
    editar: function(req, res) {
        return res.render('product-edit')
    }
};

module.exports = productosController;