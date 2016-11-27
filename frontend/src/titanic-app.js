'use strict'

angular.module('titanicApp', [
'ngRoute',
'ngResource',
'ngTable',
'survivor'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/survivor'});
}]);