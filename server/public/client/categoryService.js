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

  var sendUserEntry = function(entry){
    //function to capture user inputs
    for(var i = 0; i < entry.length; i++){
        entry[i].optionOne.toLowerCase();
        entry[i].optionTwo.toLowerCase();
        entry[i].optionThree.toLowerCase();
        entry[i].optionFour.toLowerCase();
        var keyValue = entry[i].value;
        var loopArray = [{value: entry[i].optionOne, selected: false}, {value: entry[i].optionTwo, selected: false}, {value: entry[i].optionThree, selected: false}, {value: entry[i].optionFour, selected: false}];
        gameArray.push({mainValue: keyValue, elements: loopArray});
        console.log('this is the gameArray', gameArray);

    }
    //THIS WORKS JUST COMMENTING IT OUT FOR THE MOMENT
    // $http.post('/inputs', bestArray).then(function(response){
      // console.log('This is the response from /inputs:', response);
    // })
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
  var randomResponse = [];
//to get random entries from postgreSQL
//when I try to access the response in the controller, it returns an empty object.
  var getRandomInputs = function(genre, callback){
    console.log('bestArray=', bestArray);

    // console.log('ids', ids);
    $http.get('/inputs', {params: {categoryId: genre.category_id}}).then(function(response){
      console.log('These are the random inputs', response);
      randomResponse = response.data;
      callback(randomResponse);
      console.log('this is response.data', randomResponse);
      // return randomResponse;
    })
    console.log('randomResponse out of post', randomResponse);
  }
  //change this to be pushed into the final object
  var pushMash = function(){
    gameArray.unshift({mainValue: 'MASH', elements: [{value: 'M: mansion', selected: false}, {value: 'A: apartment', selected: false}, {value: 'S: shack', selected: false}, {value: 'H: house', selected: false}]});
    bestArray.unshift({value: 'MASH', optionOne: 'M: mansion', optionTwo: 'A: apartment', optionThree: 'S: shack',  optionFour: 'H: house'});
  }

  var shuffleArray = function(array) {

  var tempArr = array;
  var m = tempArr.length, t, i;
  //while there remain elements to shuffle...
  while (m) {

    //pick a remaining element...
    i = Math.floor(Math.random() * m--);

    //And swap it with the current element.
    t = tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }
  return tempArr;
}

var randomInput = function(array){
  return shuffleArray(array);
}

var randomArray = [];
var randomResults = function(list){
  console.log("randomResults hit on service");
  for(var i = 0; i < list.length; i++){
    randomInput(list[i].elements);
    randomArray.push({value: list[i].mainValue, choice: list[i].elements[0].value});
  }
}
  return {
    getInputs: getInputs,
    bestArray: bestArray,
    sendUserEntry: sendUserEntry,
    gameArray: gameArray,
    getRandomInputs: getRandomInputs,
    // finalObject: finalObject,
    findCategory: findCategory,
    randomResponse: randomResponse,
    pushMash: pushMash,
    randomResults: randomResults,
    randomArray: randomArray

  }

}])
