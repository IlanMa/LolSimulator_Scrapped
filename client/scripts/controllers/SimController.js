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
            if (GiftService.currentMode != mode) {
                GiftService.currentMode = mode;
                GiftService.switchedModes = true;
            }
        }

        // Determines animation mode
        $scope.animation = 'normal';

        // Contains skin history
        $scope.skinHistory = GiftService.skinHistory;

        // Contains all statistics
        $scope.statistics = StatService.statistics;

        $scope.getImg = function() {
            return GiftService.skinImage;
        }

        $scope.enablePromo = function() {
            GiftService.switchedModes = true;
            GiftService.legendaryPromo = !GiftService.legendaryPromo;
        }

        // Invoked when button is clicked
        $scope.openSkin = function() {
            GiftService.openSkin(GiftService.currentMode);
        }

    }
])
