angular.module('mashApp').controller('InputController', function(CategoryService, $location){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;
  input.entry = '';

  console.log('this is the input.entry[genre]', input.entry[input.genre]);

  console.log('This is the bestArray', CategoryService.bestArray);

  input.userInput = function(){
    $location.path('/gamePlay');
  }


})
