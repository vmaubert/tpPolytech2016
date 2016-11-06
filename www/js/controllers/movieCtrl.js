angular.module('controllers')

  .controller('MovieCtrl', function ($scope, $stateParams, $http, rottenTomatoesConst, $cordovaGeolocation) {

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

    $scope.options = {scrollwheel: false, mapTypeId: "roadmap" };
    var icon = {
      url: "img/logo-mega-cgr.png",
      scaledSize: new google.maps.Size(50, 50)
    };
    $scope.markers = [];

    // get position of user and then set the center of the map to that position
    $cordovaGeolocation
      .getCurrentPosition()
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        $scope.map = {center: {latitude: lat, longitude: long}, zoom: 14 };

          $scope.markers.push({
            id: $scope.markers.length,
            latitude: 47.3650755,
            longitude: 0.685654,
            icon: icon,
            content: "Méga CGR"
          });

        $scope.onMarkerClick = function(marker, eventName, model) {
          model.show = !model.show;
        }

      }, function(err) {
        console.log(err);
      });
  });
