simulation.controller('SelectController', [
    '$scope',
    'GiftService',
    function($scope, GiftService) {
        'use strict';

        console.log("### SELECT CONTROLLER");

        $scope.selectSkin = function(champion, index) {
            var skin = GiftService.champArray[champion][index];
            skin.selected = !skin.selected;
            if (skin.selected) {
                GiftService.removeSkin({ name: skin.name });
            } else {
            	GiftService.addSkin(skin.name);
            }
        }
    }
])
