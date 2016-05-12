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
  console.log('this is the CategoryService.randomResponse', CategoryService.randomResponse);
  // input.genre.optionOne = CategoryService.randomResponse.data[0];
  // input.genre.optionTwo = CategoryService.randomResponse.data[1];
  // input.genre.optionThree = CategoryService.randomResponse.data[2];
  // input.genre.optionFour = CategoryService.randomResponse.data[3];
  }
//need to figure out how to make random inputs display in the input boxes

})
