angular.module('mashApp').controller('StoryController', function(CategoryService, $location){
  var story = this;
  console.log("StoryController loaded");
  story.selections = CategoryService.randomArray;
})
