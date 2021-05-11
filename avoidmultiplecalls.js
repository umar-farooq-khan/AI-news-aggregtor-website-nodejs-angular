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
console.log(stringggg)
const connection = mysql.createConnection({
  host: "70.32.23.60",
  port: "3306",
  database: "dangovco_userum_1",
  user: "dangovco_hamzakhan",
  password: "password",
});
var ranornot="not"
var ranornot1="not"

var globalspecific=""
var globalspecific2=""


var resultsglobal = "";
let removedstoparray=[]

console.log(ranornot)

app.get("/regionnews", (req, res) => {
  fullresults = {"name": "key"}  //isko json object banan hai
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("region news par call ayi")
  console.log(ranornot);
  if(ranornot === "ran")
  {
    console.log("already ran bro without hitting cpanel and the result that is sending is ");
    console.log(globalspecific)
    res.send(globalspecific)


  }
  if (ranornot != "ran") {
    connection.query("SELECT  * FROM `region` where description IS NOT NULL limit 6", function (error, results, fields) {
      globalspecific = results;
      console.log("data got from region first time");
      console.log(results);
      globalspecific = results;
      console.log("Error: " + error) //uncomment when koi error aya
      res.send(globalspecific)


    }); //query
    ranornot = "ran"

  }
  ranornot = "ran"
});

app.get("/relatedregion", (req, res) => {
  console.log("related par call ayi first time")
  if(ranornot1 === "ran") {
    console.log("already ran related region news bro without hitting cpanel and the result that is sending is ");
    console.log(globalspecific2)
    res.send(globalspecific2)
  }

    if (ranornot1 != "ran") {

    connection.query("SELECT * FROM `Relatedregion`", function (error, results, fields) {
    globalspecific2= results
    console.log("related region data got from first time");
    console.log(results);
    console.log("Error: " + error) //uncomment when koi error aya

    res.send(results)
  });
    ranornot1 = "ran"
    }//if
});

app.listen(3000, () => console.log("listening"));
