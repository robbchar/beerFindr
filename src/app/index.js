'use strict';

angular.module('beerFindr', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'mapsApp'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});