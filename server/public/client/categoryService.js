angular.module('mashApp').factory('CategoryService', ['$http', function($http){

  var bestArray = [];

  var getInputs = function(chosenCategories){
    console.log('This is the object from controller:', chosenCategories);

    for(var it in chosenCategories){
      if(chosenCategories[it]){
        bestArray.push(it);
      }
    }
  }

  var displayInputBoxes = function(){
    //build function to put 4 text input boxes below elements in bestArray
  }

  return {
    getInputs: getInputs,
    bestArray: bestArray
  }

}])
