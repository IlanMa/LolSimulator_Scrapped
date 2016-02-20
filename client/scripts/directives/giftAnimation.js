simulation.directive('giftAnimation', [
    function() {
        'use strict';

        console.log("### GIFT ANIMATION DIRECTIVE");

        return {
            restrict: 'E',
            templateUrl: "../../views/animation.html",
            link: function(scope, element, attrs) {

            }
        }
    }
])
