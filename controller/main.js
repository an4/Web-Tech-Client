'use strict';

var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
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
