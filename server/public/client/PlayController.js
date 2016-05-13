angular.module('mashApp').controller('PlayController', function(CategoryService, $location){
  var play = this;
  console.log("PlayController loaded");

  play.games = CategoryService.finalObject;
  play.categories = CategoryService.bestArray;

  play.startGame = function(){
    console.log('startGame button pushed');
    // CategoryService.checkSubArrays(CategoryService.gameArray);
    // console.log(CategoryService.gameArray);
    // CategoryService.continueLoop(CategoryService.gameArray);
    //will run the logic of moving through the game play.
    CategoryService.randomResults(CategoryService.gameArray);
    console.log('This is the updated gameArray', CategoryService.gameArray);
  }
  play.getResults = function(){
    console.log('play button pushed');

    //code below works to navigate to next page view
    // $location.path('/story');
  }


})
