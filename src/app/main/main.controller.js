'use strict';

angular.module('beerFindr')
  .controller('MainCtrl', function ($scope, uiGmapIsReady) {
    // uiGmapIsReady.promise(2).then(function(instances) {
    //     instances.forEach(function(inst) {
    //         var map = inst.map;
    //         var uuid = map._id;
    //         var mapInstanceNumber = inst.instance; // Starts at 1.
    //     });
    // });
    
    $scope.map = { center: { latitude: 40, longitude: 40 }, zoom: 8 };
    if(window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function(position) {
          // $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 8 };
          
          $scope.$apply(function() {
              $scope.map.control.refresh({latitude: position.coords.latitude, longitude: position.coords.longitude});
          });
      }, function(error) {
          alert(error);
      });
    }
  });
