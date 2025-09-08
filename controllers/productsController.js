let data = requiere('../localData/products');
let productosController = {
    home: function(req, res){
        return res.render('products', {data: data})
    }
};

module.exports = productosController;