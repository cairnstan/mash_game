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
    //function to capture user inputs
    for(var i = 0; i < entry.length; i++){
        var keyValue = entry[i].value;
        var tempArray = [entry[i].optionOne, entry[i].optionTwo, entry[i].optionThree, entry[i].optionFour];
        finalObject[keyValue] = tempArray;
        console.log('this is the finalObject', finalObject);
    }

    $http.post('/inputs', bestArray).then(function(response){
      console.log('This is the response from /inputs:', response);
    })
  }
  var findCategory = function(){
    var cat_id = 0;
    // var category_id = '';
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

      bestArray[j]['category_id'] = cat_id;
}
    console.log('this is updated bestArray', bestArray);
  }
  var randomResponse = {};
//to get random entries from postgreSQL
//when I try to access the response in the controller, it returns an empty object.
  var getRandomInputs = function(){
    $http.get('/inputs').then(function(response){
      console.log('These are the random inputs', response);
      randomResponse = response.data;
      return randomResponse;
    })
  }


  return {
    getInputs: getInputs,
    bestArray: bestArray,
    sendUserEntry: sendUserEntry,
    gameArray: gameArray,
    getRandomInputs: getRandomInputs,
    finalObject: finalObject,
    findCategory: findCategory,
    randomResponse: randomResponse
  }

}])
