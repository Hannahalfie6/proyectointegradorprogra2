let data = require('../localData/index'); 
let productosController = { 
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