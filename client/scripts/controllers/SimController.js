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

        $scope.image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg';

        var skins = championInfo;
        $scope.openSkin = function() {
            var skinResult;
            do {
                skinResult = skins[Math.floor(Math.random() * skins.length)];
            } while (skinResult.name === 'default')
            $scope.image = skinResult.img;
        }

    }   
])
