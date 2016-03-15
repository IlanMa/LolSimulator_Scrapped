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

        // Determines animation mode
        $scope.animation = 'normal';

        // Contains skin history
        $scope.skinHistory = GiftService.skinHistory;

        // Contains all statistics
        $scope.statistics = StatService.statistics;

        // Contains the acquired amount of each skin type
        $scope.typeCount = StatService.skinTypeCount;

        // Get probability as the page loads
        GiftService.getProbability(GiftService.currentMode);

        // Invoked when legendary promo button is clicked
        $scope.enablePromo = function() {
            GiftService.legendaryPromo = !GiftService.legendaryPromo;
            GiftService.getProbability(GiftService.currentMode);
        }

        // Invoked when open button is clicked
        $scope.openSkin = function() {
            GiftService.openSkin(GiftService.currentMode);
            GiftService.getProbability(GiftService.currentMode);
        }

        // Invoked when changing gift modes
        $scope.changeMode = function(mode) {
            if (GiftService.currentMode != mode) {
                GiftService.currentMode = mode;
                GiftService.getProbability(GiftService.currentMode);
            }
        }

        // TEMP - TO BE REMOVED
        $scope.closeChest = function() {
            GiftService.chestIsOpen = false;
            GiftService.skinColor = 'gold';
        }

    }
])
