angular.module('mashApp').factory('CategoryService', ['$http', function($http){

  var bestArray = [];

  var getInputs = function(chosenCategories){
    console.log('This is the object from controller:', chosenCategories);

    for(var it in chosenCategories){
      if(chosenCategories[it]){
        bestArray.push({value: it});
      }
    }
  }
 var gameArray = [];
 var finalObject = {};
  var getUserEntry = function(entry){
    //build function to capture user inputs

    // console.log('this is the entry', entry);
    // console.log('This is the entry[0].value', entry[0].value);
    for(var i = 0; i < entry.length; i++){
        var keyValue = entry[i].value;
        var tempArray = [entry[i].optionOne, entry[i].optionTwo, entry[i].optionThree, entry[i].optionFour];
        // console.log('this is the keyValue', keyValue);
        // console.log('this is the tempArray', tempArray);
        finalObject[keyValue] = tempArray;
        console.log('this is the finalObject', finalObject);
    }
    //this is how the final object gets sent back:
    // Object {pet: Array[4], love: Array[4], job: Array[4]}
    // job: Array[4]0: "bi"1: "bujk"2: "kbu"3: "jnif"
    // love: Array[4]0: "bo"1: ",jh"2: "nj"3: "mnk"
    // pet: Array[4]0: "nv"1: "vrn"2: "ver"3: "vrv"}

    // gameArray.push(entry);
    $http.post('/inputs', finalObject).then(function(response){
      console.log('This is the response from /inputs:', response);
    })
  }

//to get random entries from postgreSQL
  var getRandomInputs = function(){
    $http.get('/inputs').then(function(response){
      console.log('These are the random inputs', response);
      //This is the response back from this: Object {data: "<!DOCTYPE html>↵<html ng-app="mashApp">↵  <head>↵ …    <div ng-view>↵↵    </div>↵↵  </body>↵</html>↵", status: 200, config: Object, statusText: "OK"}
    })
  }
  return {
    getInputs: getInputs,
    bestArray: bestArray,
    getUserEntry: getUserEntry,
    gameArray: gameArray,
    getRandomInputs: getRandomInputs,
    finalObject: finalObject
  }

}])
