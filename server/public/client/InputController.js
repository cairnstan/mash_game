angular.module('mashApp').controller('InputController', function(CategoryService, $location){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;
  input.entry = '';

  console.log('This is the bestArray', CategoryService.bestArray);

  input.userInput = function(){
    console.log('user input button pushed');
    CategoryService.sendUserEntry(input.genres);
    // CategoryService.findCategory();
    CategoryService.pushMash();
    $location.path('/gamePlay');
  }

  input.getRandom = function(genre){
  console.log('random button pushed');
  // CategoryService.findCategory();
  CategoryService.getRandomInputs(genre, function(randomResponse){

  console.log('this is the CategoryService.randomResponse', randomResponse);
  genre.optionOne = randomResponse[0].input;
  genre.optionTwo = randomResponse[1].input;
  genre.optionThree = randomResponse[2].input;
  genre.optionFour = randomResponse[3].input;

  console.log(input.genres, 'its friday');
});
  }
//need to figure out how to make random inputs display in the input boxes

})
