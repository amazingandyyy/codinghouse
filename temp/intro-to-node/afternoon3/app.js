'use strict';

var _ = require('lodash');
var request = require('request');


request('http://pokeapi.co/api/v2/', (error, response, body) => {
  if(error) return console.log(err);
    var content = JSON.parse(body);

    console.log('response: ', response)
    console.log('body: ', body)
})
