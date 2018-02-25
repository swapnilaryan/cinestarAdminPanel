'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:UpcomingMoviesCtrl
 * @description
 * # UpcomingMoviesCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('UpcomingMoviesCtrl', function ($scope, $http, apiKey, $q, admin_upcoming_movies) {
        $scope.imagePath = config.imagePath;
        $scope.typedMovie = "";
        $scope.showMovieSuggestions = function showMovieSuggestions(movieName) {
            admin_upcoming_movies.getAdminUpcomingMovies(movieName).then(function (response) {
                $scope.searchedMovie = response.data.data;
                $scope.upReleaseDateMovie = $scope.searchedMovie;
                $scope.movieId = $scope.upReleaseDateMovie[0].upMovieId;
                console.log("search", $scope.searchedMovie, "typed", $scope.typedMovie, $scope.upReleaseDateMovie[0].upReleaseDate);
            });
        };

        $scope.quickMovieSuggestions = function quickMovieSuggestions() {
            admin_upcoming_movies.getQuickRecommendations().then(function (response) {
                $scope.quickRecommendations = response.data.data;
            });
        };
        $scope.quickMovieSuggestions();
        $scope.updateMovie = function updateMovie() {
            // console.log($scope.movieId);
            admin_upcoming_movies.updateAdminUpcomingMovies($scope.movieId).then(function (data) {
                $scope.addedMovies();
            });
        };

        $scope.updatedMovie = function updateMovie(data) {
            admin_upcoming_movies.updateAdminUpcomingMovies(data).then(function (data) {
                $scope.addedMovies();
                $scope.quickMovieSuggestions();
            });
        };

        $scope.removeUpComingMovies = function (movieID) {
            admin_upcoming_movies.removeUpComingMovies(movieID).then(function () {
                $scope.addedMovies();
            })
        };

        $scope.addedMovies = function addedMovies() {
            admin_upcoming_movies.getAddedMovies().then(function (response) {
                $scope.addedMoviesList = response.data.data;
                for (var i=0;i<$scope.addedMoviesList;i++) {
                    $scope.addedMoviesList[i].upPosterPath = $scope.addedMoviesList[i].upPosterPath.replace('images/upcoming/', '');
                }
            });
        };
        $scope.addedMovies();

        $scope.clickedMovie = function clickedMovie(index) {
            $scope.showClickedMovie = $scope.addedMoviesList[index];
            console.log("qwerty", $scope.addedMoviesList[index]);
        };

        $scope.movieToCurrent = function (movieID) {
	  		admin_upcoming_movies.moveToCurrent(movieID).then(function () {
                $scope.removeUpComingMovies(movieID);
            });
        };

        $scope.uploadFile = function uploadFile(files) {
            var fd = new FormData();
            console.log(files);
            //Take the first selected file
            fd.append("file", files[0]);
            $http.post("/images", fd, {
                withCredentials: true,
                headers: {'Content-Type': 'image/jpeg'},
                transformRequest: angular.identity
            }).success(function (data) {
                console.log("Success", data);
            }).error(function (data) {
                console.log("Error", data);
            });
        };
    });
