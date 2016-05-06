var express = require('express');
var router = express.Router();

router.post('/', function(request, response){
  console.log(request.body);
  response.send('Hey! from the categoryRouter!')
})

module.exports = router;
