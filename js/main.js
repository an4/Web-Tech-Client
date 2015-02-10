var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);