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

  $locationProvider.html5Mode(true);
}])
