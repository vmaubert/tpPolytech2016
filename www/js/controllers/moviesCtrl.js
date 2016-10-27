angular.module('controllers')

  .controller('MoviesCtrl', function ($scope, $http) {
    $scope.movies = [];
    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json', {
        params: {
          limit: 16,
          country: 'us',
          apikey: '7waqfqbprs7pajbz28mqf6vz',
          callback: 'JSON_CALLBACK'
        }
      })
      .success(function (data) {
        $scope.movies = data.movies;
      });
  });
