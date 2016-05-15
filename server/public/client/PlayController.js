angular.module('mashApp').controller('PlayController', function(CategoryService, $location){
  var play = this;
  console.log("PlayController loaded");

  play.games = CategoryService.finalObject;
  play.categories = CategoryService.bestArray;

  play.startGame = function(){
    console.log('startGame button pushed');
    CategoryService.randomResults(CategoryService.gameArray);
    console.log('This is the updated gameArray', CategoryService.gameArray);
    console.log('This is the randomArray', CategoryService.randomArray);
    CategoryService.storyTime();
    $location.path('/story');
  }

})
