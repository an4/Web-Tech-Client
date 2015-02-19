'use strict';

var app = angular.module('myApp');

app.controller("CardsController", ['$scope', '$http', function($scope, $http) {
    $http.get('data/cards.json').success(function(data) {
        $scope.cards = data;
    });
}]);
