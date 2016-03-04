simulation.controller('MainController', [
	'$scope',
	'$location', 
	'GiftService',
	'StatService',
	function($scope, $location, GiftService, StatService) {
		'use strict';

		console.log("### MAIN CONTROLLER");

		// Create Obj containing skins of each champion
		if (!Object.keys(GiftService.champArray).length) { // If obj is not empty
		    GiftService.giftArrayToObj();
		}

		$scope.changeRoutes = function(route) {
			$location.path("/" + route);
		}

		$scope.getGiftData = function(data) {
		    return GiftService[data];
		}

		$scope.getStatData = function(data) {
		    return StatService[data];
		}

}])