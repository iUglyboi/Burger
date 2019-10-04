var path = require("path");

module.exports = function(app){
    var burger_controller = require('./controllers/burgers_controller.js');

    app.use('/', burger_controller)
};