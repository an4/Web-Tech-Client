'use strict';

var app = angular.module('myApp');

app.controller('card', ['$routeParams', '$scope', '$http', '$location', '$timeout',
    function($routeParams, $scope, $http, $location, $timeout) {
        $http.get('data/' + $routeParams.cardId + '.json').success(function(data) {
            $scope.card = data;
            var images = data.mediaURLs;
            var length = images.length;
            var i = 0;
            var transition = function() {
                if(i >= length) {
                    i = 0;
                }
                $('.image-transition').attr("src", images[i]);
                i++;
                $timeout(transition, 10000);
            }
            transition();
        });

        $scope.back = function() {
            $location.path("/cards");
        };
}]);
