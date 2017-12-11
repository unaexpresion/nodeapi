var mongoose = require('mongoose');
var bluebird = require('bluebird');

mongoose.Promise = bluebird;

//var dbURI = 'mongodb://localhost:27017/test_nodeapi';
var dbURI = 'mongodb://cmedina:mypassword@ds137246.mlab.com:37246/test_nodeapi';

// connecting mongoose to our db
mongoose.connect(dbURI, { useMongoClient: true });

// connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection successfully on ' + dbURI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error' + err);
});