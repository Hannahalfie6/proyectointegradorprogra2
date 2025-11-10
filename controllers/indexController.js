const db = require('../database/models');
const op = db.Sequelize.Op;
const productos = db.Producto;
let indexController = {
    home: function (req, res) {
        db.Producto.findAll({
            include: [
                { association: "usuario" },
                { association: "comentarios"}
            ],
            order: [['createdAt', 'DESC']] 
        })
        .then(function(products) {
            return res.render('index', { products: products });
        })
        .catch(function(err) {
            console.log(err);
            return res.send("Error al traer los productos: " + err);
        });
    },

    busqueda: function (req,res) { 
        let busqueda = req.query.search
        db.Producto.findAll({
            include: [
                { association: "usuario" },
                { association: "comentarios"} 
            ],
            order: [['createdAt', 'DESC']], 
            where: [{nombre: {[op.like]:"%"+busqueda+"%"}}]
        })
         .then(function(products) {
            res.render("search-results", {usuario:{ }, productos: products});
        })

      
    }
};

module.exports = indexController;