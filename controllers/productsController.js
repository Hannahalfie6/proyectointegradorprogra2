const db = require('../database/models');
let productosController = {
    home: function (req, res) {
        db.Producto.findAll({
            include: [
                { association: "usuario" } 
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

    producto: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include:[
                { association: "usuario" },
                { association: "comentarios", include: [{ association: "usuario" }] }
            ]
        })
        .then(function (result) {
            if (!result) {
                return res.status(404).send("Producto no encontrado");
            }
            res.render("product", { producto: result });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error buscando el producto: " + error);
        });
    },

    agregar: function(req, res) { 
        return res.render('product-add', { usuario: {} }) 
    } 
};

module.exports = productosController;