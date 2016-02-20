simulation.directive('giftAnimation', [
	'GiftService',
    function(GiftService) {
        'use strict';

        console.log("### GIFT ANIMATION DIRECTIVE");

        return {
            restrict: 'E',
            templateUrl: '../../views/animation.html',
            link: function(scope, element, attrs) {
            	// Invoked when gift button is clicked
           		function openGift() {
           			var skins = GiftService.skinList.normal;
           			var skinArray = [];
           			var skinList = '<ul>';
           			for (var i = 0; i < 40; i++) {
           				var skinResult = skins[Math.floor(Math.random() * skins.length)];
           				skinArray.push(skinResult);
           				skinList += '<li>'+skinResult.name+'</li>';
           			}
           			skinList += '</ul>';
           			$('.scroll-result').append(skinList);
           			console.log(skinArray);
           		}

            	$('.chest-button').on('click', openGift);
            }
        }
    }
])
