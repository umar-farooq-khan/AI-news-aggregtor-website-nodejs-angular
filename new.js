const { query } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql");
const request = require("request");
const connection = mysql.createConnection({
  host: "70.32.23.60",
  port: "3306",
  database: "dangovco_userum_1",
  user: "dangovco_umar45474547",
  password: "umar45474547",
});

querystringcheck =
  "INSERT INTO mytable(author,title,description,url,urlToImage,publishedAt) VALUES ('1', '2', '3' ,'4' , '5','6');";
//querystringcheck = querystringcheck.replace("'", " ");
console.log(querystringcheck)

connection.query(querystringcheck),
  function (error, results, fields)
   {
     console.log("yahoooooooooooo")
    console.log(results);
    console.log(error);
  };

//MAKE A INSERT QUERY });

connection.connect(function (err) {
  if (err) {
    console.error("Error connect: " + err.stack);
    console.log("connected");
    return;
  }

  console.log("Connected as id" + connection.threadId);
});

connection.end();
app.listen(3000, () => console.log("listening"));
