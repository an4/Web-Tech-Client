'use strict';

var app = angular.module('myApp');

app.directive("addMedia", function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<img></img>',
        link: function(scope, element) {
            scope.$watch(
                // Checks that the text changes.
                function() { return element.text() },
                // Function called when the text changes.
                function() {
                    var mediaUrl = element.text();
                    element.attr("src", mediaUrl);
                }
            );
        }
    }
});
