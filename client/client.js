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
  home.rules = "M.A.S.H. is a future imagining game. First you will choose your categories."
  home.enterInputs = function(){
    console.log('Your categories have been selected!');
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
