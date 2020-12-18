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
  "INSERT INTO mytable1(author,title,description,url,urlToImage,publishedAt,content) VALUES (1By Bhvishya Patel For Mailonline, 2Five-minute blast from a LASER boosts women's libido, 3The study, which was ,4https://www.dailymail.co.uk/health/article-8754071/Five-minute-blast-LASER-boosts-womens-libido.html , 5https://i.dailymail.co.uk/1s/2020/09/21/01/33415588-0-image-a-64_1600646895684.jpg, 62020-09-21T00:33:19Z)";
querystringcheck = querystringcheck.replace("/'", " ");
connection.query(querystringcheck),
  function (error, results, fields) {
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
