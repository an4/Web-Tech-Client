'use strict';

var app = angular.module('myApp');

app.controller('cardPreview', ['$scope', function($scope) {
    $scope.display = function() {
        alert("abc");
    };
}]);
