var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", "burger_name", burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, cb) {
    orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
