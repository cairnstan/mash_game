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

  return {
    
    getInputs: getInputs,
    bestArray: bestArray

  }

}])
