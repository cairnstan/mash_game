var express = require('express');
var router = express.Router();
var pg = require('pg');

var connection = require('../../db/connection');

var connectionString = connection.connectionString;

router.post('/', function(request, response){
  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    }else {
      console.log('This is the call from the inputRouter');
      var results =[];
      var inputName = request.body;
    inputName.forEach(function(k){
        var inputName1 = k.optionOne;
        var inputName2 = k.optionTwo;
        var inputName3 = k.optionThree;
        var inputName4 = k.optionFour;
        var cat_id = k.category_id;

      var query = client.query('INSERT INTO mash_data(input, category_id)' +
       ' VALUES ($1, $2), ($3, $2), ($4, $2), ($5, $2) ON CONFLICT DO NOTHING RETURNING id, input, category_id', [inputName1, cat_id, inputName2, inputName3, inputName4]);


      query.on('error', function(error){
        console.log('This is the error response', error);
        response.sendStatus(500);
      });

      query.on('row', function(rowData){
        results.push(rowData);
      });

      query.on('end', function(){
        done();
      });
    }); //function end
      response.send(results);

    }
  });
});

router.get('/', function(request, response){
  console.log('this is the response from .get router');
  console.log(request.query);
  pg.connect(connectionString, function(err, client, done){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else{
      console.log('router.get query hit');
      var query = client.query('SELECT * from mash_data WHERE category_id = $1 ORDER BY random() LIMIT 4',[request.query.categoryId]);
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
