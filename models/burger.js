var orm = require('../config/orm.js');

var burgerBuilder = {
    selectAll: function (callback){
        orm.selectAll(function (res){
            callback(res);
        })
    },
    insertOne: function (burger_name, callback){
        orm.selectAll(burger_name, function (res){
            callback(res);
        })
    },
    updateOne: function (burger_id, callback){
        orm.selectAll(burger_id, function (res){
            callback(res);
        })
    },
};

module.exports = burgerBuilder