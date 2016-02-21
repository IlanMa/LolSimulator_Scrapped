simulation.controller('SimController', [
    '$scope',
    '$http',
    'SkinService',
    'GiftService',
    'StatService',
    'ChampionInfo',
    function(
        $scope,
        $http,
        SkinService,
        GiftService,
        StatService,
        ChampionInfo) {
        'use strict';

        console.log('### SIM CONTROLLER');

        // var skins = [];
        // SkinService.getChampData(function(res){
        //     skins = SkinService.getSkinsData(res);
        //     console.log(skins);
        // });

        $scope.changeMode = function(mode) {
            GiftService.currentMode = mode;
        }

        // Determines animation mode
        $scope.animation = 'scroll';

        // Contains skin history
        $scope.skinHistory = GiftService.skinHistory;

        // Contains all statistics
        $scope.statistics = StatService.statistics;

        // Invoked when button is clicked
        $scope.openSkin = function() {
            GiftService.openSkin(GiftService.currentMode);
            $scope.skinImage = GiftService.skinImage;
        }

    }
])
