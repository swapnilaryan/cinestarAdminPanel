'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:ScreenSettingsCtrl
 * @description
 * # ScreenSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ScreenSettingsCtrl', function ($scope, apiKey, admin_screen_settings) {
	  $scope.insert2D="";
	  $scope.insert3D="";
	  $scope.update2D="";
	  $scope.update3D="";

	  $scope.insertAdminScreen={
		  "screenName":"",
		  "screenType":"",
		  "noOfSeats":""
	  };
	$scope.getAdminScreen = function getAdminScreen(){
		admin_screen_settings.getAdminScreen().then(function(data){
			$scope.screenDetails=data.data;
		});
	};

	  $scope.postAdminScreen=function postAdminScreen(){
		  $scope.insertAdminScreen.screenType=$scope.insert2D+" "+$scope.insert3D;
		  console.log($scope.insertAdminScreen);
		  admin_screen_settings.postAdminScreen($scope.insertAdminScreen).then(function(data){
			  $scope.getAdminScreen();
		  });
		  $scope.insert2D="";
		  $scope.insert3D="";
		  $scope.insertAdminScreen={
			  "screenName":"",
			  "screenType":"",
			  "noOfSeats":""
		  };
	  };
	  $scope.getAdminScreen();
	  $scope.selectedUpdateScreen={
		  "movieScreenID": "",
		  "screenName": "",
		  "screenType": "",
		  "noOfSeats": ""
	  };
	  // $scope.selectedScreen=function(){
		//   console.log("-------------------",$scope.selectedUpdateScreen);
	  // };
	  $scope.updateDetails = function updateDetails(){
		  $scope.updateData={
			  "movieScreenID": $scope.selectedUpdateScreen.movieScreenID,
			  "screenName": $scope.selectedUpdateScreen.screenName,
			  "screenType": $scope.update2D+" "+$scope.update3D,
			  "noOfSeats": $scope.selectedUpdateScreen.noOfSeats
		  };
		  admin_screen_settings.updateAdminScreen($scope.updateData).then(function (data) {
			  $scope.screenDetails = data.data;
			  $scope.updateData={
				  "movieScreenID": "",
				  "screenName": "",
				  "screenType": "",
				  "noOfSeats": ""
			  };
			  $scope.update2D="";
			  $scope.update3D="";
			  $scope.selectedUpdateScreen={
				  "movieScreenID": "",
				  "screenName": "",
				  "screenType": "",
				  "noOfSeats": ""
			  };
		  });
	  };
  });
