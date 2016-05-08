var express = require('express');
var router = express.Router();
var path = require('path');
var inputs = require('./inputRouter')

router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});




router.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.use('/inputs', inputs);

module.exports = router;
