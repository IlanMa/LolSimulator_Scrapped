simulation.controller('SimController', [
    '$scope',
    '$http',
    'SkinService',
    'championInfo',
    function(
        $scope,
        $http,
        SkinService,
        championInfo) {
        'use strict';

        console.log('### SIM CONTROLLER');

        // var skins = [];
        // SkinService.getChampData(function(res){
        //     skins = SkinService.getSkinsData(res);
        //     console.log(skins);
        // });

        console.log(championInfo);

    }   
])
