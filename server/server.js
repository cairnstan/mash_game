var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

////////////development modules//////////
var index = require('./routes/index');

////////MONGO/////////
// var mongoURI = 'mongodb://localhost/mash';
// var MongoDB = mongoose.connect(mongoURI).connection;
//
// MongoDB.on('error', function(err){
//   console.log('MongoDBconnection error:', err);
// })
// MongoDB.once('open', function(){
//   console.log('MongoDB connection open.');
// })

//////////// config /////////////
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

///////////routes/////////////
app.use('/', index);

//listen
app.listen(port, function() {
  console.log('listening on port', port);
});
