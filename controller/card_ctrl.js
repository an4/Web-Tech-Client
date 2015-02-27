'use strict';

var app = angular.module('myApp');

app.controller('card', ['$routeParams', '$scope', '$http', '$location',
    function($routeParams, $scope, $http, $location) {
        $http.get('data/' + $routeParams.cardId + '.json').success(function(data) {
            $scope.card = data;
        });

        $scope.back = function() {
            $location.path("/cards");
        };
}]);
