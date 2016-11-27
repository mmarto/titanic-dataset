'use strict'

angular.module('survivor')
    .factory('survivor.service', ['ngResource', function($resource){

        var statistic = $resource(
            '/statistic/:age/:sex/:price',
            {
                age:'@age',
                sex: '@sex',
                price: '@price'
            },
            {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }
        );

        return statistic;

    }])
