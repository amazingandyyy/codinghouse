'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {
    console.log('homeCtrl');
});

app.controller('listCtrl', function($scope, $state, pokedex) {
    // console.log('pokedex: ', pokedex);
    $scope.pokedex = pokedex;
});
app.controller('detailCtrl', function($scope, $state, pokemon, $interval) {
    // console.log('pokemon: ', pokemon);
    $scope.pokemon = pokemon;
    var count = 0;
    var sprites = pokemon.sprites;
    var keys = Object.keys(sprites);
    var numSprites = keys.length;
    $interval(function(){
        count++;

        var index = count % numSprites
        var spriteUrl = sprites[keys[index]];
        $scope.sprite = spriteUrl;

    }, 100)
});
