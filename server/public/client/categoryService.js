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
 var gameArray =[];

  var getUserEntry = function(entry){
    //build function to capture user inputs
    gameArray.push(entry);
    $http.post('/inputs', entry).then(function(response){
      console.log('This is the response from /inputs:', response);
    })
  }

  return {
    getInputs: getInputs,
    bestArray: bestArray,
    getUserEntry: getUserEntry,
    gameArray: gameArray
  }

}])
