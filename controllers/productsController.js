let data = require('../localData/index');
let productosController = {
    home: function(req, res){
        return res.render('products', {data: data})
    }
};

module.exports = productosController;