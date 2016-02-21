simulation.directive('giftAnimation', [
    'GiftService',
    function(GiftService) {
        'use strict';

        console.log("### GIFT ANIMATION DIRECTIVE");

        return {
            restrict: 'E',
            templateUrl: '../../views/animation.html',
            link: function(scope, element, attrs) {
                var skinArray = [];
                // Invoked when gift button is clicked
                function openGift() {
                    var skins = GiftService.skinList.normal;
                    var currentLeft = 0;
                    var skinList = '';
                    if (skinArray.length) {
                        $('.skin-list').css('left', '0px');
                        skinArray.splice(0, 35);
                        for (var i = 0; i < skinArray.length; i++) {
                            skinList += '<li>' + skinArray[i].name + '</li>';
                        }
                    }
                    for (var i = 0; i < 40; i++) {
                        var skinResult = skins[Math.floor(Math.random() * skins.length)];
                        skinArray.push(skinResult);
                        skinList += '<li>' + skinResult.name + '</li>';
                    }
                    $('.skin-list').css('width', skinArray.length * 80);
                    $('.skin-list').html(skinList);
                    $('.skin-list').animate({
                        left: (currentLeft = currentLeft - 2800) + 'px'
                    }, 3000);
                    spins += 1;
                }

                $('.chest-button').on('click', openGift);
            }
        }
    }
])
