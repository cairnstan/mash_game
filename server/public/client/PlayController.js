angular.module('mashApp').controller('PlayController', function(CategoryService, $location){
  var play = this;
  console.log("PlayController loaded");

  play.getResults = function(){
    console.log('play button pushed');
    $location.path('/story');
  }


})
