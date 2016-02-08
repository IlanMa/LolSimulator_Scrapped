simulation.controller('SimController', [
    '$scope',
    '$http',
    'SkinService',
    'ChampionInfo',
    function(
        $scope,
        $http,
        SkinService,
        ChampionInfo) {
        'use strict';

        console.log('### SIM CONTROLLER');

        // var skins = [];
        // SkinService.getChampData(function(res){
        //     skins = SkinService.getSkinsData(res);
        //     console.log(skins);
        // });

        // Initial Img
        $scope.image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg';

        var skins = ChampionInfo;
        $scope.openSkin = function() {
            var skinResult;
            do {
                skinResult = skins[Math.floor(Math.random() * skins.length)];
            } while (skinResult.name === 'default')
            $scope.image = skinResult.img;
        }

    }   
])
