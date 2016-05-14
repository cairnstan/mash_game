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
    //captures user inputs
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

    //sends user input to DB
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
        case "like":
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

  var getRandomInputs = function(genre, callback){
    console.log('bestArray=', bestArray);


    $http.get('/inputs', {params: {categoryId: genre.category_id}}).then(function(response){
      console.log('These are the random inputs', response);
      randomResponse = response.data;
      callback(randomResponse);
      console.log('this is response.data', randomResponse);

    })
    console.log('randomResponse out of post', randomResponse);
  }

  var pushMash = function(){
    gameArray.unshift({mainValue: 'MASH', elements: [{value: 'Mansion', selected: false}, {value: 'Apartment', selected: false}, {value: 'Shack', selected: false}, {value: 'House', selected: false}]});
    bestArray.unshift({value: 'MASH', optionOne: 'Mansion', optionTwo: 'Apartment', optionThree: 'Shack',  optionFour: 'House'});
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
var storyTime = function(){
  var sentence = '';
  // var category_id = '';
  for(var j = 0; j < randomArray.length; j++){
    var val = randomArray[j].value;
    switch(val){
      case "MASH":
      sentence = 'You will live in a(n) ' + randomArray[j].choice + '.';
      break;
      case "superpower":
      sentence = 'You will save (or destroy) the world with your powers of ' + randomArray[j].choice + '.';
      break;
      case "pet":
      sentence = 'You will live with your pet ' + randomArray[j].choice + '.';
      break;
      case "live":
      sentence = 'The place you call home will be ' + randomArray[j].choice + '.';
      break;
      case "like":
      sentence = 'Your relationship with ' + randomArray[j].choice + ' will be just as you imagine.';
      break;
      case "ride":
      sentence = 'You will get about the world in your ' + randomArray[j].choice + '.';
      break;
      case "job":
      sentence = 'Working as a ' + randomArray[j].choice + ' will fulfill you.';
      break;
      case "adventure":
      sentence = 'Sometime when you least expect it, you will (go) ' + randomArray[j].choice + '.';
      break;
      case "movie":
      sentence = 'Everyone will want to see the movie of your life where ' + randomArray[j].choice + ' captures your essence perfectly.';
      break;
      case "biography":
      sentence = 'The story of your life: "' + randomArray[j].choice + '", will capture the hearts of millions.';
      break;
      case "campaign":
      sentence = 'You will celebrate your presidential victory from a successful campaign built on the slogan of: "' + randomArray[j].choice + '!"';
      break;
      return sentence;
    }
    randomArray[j]['sentence'] = sentence;
}
  console.log('this is updated randomArray', randomArray);
}

  return {
    getInputs: getInputs,
    bestArray: bestArray,
    sendUserEntry: sendUserEntry,
    gameArray: gameArray,
    getRandomInputs: getRandomInputs,
    findCategory: findCategory,
    randomResponse: randomResponse,
    pushMash: pushMash,
    randomResults: randomResults,
    randomArray: randomArray,
    storyTime: storyTime
  }

}])
