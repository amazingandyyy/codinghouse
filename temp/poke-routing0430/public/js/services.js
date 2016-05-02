'use strict';

var app = angular.module('routerApp');

app.service('Pokemon', function($http, $q) {


    this.getPokedex = () =>{
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokedex/1/',
            cache: true
        })
        .then(res => {
            return $q.resolve(res.data.pokemon_entries);
        })
    };
    this.getById = (id) =>{
        return $http({
            method: 'GET',
            url: `http://pokeapi.co/api/v2/pokemon/${id}/`,
            cache: true
        })
        .then(res => {
            return $q.resolve(res.data);
        })
    };

});
