var orm = require("../config/orm.js");
// orm has 3 funtions  selectAll, insertOne, and updateOne


var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // the variables cols and vals are arrys.
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;










module.export = ormFunctions;

