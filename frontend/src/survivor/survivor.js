'use strict'

angular.module('survivor', [])
 .config(function($routeProvider){
      $routeProvider.when("/survivor", {
          templateUrl: "/views/survivor/index.html",
          controller: "survivor.controller"
      })
  })
  .controller("survivor.controller", ["$scope", function($scope){
      var a = 5;
  }])
