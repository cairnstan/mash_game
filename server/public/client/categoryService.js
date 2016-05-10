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
  var sendUserEntry = function(entry){
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
    $http.post('/inputs', bestArray).then(function(response){
      console.log('This is the response from /inputs:', response);
    })
  }
  var findCategory = function(){
    var cat_id = 0;
    for(var j = 0; j < bestArray.length; j++){
      var cat = bestArray[j].value;
      switch(cat){
        case "superpower":
        cat_id = 1;
        break;
        case "pet":
        cat_id = 2;
        break;
        case "live":
        cat_id = 3;
        break;
        case "love":
        cat_id = 4;
        break;
        case "ride":
        cat_id = 5;
        break;
        case "job":
        cat_id = 6;
        break;
        case "adventure":
        cat_id = 7;
        break;
        case "movie":
        cat_id = 8;
        break;
        case "biography":
        cat_id = 9;
        break;
        case "campaign":
        cat_id = 10;
        break;
        return cat_id;
      }
      bestArray.push({category_id: cat_id})
    }
    console.log('this is updated bestArray', bestArray);
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
    sendUserEntry: sendUserEntry,
    gameArray: gameArray,
    getRandomInputs: getRandomInputs,
    finalObject: finalObject,
    findCategory: findCategory
  }

}])
