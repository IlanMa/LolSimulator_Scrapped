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
            GiftService.openSkin(); 
            $scope.skinImage = GiftService.skinImage;
        }

    }
])
