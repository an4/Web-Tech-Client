'use strict';

var app = angular.module('myApp');

app.controller("title", ['$scope', '$location', function($scope, $location) {
    $scope.goHome = function() {
        $location.path('/cards');
    };
}]);
