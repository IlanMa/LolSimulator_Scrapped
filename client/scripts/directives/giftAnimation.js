simulation.directive('giftAnimation', [
    '$timeout',
    'GiftService',
    function($timeout, GiftService) {
        'use strict';

        console.log("### GIFT ANIMATION DIRECTIVE");

        return {
            restrict: 'E',
            scope: {},
            templateUrl: '../../views/animation.html',
            link: function(scope, element, attrs) {
                var skinArray = [];
                var skinsToGenerate = 40;
                var skinList;
                // Invoked when gift button is clicked
                function openGift() {
                    var mode = GiftService.currentMode;
                    var skins = GiftService.retrieveList(mode);
                    var currentLeft = 0;
                    skinList = '';
                    if (skinArray.length) {
                        skinsToGenerate = 35;
                        $('.skin-list').css('left', '0px');
                        skinArray.splice(0, 35);
                        for (var i = 0; i < skinArray.length; i++) {
                            populateDOM(skinArray[i]);
                        }
                    }
                    for (var i = 0; i < skinsToGenerate; i++) {
                        var skinResult = skins[Math.floor(Math.random() * skins.length)];
                        skinArray.push(skinResult);
                        populateDOM(skinResult);
                    }
                    $('.skin-list').css('width', skinArray.length * 80).html(skinList).animate({
                        left: (currentLeft = currentLeft - 2800) + 'px'
                    }, 3000, function() {
                        $timeout(function() {
                            GiftService.updateData(skinArray[37], mode);
                        })
                    });
                }

                function populateDOM(skin) {
                    var color;
                    switch (skin.price) {
                        case 520:
                            color = 'Orange';
                            break;
                        case 750:
                            color = 'Blue';
                            break;
                        case 975:
                            color = 'Aquamarine';
                            break;
                        case 1350:
                            color = 'Purple';
                            break;
                        case 1820:
                            color = 'Silver';
                            break;
                        case 3250:
                            color = 'Red';
                            break;
                        default:
                            color = 'Black';
                    }
                    skinList += "<li style='border: " + color + " 3px solid; box-shadow:inset 0px 0px 25px 3px " + color + "'>" +
                        "<span style='color: " + color + "'>?</span></li>";
                }

                $('.chest-button-scroll').on('click', openGift);
            }
        }
    }
])
