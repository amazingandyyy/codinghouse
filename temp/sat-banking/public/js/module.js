'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: '/html/list.html',
      controller: 'listCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
