'use strict';

var app = angular.module('initApp', ['ui'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/thanks/:name', {
        templateUrl: 'views/thanks.html',
        controller: 'ThanksCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'views/staticUser.html',
        controller: 'StaticUserCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/users'
      });
  });
