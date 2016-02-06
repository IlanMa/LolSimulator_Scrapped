var simulation = angular.module('simulation', ['ngRoute']);

console.log("### APP JS")

simulation.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'views/landing.html',
            controller: 'SimController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });