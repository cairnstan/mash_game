angular.module('mashApp').controller('StoryController', function(CategoryService, $location){
  var story = this;
  console.log("StoryController loaded");
  story.selections = CategoryService.randomArray;

  story.restartGame = function(){
    CategoryService.clearArrays();
    console.log('from story, this is the bestArray', CategoryService.bestArray);
    console.log('from story, this is the gameArray', CategoryService.gameArray);
    console.log('from story, this is the randomArray', CategoryService.randomArray);
    console.log('from story, this is the randomResponse', CategoryService.randomResponse);
    $location.path('/');
  }
})
