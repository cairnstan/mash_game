angular.module('mashApp').factory('CategoryService', ['$http', function($http){
  var category = {
    pet: {name: 'pet'},
    love: {name: 'love'},
    job: {name: 'job'},
    biography: {name: 'biography'},
    superpower: {name: 'superpower'},
    live: {name: 'live'},
    ride: {name: 'ride'},
    adventure: {name: 'adventure'},
    movie: {name: 'movie'},
    campaign: {name: 'campaign'}
  };
  // var categories = [];
  var getInputs = function(initialCategories){
    console.log('Here is the getInputs from factory');
    console.log('This is the array from controller:', initialCategories);

    var categories = initialCategories.filter(function(el){

      if(el.val){
        return true;
      }else {
        return false;
      }
      return categories;
    })
    console.log('These are the chosen categories', categories);
    console.log('Your categories have been selected!');
    // var sendCategories = function(){
    //   $http.post('/categories', categories).then(function(){
    //     console.log('categories have been posted', categories);
    //   })
    // }
  }




  return {
    category: category,
    getInputs: getInputs,
    // categories: categories
  }

}])
// home.category = '';
// home.categories = [];
// home.initialCategories = [];

// home.pet = {name: 'pet'};
// home.love = {name: 'love'};
// home.job = {name: 'job'};
// home.biography = {name: 'biography'};
// home.superpower = {name: 'superpower'};
// home.live = {name: 'live'};
// home.ride = {name: 'ride'};
// home.adventure = {name: 'adventure'};
// home.movie = {name: 'movie'};
// home.campaign = {name: 'campaign'};

// home.enterInputs = function(){
//
// home.initialCategories.push(home.pet);
// home.initialCategories.push(home.job);
// home.initialCategories.push(home.love);
// home.initialCategories.push(home.biography);
// home.initialCategories.push(home.superpower);
// home.initialCategories.push(home.live);
// home.initialCategories.push(home.ride);
// home.initialCategories.push(home.adventure);
// home.initialCategories.push(home.movie);
// home.initialCategories.push(home.campaign);
//
// // console.log('initialCategories', home.initialCategories);
// home.categories = home.initialCategories.filter(function(category){
//   if(category.val == true){
//     return true;
//   }else {
//     return false;
//   }
// })

// console.log(home.category);
  // console.log(home.categories);
  // console.log('Your categories have been selected!');
//   $http.post('/categories', home.categories).then(function(){
//     console.log('categories have been posted', home.categories);
//   })
// }
