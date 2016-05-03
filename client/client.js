var app = angular.module('mashApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/gameInputs', {
    templateUrl: 'views/gameInputs.html',
    controller: 'InputController',
    controllerAs: 'input'
  })
  .when('/gamePlay', {
    templateUrl: 'views/gamePlay.html',
    controller: 'PlayController',
    controllerAs: 'play'
  })
  .when('/results', {
    templateUrl: 'views/results',
    controller: 'ResultsController',
    controllerAs: 'results'
  })

  // $locationProvider.html5Mode(true);
}])

app.controller('GameController', function(){

});

app.controller('HomeController', function(){
  var home = this;
  home.category = '';
  home.categories = [];
  //home.initialCategories = [home.pet, home.love, home.job];
  home.initialCategories = [];
  home.pet = {name: 'pet'};
  home.love = {name: 'love'};
  home.job = {name: 'job'};
  home.biography = {name: 'biography'};
  home.superpower = {name: 'superpower'};
  home.live = {name: 'live'};
  home.spiritAnimal = {name: 'spiritAnimal'};
  home.adventure = {name: 'adventure'};
  home.movie = {name: 'movie'};
  home.campaign = {name: 'campaign'};



  home.rules = "M.A.S.H. is a future imagining game. First you will choose your categories. Then you will enter items for each category. A magic number will be chosen to cycle through all the items, crossing off the element whenever it gets to the magic number. This continues until there is only one item left in each category. These elements combined will be your story."
////////psuedocode/////////

  home.enterInputs = function(){
  //   if(home.category == true){
  //     home.category.push(home.categories);
  // }
  home.initialCategories.push(home.pet);
  home.initialCategories.push(home.job);
  home.initialCategories.push(home.love);
  home.initialCategories.push(home.biography);
  home.initialCategories.push(home.superpower);
  home.initialCategories.push(home.live);
  home.initialCategories.push(home.spiritAnimal);
  home.initialCategories.push(home.adventure);
  home.initialCategories.push(home.movie);
  home.initialCategories.push(home.campaign);

  // console.log('initialCategories', home.initialCategories);
  home.categories = home.initialCategories.filter(function(category){
    if(category.val == true){
      return true;
    }else {
      return false;
    }
  })
  // console.log(home.category);
    console.log(home.categories);
    console.log('Your categories have been selected!');
    // $http.post('/categories', home.category).then(function()){
    //
    // }
  }
});

app.controller('InputController', function(){
  var input = this;
});

app.controller('PlayController', function(){
  var play = this;
});

app.controller('ResultsController', function(){
  var results = this;
});
