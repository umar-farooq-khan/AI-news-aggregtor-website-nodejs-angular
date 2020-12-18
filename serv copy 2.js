//delete duplicates delete from mytable1 where title in(select title from mytable1 group by title having
//  count(*) >1)
const { query } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql");
const request = require("request");
function parse(str) {
  var args = [].slice.call(arguments, 1),
    i = 0;
  return str.replace(/%s/g, () => args[i++]);
}
var xx="fgdfgd"
stringggg= `hey there ${xx}`
console.log("uits")
console.log(stringggg)
const connection = mysql.createConnection({
  host: "70.32.23.60",
  port: "3306",
  database: "dangovco_userum_1",
  user: "dangovco_hamzakhan",
  password: "password",
});
connection.query("SELECT * FROM `RelatedNews_1`", function (error, results, fields) 
{
  resultsglobal = results;
  console.log("Related data got: "); console.log(results) ; console.log("Error: "+error) 
  

res.send(results)
});

app.listen(3000, () => console.log("listening"));

  