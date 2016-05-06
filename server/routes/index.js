var express = require('express');
var router = express.Router();
var path = require('path');
var categories = require('./categoryRouter')

router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});




router.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.use('/categories', categories);

module.exports = router;
