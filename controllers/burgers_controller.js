var db = require("../models");
var express = require('express');

  // router.get("/", function(req, res) {
  //   burger.selectOne(function(data) {
  //     var hbsObject = {
  //       burgers: data
  //     };
  //     console.log(hbsObject);
  //     res.render("index", hbsObject);
  //   });
  // });
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({})
    .then(function(dbBurger) {
      var burger_data = { burgers: dbBurger };
      res.render("index", burger_data);
    });
  });



  // router.post("/", function(req, res) {
  //   burger.insertOne([
  //     "burger_name", "devoured"
  //   ], [
  //     req.body.burger_name, req.body.devoured
  //   ], function() {
  //     res.redirect("/");
  //   });
  // });


  // POST route for saving a new post
  app.post("/", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect('/');
    });
  });



  // app.put("/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  //
  //   console.log("condition", condition);
  //
  //   db.Burger.update({
  //     devoured: req.body.devoured
  //   }, condition, function() {
  //     res.redirect("/");
  //   });
  // });


  app.put("/update", function(req, res) {
    db.Burger.update( {devoured: true},
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbBurger) {
       res.redirect("/");
    });
  });

};
