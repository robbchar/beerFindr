'use strict';

//Angular App Module and Controller
angular.module('mapsApp', [])
.controller('MapCtrl', function($scope, DataService) {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var mapOptions = {};
            
            mapOptions.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            DataService.InitMap(document.querySelector('#mapContainer .map'), mapOptions);
        });
    } else {
        // no native support; maybe try a fallback?
    }
});