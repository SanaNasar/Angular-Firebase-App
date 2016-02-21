'use strict';

// Declare app level module which depends on views, and components
// Define the routes
angular.module('myApp', [
  'ngRoute',
  'myApp.home'           // Newly added home module
]).
config(['$routeProvider', function($routeProvider) {
     // Routes will be here
     // Set default view of our app as home
      $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);