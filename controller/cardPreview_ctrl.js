'use strict';

var app = angular.module('myApp');

app.controller('cardPreview', ['$scope', '$location', function($scope, $location) {
    $scope.display = function() {
        var url = "/cards/" + $scope.card.cardId;
        $location.path(url);
    };
}]);
