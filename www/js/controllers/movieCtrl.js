angular.module('controllers')

  .controller('MovieCtrl', function ($scope, $stateParams, $http, rottenTomatoesConst) {

    $scope.movie = {title: "Chargement..."};
    $http.jsonp(rottenTomatoesConst.url+'movies/'+$stateParams.movieId+'.json', {
        params: {
          apikey: rottenTomatoesConst.apiKey,
          callback: 'JSON_CALLBACK'
        }
      })
      .success(function (data) {
        $scope.movie = data;
      });
  });
