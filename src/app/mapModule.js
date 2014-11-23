'use strict';

//Angular App Module and Controller
angular.module('mapsApp', []).controller('MapCtrl', function($scope) {
    var mapOptions = {
        zoom: 14
    },
    map;

    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            mapOptions.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            map = new google.maps.Map(document.querySelector('#mapContainer .map'), mapOptions);
        });
    } else {
        // no native support; maybe try a fallback?
    }
});