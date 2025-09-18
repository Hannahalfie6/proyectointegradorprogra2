let data = require('../localData/index')

let indexController = {
    home: function(req,res){

        //return res.send(data)
        return res.render("index", {data: data, usuario:{ }})
    },
    busqueda: function (req,res) {
        res.render("search-results", {usuario:{ }, productos: data.productos});
    }
};

module.exports = indexController;