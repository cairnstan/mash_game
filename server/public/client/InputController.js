angular.module('mashApp').controller('InputController', function(CategoryService, $location){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;
  input.entry = '';

  console.log('This is the bestArray', CategoryService.bestArray);

  input.userInput = function(){
    console.log('user input button pushed');
    CategoryService.sendUserEntry(input.genres);
    CategoryService.findCategory();
    $location.path('/gamePlay');
  }

  input.getRandom = function(){
  console.log('random button pushed');
  CategoryService.findCategory();
  CategoryService.getRandomInputs();
  }



})
