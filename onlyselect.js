const { query } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "70.32.23.60",
  port: "3306",
  database: "dangovco_userum_1",
  user: "dangovco_hamzakhan",
  password: "password",
});

connection.query("SELECT * FROM mytable1", function (error, results, fields) {
  console.log("ERORR")
  console.log(results);
  console.log(error);
});









//connection.connect();
// connection.connect(function (err) {
//   if (err) {
//     console.error('Error:-  ' + err.stack);
//     return;
//   }
//   console.log('Connected Id:- ' + connection.threadId);
// });


