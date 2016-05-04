'use strict';

var mongoose = require('mongoose');

var Tree = mongoose.model('Tree', {
    species: String,
    age: Number
});

module.exports = Tree;
