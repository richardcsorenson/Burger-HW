var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.all("burgerDB", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgerDB", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgerDB", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  