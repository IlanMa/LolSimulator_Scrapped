simulation.controller('SimController', [
    '$scope',
    '$http',
    'SkinService',
    function(
        $scope,
        $http,
        SkinService) {
        'use strict';

        console.log('### SIM CONTROLLER');

        var skins = [];
        SkinService.getChampData(function(res){
            skins = SkinService.getSkinsData(res);
        });

    }   
])
