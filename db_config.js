const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password#123",
  database: "medapp",
});

db.connect((err) => {
  if (err) {
    console.log("Error");
    throw err;
  }
  console.log("Mysql Connected...");
});

module.exports = db;
