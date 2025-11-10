const db = require('../database/models');
let productosController = {
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
            console.log(result)
            res.render("product", { producto: result });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Error buscando el producto: " + error);
        });
    },

    agregar: function(req, res) { 
        if (req.session.user) {
          res.render("product-add", {usuario: req.session.user});
        } else {
          res.redirect("/users/login");
        }
    },
    guardar: function (req, res) {
        console.log(req.session.user)
        db.Producto.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            usuario_id: req.session.user.id,
        }) 
         .then(function() {
            return res.redirect('/');
        })
        .catch(function(error){
          res.send("Error agregando el producto: " + error);
        });
    },

    comentario: function (req, res) {
        if (!req.session.user) {
            return res.redirect ('/users/login');
        }
        db.Comentario.create({
            comentario: req.body.texto,
            usuario_id: req.session.user.id,
            producto_id: req.params.id,
        })
        .then(function () {
            return res.redirect('/products/detalle/' + req.params.id);
          })
          .catch(function (error) {
            return res.send("Error creando el comentario: " + error)
  
          });
    }
};

module.exports = productosController;