const { Association } = require('sequelize');
let data = require('../localData/index'); 
let productosController = {
    producto: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include:[
                {association: "usuario"},
                {association:"comentarios", include:[{association:"usuario"}]}
            ]
        })
        .then(function (results) {
            res.render("product", {producto: results});
        })
        .catch(function (error) {
            res.send("Error buscando el producto: " + error);
        });
    },
    detalle: function(req, res){ 
        let producto = {}
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].idProducto == req.params.id) {
                producto = data.productos[i]
            }
        }
        return res.render('product', {data: producto, usuario:{ }}) // es estatico por eso 0 
    }, 
    agregar: function(req, res) { 
            return res.render('product-add', {usuario:{ }}) 
    } 
}; 


    
module.exports = productosController;