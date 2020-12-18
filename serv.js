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
var resultsglobal = "";
let removedstoparray=[]

// connection.query("SELECT * FROM `mytable1`", function (error, results, fields) {
//   resultsglobal = results;
//  // console.log(resultsglobal);
//   app.get("/getData", (req, res) => {
//     //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     console.log("getdata par call ayi")
//     res.send(results)
//   });
// });



app.get("/getnewspk", (req, res) => {
  fullresults={"name":"key"}  //isko json object banan hai
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("getnewpknews par call ayi")
  connection.query("SELECT  * FROM `mytable1` where description IS NOT NULL limit 4", function (error, results, fields) {
    resultsglobal = results;
    console.log("data got"); console.log(results) ; console.log("Error: "+error) //uncomment when koi error aya
    res.send(resultsglobal)
    for (var i=0; i<results.length; i++)   //it will loop searching the rel news one by one
    {

      removedstop=removestopwords(results[i].title)
      removedstoparray=removedstop.split(" ")

        formattedquery=formatquery(removedstoparray,"mytable1")
        console.log(formattedquery)
      connection.query(formattedquery, function (error, resultsrelated, fields)
      {
        console.log("Results 220") ;console.log(resultsrelated); console.log("error 217  "+error);
        //insert this whole result
        for( var k=0 ; k<resultsrelated.length; k++)
        {
          insertwholeresult(resultsrelated[k],k,"RelatedNews_1")
        }
    }); //select like query

    }//for loop
  });
});



app.get("/technews", (req, res) => {
  fullresults={"name":"key"}  //isko json object banan hai
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("tech news par call ayi")
  connection.query("SELECT  * FROM `technology` where description IS NOT NULL limit 3", function (error, results, fields) {
    resultsglobal = results;
    console.log("data got"); console.log(results) ; console.log("Error: "+error) //uncomment when koi error aya
    res.send(resultsglobal)
    for (var i=0; i<results.length; i++)   //it will loop searching the rel news one by one
    {
      removedstop=removestopwords(results[i].title)
      removedstoparray=removedstop.split(" ")

      formattedquery=formatquery(removedstoparray, "technology")
      console.log(formattedquery)
      connection.query(formattedquery, function (error, resultsrelated, fields)
      {
        console.log("Results 220 from tech news") ;console.log(resultsrelated); console.log("error 217  "+error);
        //insert this whole result
        for( var k=0 ; k<resultsrelated.length; k++)
        {
          insertwholeresult(resultsrelated[k],k,"RelatedTech")
        }

        //now selectand pass on
        app.get("/relatedtech", (req, res) => {
          console.log("related par call ayi")
          connection.query("SELECT * FROM `RelatedTech`", function (error, results, fields)
          {
            resultsglobal = results;
            console.log("related tech data got"); console.log(results) ; console.log("Error: "+error) //uncomment when koi error aya

            res.send(results)
          });
        });

      }); //select like query

    }//for loop
  });
});




function insertwholeresult(wholeresult,k,tablename)
{
  connection.query("SELECT COUNT (idd) FROM "+`${tablename}`, function (error, resultsx, fields)
  {
    console.log("error");console.log(error);
    console.log("number of records"); console.log(resultsx[0]['COUNT (idd)'])
    if(resultsx[0]['COUNT (idd)'] === 0)
    {

      title = wholeresult.title
      url = wholeresult.url
      author = wholeresult.author

      if (title != null) {
        title = title.replace(/\,/g, "").replace(/\'/g, "");
        title = "'" + title + "'";

       var kstr = k.toString().replace(/\,/g, "").replace(/\'/g, "");
        kstr = "'" + kstr + "'";
      //if data nahe parha hoa.

        var author = author.toString().replace(/\,/g, "").replace(/\'/g, "");
        author = "'" + author + "'";

        var url = url.toString().replace(/\,/g, "").replace(/\'/g, "");
        url = "'" + url + "'";
        console.log("query inserting")

        qstring =
      `INSERT INTO ${tablename}(idd,author,title,url) VALUES (%s, %s, %s, %s)`;
        console.log(qstring)

        querystring = parse(
      qstring,
      k,
      author,
      title,
      url
    );
    querystring = querystring.replace("null", "' '");
    console.log('INSTERTEDDDDDDDDDDDD queryyyyy')
    console.log(querystring)
    connection.query(querystring, function (error, insertedresult, fields)
    {
      console.log("Results 90 ") ;console.log(insertedresult); console.log("error 90  "+error);
      //insert this whole result

    });
      }
    }
  });

}


  app.get("/related", (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    console.log("related par call ayi")
    connection.query("SELECT * FROM `${{tablename}}`", function (error, results, fields)
    {
      resultsglobal = results;
      console.log("related data got"); console.log(results) ; console.log("Error: "+error) //uncomment when koi error aya

    res.send(results)
    });
  });


function formatquery(stoparray,tablename)
{

  myquery = `SELECT * FROM ${tablename} where title LIKE '%${stoparray[0]}%'`
  lengthh=stoparray.length
  for (var i=1 ; i<lengthh; i++)
  {
   myquery=myquery+ ` OR '%${stoparray[i]}%'`
  }
  myquery= myquery+ " limit 3"
  console.log(`Like query from ${tablename}`);
  console.log(myquery)
  return myquery
}

// function makemasterquery(titleslist)
// {
//   console.log("makemasterquery")
//   impallkeywords=[]
//   for (var i=0 ; i<titleslist.length; i++)
//   {
//     templist=removestopwords(titleslist[i])
//     templist=templist.split(" ")
//     for (var u=0 ; u<templist.length; u++)
//     {
//     impallkeywords.push(templist[u])
//     }
//
//   }
//   console.log("list all keywords")
//   console.log(impallkeywords)
//
//   myquery = `SELECT * FROM mytable1 where title LIKE '%${impallkeywords[0]}%'`
//
//   lengthh=impallkeywords.length
//   for (var o=1 ; o<lengthh; o++)
//   {
//    myquery=myquery+ ` OR '%${impallkeywords[i]}%'`
//   }
//   myquery= myquery+ " limit 7"
//   console.log("myquery 281 from all keywords")
//   console.log(myquery)
//   //queryy= SELECT * FROM mytable1 where title LIKE '%${stoparray[0]}%' OR
//   console.log("makemasterquery End")
//
//   return myquery
//
// }

function removestopwords(description)
{
  stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
  res = []
  words = description.split(' ')
  for(i=0;i<words.length;i++) {
     word_clean = words[i].split(".").join("")
     if(!stopwords.includes(word_clean)) {
         res.push(word_clean)
     }
  }
  //console.log(res.join(" "))
  return(res.join(' '))
}



//API CALL
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function makedisttinctsounds() {
  for (let i = 1; i <= 5; i++) {
    await sleep(50); // sleep the program for 1 hour
   // callapi();  //to insert new records new news//////////////
   //saving it to database is commented out
  }
}
makedisttinctsounds();
function callapi()
 {
   console.log("callapi")
  url =
    "http://newsapi.org/v2/everything?q=california&from=2020-12-05&page=${i}&pageSize=50&sortBy=publishedAt&apiKey=cc742bddd3154adabcc65f45f78d006e";
  var options = {
    path: url,
    json: true,
  };
  request(url, function (error, response, body) {
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
    i <= 19;
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
      "INSERT INTO mytable1(author,title,description,url,urlToImage,publishedAt) VALUES (%s, %s, %s ,%s , %s, %s)";
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

