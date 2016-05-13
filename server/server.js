var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

////////////development modules//////////
var connection = require('../db/connection');
var index = require('./routes/index');
var inputs = require('./routes/inputRouter')


//////////// config /////////////
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

///////////routes/////////////
app.use('/', index);
app.use('/inputs', inputs);


// connection.initializeDB();
//listen
app.listen(port, function() {
  console.log('listening on port', port);
});
