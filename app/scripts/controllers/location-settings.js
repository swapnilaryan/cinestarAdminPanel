'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:LocationSettingsCtrl
 * @description
 * # LocationSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('LocationSettingsCtrl', function ($scope, apiKey, admin_location_settings) {
      admin_location_settings.getAdminLocation().then(function(data){
          var result = data.data;
          $scope.currentLocation = {
              locationID:result.locationID,
              locationTheatreName:result.locationTheatreName,
              locationPhysicalAddress:result.locationPhysicalAddress,
              locationMailingAddress:result.locationMailingAddress
          };
      });
      $scope.updateDetails = function updateDetails(){
          $scope.updateData={
              "locationID": $scope.currentLocation.locationID,
              "locationTheatreName": $scope.adminLocation.locationTheatreName,
              "locationPhysicalAddress": $scope.adminLocation.locationPhysicalAddress,
              "locationMailingAddress": $scope.adminLocation.locationMailingAddress
          };
          admin_location_settings.updateAdminLocation($scope.updateData).then(function (data) {
			  console.log(data);
              $scope.currentLocation = $scope.updateData;
          });
      }
  });
