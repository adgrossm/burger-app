var express = require("express");
var burgerJs = require("../models/burger");

// routes to be setup. the instructions say to create the router for the app and export the router at the end
// IS router a function that stores all of the routes?

function router(){



app.get("/icecreams", function(req, res) {
      
    // for res.render the first value is the page that you created and the second is the values like an object or a variable
    res.render("icecreams", {icecreams: icecreams});
  });

}

module.exports = router;