simulation.controller('SelectController', [
	'$scope',
	'GiftService',
	function($scope, GiftService) {
		'use strict';

		console.log("### SELECT CONTROLLER");

		$scope.images = [
		  {num: 1, height:400, color: {bg: "859994", text: "ffffff"}}, {num: 2, height:250, color: {bg: "EBE2C7", text: "ffffff"}}, 
		  {num: 3, height:225, color: {bg: "C3D9C6", text: "ffffff"}}, {num: 4, height:200, color: {bg: "51C0C4", text: "ffffff"}}, 
		  {num: 5, height:200, color: {bg: "859994", text: "ffffff"}}, {num: 6, height:225, color: {bg: "C3D9C6", text: "ffffff"}}, 
		  {num: 7, height:300, color: {bg: "51C0C4", text: "ffffff"}}, {num: 8, height:250, color: {bg: "EBE2C7", text: "ffffff"}}, 
		  {num: 9, height:275, color: {bg: "EBE2C7", text: "ffffff"}}, {num: 10, height:350, color: {bg: "859994", text: "ffffff"}}, 
		  {num: 11, height:450, color: {bg: "F5E6D3", text: "ffffff"}}, {num: 12, height:275, color: {bg: "51C0C4", text: "ffffff"}}, 
		  {num: 13, height:225, color: {bg: "859994", text: "ffffff"}}, {num: 14, height:250, color: {bg: "F5E6D3", text: "ffffff"}}, 
		  {num: 15, height:250, color: {bg: "C3D9C6", text: "ffffff"}}, {num: 16, height:225, color: {bg: "51C0C4", text: "ffffff"}}]

}])
