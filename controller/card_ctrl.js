'use strict';

var app = angular.module('myApp');

app.controller('card', ['$routeParams', '$scope', '$http', '$location', '$timeout',
    function($routeParams, $scope, $http, $location, $timeout) {
        var images;
        $http.get('data/' + $routeParams.cardId + '.json').success(function(data) {
            $scope.card = data;
            images = data.mediaURLs;

            // Preload images
            var i = 0;
            var length = images.length;
            for(i=0; i<length; i++) {
                var img = $('<img class="image-transition"></img>');
                img.attr("src", images[i]);
                img.attr("id", i);
                img.hide();
                $('.card-media').append(img);
            }

            i = 0;
            var transition = function() {
                var old = $("#" + i);
                i++;
                if(i >= length) {
                    i = 0;
                }
                var current = $("#" + i);
                old.hide(1000, function() {
                    current.show(1000, function() {
                        $timeout(transition, 10000);
                    });
                });
            }

            transition();
        });

        $scope.back = function() {
            images = [];
            $location.path("/cards");
        };
}]);
