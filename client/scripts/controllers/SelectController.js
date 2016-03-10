simulation.controller('SelectController', [
	'$scope',
	'GiftService',
	function($scope, GiftService) {
		'use strict';

		console.log("### SELECT CONTROLLER");

		$scope.selectSkin = function(skin, index) {
			GiftService.champArray[skin][index].selected = !GiftService.champArray[skin][index].selected;
		}


}])
