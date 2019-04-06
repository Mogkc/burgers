const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

// Lets it parse jsons from front end
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./controllers/burgers_controller")(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen((process.env.PORT || 8080), function() {
  console.log("Listening on port:%s", (process.env.PORT || 8080));
});
