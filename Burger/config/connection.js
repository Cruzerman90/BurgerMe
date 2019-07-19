var mysql = require("mysql2");
var connection;

 
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Wildflowers90!",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;