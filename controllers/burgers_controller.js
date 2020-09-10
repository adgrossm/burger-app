var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// routes to be setup. the instructions say to create the router for the app and export the router at the end
// IS router a function that stores all of the routes?

router.get("/", function (req, res){
    burger.all(function(data){
       var hbsObject = {
           burgers: data
       };
       console.log(hbsObject);
       res.render("index", hbsObject);
    
    });
});

router.post("/api/burgers", function (req, res){
    burger.create([
      "burger_name", "devoured"  
    ],[
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
devoured: req.body.devoured
    }, condition, function (result){
        if (result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;