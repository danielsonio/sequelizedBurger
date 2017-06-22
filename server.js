var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var PORT = process.env.PORT || 3000;

var app = express();

var db = require('./models')

app.use(express.static(process.cwd() + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"));

require("./controllers/burgers_controller.js")(app);

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port %s", PORT);
  });
});
