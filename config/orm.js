var connection = require("./connection");


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

function selectAll(){
    
}






  module.exports = selectAll, insertOne, updateOne;
