angular.module('mashApp').controller('InputController', function(CategoryService, $location){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;
  input.entry = '';

  console.log('This is the bestArray', CategoryService.bestArray);

  input.userInput = function(){
    console.log('user input button pushed');
    CategoryService.getUserEntry(input.genres);
    //the code below works to move onto the next page view. Leave it commented
    //out while trying to make the rest of the functionality work.
    // $location.path('/gamePlay');
  }

  input.getRandom = function(){
  console.log('random button pushed');
  CategoryService.getRandomInputs();
  }



})
