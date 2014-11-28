'use strict';

angular.module('beerFindr', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'mapsApp', 'DataServiceModule'])
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