var express = require("express");
var router = express.Router();
const burgers = require("../models/burger");

module.exports = (app) => {
    // Create all our routes and set up logic within those routes where required.
    app.get("/", (req, res) => {
        burgers.getBurgers(data => {
            res.render("index", { burgers: data });
        });
    });

    app.post("/api/burgers", (req, res) => {
        burgers.insertBurger(req.body.name, req.body.devoured, result => {
            if (result.affectedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                res.status(404);
            } else {
                res.status(200);
            }
            res.redirect("/");
        });
    });

    app.put("/api/burgers/:id", (req, res) => {
        burgers.updateBurger(req.params.id, req.body.devoured,
            result => {
                if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404);
                } else {
                    res.status(200);
                }
                res.redirect("/");
            }
        );
    });
}