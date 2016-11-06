angular.module('controllers')

  .controller('MoviesCtrl', function ($scope, $http, rottenTomatoesConst) {
    $scope.movies = [];
    $http.jsonp(rottenTomatoesConst.url + 'lists/movies/box_office.json', {
        params: {
          limit: 16,
          country: 'us',
          apikey: rottenTomatoesConst.apiKey,
          callback: 'JSON_CALLBACK'
        }
      })
      .success(function (data) {
        $scope.movies = data.movies;
      });
  });
