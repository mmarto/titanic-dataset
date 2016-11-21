'use strict'

angular.module('survivor', ['ngTable'])
    .config(function($routeProvider){
      $routeProvider.when("/survivor", {
          templateUrl: "./views/survivor/index.html",
          controller: "survivor-controller"
      })
    })
    .controller("survivor-controller", ["$scope", function($scope){
        $scope.statistic = [
            {
                id: 1,
                pclass: 1,
                sex: 'female',
                age: '0-1',
                survivors: '10',
                victims: '0',
                total: '10',
                percentage: '100'
            }
        ];

        self.tableParams = new NgTableParams({}, { dataset: $scope.statistic});
    }])
