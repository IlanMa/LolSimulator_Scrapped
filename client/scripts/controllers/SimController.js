simulation.controller('SimController', [
    '$scope',
    '$http',
    function(
    	$scope, 
    	$http) {
        'use strict';

        console.log('### Sim Controller');

        $scope.getSkins = function() {
            $http.get('/skins').then(function(res) {
                console.log(res);
            }, function(err) {
                console.log(err)
            })
        }
        $scope.getSkins();
    }
])
