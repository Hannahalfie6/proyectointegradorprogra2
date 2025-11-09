const db = require('../database/models');
const productos = db.Producto;
let indexController = {
    home: function(req,res){
        productos.findAll({
            order: [['createdAt', 'DESC']],
            limit: 10
        })
        .then((resultado)=>{
            res.render("index", {data: resultado, usuario:{ }})
        })
        //return res.send(data)
        
    },
    busqueda: function (req,res) {
        res.render("search-results", {usuario:{ }, productos: data.productos});
    }
};

module.exports = indexController;