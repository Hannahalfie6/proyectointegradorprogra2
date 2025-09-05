let data = require('../localData/index')

let indexController = {
    home: function(req,res){

        //return res.send(data)
        return res.render('index', {data: data})
    }
}

module.exports = indexController;