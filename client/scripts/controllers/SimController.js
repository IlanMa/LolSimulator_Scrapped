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

        // Initial image
        //$scope.image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg';

        // Chests opened
        $scope.chestsOpened = 0;
        // Dollars spent
        $scope.dollarSpent = 0;
        // RP spent
        $scope.rpSpent = 0;
        // RP gained
        $scope.rpGained = 0;
        // Dollar return
        $scope.dollarReturn = 0;

        // Contains all skins
        var skins = ChampionInfo;

        // Invoked when button is clicked
        $scope.openSkin = function() {
            var skinResult;
            do {
                skinResult = skins[Math.floor(Math.random() * skins.length)];
            } while (skinResult.name === 'default')
            GiftService.skinHistory.push({
                name: skinResult.name,
                price: skinResult.price
            })
            $scope.skinHistory = GiftService.skinHistory;
            // $scope.image = skinResult.img;
            $scope.calculatePricing(skinResult);
        }

        $scope.calculatePricing = function(skin) {
            $scope.chestsOpened += 1;
            $scope.dollarSpent = $scope.chestsOpened * 4.25;
            $scope.rpSpent = $scope.chestsOpened * 490;
            $scope.rpGained += skin.price;
            $scope.dollarReturn = ($scope.rpGained - $scope.rpSpent) * 0.0096153846153846;
        }

    }
])
