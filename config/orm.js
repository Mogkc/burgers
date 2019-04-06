const connection = require("./connection.js");

// Object Relational Mapper (ORM)

const makeQuery = function (queryString, queryData, callback) {
    connection.query(queryString, queryData, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

// ?? and ? help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
module.exports = {
    selectAll: function (table, callback) {
        const queryString = `SELECT * FROM ??`;
        const queryData = [table];
        makeQuery(queryString, queryData, callback);
    },
    insertOne: function (table, burger_name, devoured, callback) {
        const queryString = `INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)`;
        const queryData = [table, burger_name, devoured];
        makeQuery(queryString, queryData, callback);
    },
    updateOne: function (table, id, devoured, callback) {
        if (devoured === undefined) {
            devoured = false;
        }
        const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        const queryData = [table, "devoured", devoured, "id", id];
        makeQuery(queryString, queryData, callback);
    }
};
