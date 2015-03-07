'use strict';

var app = angular.module('myApp');

app.controller('card', ['$routeParams', '$scope', '$http', '$location', '$timeout',
    function($routeParams, $scope, $http, $location, $timeout) {
        var images;
        $http.get('data/' + $routeParams.cardId + '.json').success(function(data) {
            $scope.card = data;
            images = data.mediaURLs;
            $('.image-transition').attr("src", images[0]);
            var length = images.length;
            var i = 0;
            var transition = function() {
                i++;
                if(i >= length) {
                    i = 0;
                }
                $('.image-transition').fadeOut(500, function() {
                    $(this).attr("src", images[i]).bind('onreadystatechange load', function() {
                        if (this.complete) $(this).fadeIn(500);
                    });
                });
                $timeout(transition, 10000);
            }
            transition();
        });

        $scope.back = function() {
            images = [];
            $location.path("/cards");
        };
}]);
