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
            controller: 'CardsController'
        }).
        when('/cards/:cardId', {
            templateUrl: 'view/card.html',
            controller: 'CardController'
        }).
        otherwise({
            redirectTo: '/cards'
        });
    }]);
