'use strict';


var app = angular.module('myApp', []);

app.filter('titlecase', function() { // dependency injected
  return function(input, joiner) {
    if(!input) {
      return input;
    }
    return input.toLowerCase().split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(joiner || ' ');
  };
});
