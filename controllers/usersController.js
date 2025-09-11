let data = require('../localData/index');
let usersController = {
    profile: function(req, res){
        return res.render('profile', {usuario: data.usuario, productos: data.productos}) // es estatico por eso 0
    },
    register: function(req, res) {
        return res.render('register', {usuario:{ }})
    },
    login: function(req, res) {
        return res.render('login', {usuario:{ }})
    }
};

module.exports = usersController;