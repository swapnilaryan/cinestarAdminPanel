"use strict";angular.module("sbAdminApp").controller("currentMoviesController",function($scope,$position){$scope.actions=["Add","remove"],$scope.screens=["Screen_1","Screen_2","Screen_3","Screen_4"],$scope.dataScreens=[],$scope.organiseScreens=[{screenName:"Screen 1",details:[{movieName:"Batman",startTime:"9:00",endTime:"12:30",type:"3D"},{movieName:"Superman",startTime:"9:00",endTime:"12:30",type:"2D"}]},{screenName:"Screen 2",details:[{movieName:"Batman 2 ",startTime:"9:00",endTime:"12:30",type:"3D"},{movieName:"Superman 2 ",startTime:"9:00",endTime:"12:30",type:"3D"},{movieName:"Batman 3 ",startTime:"9:00",endTime:"12:30",type:"3D"},{movieName:"Superman 3 ",startTime:"9:00",endTime:"12:30",type:"3D"}]}],console.log($scope.organiseScreens)});