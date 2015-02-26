'use strict';

var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

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
