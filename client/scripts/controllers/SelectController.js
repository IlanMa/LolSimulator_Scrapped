simulation.controller('SelectController', [
	'$scope',
	'GiftService',
	function($scope, GiftService) {
		'use strict';

		console.log("### SELECT CONTROLLER");

		$scope.selectSkin = function(skin, index) {
			GiftService.champArray[skin][index].select = !GiftService.champArray[skin][index].select;
			console.log(GiftService.champArray[skin][index].select);
		}

}])
