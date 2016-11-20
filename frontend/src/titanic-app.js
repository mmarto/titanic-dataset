'use strict'

angular.module('titanicApp', [
'ngRoute',
'ngResource',
'survivor'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/survivor'});
}]);