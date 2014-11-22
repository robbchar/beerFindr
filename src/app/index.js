'use strict';

angular.module('beerFindr', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'uiGmapgoogle-maps'])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  })
;