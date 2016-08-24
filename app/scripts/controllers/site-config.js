'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:SiteConfigCtrl
 * @description
 * # SiteConfigCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SiteConfigCtrl', function ($scope) {
      $scope.daysInWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      $scope.siteConfig = {
          theatreName:"Cinestar",
          websiteUrl:"cinex.press",
          timeZone:"Huntsville"
      };
      $scope.openCloseTime=[
      {   Monday:["19:00","20:00"]},
      {   Tuesday:["9:00","18:30"]},
      {   Wednesday:["9:00","19:00"]},
      {   Thursday:["9:00","19:30"]},
      {   Friday:["9:00","18:00"]},
      {   Saturday:["9:00","21:00"]},
      {   Sunday:["9:00","22:00"]}
      ];
  });
