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
    gameArray.unshift({mainValue: 'MASH', elements: ['M: mansion', 'A: apartment', 'S: shack', 'H: house']});
    bestArray.unshift({value: 'MASH', optionOne: 'M: mansion', optionTwo: 'A: apartment', optionThree: 'S: shack',  optionFour: 'H: house'});
  }

  //probably scrap this too
  // var playLoop = function(array){
  //   console.log('playLoop function called from factory');
  //   var num = 5;
  //   var counter = 1;
  //   for(var x = 0; x < array.length; x++) {
  //     for(var y = 0; y < array[x].elements.length; y++){
  //       if(counter%num == 0){
  //         console.log(array[x].elements[y]);
  //         array[x].elements[y].selected = true;
  //         console.log(array[x].elements[y]);
  //       }
  //     counter++;
  //   }
  // }
  //   }

    ///probably scrap all this
  // var continueLoop = function(array){
  //   // var x = 0;
  //
  //   while(array[x].elements.length > 1){
  //     var num = 5;
  //     var counter = 1;
  //     for(var x = 0; x < array.length; x++) {
  //       for(var y = 0; y < array[x].elements.length; y++){
  //         if(counter%num == 0){
  //           console.log(array[x].elements[y]);
  //           array[x].elements[y].selected = true;
  //           console.log(array[x].elements[y]);
  //         }
  //       counter++;
  //       array[x].elements.filter(function(element){
  //         // element.selected===false;
  //         return element.selected === false;
  //       })
  //     }
  //   }
  //     }
  //   }

///create function to check to see if all filtered subarrays have a length of 1. Check to see that they are all true.
//This will be the conditional for the while loop.
// var checkSubArrays= function(array){
//   for(var i = 0; i < array.length; i++){
//     for(var k = 0; k < array[i].elements.length; k++){
//       array[i].elements.filter(function(element){
//         // element.selected===false;
//
//         return element.selected === false;
//       })
//       //need to check the length of all the subarrays. if all are equal to one then return false?
//     }
//   }
// }
//where num = magicNum that will be pulled from play
// var cycleLoop = function(array, num){
//   var x = 0;
//   var y = 0;
//   var count = 1;

//while loop continues while it's true. correct?
//   while (checkSubArrays(array)){
//     if(){
//       //check to see if filtered subarray = 1, if yes, skip subarray
//     }
//     if(){
//       //ckeck to see if selected is true, if yes, skip element
//     }
//     count++;
//     if(count%num == 0){
//     array[x].elements[y].selected = true;
//     }
//     if(y = array[x].element.length - 1){
//       if(x = array.length - 1){
//         x = 0;
//         y = 0;
//       }else{
//         x++;
//         y = 0;
//       }
//     }else{
//       y++;
//     }
//   }
// }
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
    // playLoop: playLoop,
    // continueLoop: continueLoop,
    // checkSubArrays: checkSubArrays
  }

}])
