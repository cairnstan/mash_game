var express = require('express');
var router = express.Router();
var pg = require('pg');

var connection = require('../../db/connection');

var connectionString = connection.connectionString;

router.post('/', function(request, response){
  // console.log(request.body);

  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    }else {
      console.log('This is the call from the inputRouter');
      var inputName = request.body;
      console.log('this is the request.body', inputName);
      console.log('this is request.body[0].value', request.body[0].value);
      
      //maybe make a switch to identify category?

      // console.log('This is genre from router', genre);
      //this does not work
      // var inputName1 = request.body + '100';
      // var inputName2 = request.body + '200';
      // var inputName3 = request.body + '300';
      // var inputName4 = request.body + '400';

      //this works to put on separate lines. Need to think about how to have it tied to $index.
      //Right now will only work with one category. This is based on track by $index.
      // var inputName1 = request.body['0a'];
      // var inputName2 = request.body['0b'];
      // var inputName3 = request.body['0c'];
      // var inputName4 = request.body['0d'];

      //this does not work because it is not pulling in genre. how can we do that?
      // var inputName1 = request.body['genre + a'];
      // var inputName2 = request.body['genre + b'];
      // var inputName3 = request.body['genre + c'];
      // var inputName4 = request.body['genre + d'];

      // var inputName1 = request.body[genre + 'a'];
      // var inputName2 = request.body[genre + 'b'];
      // var inputName3 = request.body[genre + 'c'];
      // var inputName4 = request.body[genre + 'd'];
      // var results = [];
      //the entries into the database are all going into one row. This puts the
      //same entries on 4 separate rows.
      //Want to keep this commented out until I figure out the format.
//       var query = client.query('INSERT INTO testTable(inputName)' +
//        ' VALUES ($1), ($2), ($3), ($4) RETURNING id, inputName',
//        [inputName, inputName, inputName, inputName]);
//
//
//       query.on('error', function(error){
//         console.log('This is the error response', error);
//         response.sendStatus(500);
//       });
//
//       query.on('row', function(rowData){
//         results.push(rowData);
//       });
//
//       query.on('end', function(){
//         response.send(results);
//         done();
//       });
    }
  });
});

router.get('/', function(request, response){
  console.log('this is the response from the router for the get');
  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else{
      // this should be the place to select the random elements?
      //postgreSQL query to pull random elements
      var query = client.query('SELECT * from testTable ORDER BY random() LIMIT 4');

      var results = [];

      query.on('error', function(error){
        console.log(error);
        response.sendStatus(500);
      });

      query.on('row', function(rowData){
        results.push(rowData);
      });

      query.on('end', function(){
        response.send(results);
        done();
      });
    }
  });
});
module.exports = router;
