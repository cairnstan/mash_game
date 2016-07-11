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
  .when('/story', {
    templateUrl: 'views/story.html',
    controller: 'StoryController',
    controllerAs: 'story'
  })

  $locationProvider.html5Mode(true);
}])
