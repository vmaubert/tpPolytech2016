angular.module('controllers')

  .controller('MovieCtrl', function ($scope, $stateParams, $http) {

    $scope.movie = {title: "Chargement..."};
    $http.jsonp('http://api-beta.rottentomatoes.com/api/public/v1.0/movies/'+$stateParams.movieId+'.json', {
        params: {
          apikey: '7waqfqbprs7pajbz28mqf6vz',
          callback: 'JSON_CALLBACK'
        }
      })
      .success(function (data) {
        $scope.movie = data;
      });
  });
