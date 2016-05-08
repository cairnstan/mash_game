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
      //this does not work
      // var inputName1 = request.body + '100';
      // var inputName2 = request.body + '200';
      // var inputName3 = request.body + '300';
      // var inputName4 = request.body + '400';

      //this works to put on separate lines. Need to think about how to have it tied to $index.
      //Right now will only work with one category. 
      var inputName1 = request.body['0a'];
      var inputName2 = request.body['0b'];
      var inputName3 = request.body['0c'];
      var inputName4 = request.body['0d'];

      var results = [];
      //the entries into the database are all going into one row. This puts the
      //same entries on 4 separate rows.
      var query = client.query('INSERT INTO testTable(inputName)' +
       ' VALUES ($1), ($2), ($3), ($4) RETURNING id, inputName',
       [inputName1, inputName2, inputName3, inputName4]);


      query.on('error', function(error){
        console.log('This is the error response', error);
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

router.get('/', function(request, response){
  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else{
      // can select the random elements?
      // var query = client.query('SELECT * FROM toDo');
      // var results = [];

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
