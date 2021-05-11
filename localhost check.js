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
  host: "localhost",
  port: "3306",
  database: "umardb",
  user: "root",
  password: "",
});
// error access denied at username ki jaga username hote @ 115-186-141-139.nayatel.pk,, @ ke bad jo ata vo ap ne cpanel main remote sql k andr dal dena hai ye dalna hota hai remote access, warna error ata hai k



connection.query("SELECT * FROM `economy`", function (error, results, fields) {
  resultsglobal = results;
  console.log(error)
  console.log(resultsglobal);

});


app.listen(3000, () => console.log("listening"));

