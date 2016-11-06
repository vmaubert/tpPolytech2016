angular.module('controllers')

  .controller('MoviesCtrl', function ($scope, $http, rottenTomatoesConst) {
    $scope.movies = [];
    var page = 1;
    var maxResult = 1;

    $scope.loadMore = function () {
      $http.jsonp(rottenTomatoesConst.url + 'lists/movies/in_theaters.json', {
          params: {
            page_limit: 16,
            page: page,
            country: 'us',
            apikey: rottenTomatoesConst.apiKey,
            callback: 'JSON_CALLBACK'
          }
        })
        .success(function (data) {
          $scope.movies = $scope.movies.concat(data.movies);
          maxResult = data.total;
          page++;
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.isNotFullLoaded = function(){
      return $scope.movies.length < maxResult;
    }
  });
