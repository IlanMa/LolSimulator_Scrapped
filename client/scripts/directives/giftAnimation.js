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
                var skinList = '';
                var generate = false; // Generate new array
                // Invoked when gift button is clicked during scroll animation type
                function openGift() {
                    var mode = GiftService.currentMode;
                    skinList = ''; // Contains DOM to be 
                    if (generate) {
                        generateSkinArray(mode);
                    }
                    $('.skin-list').css('width', skinArray.length * 80).animate({
                        left: '-2800px'
                    }, 3000, function() {
                        $timeout(function() {
                            GiftService.removeSkin(skinArray[37]);
                            GiftService.updateData(skinArray[37], mode);
                            GiftService.getProbability(GiftService.currentMode);
                        })
                    });
                    generate = true;
                }

                function generateSkinArray(mode) {
                    var skins = GiftService.retrieveList(mode);
                    if (skinArray.length) { // Not met only on first run
                        skinsToGenerate = 35;
                        $('.skin-list').css('left', '0px');
                        skinArray.splice(0, 35);
                        for (var i = 0; i < skinArray.length; i++) {
                            populateDOM(skinArray[i]);
                        }
                    }
                    for (var i = 0; i < skinsToGenerate; i++) { // Generates skins and appends to string
                        var skinResult = skins[Math.floor(Math.random() * skins.length)];
                        skinArray.push(skinResult);
                        populateDOM(skinResult);
                    }
                    $('.skin-list').html(skinList);
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
                generateSkinArray('normal')
                $('.chest-button-scroll').on('click', openGift);
            }
        }
    }
])
