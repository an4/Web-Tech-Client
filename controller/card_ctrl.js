'use strict';

var app = angular.module('myApp');

app.controller('card', ['$routeParams', '$scope', '$http',
    function($routeParams, $scope, $http) {
        $http.get('data/' + $routeParams.cardId + '.json').success(function(data) {
        $scope.card = data;
    });
}]);
