var mysql = require("mysql");
// var router = require("../controllers/burgers_controller");
// var express = require("express");

// var app = express();


// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
  });
}
//   var PORT = process.env.PORT || 8080;
//  Make connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//  export connection for our ORM to use
  module.exports = connection;

