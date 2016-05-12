angular.module('mashApp').controller('PlayController', function(CategoryService, $location){
  var play = this;
  console.log("PlayController loaded");

  play.games = CategoryService.finalObject;
  play.categories = CategoryService.bestArray;

  play.startGame = function(){
    //will run the logic of moving through the game play.
  }
  play.getResults = function(){
    console.log('play button pushed');
    $location.path('/story');
  }


})
