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
      var results = [];
      var query = client.query('INSERT INTO testTable(inputName)' +
       ' VALUES ($1) RETURNING id, inputName',
       [inputName]);
      //need to have elements here that will be posted.
      // console.log('The items are here');
      // var toDoItem = request.body.toDoItem;
      // var completed = request.body.completed;
      // var results = [];

      // need query that will respond to which table is being inputed to.
      // var query = client.query('INSERT INTO toDo(toDoItem, completed)' +
      // ' VALUES ($1, $2) RETURNING id, toDoItem, completed',
      // [toDoItem, completed]);

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
