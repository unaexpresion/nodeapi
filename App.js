var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

// import our db connection
var db = require('./config/Connection');

// import routings
var PersonRouting = require('./sources/person/PersonRouting');

// create our express app
var app = express();

// adding middlewares to our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// routing request to our express router
app.use('/api/v1/person/', PersonRouting);

// creating the server for our API
var server = http.createServer(app);

server.listen(3001, function() {
  console.log('Api listening on port 3001');
});