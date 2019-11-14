// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define(
//     "Burgers",
//     {
//       burger_name: {
//         type: DataTypes.STRING,
//         validate: {
//           len: [1, 140]
//         }
//       },
//       devoured: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//       }
//     },
//     {
//       timestamps: false
//     }
//   );
//   return Burger;
// };

var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(result) {
      callback(result);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;
