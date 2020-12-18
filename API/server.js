// server.js
/*jshint esversion: 6 */
// server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./DB');

const productRoute = require('./routes/product.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database is connected');
  },
  err => {
    console.log('Can not connect to the database' + err);
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/products', productRoute);
const port = process.env.PORT || 4000;


//app.use(express.static('./dist/POS'));
//app.use('/', express.static('./dist/POS'));

//app.use(express.static(__dirname + '/dist/POS'));
//app.get('/*',(req, res) => res.sendFile(path.join(__dirname)));


const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});
