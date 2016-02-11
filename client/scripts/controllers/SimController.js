simulation.controller('SimController', [
    '$scope',
    '$http',
    'SkinService',
    'GiftService',
    'ChampionInfo',
    function(
        $scope,
        $http,
        SkinService,
        GiftService,
        ChampionInfo) {
        'use strict';

        console.log('### SIM CONTROLLER');

        // var skins = [];
        // SkinService.getChampData(function(res){
        //     skins = SkinService.getSkinsData(res);
        //     console.log(skins);
        // });

        // Contains skin history
        $scope.skinHistory = GiftService.skinHistory;

        // Contains all statistics
        $scope.statistics = GiftService.statistics;

        // Invoked when button is clicked
        $scope.openSkin = function() {
            var skins = ChampionInfo;
            console.log($scope.mode);
            // for (var skin in skins) {
            //     if (skins[skin].price > 1500) {
            //         console.log(skins[skin].name);
            //     }
            // }
            GiftService.openSkin($scope.mode); 
            $scope.skinImage = GiftService.skinImage;
        }

    }
])
