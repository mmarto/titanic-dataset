'use strict'

angular.module('survivor', [])
    .config(function($routeProvider){
      $routeProvider.when("/survivor", {
          templateUrl: "./views/survivor/index.html",
          controller: "survivor-controller"
      })
    })
    .controller("survivor-controller", ["$scope",'NgTableParams','survivor.service', function($scope, ngTableParams, survivorService){
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
            },
            {
                id: 2,
                pclass: 2,
                sex: 'female',
                age: '2-7',
                survivors: '12',
                victims: '0',
                total: '12',
                percentage: '100'
            }
        ];

        //var self = this;
        $scope.tableParams = new ngTableParams({}, {

            dataset: $scope.statistic,
            getData: function(table) {
               var filter = table.filter();
               var sorting = table.sorting();

               survivorService.query(filter);

               return $scope.statistic;
            }
        });

    }])
