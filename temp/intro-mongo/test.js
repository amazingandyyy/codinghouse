'use strict';
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/intro');

// capital singular: Model
// model is an obstraction for the collection

// var Model - mongoose.model('Name', schemaObj);



var Tree = mongoose.model('Tree', {
    species: String,
    age: Number,
    nests: Number,
    leaves: Number
});

var tree = new Tree({
    species: 'ffdfd',
    age: 50,
    nests: 333,
    leaves: 23400
})

tree.save( (err, tree)=>{
    if(err)return console.log('errr: ', err);
    console.log('tree: ', tree);
});
// Tree.remove({}, (err, tree)=>{
//     if(err)return console.log('errr: ', err);
//     console.log('tree: ', tree);
// });

Tree.find({}, (err, trees) => {
    console.log('err: ', err);
    console.log('trees: ', trees);
    mongoose.disconnect();
});
