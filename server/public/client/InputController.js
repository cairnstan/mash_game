angular.module('mashApp').controller('InputController', function(CategoryService){
  var input = this;
  console.log("InputController loaded");

  input.genres = CategoryService.bestArray;

  console.log('This is the bestArray', CategoryService.bestArray);


})
