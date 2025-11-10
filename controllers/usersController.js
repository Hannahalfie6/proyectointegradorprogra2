const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
let usersController = {
    profile: function (req, res) {
        let userId = req.params.id;
    
        db.Usuario.findByPk(userId, {
            include: [
                { association: "productos" }
            ]
        })
        .then(function(usuario) {
            if (!usuario) {
                return res.send("Usuario no encontrado");
            }
    
            return res.render('profile', { usuario: usuario, productos: usuario.productos });
        })
        .catch(function(err) {
            console.log(err);
            return res.send("Error buscando el usuario: " + err);
        });
    },    
    register: function (req, res) {
        return res.render('register', { usuario: {} })
    },
    login: function (req, res) {
        return res.render('login', { usuario: {} })
    },
    logout: function (req, res) {
        // Borrar cookie si existe
        if (req.cookies.user) {
            res.clearCookie("user");
        }
        req.session.destroy();
        return res.redirect("/");
        },
    procesoregistro: function (req, res) {

        db.Usuario.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                ]
            }
        })
            .then(function (usuario) {
                if (usuario == null) {

                    if (req.body.contrasena.length > 2) {
                        let contrasena = req.body.contrasena;
                        let contrasenaEncriptada = bcrypt.hashSync(contrasena, 10);

                        db.Usuario.create({
                            email: req.body.email,
                            password: contrasenaEncriptada,
                            fotoPerfil: req.body.foto
                        })
                            .then(function (result) {
                                return res.redirect("/users/login");
                            })
                            .catch(function (err) {
                                return res.send(err);
                            });

                    } else {
                        res.send("La contraseña debe tener al menos 3 caracteres");
                    }

                } else {
                    res.send("El email o el nombre de usuario ya está registrado");
                }
            })
            .catch(function (err) {
                return res.send(err);
            });
    },
    loginprocess: function (req, res) {
        let userInfo = {
            email: req.body.usuario,
            contrasena: req.body.contrasena,
            recordarme: req.body.recordarme
        };

        db.Usuario.findOne({
            where: { email: userInfo.email }
        })
            .then(function (resultado) {
                if (resultado == null) {
                    return res.send("El email no está registrado");
                }

                let email = resultado.email
                let contra = resultado.password
                if (bcrypt.compareSync(userInfo.contrasena, contra)) {
                    req.session.user = resultado;

                    if (userInfo.recordarme != undefined) {
                        res.cookie("user", resultado, { maxAge: 600000 })
                    }
                    res.redirect("/")
                    } else {
                        return res.send("La contraseña es incorrecta")
                    }
                })

            .catch(function (err) {
                console.log(err, "error")
                return res.send(err)
            })
        }
    };

    module.exports = usersController;