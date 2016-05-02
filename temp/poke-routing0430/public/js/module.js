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
            controller: 'listCtrl',
            resolve: {
                pokedex: function(Pokemon){
                    return Pokemon.getPokedex();
                }
            }
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: '/html/detail.html',
            controller: 'detailCtrl',
            resolve: {
                pokemon: function(Pokemon, $stateParams){
                    return Pokemon.getById($stateParams.id);
                }
            }
        })

    $urlRouterProvider.otherwise('/');
});
