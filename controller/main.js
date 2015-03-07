'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {

    $routeProvider.
        when('/cards', {
            templateUrl: 'view/cards.html',
            controller: 'cards'
        }).
        when('/cards/:cardId', {
            templateUrl: 'view/card.html',
            controller: 'card'
        }).
        otherwise({
            redirectTo: '/cards'
        });
    }]);
