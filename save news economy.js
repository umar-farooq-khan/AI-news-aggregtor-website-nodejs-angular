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
//API CALL
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function makedisttinctsounds() {
  for (let i = 1; i <= 5; i++) {
    await sleep(50); // sleep the program for 1 hour
     callapi();  //to insert new records new news//////////////
    //saving it to database is commented out
  }
}
makedisttinctsounds();
function callapi()
{
  console.log("callapi")
  url =
    "http://newsapi.org/v2/top-headlines?category=business&country=us&from=2020-12-05&page=${i}&pageSize=50&sortBy=publishedAt&apiKey=cc742bddd3154adabcc65f45f78d006e";
  var options = {
    path: url,
    json: true,
  };
  request(url, function (error, response, body) {
    console.log("Response: "); console.log(response)
    if (!error && response.statusCode == 200) {
      console.log(  "------------------------kkkkkkkkkkkkkkkkkkkkkk-------------" );
      var data = body;
      var body = JSON.parse(data);
      console.log(body)

      // console.log(body["articles"][2]);
      // console.log(body["articles"]["author"]);
      // xx = body["articles"];
      //  console.log(xx);
      //  console.log(body[2]["articles"]);

      savetodb(body);
    }
  });
}

function savetodb(body) {
  console.log("save to db")
  console.log(body)
  // app.get("/getData", (req, res) => {
  //   res.send(body);}); //lekin zaroroat nahe hai pass karny ki
  //1. parse karna parega
  for (
    let i = 0;
    i <= 14;
    i++ // ye loop length of body tak ka karna hai
  ) {
    console.log("body");
    console.log(body)
    console.log(body["articles"][i]["title"]);
    var title = "";
    title = body["articles"][i]["title"];
    if (title != null) {
      title = title.replace(/\,/g, "").replace(/\'/g, "");
      title = "'" + title + "'";
    }

    console.log("title:==", title);
    var author = "";
    console.log("authorrrrrrrrrrrrrr");
    console.log(body["articles"][i]["author"]);
    author = body["articles"][i]["author"];

    if (author != null) {
      author = author.replace(/\,/g, " ").replace(/\'/g, "");
      author = "'" + author + "'";
    }

    console.log("aut:==", author);
    var url = "";
    url = body["articles"][i]["url"];
    if (url != null) {
      url = url.replace(/\,/g, " ").replace(/\'/g, "");
      url = "'" + url + "'";
    }

    console.log("url:==", url);
    var urlToImage = "";
    urlToImage = body["articles"][i]["urlToImage"];
    if (urlToImage != null) {
      urlToImage = urlToImage.replace(/\,/g, " ").replace(/\'/g, "");
      urlToImage = "'" + urlToImage + "'";
    }

    console.log("image:==", urlToImage);
    var publishedAt = "";

    publishedAt = body["articles"][i]["publishedAt"];
    if (publishedAt != null) {
      publishedAt = publishedAt.replace(/\,/g, " ").replace(/\'/g, "");
      publishedAt = "'" + publishedAt + "'";
    }

    console.log("pubat:==", publishedAt);

    // var content = body["articles"][i]["content"];
    // content = content.replace("/,/g", " ");
    // console.log("content", content);
    var description = "";
    description = body["articles"][i]["content"];
    if (description != null) {
      description = description
        .replace(/\,/g, " ")
        .replace(/\[/g, "chars")
        .replace(/\]/g, " ")
        .replace(/\+/g, " ")
        .replace(/\'/g, " ")
        .substring(0, 2000);
      description = "'" + description + "'";
    }

    console.log("desc:==", description);

    qstring =
      "INSERT INTO economy(author,title,description,url,urlToImage,publishedAt) VALUES (%s, %s, %s ,%s , %s, %s)";
    querystring = parse(
      qstring,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt
    );
    console.log("QUERY STRINGG");
    querystring = querystring.replace("null", "' '");
    console.log('INSTERTEDDDDDDDDDDDD')
    console.log(i)




    try{
      connection.query(querystring),
        function (error, results, fields) {
          console.log(results);
          console.log(error);
        };
    }
    catch(e)
    {
      console.log("error hai bhai");

    }
  } //loop
}  //functyion end

app.listen(3000, () => console.log("listening"));
