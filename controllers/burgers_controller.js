var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// routes to be setup. the instructions say to create the router for the app and export the router at the end
// IS router a function that stores all of the routes?

router.get("/index", function (req, res){
    burger.all(function(data){
        
    })
})

module.exports = router;