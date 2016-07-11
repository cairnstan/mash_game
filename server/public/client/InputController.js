angular.module('mashApp').controller('InputController', function(CategoryService, $location){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;
  input.entry = '';

  console.log('This is the bestArray', CategoryService.bestArray);

  input.userInput = function(){
    console.log('user input button pushed');
    //with this if someone tries to move to next page without inputing, you get the error 'cannot read property of toLowerCase of undefined'
    CategoryService.sendUserEntry(input.genres);
       CategoryService.pushMash();
       $location.path('/gamePlay');
    //this will pop alert when it happens, but the alert button doesn't want to go away. Also, when there are finally inputs, it freaks out and seems to do an infinite loop.
    // for(var i = 0; i < CategoryService.bestArray.length; i++){
    //   if(CategoryService.bestArray[i].optionOne && CategoryService.bestArray[i].optionTwo && CategoryService.bestArray[i].optionThree && CategoryService.bestArray[i].optionFour){
    //     CategoryService.sendUserEntry(input.genres);
    //     CategoryService.pushMash();
    //     $location.path('/gamePlay');
    // }else{
    //   alert('Please enter your choices or press the randomize button to continue playing.');
    // }
  // }
  }

  input.getRandom = function(genre){
  console.log('random button pushed');
  CategoryService.getRandomInputs(genre, function(randomResponse){

  console.log('this is the CategoryService.randomResponse', randomResponse);
  genre.optionOne = randomResponse[0].input;
  genre.optionTwo = randomResponse[1].input;
  genre.optionThree = randomResponse[2].input;
  genre.optionFour = randomResponse[3].input;

});
  }


})
