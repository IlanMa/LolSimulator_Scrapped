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
                $scope.probability = GiftService.getProbability(GiftService.currentMode);
            }
        }

        // Determines animation mode
        $scope.animation = 'normal';

        // Contains skin history
        $scope.skinHistory = GiftService.skinHistory;

        // Contains all statistics
        $scope.statistics = StatService.statistics;

        $scope.typeCount = StatService.skinTypeCount;

        $scope.getData = function(data) {
            return GiftService[data];
        }

        $scope.enablePromo = function() {
            GiftService.legendaryPromo = !GiftService.legendaryPromo;
            $scope.probability = GiftService.getProbability(GiftService.currentMode);
        }

        // Invoked when button is clicked
        $scope.openSkin = function() {
            GiftService.openSkin(GiftService.currentMode);
            $scope.probability = GiftService.getProbability(GiftService.currentMode);
        }

    }
])
