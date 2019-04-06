const orm = require("../config/orm");

const table_name = "burgers";

module.exports = {
    getBurgers: function (callback) {
        orm.selectAll(table_name, callback);
    },
    insertBurger: function (name, devoured, callback) {
        if (devoured) {
            orm.insertOne(table_name, name, devoured, callback);
        } else {
            orm.insertOne(table_name, name, false, callback);
        }
    },
    updateBurger: function (id, devoured, callback) {
        orm.updateOne(table_name, id, devoured, callback);
    }
}