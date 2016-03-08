var simulation = angular.module('simulation', ['ngRoute', 'wu.masonry']);

console.log("### APP JS")

simulation.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/landing.html',
            controller: 'SimController'
        })
        .when('/select', {
        	templateUrl: 'views/select.html',
        	controller: 'SelectController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
